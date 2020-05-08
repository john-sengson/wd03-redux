const path = require('path')
const express = require('express')

const colorRoutes = require('./colors')
const thingRoutes = require('./things')

const server = express()

server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/v1/colors', colorRoutes)
server.use('/api/v1/things', thingRoutes)

module.exports = server
