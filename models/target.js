module.exports = (sequelize,DataType)=>{
const Target = sequelize.define('Target',{
target_list:{
type: DataType.STRING
},
target_value:{
    type:DataType.INTEGER
}
})
return Target
} 