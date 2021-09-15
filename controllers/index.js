const express = require('express');

function home(req, res, next) {
    res.send('Tarea | Tablas RESTful');
}

module.exports = {
    home
}