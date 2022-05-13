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
router.get('/:id', getUser, (req, res) => {
    res.json(res.user.name)
})

// Creating one User
router.post('/', async (req, res) => {
    const user1 = new user({
        name: req.body.name,
        Univ: req.body.Univ,
        GradDate: req.body.GradDate
    })
    try {
        const newUser = await user1.save()
        res.status(201).json(newUser)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

// Updating one User
router.patch('/:id', getUser, async (req, res) => {
    if(req.body.name != null) {
        res.user.name = req.body.name
    }
    if(req.body.Univ != null) { 
        res.user.Univ = req.body.Univ
    }
    try {
        const updatedUser = await res.user.save()
        res.json(updatedUser )
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

// Deleting one User
router.delete('/:id', getUser, async (req, res) => {
    try {
        await res.user.remove()
        res.json({ message: 'Deleted a User' })
    } catch (err) {
        escape.status(500).json({ message: err.message })
    }
})

async function getUser(req, res, next) {
    let user1 
    try {
        user1 = await user.findById(req.params.id)
        if(user1 == null) {
            return res.status(404).json({ message: 'Cannot find User' })
        }
     } catch (err) {
         return res.status(500).json({ message: err.message })
     }
     res.user = user1
     next()
}

module.exports = router