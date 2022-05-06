
const express = require('express');
const router = express.Router();

router.get("/",(req,res)=>{
    res.send("welcome to my application!")
})

const userRoutes = require("./userRoutes");
router.use("/api/users",userRoutes)

const petRoutes = require("./petRoutes");
router.use("/api/pets",petRoutes)

const toyRoutes = require("./toyRoutes");
router.use("/api/toys",toyRoutes)

const categoryRoutes = require("./categoryRoutes");
router.use("/api/categories",categoryRoutes)

module.exports = router;