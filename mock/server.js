const jsonServer = require('json-server');
const server = jsonServer.create();

const path = require('path');
const router = jsonServer.router(path.join(__dirname, 'db.json'));

// const middlewares = jsonServer.defaults()
const middlewares = require('./middlewares');
// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

// 1. 添加自定义路由
// http://localhost:3004/echo?a=%27asa%27
// Add custom routes before JSON Server router
server.get('/echo', (req, res) => {
	res.jsonp(req.query);
});

// 2. 用户校验
const isAuthorized = req => {
	if (req.get('x-token') === '12345') return true;
	return false;
};
server.use((req, res, next) => {
	if (isAuthorized(req)) {
		// add your authorization logic here
		next(); // continue to JSON Server router
	} else {
		res.sendStatus(401);
	}
	next();
});

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
	if (req.method === 'POST') {
		req.body.createdAt = Date.now();
	}
	// Continue to JSON Server router
	next();
});

// Use default router
server.use(router);
server.listen(3004, () => {
	console.log('JSON Server is running');
});
