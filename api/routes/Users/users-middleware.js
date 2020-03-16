const Users = require('./users-model');

module.exports = {
   validateId,
   authorizeId
}

// Validate that user id exists in the database
function validateId(req, res, next) {
   const id = req.params.id;

   Users.findById(id)
      .then(user => {
         if (!user) {
            res.status(404).json({ message: 'No such user exists by that id.' });
         } else {
            next();
         }
      });
}

// validate that user is seeing their own data
function authorizeId(req, res, next) {
   const id = parseInt(req.params.id, 10);
   const tokenId = req.token.id;
   const token = req.headers.authorization;

   if (token && parseInt(tokenId, 10) === id) {
      next();
   } else {
      res.status(403).json({ message: 'You are not authorized to view this content.' });
   }
}