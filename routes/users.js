const express = require('express');
const router = express.Router();
const controller = require('../controllers/users');

router.get('/:n1/:n2', controller.suma);
router.post('/', controller.multiplicacion);
router.put('/', controller.division);
router.patch('/:n1/:n2', controller.potencia);
router.delete('/', controller.resta);

module.exports = router;
