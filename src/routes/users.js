const router = require('express').Router();

router.get('/signin' , (req , res) => {
  res.send('signin');
});

router.get('/signup' , (req , res) => {
  res.send('signin');
});

module.exports = router;
