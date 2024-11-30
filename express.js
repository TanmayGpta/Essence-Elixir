const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Use routes defined in the './routes/app.js' file
app.use('/', require(path.join(__dirname, 'routes', 'app.js')));

// Start the server and listen on the specified port
app.listen(PORT, (error) => {
    if (!error)
        console.log(`Server is Successfully Running, and App is listening on http://localhost:${PORT}`);
    else
        console.log("Error occurred, server can't start", error);
});
