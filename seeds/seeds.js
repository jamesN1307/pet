const sequelize = require("../config/connection")
const {User,Pet,Toy,Category,ToyCategory} = require("../models")

const users = [
    {
        email:"joe@joe.joe",
        password:"password"
    },
    {
        email:"Nile@joe.joe",
        password:"password1"
    }
]

const pets = [
    {
        name:"Shiva",
        species:"almost a cat",
        UserId:1
    },
    {
        name:"Bahamut",
        species:"cat",
        UserId:1
    }, 
    {
        name:"Oz",
        species:"cat",
        UserId:2
    }
]

const toys = [
    {
       name:"my tail",
       description:"I love to chase it in high places.  I know thats weird because i am an adult cat." ,
       PetId:1
    },
    {
       name:"Baby Bird",
       description:"Natural feathers on a leather strap with a plastic wand. Reminds me of my youth." ,
       PetId:2
    }
]

const categories = [
    {
        name:"Natural"
    },
    {
        name:"wand"
    },
    {
        name:"ball"
    }
]

const junction = [
    {
        toy_id:1,
        category_id:1
    },
    {
        toy_id:1,
        category_id:2
    },
    {
        toy_id:2,
        category_id:1
    },
    {
        toy_id:2,
        category_id:3
    }
]

const feedMe = async ()=>{
    await sequelize.sync({force:true})
    await User.bulkCreate(users);
    await Pet.bulkCreate(pets);
    await Toy.bulkCreate(toys);
    await Category.bulkCreate(categories);
    await ToyCategory.bulkCreate(junction);
    process.exit(0);
}

feedMe()