const router = require("express").Router();

const Products = require("./products-model.js");

router.get("/", (req, res) => {    
//   console.log("token", req.decodedToken);
Products.find()
    .then(products => {
      res.json(products);
    })
    .catch(err => res.send(err, {error: 'message'}));
});

router.get("/:id", (req, res) => {
  Products.findById(req.params.id)
    .then((products) => {
      if (products) {
        res.status(200).json(products);
      } else {
        res.status(404).json({ message: "The product with the specified ID does not exist." });
      }
    })
    .catch((error) => {
      // log error to database
      console.log(error);
      res.status(500).json({
        message: "Error retrieving product",
      });
    });
});

router.post("/", (req, res) => {
  Products.add(req.body)
    .then((product) => {
      res.status(201).json(product);
    })
    .catch((error) => {
      res.status(500).json({
        message: "There was an error while saving the product to the database",
      });
    });
});

router.put("/:id", (req, res) => {
  const changes = req.body;
  console.log("changes:", changes);
  Products.update(req.params.id, changes)
    .then((products) => {
      if (products) {
        Products.findById(req.params.id)
          .then((product) => {
            res.status(200).json(product);
          })
          .catch((err) => {
            res
              .status(500)
              .json({ errorMessage: "Error reading the updated product" });
          });
      } else {
        res.status(404).json({ message: "The product with the specified ID does not exist." });
      }
    })
    .catch((error) => {
      // log error to database
      console.log(error);
      res.status(500).json({
        message: "The post information could not be modified.",
      });
    });
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  Products.remove(id)
    .then((products) => {
      if (products) {
        res.status(200).json({ message: "product deleted" });
      } else {
        res.status(404).json({ message: "The product with the specified ID does not exist." });
      }
    })
    .catch((err) => {
      console.log(err);

      res.status(500).json({ error: "The product could not be removed" });
    });
});

module.exports = router;