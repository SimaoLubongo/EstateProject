const express = require('express');
const {
    getTenants,
    createTenant,
    deleteTenant
} = require('../controllers/tenant');

const Tenant = require('../models/tenant');


const router = express.Router();


router
    .route('/')
    .get(getTenants)
    .post(createTenant);

router
    .route('/:id')
    //   .get(getTenant)
    //   .put(updateTenant)
    .delete(deleteTenant);

module.exports = router;
