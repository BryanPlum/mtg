const bcrypt = require('bcrypt');
const modelUser = require('../models/User');


// module.exports = {
//     async store(req, res) {
//         const {userName} = req.body;
//         const {password} = req.body
//         const { email } = req.body;

//         let user = await User.findOne({ email });

//         if (!user) {
//             user = await User.create({ userName, password, email })
//         }
//         return res.json(user);
//     }
// };

let userController = {};

userController.allUsers = (req, res) => {

  modelUser.find()
    .then(results => res.json(results))
    .catch(err => res.send(err));
}

userController.newUser = (req, res) => {

  if(req.body.userName && req.body.password) {
    if(req.body.password2 && req.body.password == req.body.password2) {

      modelUser.findOne({ 'userName': req.body.userName })
        .then(user => {

          if(user) {
            res.json({ success: false, message: 'This username has no available' });
          
          } else {

            bcrypt.hash(req.body.password, 10)
              .then(hash => {

                let encryptedPassword = hash;
                
                let newUser = new modelUser({
                  userName: req.body.userName,
                  password: encryptedPassword,
                  email: req.body.email
                 
                });

                newUser.save()
                  .then(() => res.json({ success: true, message: 'User created with success', statusCode: 201 }))
                  .catch(err => res.json({ success: false, message: err, statusCode: 500 }));
              })

              .catch(err => res.json({ success: false, message: err, statusCode: 500 }));
          }
        })
    
    } else {

      res.json({ success: false, message: 'Passwords doesnt match', statusCode: 400 });
    }

  } else {

    res.json({ success: false, message: 'Username and password fields are requireds', statusCode: 400 });
  }
}

module.exports = userController;