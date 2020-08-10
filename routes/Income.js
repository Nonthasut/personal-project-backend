const express = require('express');
const router = express.Router();
const controllers = require('../controllers/income')
const passport = require('passport')

const auth = passport.authenticate('jwt',{session:false})

router.get('/',auth,controllers.getAll)
router.post('/',auth,controllers.create)
router.delete('/:id',auth,controllers.deleteIncomeList)
router.patch('/:id',auth,controllers.updateIncomeList)

router.get('/total',auth,controllers.getSum)

module.exports = router;