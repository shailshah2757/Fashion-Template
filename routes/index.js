var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Express' });
});

router.get('/home', function(req,res,next) {
  res.render('home')
})

router.get('/about', function(req,res,next) {
  res.render('about')

router.get('/products', function(req,res,next) {
  res.render('products');
})

router.get('/men', function(req,res,next) {
  res.render('men')
})

router.get('/women', function(req,res,next) {
  res.render('women')
})

router.get('/kids', function(req,res,next) {
  res.render('kids')
})

router.get('/contact', function(req,res,next) {
  res.render('contact')
})

router.post('/process0', function(req,res,nect) {
  res.render('helpc.ejs')
})
router.post('/process', function(req,res,next) {
  res.render('contact')
})

router.post('/process1', function(req,res,next) {
  var p = req.body.msg;
  res.render('orderplaced', {msg1:p})
})

router.get('/orderplaced', function(req,res,next) {
  res.render('orderplaced');
})

router.post('/process2', function(req,res,next) {
  res.render('review')
})

router.post('/process3' ,function(req,res,next) {
  var a = req.body.txt1;
  var b = req.body.txt2;
  var c = req.body.txt3;
  var d = req.body.txt4;
  var e = req.body.txt5;
  var f = req.body.txt6;

  res.render("register", {
    fname:a,
    lname:b,
    pnum:c,
    email:d,
    pass:e,
    cpass:f
  })
});

router.get('/helpc', function(req,res,next) {
  res.render('helpc')
})

router.post('/process4', function(req,res,next) {
  res.render("problem")
})

})

module.exports = router;
