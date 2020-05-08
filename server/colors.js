const express = require('express')

const router = express.Router()

router.use(express.json())

const colors = ['red', 'green', 'blue', 'white', 'purple', 'orange', 'black']

// GET /api/v1/colors
router.get('/', (req, res) => {
  setTimeout(() => {
    res.json(colors)
  }, 2000)
})

module.exports = router
