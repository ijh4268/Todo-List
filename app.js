const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var items = [];

app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');

app.get("/", (req, res) => {
	const today = new Date();
	const options = {
		weekday: 'long',
		day: 'numeric',
		month: 'long'
	};
	const currentDate = today.toLocaleDateString("en-US", options);
	

	res.render('list', {
		day: currentDate,
		items: items
	});
});

app.post("/", (req, res) => {
	item = req.body.newItem;
	items.push(item);

	res.redirect("/");
});

app.listen(3000, () => {
	console.log("Server started on port 3000");
});