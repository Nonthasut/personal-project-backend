const express = require('express');
const router = express.Router();
const controller = require('../controllers/user')
const passport = require('passport')

const auth = passport.authenticate('jwt',{session:false})

router.post('/register',controller.register)
router.post('/login',controller.login)
router.patch('/:id',auth,controller.editDate)

module.exports = router;