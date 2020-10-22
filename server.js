// const http = require("http");


// const PORT = 8080;

// function handleRequest(request, response) {
//     response.end("It Works!! Path Hit: " + request.url);
// }

// const server = http.createServer(handleRequest);

// server.listen(PORT, function() {
//     console.log("Server listening on: http://localhost:" + PORT);
// });

const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

const makeRes = [{
    name: "",
    phoneNum: "",
    email: "",
    uniqueID: ""

}]

const availableSeats = []
const waitingList = []

// route to send the user to the ajax page
app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "home.html"))
})
app.get("/tables", (req, res) => {
    res.sendFile(path.join(__dirname, "table.html"))
})
app.get("/reserve", (req, res) => {
    res.sendFile(path.join(__dirname, "reserve.html"))
})

app.get("/api/makeReservation/:makeRes", (req, res)=>{

})


app.listen(PORT, () =>{
    console.log(`App is listening on PORT ${PORT}`);
});
