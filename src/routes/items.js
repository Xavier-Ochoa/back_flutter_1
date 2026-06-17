const express = require('express');
const router = express.Router();
const {
  getItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem,
  checkDuplicate,
  getStats,
} = require('../controllers/itemsController');

// Estadísticas
router.get('/stats', getStats);

// Verificar duplicado
router.post('/check-duplicate', checkDuplicate);

// CRUD principal
router.get('/', getItems);
router.get('/:id', getItemById);
router.post('/', createItem);
router.put('/:id', updateItem);
router.delete('/:id', deleteItem);

module.exports = router;
