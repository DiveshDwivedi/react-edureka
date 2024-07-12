const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const { check, validationResult } = require('express-validator');

const router = express.Router();

router.post('/register',
    [
        check('username', 'Username is required').not().isEmpty(),
        check('email', 'Email is required').not().isEmpty(),
        check('password', 'Password should be at least 6 chars long').isLength({ min: 6 }),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const userExists = await User.findOne({ username: req.body.username });
        if (userExists) return res.status(400).send('Username already exists.');

        const user = new User(req.body);
        await user.save();
        res.send('User registered successfully!');
    }
);

router.post('/login', [
    check('username', 'Username is required').not().isEmpty(),
    check('password', 'Password should be at least 6 chars long').isLength({ min: 6 }),
], async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const user = await User.findOne({ username: req.body.username });
    if (!user) return res.status(400).send('Invalid username or password.');

    const validPassword = bcrypt.compareSync(req.body.password, user.password);
    if (!validPassword) return res.status(400).send('Invalid username or password.');

    const token = jwt.sign({ _id: user._id, role: user.role }, process.env.JWT_SECRET);
    res.status(200).send(token);
});

module.exports = router;