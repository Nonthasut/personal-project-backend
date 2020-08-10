module.exports = (sequelize,DataType)=>{
const Target = sequelize.define('Target',{
target_list:{
type: DataType.STRING
},
target_value:{
    type:DataType.INTEGER
}
},{
    timestamps : false
})
Target.associate = models => {
    Target.belongsTo(models.User,{foreignKey: 'user_id'})
}
return Target
} 