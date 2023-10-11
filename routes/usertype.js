const express = require('express');
const {
    getUsertype,
    createUsertype,
} = require('../controllers/usertype');

const Users = require('../models/usertype');


const router = express.Router();


router
    .route('/')
    .get(getUsertype)
    .post(createUsertype);

// router
//   .route('/:id')
//   .get(getUsertype)
//   .put(updateUsertype)
//   .delete(deleteUsertype);

module.exports = router;