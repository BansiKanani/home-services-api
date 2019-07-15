const express = require('express');
const router = express.Router();

function routes(Login) {
  router
    .route('/')
    .get((req, res) => {
      res.header("Access-Control-Allow-Origin", "*");
      Login.findOne(req.body, (err, login) => {
        if (err) return res.send(err);
        if (login != null) return res.json({ user: login.user });
        else return res.json({ user: false });
      });
    })
    .post((req, res) => {
      res.header("Access-Control-Allow-Origin", "*");
      const login = new Login(req.body);
      login.save();
      return res.status(201).json(login);
    });
  return router;
}

module.exports = routes;