const express  = require("express");
const app = express()
const bodyParser = require("body-parser");
const axios = require("axios");
const cote = require('cote')
//const PORT=5555
//const httpProxy = require('express-http-proxy')

//const emailProxy = httpProxy('http://localhost:3000/email')


// Proxy request
// app.get('/email', (req, res, next) => {
//     emailProxy(req, res, next)
//   })