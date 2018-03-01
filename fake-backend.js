(function() {
	let faker = require('faker');
	const jsonServer = require('json-server');
	const server = jsonServer.create();
	const router = jsonServer.router('db.json');
	const middlewares = jsonServer.defaults()
	server.use(middlewares)
	server.use(jsonServer.bodyParser)

	server.use((req, res, next) => {
	  if (req.method === 'POST') {
	  	var _errors = {
	  	};
		var hasError = false;
		console.log(req.body);
	    if (!req.body.deckName || req.body.deckName.trim().length === 0) {
	    	_errors['deckName'] = 'Deck name field is required.';
	    	hasError = true;
	    } 
	    if (hasError) {
	    	res.status(500).jsonp({
	    		errors: _errors
	    	})
	    }
	  }
	  // Continue to JSON Server router
	  next()
	})

	// Use default router
	server.use(router)
	server.listen(3000, () => {
	  console.log('JSON Server is running')
	})
})();