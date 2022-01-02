module.exports = (req, res, next) => {
	// res.header('X-Hello', 'World');
	// res.header('Access-Control-Allow-Origin', req.headers.origin || '*');
	// // 	//允许的header类型
	// res.header('Access-Control-Allow-Headers', 'content-type');
	// // 	//跨域允许的请求方式
	// res.header('Access-Control-Allow-Methods', 'DELETE,PUT,POST,GET,OPTIONS');
	//设置请求头
	// res.set({
	// 	'Access-Control-Allow-Credentials': true,
	// 	'Access-Control-Max-Age': 1728000,
	// 	'Access-Control-Allow-Origin': req.headers.origin || '*',
	// 	'Access-Control-Allow-Headers': 'X-Requested-With,Content-Type',
	// 	'Access-Control-Allow-Methods': 'PUT,POST,GET,DELETE,OPTIONS',
	// 	'Content-Type': 'application/json; charset=utf-8'
	// });
	if (isAuthorized(req)) {
		// add your authorization logic here
		next(); // continue to JSON Server router
	} else {
		res.sendStatus(401);
    next();
  }
};

const isAuthorized = req => {
	if (req.get('x-token') === '12345') return true;
	return false;
};
