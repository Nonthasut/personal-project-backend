module.exports = (sequelize,DataType)=>{
    const Income = sequelize.define('Income',{
        income_list:{
        type:DataType.STRING
        },
        income_value:{
        type:DataType.INTEGER
        }
    })
    return Income
}