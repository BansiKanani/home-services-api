const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3000;
mongoose.connect("mongodb://localhost/home-service", { useNewUrlParser: true });

//  MODELS AND ROUTERS
const Customer = require("./models/customer-model");
const customerRoutes = require('./routes/customer-routes')(Customer);

const Worker = require("./models/worker-model");
const workerRoutes = require("./routes/worker-routes")(Worker);

const Order = require("./models/order-model");
const orderRoutes = require("./routes/order-routes")(Order);

const Service = require("./models/service-model");
const serviceRoutes = require("./routes/service-routes")(Service);

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ATTACHING ROUTERS 
app.use("/api/customers", customerRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/workers", workerRoutes);
app.use("/api/services", serviceRoutes);

// DEFAULT ROUTE MESSAGE
app.get("/", (req, res) => {
  res.send("Plese use /api/your-query.");
});

// STARTING SERVER
app.listen(PORT, () => {
  console.log(`Listening on port 3000\n`);
});
