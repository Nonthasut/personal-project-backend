const db = require('../models')
const {sequelize, Sequelize} = require('../models')
const Op = Sequelize.Op

const getAll = async (req,res) =>{
    const allExpenditure = await db.Expenditure.findAll();
    res.status(200).send(allExpenditure)
}

const create = async (req,res)=>{
    const newExpenditure = await db.Expenditure.create({
        expenditure_list: req.body.expenditure_list,
        expenditure_value: req.body.expenditure_value,
        user_id: req.user.id
    })
    res.status(204).send(newExpenditure)
}

const deleteExpenditure = async (req,res)=>{
    const targetId = Number(req.params.id)
    const targetExpenditure = await db.Expenditure.findOne({where:{id:targetId,user_id:req.user.id}})
    if(targetExpenditure){
        await targetExpenditure.destroy()
        res.status(204).send({message:'Delete already.'})
    }else{
        res.status(404).send({message:'Not found list.'})
    }
}

const getSum = async (req,res)=>{

    const sumExpenditure = await db.Expenditure.sum('expenditure_value',{where:{user_id:req.user.id}})
    res.status(200).send(sumExpenditure.toString())
}

module.exports = {
    getAll,
    create,
    deleteExpenditure,
    getSum
}