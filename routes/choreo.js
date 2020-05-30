const express = require('express');
const router = express.Router();
const async = require('async');

router.get('/welcome', (req, res) => res.render('welcome'));

// Login page
router.get('/login', (req, res) => res.render('login'));

// Register page
router.get('/register', (req, res) => res.render('register'));

// Profile
router.get('/profile', (req, res) => res.render('profile'));

// Dashboard
router.get('/dashboard', (req, res) => res.render('dashboard'));

// Upload page
router.get('/upload', (req, res) => res.render('upload'));

module.exports = router;