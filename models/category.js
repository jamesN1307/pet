const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Category extends Model {}

Category.init({
    // add properites here, ex:
    name: {
         type: DataTypes.STRING
    }
},{
    sequelize
});

module.exports=Category