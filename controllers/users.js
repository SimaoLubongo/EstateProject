const asyncHandler = require('../middleware/async');
const Users = require('../models/users.js');

// @desc      Get all users
// @route     GET /api/v1/users
// @access    Public
exports.getUsers = asyncHandler(async (req, res, next) => {
    const results = await Users.find();

    res.status(200).json({ success: true, count: results.count, data: results });
});

// @desc      Create new user
// @route     POST /api/v1/users
// @access    Public
exports.createUser = asyncHandler(async (req, res, next) => {
    console.log("req body", req.body);
    const users = await Users.create(req.body);

    res.status(201).json({
        success: true,
        data: users
    });
});
// @desc      Get user
// @route     Get /api/v1/auth/users
// @access    Public
exports.getUser = asyncHandler(async (req, res, next) => {
    const user = await Users.findById(req.params.id);

    res.status(200).json({
        success: true,
        data: user
    });
});
// @desc      Update user
// @route     PUT /api/v1/auth/users
// @access    Public
exports.updateUser = asyncHandler(async (req, res, next) => {
    const users = await Users.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });

    res.status(200).json({
        success: true,
        data: users
    });
});
// @desc      Delete user
// @route     DELETE /api/v1/auth/users
// @access    Public
exports.deleteUser = asyncHandler(async (req, res, next) => {
    await Users.findByIdAndDelete(req.params.id);

    res.status(200).json({
        success: true,
        data: {}
    });
});
