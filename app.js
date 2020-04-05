const express = require("express");
const bodyParser = require("body-parser");

const app = express();

function getCurrentDay(day) {
	switch(day){
		case 0:
			return "Sunday";
		case 1:
			return "Monday";
		case 2:
			return "Tuesday";
		case 3:
			return "Wednesday";
		case 4:
			return "Thursday";
		case 5:
			return "Friday";
		case 6:
			return "Saturday";
	}
}

app.get("/", (req, res) => {
	var today = new Date();
	var currentDay = today.getDay();
	var currentDayText = getCurrentDay(currentDay);

	res.write(`Today is ${currentDayText}!\n`);

	if (currentDay === 6 || currentDay === 0) {
		res.write("It's a weekend!");
	}
	else {
		res.write("It's a working day :(");
	}

	res.send();
});



app.listen(3000, () => {
	console.log("Server started on port 3000");
});