const router = require('express').Router();
const axois = require('axios');
let User = require('../models/user.model');

router.route('/').get((req, res) => {
    User.find()
        .then(users => {
            res.json(users);
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const roleId = req.body.roleId;

    const newUser = new User({
        username,
        email,
        roleId
    });

    newUser.save()
        .then(() => {
            let returnObj = {
                message: "User added",
                status: 200
            }
            res.json(returnObj);
        })
        .catch(err => {
            console.log(err.message);
            let returnObj = {
                message: `Error: ${err.message}`,
                status: 400
            }
            res.json(returnObj);
        });
});

router.route('/:id').get((req, res) => {
    User.findById(req.params.id)
        .then(user => {
            if (user.roleId)
                axois.get(process.env.ROLE_SERVICE_URL + user.roleId).then(response => {
                    let userObj = {
                        "id": user._id,
                        "username": user.username,
                        "email": user.email,
                        "roleId": user.roleId,
                        "rolename": response.data.rolename,
                        "rolePermissions": response.data.permissions
                    }
                    res.json(userObj)
                }).catch(err => {
                    let userObj = {
                        "id": user._id,
                        "username": user.username,
                        "email": user.email,
                        "rolename": null,
                    }
                    res.json(userObj);
                });
        }).catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    User.findById(req.params.id)
        .then(user => {
            user.username = req.body.username;
            user.email = req.body.email;
            user.roleId = req.body.roleId;

            user.save()
                .then(() => {
                    let returnObj = {
                        message: "Updated user information",
                        status: 200
                    }
                    res.json(returnObj);
                })
                .catch(err => {
                    let returnObj = {
                        message: `Error: ${err.message}`,
                        status: 400
                    }
                    res.json(returnObj);
                });
        })
});

router.route('/delete/:id').delete((req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then(() => {
            let returnObj = {
                message: "User deleted",
                status: 200
            }

            res.json(returnObj);
        })
        .catch(err => {

            let returnObj = {
                message: `Error: ${err.message}`,
                status: 400
            }

            res.json(returnObj);
        })
})

module.exports = router;