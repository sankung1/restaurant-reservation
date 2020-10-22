// const express = require("express");
// const path = require("path");

// const app = express();
// const PORT = 3000;

// const makeRes = [{
//     name: "",
//     phoneNum: "",
//     email: "",
//     uniqueID: ""

// }]

// const availableSeats = []
// const waitingList = []

// // route to send the user to the ajax page
// app.get("/", (req, res)=>{
//     res.sendFile(path.join(__dirname, "index.html"))
// })

// app.get("/api/makeReservation/:makeRes", )


// app.listen(PORT, () =>{
//     console.log(`App is listening on PORT ${PORT}`);
// });

$("#resButton").on("click", function () {
    window.location.assign("restaurant.html");
})