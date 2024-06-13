require('dotenv').config();
const mongoose = require('mongoose');
const _url = process.env.MONGO_URL; // || 'mongodb://127.0.0.1:27017/test'
console.log(process.env.MONGO_URL)
mongoose.connect(_url);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
    console.log('Database connected successfully');
});

module.exports = db;