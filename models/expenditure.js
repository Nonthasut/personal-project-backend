module.exports = (sequelize, DataType) => {
    const Expenditure = sequelize.define('Expenditure', {
        expenditure_list: {
            type: DataType.STRING
        },
        expenditure_value: {
            type: DataType.BIGINT
        },
        expenditure_quantity_per_month: {
            type: DataType.FLOAT
        },
        expenditure_value_per_time:{
            type:DataType.BIGINT
            }
    }, {
        timestamps: false
    })
    Expenditure.associate = models => {
        Expenditure.belongsTo(models.User, { foreignKey: 'user_id' })
    }
    return Expenditure
}