/postit/inventory/
router.post('/postit/inventory', function (req, res) {
	var itemName = req.param('itemName');
	var itemDescription = req.param('itemDescription');
	var numInStock = req.param('numinStock');
	var price = req.param('price');
	var typeID = req.param('typeID');
	var familySafe = req.param('familySafe');
	var availableToPackage = req.param('availableToPackage');

	con.query("INSERT INTO inventory(itemName, itemDescription, numInStock, price, typeID, familySafe, availableToPackage) VALUES (?,?,?,?,?,?,?)", [itemName, itemDescription, numInStock, price, typeID, familySafe, availableToPackage],function (err, result, fields) {
		if (err) throw err;
		res.end(JSON.stringify(result)); // Result in JSON format
	});
});

router.put('/putit/inventory', function (req, res) {
    var ID = req.param('ID');
	var itemName = req.param('itemName');
	var itemDescription = req.param('itemDescription');
	var numInStock = req.param('numinStock');
	var price = req.param('price');
	var typeID = req.param('typeID');
	var familySafe = req.param('familySafe');
    var availableToPackage = req.param('availableToPackage');
    

	con.query("UPDATE inventory SET(itemName, itemDescription, numInStock, price, typeID, familySafe, availableToPackage) VALUES (?,?,?,?,?,?,?) WHERE inventory.itemID = ID", [itemName, itemDescription, numInStock, price, typeID, familySafe, availableToPackage], function (err, result, fields) {
		if (err) throw err;
		res.end(JSON.stringify(result)); // Result in JSON format
	});
});


/postit/warehousedetails/
router.post('/postit/warehouseprofile', function (req, res) {
	var warehouseName = req.param('warehouseName');
	var email = req.param('email');
	var phoneNumber = req.param('phoneNumber');
	var address = req.param('address');
	var city = req.param('city');
	var zipcode = req.param('zipcode');

	con.query("INSERT INTO warhouseprofile(warehouseName, email, phoneNumber, address, city, zipcode) VALUES (?,?,?,?,?,?)", [warehouseName, email, phoneNumber, address, city, zipcode],function (err, result, fields) {
		if (err) throw err;
		res.end(JSON.stringify(result)); // Result in JSON format
	});
});

router.put('/putit/warehouseprofile', function (req, res) {
	var warehouseName = req.param('warehouseName');
	var email = req.param('email');
	var phoneNumber = req.param('phoneNumber');
	var address = req.param('address');
	var city = req.param('city');
	var zipcode = req.param('zipcode');
    

	con.query("UPDATE warehouseprofile SET(warehouseName, email, phoneNumber, address, city, zipcode) VALUES (?,?,?,?,?,?) WHERE warehouseprofile.warehouseName = warehouseName", [warehouseName, email, phoneNumber, address, city, zipcode], function (err, result, fields) {
		if (err) throw err;
		res.end(JSON.stringify(result)); // Result in JSON format
	});
});



