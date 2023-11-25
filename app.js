const express = require('express')
const bodyParser = require('body-parser')
const http = require('http')
const path = require('path')
const urlencoded = require('url')
const json = require('json')
const logger = require('logger')
const moverride = require('method-override')
const fs = require('fs');

const routes = require('./routes')
const connectToMongoDB = require("./db");
const dbMiddleware = require('./dbMiddleware');

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(dbMiddleware);
app.use(routes);


async function main() {
  app.listen(3000, () => console.log("listening on port 3000..."));
}
main()
.then()
.catch();