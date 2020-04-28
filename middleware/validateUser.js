function validateUser(req, res, next) {
    // do your magic!
    if(Object.keys(req.body).length===0) {
        console.log(req.body);
        res.status(400).json({
            message: "missing user data"
        })
    } else if (!req.body.username){
        res.status(400).json({
            message: "missing required name field"
        })
    } else if (!req.body.password){
        res.status(400).json({
            message: "missing required password field"
        })
    } else if (!req.body.email){
        res.status(400).json({
            message: "missing required email field"
        })
    } else {
        next();
    }
  }

  module.exports = validateUser;