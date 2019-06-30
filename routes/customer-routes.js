const express = require("express");
const router = express.Router();

function routes(Customer) {
  // MIDDLEWARE
  router.use("/:id", (req, res, next) => {
    Customer.findById(req.params.id, (err, customer) => {
      if (err) return res.send(err);
      if (customer) {
        req.customer = customer;
        return next();
      }
      return res.sendStatus(404);
    });
  });

  router
    .route("/")
    .get((req, res) => {
      Customer.find(req.query, (err, customers) => {
        if (err) return res.send(err);
        return res.json(customers);
      });
    })
    .post((req, res) => {
      const customer = new Customer(req.body);
      customer.save();
      return res.status(201).json(customer);
    });

  router
    .route("/:id")
    .get((req, res) => {
      return res.json(req.customer);
    })
    .patch((req, res) => {
      const { customer } = req;
      if (req.body._id) delete req.body._id;
      Object.entries(req.body).forEach(item => {
        customer[item[0]] = item[1];
      });
      req.customer.save(err => {
        if (err) return res.send(err);
        return res.json(customer);
      });
    })
    .delete((req, res) => {
      req.customer.remove(err => {
        if (err) return res.send(err);
        return res.sendStatus(204);
      });
    });
  return router;
}

module.exports = routes;
