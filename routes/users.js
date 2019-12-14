const express = require('express')
const router = express.Router()
const controller = require('../controllers/userController')

router.post('/', controller.getUsers)
router.post('/:userId', controller.getUserById)
router.put('/:userId/update', controller.updateUser)
router.delete('/:userId/delete', controller.deleteUser)

module.exports = router
