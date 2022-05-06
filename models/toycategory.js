const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class ToyCategory extends Model {}

ToyCategory.init({
    id: {
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    },
    toy_id:{
        type:DataTypes.INTEGER,
        references:{
            model:"Toys",
            key:"id"
        }
    },
    category_id:{
        type:DataTypes.INTEGER,
        references:{
            model:"Categories",
            key:"id"
        }
    }
},{
    sequelize
});

module.exports=ToyCategory