const jsonServer = require('json-server')
const server = jsonServer.create()
const db = require('./db.js')
const router = jsonServer.router(db())
const middlewares = jsonServer.defaults()

const rewriter = jsonServer.rewriter({
  	"/api/:category/:resource": "/:category/:resource",
    "/api/:category/:resource/:id": "/:category_:resource/:id"
})

server.use(middlewares)
server.use(rewriter)

server.use(jsonServer.bodyParser)
server.use((req, res, next) => {
  if (req.method == 'POST') {
    req.body.createdAt = Date.now()
    console.log(req.body,Date.now())
  }
  next();
})
server.use(router)
server.listen(3003, () => {
  console.log('JSON Server is running')
})