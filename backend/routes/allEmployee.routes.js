const express = require('express');

// const { validateLogin } = require('../middlewares/allEmployee.validator');
const {  logInUser } = require('../controllers/allEmployee.contollers');
// const { isAuthenticated } = require('../middlewares/isAuth');

const Router = express.Router();

Router.post("/login",  logInUser);
// Router.get("/myprofil", isAuthenticated, getMyProfil);

module.exports = Router