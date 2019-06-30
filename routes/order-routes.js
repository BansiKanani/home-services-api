const express = require("express");
const router = express.Router();

function routes(Order) {
  // MIDDLEWARE
  router.use("/:id", (req, res, next) => {
    Order.findById(req.params.id, (err, order) => {
      if (err) return res.send(err);
      if (order) {
        req.order = order;
        return next();
      }
      return res.sendStatus(404);
    });
  });

  router
    .route("/")
    .get((req, res) => {
      Order.find(req.query, (err, orders) => {
        if (err) return res.send(err);
        return res.json(orders);
      });
    })
    .post((req, res) => {
      const order = new Order(req.body);
      order.save();
      return res.status(201).json(order);
    });

  router
    .route("/:id")
    .get((req, res) => {
      return res.json(req.order);
    })
    .patch((req, res) => {
      const { order } = req;
      if (req.body._id) delete req.body._id;
      Object.entries(req.body).forEach(item => {
        order[item[0]] = item[1];
      });
      req.order.save(err => {
        if (err) return res.send(err);
        return res.json(order);
      });
    })
    .delete((req, res) => {
      req.order.remove(err => {
        if (err) return res.send(err);
        return res.sendStatus(204);
      });
    });
  return router;
}

module.exports = routes;
