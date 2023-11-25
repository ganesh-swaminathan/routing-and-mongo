const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./routes')
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