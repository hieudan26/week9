const mongoose = require('mongoose')
require('dotenv').config()

const MONGO_URL = process.env.MONGO_URL || "mongodb+srv://hieudan:123456789Aa@cluster0.oyw9yia.mongodb.net/?retryWrites=true&w=majority";
console.log(MONGO_URL);

mongoose.connection.once('open',()=>{
    console.log('MongoDB connection ready2!');
});

mongoose.connection.on('error',(err)=>{
    console.log(err)
});

async function mongoConnect(){
    await mongoose.connect(MONGO_URL);
}

async function mongoDisconnect(){
    await mongoose.disconnect();
}

module.exports = {
    mongoConnect,
    mongoDisconnect
}
mongoConnect()
// Connect thanhf coong