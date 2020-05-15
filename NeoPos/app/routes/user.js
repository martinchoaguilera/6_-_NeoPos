var express = require('express');
var router = express.Router();
var user = require('../controller/userControllers');


/*------ Edicion de usuario ya creado -----*/
router.get('/detail', function(req, res, next) {
    res.send('respond with a resource');
});

/*------ Creacion de usuario ------*/
router.get('/new', user.new);

module.exports = router;