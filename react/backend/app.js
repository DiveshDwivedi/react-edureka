const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const auth = require('./routes/auth');
const books = require('./routes/books');

dotenv.config();

// MongoDB configuration
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const app = express();
app.use(express.json());

var cors = require('cors');
app.use(cors());

const morgan = require('morgan');
app.use(morgan('combined'));

const helmet = require('helmet');
app.use(helmet());

// Rate Limiting
const rateLimit = require("express-rate-limit");
const authorize = require('./middleware/authorization');

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
});

app.use(limiter);

app.use('/auth', auth);
app.use('/books', books);
// app.use('/books', authorize('admin'), books);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});