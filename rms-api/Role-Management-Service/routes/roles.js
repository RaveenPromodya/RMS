const router = require('express').Router();
let Role = require('../models/role.model');

router.route('/').get((req, res) => {
    Role.find()
        .then(roles => res.json(roles))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Role.findById(req.params.id)
        .then(role => {
            res.json(role)
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const rolename = req.body.rolename;
    const permissions = req.body.permissions;

    const newRole = new Role({
        rolename,
        permissions,
    });

    newRole.save()
        .then(() => {
            let returnObj = {
                message: "Role added",
                status: 200
            }
            res.json(returnObj);
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Role.findById(req.params.id)
        .then(role => {
            role.rolename = req.body.rolename;
            role.permissions = req.body.permissions;

            role.save()
                .then(() => {
                    let returnObj = {
                        message: "Updated role information",
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
    Role.findByIdAndDelete(req.params.id)
        .then(() => {
            let returnObj = {
                message: "Role deleted",
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