const Chat = require('../models/Chat');
const { getAIReply } = require('../services/aiService');

exports.chat = async (req, res) => {
  try {
    const userId = req.user.id;
    const { message } = req.body;

    if (!message || !message.trim()) {
      return res.status(400).json({ message: 'Message is required' });
    }

    const history = await Chat.find({ userId })
      .sort({ createdAt: 1 })
      .limit(20);

    const reply = await getAIReply(message, history);

    await Chat.create({
      userId,
      role: 'user',
      message,
    });

    await Chat.create({
      userId,
      role: 'assistant',
      message: reply,
    });

    res.json({ reply });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Chat failed' });
  }
};

exports.history = async (req, res) => {
  try {
    const userId = req.user.id;

    const chats = await Chat.find({ userId }).sort({ createdAt: 1 });

    res.json(chats);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch history' });
  }
};
