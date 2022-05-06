const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Toy extends Model {}

Toy.init({
    // add properites here, ex:
   name:{
       type:DataTypes.STRING,
       allowNull:false,
   },
   description:{
       type:DataTypes.TEXT,
       allowNull:false,
   }
},{
    sequelize
});

module.exports=Toy