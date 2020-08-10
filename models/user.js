module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        username:{
            type: DataTypes.STRING(255),
            unique: true
        },
        password:{
            type: DataTypes.STRING(255)
        },
        name: {
            
            type: DataTypes.STRING(255)
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
    },{
        timestamps : false
    })
 User.associate = models =>{
 User.hasMany(models.Income, {foreignKey: 'user_id'})
 User.hasMany(models.Expenditure, {foreignKey: 'user_id'})
 User.hasMany(models.Target, {foreignKey: 'user_id'})
 }
    return User
}