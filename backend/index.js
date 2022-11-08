const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');

// Import routes
const userApiRoutes = require('./routes/userApiRoutes');
const moviesApiRoutes = require('./routes/moviesApiRoutes');
const genreApiRoutes = require('./routes/genreApiRoutes');

const app = express();

const dbURI = "mongodb+srv://Ujwal:CineReview@cinereview.aci6lx8.mongodb.net/?retryWrites=true&w=majority";

// Connect 
mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(result => {
    app.listen(8000);
    console.log('Connected to db');
}).catch(err => console.log(err));

app.use(morgan('dev'));

// Use Routes
// app.use('/api/users/', );
app.use('/api/movies/', moviesApiRoutes);
// app.use('/api/genres/', genreApiRoutes);

