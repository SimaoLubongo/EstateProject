const express = require('express');
const {
    getUsers,
    getUser,
    createUser,
    updateUser,
    //deleteUsers
} = require('../controllers/users');

const Users = require('../models/users');


const router = express.Router();


router
    .route('/')
    .get(getUsers)
    .post(createUser);

router
    .route('/:id')
    .get(getUser)
    .put(updateUser)
//.delete(deleteUsers);

module.exports = router;