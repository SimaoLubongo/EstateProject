const mongoose = require('mongoose');

const TenantSchama = new mongoose.Schema(
    {
        Descr: {
            type: String,
            required: true
        }
    }
);

module.exports = mongoose.model('Tenant', TenantSchama)

