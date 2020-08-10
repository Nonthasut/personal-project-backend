module.exports = (sequelize,DataType)=>{
    const Income = sequelize.define('Income',{
        income_list:{
        type:DataType.STRING
        },
        income_value:{
        type:DataType.INTEGER
        }
    },{
        timestamps : false
    })
    Income.associate = models =>{
        Income.belongsTo(models.User, {foreignKey:'user_id'})
    }
    return Income
}