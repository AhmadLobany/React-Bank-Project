const mongoose = require('mongoose')
const Schema = mongoose.Schema

const transactionSchema  = new Schema({
    amount : Number,
    category : String,
    vendor : String,
    key: Number
})

const Transaction = mongoose.model("transactions", transactionSchema)
module.exports = Transaction