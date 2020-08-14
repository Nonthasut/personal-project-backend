const db = require('../models')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

const register = async (req, res) => {
    const { username, password, name, birthday, retired_time, rest_in_peace_time } = req.body
    const targetUser = await db.User.findOne({ where: { username: username } })
    if (targetUser) {
        res.status(400).send({ message: 'Username already taken' })
    } else {
        const salt = bcryptjs.genSaltSync(12);
        const hashedPassword = bcryptjs.hashSync(password, salt)

        await db.User.create({
            username: username,
            password: hashedPassword,
            name: name,
            birthday: birthday,
            retired_time: retired_time,
            rest_in_peace_time: rest_in_peace_time
        })
        res.status(201).send({ message: 'Thank you for your register! You account is ready to use.' })
    }
}



const login = async (req, res) => {
    const { username, password} = req.body
    const targetUser = await db.User.findOne({ where: { username: username } })
    if (!targetUser) {
        res.status(400).send({ message: 'Username or password is wrong.' })
    } else {
        const isCorrectPassword = bcryptjs.compareSync(password, targetUser.password);
        if (isCorrectPassword) {
            const payload = {
                name: targetUser.name,
                id: targetUser.id
            }
            const token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: 3600 })

            res.status(200).send({ token: token, message: "Login successful!" })
        } else {
            res.status(400).send({ message: 'Username or password is wrong.' })
        }
    }

}

const editDate = async (req, res) => {
    const targetId = Number(req.params.id)
    const targetDateData = await db.User.findOne({ where: { id: targetId } })
    const { name,birthday, retired_time, rest_in_peace_time } = req.body
    if (!targetDateData) {
        res.status(404).send({ message: 'Do not accept by incorrect method!' })
    } else if (name||birthday||retired_time||rest_in_peace_time) {
        await targetDateData.update({name:name, birthday: birthday, retired_time: retired_time, rest_in_peace_time: rest_in_peace_time })
        res.status(200).send({ message: 'Update success.' })
    }
}


const getUser = async (req,res)=>{
    const targetId = Number(req.params.id)
    const targetUserData = await db.User.findOne({where:{id: targetId}})
    res.status(200).send(targetUserData)
}

module.exports = {
    register,
    login,
    editDate,
    getUser
}