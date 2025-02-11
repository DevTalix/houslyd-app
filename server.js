const express = require('express');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables

const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Houslyd Backend is running!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
