const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Orders were fetched!'
  });
});

router.post('/', (req, res, next) => {
  res.status(201).json({
    message: 'Order was created!'
  });
});

router.get('/:ordersId', () => {
  res.status(200).json({
    message: 'Order details',
    orderId: req.params.orderId
  });
});

router.delete('/:ordersId', () => {
  res.status(200).json({
    message: 'Order deleted',
    orderId: req.params.orderId
  });
});

module.exports = router