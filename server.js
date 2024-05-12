// let express = require("express")
// let app = express()
// app.use('/style', express.static('public/style'));
// app.use('/script', express.static('public/script'));

// app.set("view engine","ejs")
// app.get("/",(req,res)=>{
// res.render("index")
// })

// app.listen(8000,()=>{
//     console.log("Server Done!");
// })
const express = require("express");
const path = require("path");

const app = express();

// Serve static files from the 'dist' folder
app.use(express.static("Tasks/dist"));

// Define a route to serve your React app
app.get("/", (req, res) => {
  res.sendFile("Tasks/dist", "dist", "index.html");
});

// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
