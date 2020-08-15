module.exports = (sequelize, DataType) => {
    const Target = sequelize.define('Target', {
        target_list: {
            type: DataType.STRING
        },
        target_value: {
            type: DataType.BIGINT
        },

        target_quantity_per_month: {
            type: DataType.FLOAT
        },
        target_value_per_time: {
            type: DataType.BIGINT
        }
    }, {
        timestamps: false
    })
    Target.associate = models => {
        Target.belongsTo(models.User, { foreignKey: 'user_id' })
    }
    return Target
} 