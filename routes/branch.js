var express = require( 'express' );
var router  = express.Router();

var Branch  = require('../models/branch');

// Создание Филиала
router.post( '/create', function ( req, res ) {

  // Cобираем объект Филиала по модели
  var branch = new Branch({
    name:             req.body.name,
    address:          req.body.address,
    cartridge_store:  req.body.cartridge_store
  });

  // Пытаемся сохранить объект в БД
  branch.save( function ( err, result ) {

    // В случае возникновения ошибки
    if ( err ) {
      return res.status( 500 ).json({
        title:  'При создании Филиала возникла ошибка',
        error:  err
      });
    }
    // В случае положительного ответа
    res.status( 201 ).json({
      message:  'Филиал успешно создан',
      obj:      result
    });
  });
});

module.exports = router;