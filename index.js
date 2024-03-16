const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const User = require("./models/sirdb");

const app = express();
app.use(express.static("public"));
app.set('view engine', 'ejs');

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));


// Connect to MongoDB
mongoose.connect('mongodb+srv://prayagatwork2:admin54321@cluster0.koogrwh.mongodb.net/info?retryWrites=true&w=majority');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


// Routes
app.get('/', (req, res) => {
  res.render("request"); // Serve the HTML file
});

app.post('/', async (req, res) => {
  const user = new User({
    Name: req.body.Name,
    RollNo: req.body.RollNo,
    Details: req.body.Details,
    Email: req.body.Email
  });

  try {
    await user.save();
    console.log("User added successfully");
    const externalURL = 'https://emptyroomspdeu.onrender.com'; 
    res.redirect(externalURL);
  } catch (error) {
    console.error("Error adding user:", error);
    res.status(500).send("Error adding user");
  }
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
