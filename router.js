const express = require("express")
const router = express.Router()
var cors = require('cors')

router.get("/", cors(), (req, res) => {
    res.send("server is up and running")
})

module.exports = router;