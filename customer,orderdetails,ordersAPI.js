//get customer information
router.get('/getit/:customers', function (req, res) {
	con.query("SELECT * FROM customers ",function (err, result, fields) {
		if (err) throw err;
		res.end(JSON.stringify(result)); // Result in JSON format
	});
});

router.post('/postit/orders', function (req, res) {
	var orderID = req.param('orderID');
	var customerID = req.param('customerID');
	var orderDate = req.param('orderDate');

	con.query("INSERT INTO orders(orderID, customerID, orderDate) VALUES (?,?,?)", [orderID,customerID,orderDate],function (err, result, fields) {
		if (err) throw err;
		res.end(JSON.stringify(result)); // Result in JSON format
	});
});

//add to the orderdetails table
router.post('/postit/orderdetails', function (req, res) {
	var orderID = req.param('orderID');
	var itemID = req.param('itemID');
	var qunatity = req.param('quantity');

	con.query("INSERT INTO orderdetails(orderID, itemID, quantity) VALUES (?,?,?)", [orderID,itemID,qunatity],function (err, result, fields) {
		if (err) throw err;
		res.end(JSON.stringify(result)); // Result in JSON format
	});
});


//update the numInStock of the inventory after an order is placed
router.put('/putit/subtractInventory', function (req, res) {
	var itemID = req.param('itemID');
	var subtracted = req.param('subtracted');
	con.query("UPDATE inventory SET numInStock = numInStock - subtracted WHERE inventory.itemID = itemID", [subtracted,itemID], function (err, result, fields) {
		if (err) throw err;
		res.end(JSON.stringify(result)); // Result in JSON format
	});
});

//get customer and order information
router.get('/getit/:orderInfo', function (req, res) {
    con.query("SELECT orders.orderID, orders.customerID, orders.orderDate, customers.firstName, customers.lastName, customers.email, customers.phoneNumber, customers.address, customers.city, customers.zipcode, customers.state  FROM orders INNER JOIN customers on orders.customerID = customers.customerID",function (err, result, fields) {
		if (err) throw err;
		res.end(JSON.stringify(result)); // Result in JSON format
	});
});

