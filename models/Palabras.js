const mongoose = require('mongoose')
const PalabrasSchema = new mongoose.Schema({
    termino: String,
    comuna: Array,
})
module.exports = mongoose.model('palabra', PalabrasSchema)