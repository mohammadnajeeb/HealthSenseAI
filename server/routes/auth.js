// auth.js
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/User');

// Signin route
router.post('/signin', (req, res) => {
  // Implement your signin logic here
  // Retrieve user credentials from the request body
  const { email, password } = req.body;

  // Check if the user exists in the database
  User.findOne({ email })
    .then(user => {
      if (!user) {
        // User not found
        return res.status(404).json({ message: 'User not found' });
      }

      // Compare passwords
      bcrypt.compare(password, user.password)
        .then(isMatch => {
          if (!isMatch) {
            // Passwords don't match
            return res.status(401).json({ message: 'Invalid credentials' });
          }

          // User authenticated successfully
          res.status(200).json({ message: 'Authentication successful' });
        })
        .catch(error => {
          // Handle any errors
          console.log(error);
          res.status(500).json({ message: 'Server error' });
        });
    })
    .catch(error => {
      // Handle any errors
      console.log(error);
      res.status(500).json({ message: 'Server error' });
    });
});

// Signup route
router.post('/signup', (req, res) => {
  // Implement your signup logic here
  // Retrieve user data from the request body
  const { name, email, password } = req.body;

  // Check if the user already exists in the database
  User.findOne({ email })
    .then(existingUser => {
      if (existingUser) {
        // User already exists
        return res.status(409).json({ message: 'User already exists' });
      }

      // Hash the password
      bcrypt.hash(password, 10)
        .then(hashedPassword => {
          // Create a new user instance
          const user = new User({
            name,
            email,
            password: hashedPassword
          });

          // Save the new user to the database
          user.save()
            .then(() => {
              // User created successfully
              res.status(201).json({ message: 'User created successfully' });
            })
            .catch(error => {
              // Handle any errors
              console.log(error);
              res.status(500).json({ message: 'Server error' });
            });
        })
        .catch(error => {
          // Handle any errors
          console.log(error);
          res.status(500).json({ message: 'Server error' });
        });
    })
    .catch(error => {
      // Handle any errors
      console.log(error);
      res.status(500).json({ message: 'Server error' });
    });
});

module.exports = router;
