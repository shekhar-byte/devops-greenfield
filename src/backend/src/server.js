require('dotenv').config();
const mongoose = require('mongoose');
const app = require('./app');

const PORT = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI;

// Connect to MongoDB
mongoose
    .connect(MONGODB_URI)
    .then(() => {
        console.log('Connected to MongoDB');

        // Start server after successful database connection
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    });

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
    console.error('Unhandled Rejection:', err);
    process.exit(1);
});
