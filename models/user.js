module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        name: {
            allowNull: false,
            type: DataTypes.STRING
        },
        birthday: {
            type: DataTypes.DATEONLY
        },
        retired_time: {
            type: DataTypes.DATEONLY
        },
        rest_in_peace_time: {
            type: DataTypes.DATEONLY
        }
    })
    return User
}