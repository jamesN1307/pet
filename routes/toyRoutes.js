const express = require("express");
const router = express.Router();
const {Toy,Category,ToyCategory} = require("../models/");


//find all
router.get("/", (req, res) => {
  Toy.findAll({
    include:[Category]
  })
    .then(dbToys => {
      res.json(dbToys);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});
//find one
router.get("/:id", (req, res) => {
  Toy.findByPk(req.params.id)
    .then(dbToys => {
      res.json(dbToys);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});

//create user
router.post("/", (req, res) => {
  Toy.create(req.body)
    .then(newToy => {
      res.json(newToy);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});
router.post("/:id/addcategory/:catid", (req, res) => {
  Toy.findByPk(req.params.id).then(toyData=>{
   ToyCategory.create({
     toy_id:toyData.id,
     category_id:req.params.catid
   }).then(data=>{
     res.json(toyData);
    })
  })
});

//update user
router.put("/:id", (req, res) => {
  Toy.update(req.body, {
    where: {
      id: req.params.id
    }
  }).then(updatedToy => {
    res.json(updatedToy);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({ msg: "an error occured", err });
  });
});

//delete a user
router.delete("/:id", (req, res) => {
  Toy.destroy({
    where: {
      id: req.params.id
    }
  }).then(delToy => {
    res.json(delToy);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({ msg: "an error occured", err });
  });
});

module.exports = router;