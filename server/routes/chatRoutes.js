const express = require('express');
const router = express.Router();

const authMiddleware = require('../middleware/authMiddleware');
const chatController = require('../controllers/chatController');

router.post('/', authMiddleware, chatController.chat);
router.get('/history', authMiddleware, chatController.history);

module.exports = router;
