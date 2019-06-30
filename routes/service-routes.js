const express = require("express");
const router = express.Router();

function routes(Service) {
  // MIDDLEWARE
  router.use("/:id", (req, res, next) => {
    Service.findById(req.params.id, (err, service) => {
      if (err) return res.send(err);
      if (service) {
        req.service = service;
        return next();
      }
      return res.sendStatus(404);
    });
  });

  router
    .route("/")
    .get((req, res) => {
      Service.find(req.query, (err, services) => {
        if (err) return res.send(err);
        return res.json(services);
      });
    })
    .post((req, res) => {
      const service = new Service(req.body);
      service.save();
      return res.status(201).json(service);
    });

  router
    .route("/:id")
    .get((req, res) => {
      return res.json(req.service);
    })
    .patch((req, res) => {
      const { service } = req;
      if (req.body._id) delete req.body._id;
      Object.entries(req.body).forEach(item => {
        service[item[0]] = item[1];
      });
      req.service.save(err => {
        if (err) return res.send(err);
        return res.json(service);
      });
    })
    .delete((req, res) => {
      req.service.remove(err => {
        if (err) return res.send(err);
        return res.sendStatus(204);
      });
    });
  return router;
}

module.exports = routes;
