const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.send("welcome to my application");
})
// import userRoutes
const userRoutes = require("./userRoutes.js")
// tell  router anytime a request come in /api/user use useRoutes file
router.use("/api/users",userRoutes)
// import petRoutes
const petRoutes = require("./petRoutes.js")
router.use("/api/pet",petRoutes)


module.exports = router;