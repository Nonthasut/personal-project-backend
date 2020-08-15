const db = require('../models');
const { sequelize, Sequelize } = require('../models')
const Op = Sequelize.Op

const getAll = async (req, res) => {
    const allTargetList = await db.Target.findAll({ where: { user_id: req.user.id } });
    res.status(200).send(allTargetList)
}

const create = async (req, res) => {
    const newTargetList = await db.Target.create({
        target_list: req.body.target_list,
        target_value_per_time: req.body.target_value_per_time,
        target_quantity_per_month: req.body.target_quantity_per_month,
        target_value: req.body.target_value,
        user_id: req.user.id
    })
    res.status(204).send(newTargetList)
}

const deleteTargetList = async (req, res) => {
    const targetId = Number(req.params.id)
    const targetTargetList = await db.Target.findOne({ where: { id: targetId, user_id: req.user.id } })
    if (targetTargetList) {
        await targetTargetList.destroy()
        res.status(204).send({ message: 'Delete already' })
    } else {
        res.status(404).send({ message: 'Not found list.' })
    }

}

const updateTarget = async (req, res) => {
    const targetId = Number(req.params.id)
    const targetTargetList = await db.Target.findOne({ where: { id: targetId, user_id: req.user.id } })
    const { target_list, target_value, target_quantity_per_month ,target_value_per_time} = req.body
    if (!targetTargetList) {
        res.status(404).send({ message: 'Not found list' })
    } else if (target_list || target_value || target_quantity_per_month ||target_value_per_time) {
        await targetTargetList.update({ target_list: target_list, target_value: target_value, target_quantity_per_month: target_quantity_per_month,target_value_per_time:target_value_per_time })
        res.status(200).send({ message: 'List already update.' })
    }
}

const getSum = async (req, res) => {
    const sumTarget = await db.Target.sum('target_value', { where: { user_id: req.user.id } })
    res.status(200).send(sumTarget.toString())
}

module.exports = {
    getAll,
    create,
    deleteTargetList,
    getSum,
    updateTarget
}