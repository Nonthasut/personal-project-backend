module.exports = (sequelize,DataType)=>{
    const Income = sequelize.define('Income',{
        income_list:{
        type:DataType.STRING
        },
        income_value:{
        type:DataType.BIGINT,
        defaultValue:0
        },
        income_quantity_per_month:{
        type:DataType.FLOAT,
        defaultValue:0
        },
        income_value_per_time:{
        type:DataType.BIGINT,
        defaultValue:0
        }

    },{
        timestamps : false
    })
    Income.associate = models =>{
        Income.belongsTo(models.User, {foreignKey:'user_id'})
    }
    return Income
}