const db = require('../models');
const { sequelize, Sequelize } = require('../models')
const Op = Sequelize.Op

const getAll = async (req, res) => {
    const allIncomeList = await db.Income.findAll({ where: { user_id: req.user.id } });
    res.status(200).send(allIncomeList)
}

const create = async (req, res) => {
    const newIncomeList = await db.Income.create({
        income_list: req.body.income_list,
        income_value: req.body.income_value,
        user_id: req.user.id
    })
    console.log(req.body.income_value)
    res.status(204).send(newIncomeList)
}

const deleteIncomeList = async (req, res) => {
    const targetId = Number(req.params.id);
    const targetIncome = await db.Income.findOne({ where: { id: targetId, user_id: req.user.id } })
    if (targetIncome) {
        await targetIncome.destroy()
        res.status(204).send({ message: 'Delete already' })
    } else {
        res.status(404).send({ message: 'Not found list.' })
    }
}

const updateIncomeList = async (req, res) => {
    const targetId = Number(req.params.id);
    const targetIncomeList = await db.Income.findOne({ where: { id: targetId, user_id: req.user.id } });
    const { income_list, income_value } = req.body
    if (!targetIncomeList) {
        res.status(404).send({ message: 'Not found list.' })
    } else if (income_list || income_value){
       await targetIncomeList.update({ income_list: income_list, income_value: Number(income_value) })
        res.status(200).send({ message: 'List already update.' })
    }
}

const getSum = async (req, res) => {

    const sumIncomes = await db.Income.sum('income_value', { where: { user_id: req.user.id } })
    console.log(sumIncomes)
    res.status(200).send(sumIncomes.toString())
}

module.exports = {
    getAll,
    create,
    deleteIncomeList,
    updateIncomeList,
    getSum
}