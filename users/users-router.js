const router = require("express").Router();

const Users = require("./users-model.js");
const Products = require("../products/products-model");
const bc = require('bcryptjs')

router.get("/", (req, res) => {
    const requestOptions = {
        headers: { accept: 'application/json' },
      };
  console.log("token", req.decodedToken);

  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  Users.findById(id)
    .then(users => {
      res.status(200).json(users);
    })

    .catch(err => {
      res.status(500).json({ error: 'user not received' })
    })
})

router.put('/:id', (req, res) => {
  const id = req.params.id;
  const changes = req.body;
  const hash = bc.hashSync(changes.password, 8); 
  changes.password = hash;
  const updatedUser = { ...changes, id };

  Users.update(id, changes)
    .then(editUser => {
      console.log(updatedUser);
      res.status(200).json(updatedUser);
    })

    .catch(error => {
      console.log(error);
      res.status(500).json({ error: 'users could not be modified' });
    })

})

router.delete('/:id', (req, res) => {
  const id = req.params.id;
  Users.remove(id)
    .then(deleted => {
      console.log(deleted);
      res.status(200).json({ success: `user was deleted` });
    })
      .catch(error => {
      console.log(error);
      res.status(500).json({ error: 'user could not be deleted' });
    })

})

router.get('/:id/products', (req, res) => {
  console.log(req.params.id);
  Products.findProductByUser(req.params.id)
    .then(user => {
      res.status(200).json(user);
    })
    .catch(err => {
      res.status(500).json({ error: 'Could not get the list of products for user' })
    })
})



router.post('/:id/products', (req, res) => {
  const id = req.params.id;
  let products = req.body;
  products = { ...products, user_id: id };
  Products.add(products)
    .then(newProduct => {
      res.status(201).json(newProduct);
    })
    .catch(error => {
      res.status(500).json({ error: 'Could not save the product' });

    })

})

module.exports = router;