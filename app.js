const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dbString = require('./config/db_connection');

const PORT = process.env.PORT || 3000;

mongoose
  .connect(
    encodeURI(
      `mongodb+srv://user1:P@$$word123@cluster0-10xfx.mongodb.net/home-services-api?retryWrites=true&w=majority`
    ),
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log('Connected to mongodb!');
  })
  .catch(err => {
    console.log('Can not connect to mongodb!', err);
  });

//  MODELS AND ROUTERS
const Login = require('./models/login-model');
const Service = require('./models/service-model');
const Customer = require('./models/customer-model');
const Worker = require('./models/worker-model');
const Order = require('./models/order-model');

const loginRoutes = require('./routes/login-routes')(Login);
const serviceRoutes = require('./routes/service-routes')(Service);
const customerRoutes = require('./routes/customer-routes')(Customer);
const workerRoutes = require('./routes/worker-routes')(Worker);
const orderRoutes = require('./routes/order-routes')(Order);

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ATTACHING ROUTERS
app.use('/api/login', loginRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/workers', workerRoutes);
app.use('/api/customers', customerRoutes);
app.use('/api/orders', orderRoutes);

// DEFAULT ROUTE MESSAGE
app.get('/', (req, res) => {
  res.send('Plese use /api/your-query.');
});

// STARTING SERVER
app.listen(PORT, () => {
  console.log(`Listening on port 3000\n`);
});