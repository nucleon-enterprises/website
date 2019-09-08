const express = require('express');
const routes = express.Router();

routes.get("/oi", (req, res) => {
    res.send({ express:"OPAA" });
});

module.exports = routes;