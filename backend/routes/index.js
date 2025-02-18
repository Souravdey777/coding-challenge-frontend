const express = require('express')
const router = express.Router()

// import for the controllers
const {
  getDashboardData,
  getAgentData,
  getCallsData,
  getAllAgents
} = require('../controllers')

// API Routes
router.get('/', getDashboardData)
router.get('/agent/:id', getAgentData)
router.get('/agent', getAllAgents)
router.get('/call/:number', getCallsData)

module.exports = router
