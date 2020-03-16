const express = require('express');
const server = express();
const cors = require('cors');

// Routes
const userRoute = require('./routes/Users/users-routes');
const recipeRoute = require('./routes/Recipes/recipes-route');
const authRoute = require('./routes/Auth/auth-routes');
const ingreientsRoute = require('./routes/Ingredients/ingredients-route');
const stepsRoute = require('./routes/Steps/steps-route');

server.use(express.json());
server.use(cors());
server.use('/api/users', userRoute);
server.use('/api/recipes', recipeRoute);
server.use('/api/ingredients', ingreientsRoute);
server.use('/api/auth', authRoute);
server.use('/api/steps', stepsRoute);

module.exports = server;