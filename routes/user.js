const express = require("express");
const router = express.Router();
const db = require("../models/database");


router.use("/", function (req, res) {
     db.execute("select * from blog")
          .then(response => {
               const results = response[0]
          })
          .catch(err => console.log(err));


});
module.exports = router;