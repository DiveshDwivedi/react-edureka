const express = require('express');
const Book = require('../models/Book');
const authorize = require('../middleware/authorization');
const { check, validationResult } = require('express-validator');

const router = express.Router();

// All your CRUD operations here, e.g.,
router.get('/', async (req, res) => {
    const books = await Book.find();
    res.send(books);
});

router.get('/:id', async (req, res) => {
    const result = await Book.findOne({_id: req.params.id});
    res.send(result);
});

router.get('/logout', async (req, res) => {
    localStorage.removeItem('token');
    
});

router.post('/',
    [
        check('title').isLength({ min: 1 }).withMessage('Title is required'),
        check('author').isLength({ min: 1 }).withMessage('Author is required'),
        check('price').isNumeric().withMessage('Valid price is required'),
    ], async (req, res) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const book = new Book(req.body);
        await book.save();
        res.send(book);
    });

module.exports = router;