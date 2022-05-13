const express = require('express')
const router = express.Router()
const user = require('../models/user')

// Getting all Users
router.get('/', async (req, res) => {
    try {
        const users = await user.find()
        res.json(users)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// Getting one User
router.get('/:id', (req, res) => {
    res.send(req.params.id)
})

// Creating one User
router.post('/', async (req, res) => {
    const user = new user({
        name: req.body.name,
        Univ: req.body.Univ,
        GradDate: req.body.GradDate
    })
    try {
        const newUser = await user.save()
        res.status(201).json(newUser)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

// Updating one User
router.patch('/', (req, res) => {

})

// Deleting one User
router.delete('/', (req, res) => {

})

module.exports = router