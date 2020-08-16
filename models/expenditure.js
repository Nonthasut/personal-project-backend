module.exports = (sequelize, DataType) => {
    const Expenditure = sequelize.define('Expenditure', {
        expenditure_list: {
            type: DataType.STRING
        },
        expenditure_value: {
            type: DataType.BIGINT,
            defaultValue:0
        },
        expenditure_quantity_per_month: {
            type: DataType.FLOAT,
            defaultValue:0
        },
        expenditure_value_per_time:{
            type:DataType.BIGINT,
            defaultValue:0
            }
    }, {
        timestamps: false
    })
    Expenditure.associate = models => {
        Expenditure.belongsTo(models.User, { foreignKey: 'user_id' })
    }
    return Expenditure
}