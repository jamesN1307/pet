const User = require("./User")
const Pet = require("./Pet")
const Toy = require("./Toy")
const Category = require("./Category")
const ToyCategory = require("./ToyCategory")

User.hasMany(Pet);
Pet.belongsTo(User);

Pet.hasMany(Toy);
Toy.belongsTo(Pet);

Toy.belongsToMany(Category,{
    through:ToyCategory,
    foreignKey:"toy_id"
})

Category.belongsToMany(Toy,{
    through:ToyCategory,
    foreignKey:"category_id"
})

module.exports = {
    User:User,
    Pet:Pet,
    Toy:Toy,
    Category,
    ToyCategory
}