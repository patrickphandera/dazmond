const express = require('express');
const path = require('path');

const app = express();

// Serve the HTML file from the root directory
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Serve the assets folder statically
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
