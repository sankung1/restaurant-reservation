const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const makeRes = [{
    name: "",
    phoneNum: "",
    email: "",
    uniqueID: ""
}]

const availableSeats = []
const waitingList = []

// route to send the user to the ajax page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "home.html"))
})
app.get("/tables", (req, res) => {
    res.sendFile(path.join(__dirname, "tables.html"))
})
app.get("/reserve", (req, res) => {
    res.sendFile(path.join(__dirname, "reserve.html"))
})

app.get("/api/makeReservation/:makeRes", (req, res) => {

})


app.listen(PORT, () => {
    console.log(`App is listening on PORT ${PORT}`);
});