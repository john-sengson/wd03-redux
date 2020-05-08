const express = require('express')

const router = express.Router()

router.use(express.json())

const things = [{
  name: 'santa',
  color: 'red',
}, {
  name: 'brocolli',
  color: 'green',
}, {
  name: 'sea',
  color: 'blue',
}, {
  name: 'paper',
  color: 'white',
}, {
  name: 'yam',
  color: 'purple',
}, {
  name: 'orange',
  color: 'orange',
}, {
  name : 'hole',
  color: 'black'
}]

// GET /api/v1/things/red
router.get('/:color', (req, res) => {
  const {color} = req.params
  setTimeout(() => {
    const thing = things.find(t => t.color === color)
    if (thing) {
      res.json(thing)
    } else {
      res.sendStatus(404)
    }
  }, 2000)
})

module.exports = router
