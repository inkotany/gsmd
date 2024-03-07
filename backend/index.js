const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
    res.send('Mater Dei');
});

app.listen(PORT, () => {
    console.log(`App running at http://localhost:${PORT}`);
});