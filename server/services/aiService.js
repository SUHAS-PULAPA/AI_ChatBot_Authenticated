const axios = require('axios');

const getAIReply = async (message, history) => {
  try {
    const response = await axios.post(process.env.AI_SERVICE_URL, {
      message,
      history,
    });

    return response.data.reply;
  } catch (error) {
    console.error('AI service error:', error.message);
    throw new Error('AI service unavailable');
  }
};

module.exports = { getAIReply };
