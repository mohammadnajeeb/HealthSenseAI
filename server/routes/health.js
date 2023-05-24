// health.js
const express = require('express');
const router = express.Router();
const HealthDetail = require('../models/HealthDetail');

// Get all health details
router.get('/', (req, res) => {
  // Implement your logic to get all health details from the database
  HealthDetail.find()
    .then(details => {
      res.status(200).json(details);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ message: 'Server error' });
    });
});

// Create a new health detail
router.post('/', (req, res) => {
  // Implement your logic to create a new health detail
  // Retrieve health detail data from the request body
  const { userId, details } = req.body;

  // Create a new health detail instance
  const healthDetail = new HealthDetail({
    userId,
    details
  });

  // Save the new health detail to the database
  healthDetail.save()
    .then(() => {
      res.status(201).json({ message: 'Health detail created successfully' });
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ message: 'Server error' });
    });
});

module.exports = router;
