module.exports = (sequelize,DataTypes)=>{
const Expenditure = sequelize.define('Expenditure',{
expenditure_list :{
    type: DataTypes.STRING
},
expenditure_value :{
    type: DataTypes.BIGINT
}
},{
    timestamps : false
})
Expenditure.associate = models =>{
    Expenditure.belongsTo(models.User,{foreignKey:'user_id'})
}
return Expenditure
}