var express = require( 'express' );
var router  = express.Router();

var Branch  = require('../models/branch');

// Создание Филиала
router.post( '/add', function ( req, res ) {

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
        title:  'При создании <- Филиала -> возникла ошибка',
        error:  err
      });
    }
    // В случае положительного ответа
    res.status( 201 ).json({
      message:  '<- Филиал -> успешно создан',
      obj:      result
    });
  });
});

// Получение списка Филиалов
router.get('/get', function (req, res) {
  Branch.find(function (err, branches) {
    if (err) {
      return res.status(500).json({
        title: 'При получении списка <- Филиалов -> возникла ошибка',
        error: err
      });
    }
    if (!branches) {
      return res.status(404).json({
        title: 'Данные <- Филиалов -> не найдены',
        error: err
      });
    }
    res.status(200).json({
      message: '<- Филиалы -> получены',
      obj: branches
    });
  });
});

// Удаление Филиала
router.delete('/:id', function (req, res) {
  Branch.findById(req.params.id, function (err, branch) {
    console.log(req.params.id);
    if ( err ) {
      return res.status(500).json({
        title: 'При удалении <- Филиала -> возникла ошибка.',
        error: err
      });
    }
    if ( !branch ) {
      return res.status(404).json({
        title: 'Данные <- Филиала -> не найдены',
        error: err
      });
    }
    branch.remove( function ( err, result ) {
      if ( err ) {
        return res.status(404).json({
          title: 'Данные <- Филиала -> не найдены',
          error: err
        });
      }
      res.status(201).json({
        title: '<- Филиал -> успешно удален',
        obj: result
      });
    });
  });
});

module.exports = router;