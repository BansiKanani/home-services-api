const express = require('express');
const router = express.Router();

function routes(Login) {
  router
    .route('/')
    .post((req, res) => {
      Login.findOne(req.body, (err, login) => {
        if (err) return res.send(err);
        if (login != null) return res.json({ user: login.user });
        else return res.json({ user: false });
      });
    })
    .put((req, res) => {
      const login = new Login(req.body);
      login.save();
      return res.status(201).json(login);
    });
  return router;
}

module.exports = routes;
