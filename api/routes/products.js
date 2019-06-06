const express = require('experss');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Handeling GET requests /products'
  });
});

router.post('/', (req, res, next) => {
  res.status(200).json({
    message: 'Handeling POST requests /products'
  });
});

module.exports = router;