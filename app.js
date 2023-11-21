const express = require("express");
require("dotenv").config();
const app = express();

app.get("/names", (req, res) => {
	res.send("Louis");
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, function (err) {
	if (err) {
		console.log("Error in server setup", err);
	} else {
		console.log("Server listening on PORT", PORT);
	}
});
