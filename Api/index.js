const express = require("express");

const mongoose = require("mongoose");

const bcrypt = require("bcryptjs");

const bcryptSalt = bcrypt.genSaltSync(10);

const cors = require("cors");

const app = express();

const User = require("./model/User"); //*model for user



require("dotenv").config();

const CookieParser = require("cookie-parser");

const jwtSecret = process.env.JWT_SECRET;

const jwt = require("jsonwebtoken");

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

const corsOptions = {
  origin: process.env.CLIENT_URL,
  credentials: true,
  methods: 'GET, POST, PUT, DELETE, PATCH',
};


app.use(cors(corsOptions));

app.use(CookieParser());

//! Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to MongoDB successfully");
  })
  .catch((error) => {
    console.error("Failed to connect to MongoDB:", error);
  });

//! ----------end of mongo connect ------------------------




//! --------------------------------------- End point -creation starts -------------------------------

//~ Register a new user
app.post("/register", async (req, res) => {
  const { username, password, phone, email } = req.body;
  try {
    const hashPassword = bcrypt.hashSync(password, bcryptSalt);
    const createdUser = await User.create({
      username,
      password: hashPassword,
      phone,
      email
    });

    jwt.sign(
      { userId: createdUser._id, username },
      jwtSecret,
      {},
      (err, token) => {
        if (err) {
          console.error("Failed to create JWT token:", err);
          res.status(500).json("Internal server error");
        } else {
          res.cookie("token", token).status(201).json({
            id: createdUser._id,
          });
        }
      }
    );
  } catch (err) {
    console.error("Failed to register user:", err);
    res.status(500).json("Internal server error");
  }
});

///~login///

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const foundUser = await User.findOne({ username });
  if (foundUser) {
    const passOk = bcrypt.compareSync(password, foundUser.password);
    if (passOk) {
      jwt.sign(
        { userId: foundUser._id, username },
        jwtSecret,
        {},
        (err, token) => {
          if (err) throw err;
          res.cookie("token", token).json({
            id: foundUser._id,
          });
        }
      );
    }
  }
});


//  //~ Logout //

app.post('/logout', (req, res) => {
  res.cookie('token', '', { sameSite: 'none', secure: true }).json('deleted')
})


//~ profile///

app.get("/profile", (req, res) => {
  const token = req.cookies?.token;
  if (token) {
    jwt.verify(token, jwtSecret, {}, (err, userData) => {
      if (err) throw err;

      res.json(userData);
    });
  } else {
    res.status(401).json("No token");
  }
});


app.get('/alluser', async (req, res) => {
  try {
    const data = await User.find({});
    return res.status(200).json({ data });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
});



// Get a single user by ID
// app.get('/user/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const user = await User.findById(id);
//     if (!user) {
//       return res.status(404).json({ msg: 'User not found' });
//     }
//     return res.status(200).json(user);
//   } catch (err) {
//     return res.status(500).json({ msg: err.message });
//   }
// });

// Update a user by ID
// Update a user by ID


app.patch('/updateuser/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const extuser = await User.findById(id);

    if (!extuser)
      return res.status(404).json({ msg: 'User not found' });

    await User.findByIdAndUpdate(id, req.body);

    return res.status(200).json({ msg: 'User updated successfully' });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
});





// Delete a user by ID
app.delete('/deleteuser/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }
    return res.status(200).json({ msg: 'User deleted successfully' });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
});


app.listen(4040);


