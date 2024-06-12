const mongoose = require('mongoose');
const _url = 'mongodb://127.0.0.1:27017/test'

mongoose.connect(_url);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
    console.log('Database connected successfully');
});

module.exports = db;