const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Matthew Aerts');
});

// Server starten
app.listen(PORT, () => {
    console.log(`Server is running op http://localhost:${PORT}`);
});
