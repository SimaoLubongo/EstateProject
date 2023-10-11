const asyncHandler = require('../middleware/async');
const Tenant = require('../models/tenant.js');

// @desc      Get all tenants
// @route     GET /api/v1/tenants
// @access    Public
exports.getTenants = asyncHandler(async (req, res, next) => {
    const results = await Tenant.find();

    res.status(200).json({ success: true, count: results.count, data: results });
});

// @desc      Create new tenant
// @route     POST /api/v1/tenants
// @access    Public
exports.createTenant = asyncHandler(async (req, res, next) => {
    console.log(req.body);
    const tenant = await Tenant.create(req.body);
    res.status(201).json({
        success: true,
        data: tenant
    });
});
// @desc      Update tenant
// @route     PUT /api/v1/enants
// @access    Public
exports.updateUser = asyncHandler(async (req, res, next) => {
    const tenant = await Tenant.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });

    res.status(200).json({
        success: true,
        data: users
    });
});
// @desc      Delete tenant
// @route     DELETE /api/tenant
// @access    Public
exports.deleteTenant = asyncHandler(async (req, res, next) => {
    await Tenant.findByIdAndDelete(req.params.id);

    res.status(200).json({
        success: true,
        data: {}
    });
});
