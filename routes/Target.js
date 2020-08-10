const express = require('express');
const router = express.Router();
const controller = require('../controllers/target')
const passport = require('passport')

const auth = passport.authenticate('jwt', { session: false })

router.get('/', auth, controller.getAll)
router.post('/', auth, controller.create)
router.delete('/:id', auth, controller.deleteTargetList)
router.patch('/:id', auth, controller.updateTarget)
router.get('/total', auth, controller.getSum)

module.exports = router;