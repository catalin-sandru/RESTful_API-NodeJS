const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('dev'));

const productRoutes = require('./api/routes/products');
const ordersRoutes = require('./api/routes/orders');

app.use((req, res, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  })
});

app.use('/products', productRoutes);
app.use('/orders', ordersRoutes);

module.exports = app;