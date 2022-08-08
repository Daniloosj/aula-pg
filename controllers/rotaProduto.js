const express = require('express');
const ProdutoController = require('../controllers/ProdutoControler');

const router = express.Router();

router.get('/criar',ProdutoController.criarProduto );
router.get('/deletar/:id',ProdutoController.deletarProduto);

module.exports = router;