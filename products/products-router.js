const router = require("express").Router();

const Users = require("./products-model.js");

router.get("/", (req, res) => {
    
//   console.log("token", req.decodedToken);

  Users.find()
    .then(products => {
      res.json(products);
    })
    .catch(err => res.send(err, {error: 'message'}));
});

module.exports = router;