const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./routes')
const dbMiddleware = require('./dbMiddleware');
const { port } = require('./config');

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(dbMiddleware);
app.use(routes);


async function main() {
  app.listen(port, () => console.log(`App listening to port: ${port}`));
}
main()
.then()
.catch();