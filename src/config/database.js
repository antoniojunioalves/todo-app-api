const mongoose = require('mongoose')
mongoose.Promise = global.Promise // Feito somente para tirar a advertência 
let stringConnectionDB = `mongodb+srv://${process.env.USER_MONGO}:${process.env.PASSWORD_MONGO}@cluster0-afjvm.mongodb.net/test?retryWrites=true&w=majority`
//module.exports = mongoose.connect('mongodb://localhost/todo')
module.exports = mongoose
    .connect(stringConnectionDB, { useNewUrlParser: true })
    .then(() => {
        console.log("[DATABASE] - Mongo is connected");
    })
    .catch(err => {
        console.log("[DATABASE] - Error on Mongo connection");
    });
