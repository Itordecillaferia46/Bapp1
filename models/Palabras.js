const mongoose = require('mongoose')
const PalabrasSchema = new mongoose.Schema({
    termino: String,
    comuna: Number,
})
module.exports = mongoose.model('palabra', PalabrasSchema)