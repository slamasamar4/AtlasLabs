const mongoose = require('mongoose');
require('dotenv').config();

async function dbConnect() {
    try {
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Successfully connected to MongoDB Atlas');
    } catch (error) {
        console.log('Unable to connect to MongoDB');
        console.error(error);
    }
}

module.exports = {dbConnect};
