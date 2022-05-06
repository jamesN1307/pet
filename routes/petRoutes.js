const express = require("express");
const router = express.Router();
const {Pet,User,Toy} = require("../models/");


//find all
router.get("/", (req, res) => {
  Pet.findAll({
      include:[User]
  })
    .then(dbPets => {
      res.json(dbPets);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});
//find one
router.get("/:id", (req, res) => {
  Pet.findByPk(req.params.id,{
    include:[Toy]
  })
    .then(dbPets => {
      res.json(dbPets);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});

//create user
router.post("/", (req, res) => {
  Pet.create(req.body)
    .then(newPet => {
      res.json(newPet);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});

//update user
router.put("/:id", (req, res) => {
  Pet.update(req.body, {
    where: {
      id: req.params.id
    }
  }).then(updatedPet => {
    res.json(updatedPet);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({ msg: "an error occured", err });
  });
});

//delete a user
router.delete("/:id", (req, res) => {
  Pet.destroy({
    where: {
      id: req.params.id
    }
  }).then(delUser => {
    res.json(delUser);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({ msg: "an error occured", err });
  });
});

module.exports = router;