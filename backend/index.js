const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

const libraryRoute = require('./routes/books');

app.use('/api/library/books', libraryRoute);

app.listen(PORT, () => {
    console.log(`App running at http://localhost:${PORT}`);
});