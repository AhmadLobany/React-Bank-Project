const express = require('express')
const router = express.Router()
const Transaction = require('../models/Transaction')



router.get('/transactions', function (req, res) {
    Transaction.find({}).exec(function (err, result) {
        res.send({data: result})
    })
})



router.post('/transaction', function (req, res) {
    const trans = new Transaction({ amount: req.body.amount, category: req.body.category, vendor: req.body.vendor, key: req.body.key })
    trans.save()
    res.end()
})


router.delete('/transaction/:key', function (req, res) {
    const key = req.params.key
    Transaction.deleteOne({ "_id": key }).exec(function(err,result) {
        res.end()
    })
})


module.exports = router