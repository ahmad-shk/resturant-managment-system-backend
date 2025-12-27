const express = require('express');
const {
  createChatController,
  getAllChatsController,
  getChatByIdController,
  updateChatController,
  deleteChatController
} = require('../controllers/chatController');
const router = express.Router();

router.post('/chats', createChatController);
router.get('/chats', getAllChatsController);
router.get('/chats/:id', getChatByIdController);
router.put('/chats/:id', updateChatController);
router.delete('/chats/:id', deleteChatController);

module.exports = router;
