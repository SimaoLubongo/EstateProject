const asyncHandler = require('../middleware/async');
const Usertype = require('../models/usertype.js');

// @desc      Get all usertype
// @route     GET /api/v1/usertype
// @access    Public
exports.getUsertype = asyncHandler(async (req, res, next) => {
    const results = await Usertype.find();

    res.status(200).json({ success: true, count: results.count, data: results });
});

// @desc      Create new usertype
// @route     POST /api/usertype
// @access    Public
exports.createUsertype = asyncHandler(async (req, res, next) => {
    const usertype = await Usertype.create(req.body);
    res.status(201).json({
        success: true,
        data: usertype
    });
});
// @desc      Update usertype
// @route     PUT /api/v1/usertype
// @access    Public
exports.updateUser = asyncHandler(async (req, res, next) => {
    const usertype = await Usertype.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });

    res.status(200).json({
        success: true,
        data: usertype
    });
});
// @desc      Delete usertype
// @route     DELETE /api/v1/usertype
// @access    Public
exports.deleteUser = asyncHandler(async (req, res, next) => {
    await Usertype.findByIdAndDelete(req.params.id);

    res.status(200).json({
        success: true,
        data: {}
    });
});