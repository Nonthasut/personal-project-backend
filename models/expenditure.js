module.exports = (sequelize,DataTypes)=>{
const Expenditure = sequelize.define('Expenditure',{
expenditure_list :{
    type: DataTypes.DATE
},
expenditure_value :{
    type: DataTypes.INTEGER
}
})
return Expenditure
}