const mongoose = require('mongoose')

const URI = 'mongodb+srv://Ashar:ILOVEcars123@nukhba.fqytzky.mongodb.net/nukhba'

const connectToMongo = () => mongoose.connect(URI, () => {
    console.log("Connected to Mongo Successfully")
})

module.exports = connectToMongo