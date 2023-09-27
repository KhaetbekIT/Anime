const jsonServer = require("json-server")
const server = jsonServer.create()
const router = server.router("db.json")
const middlewares = jsonServer.defaults()
const port = process.env.PORT || 3002;

server.use(middlewares).use(router).listen(port)