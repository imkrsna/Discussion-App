// importing modules
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { setRoutes } = require('./services/routes');

// setting up morgan
morgan.token('content', (req, res) => JSON.stringify(req.body));

// creating server
const app = express();

// installing ui
app.use(express.static('dist'));

// installing middlewares
app.use(cors());
app.use(morgan(':method :url :status :res[content-length] - :response-time ms - :content'));
app.use(express.json());

// setting up routes
setRoutes(app);

// running server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running at port ${PORT}!`));