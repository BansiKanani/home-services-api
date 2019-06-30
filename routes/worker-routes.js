const express = require("express");
const router = express.Router();

function routes(Worker) {
  // MIDDLEWARE
  router.use("/:id", (req, res, next) => {
    Worker.findById(req.params.id, (err, worker) => {
      if (err) return res.send(err);
      if (worker) {
        req.worker = worker;
        return next();
      }
      return res.sendStatus(404);
    });
  });

  router
    .route("/")
    .get((req, res) => {
      Worker.find(req.query, (err, workers) => {
        if (err) return res.send(err);
        return res.json(workers);
      });
    })
    .post((req, res) => {
      const worker = new Worker(req.body);
      worker.save();
      return res.status(201).json(worker);
    });

  router
    .route("/:id")
    .get((req, res) => {
      return res.json(req.worker);
    })
    .patch((req, res) => {
      const { worker } = req;
      if (req.body._id) delete req.body._id;
      Object.entries(req.body).forEach(item => {
        worker[item[0]] = item[1];
      });
      req.worker.save(err => {
        if (err) return res.send(err);
        return res.json(worker);
      });
    })
    .delete((req, res) => {
      req.worker.remove(err => {
        if (err) return res.send(err);
        return res.sendStatus(204);
      });
    });
  return router;
}

module.exports = routes;
