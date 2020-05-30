const express = require('express');
const router = express.Router();

router.get('/welcome', (req, res) => res.render('welcome'));

// Profile
router.get('/profile', (req, res) => res.render('profile'));

// Dashboard
router.get('/dashboard', (req, res) => res.render('dashboard'));

module.exports = router;