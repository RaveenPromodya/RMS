const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const roleSchema = new Schema({
    rolename: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    permissions: {
        type: Array,
        required: true,
    }
}, {
    timestamps: true,
});

const Role = mongoose.model('Role', roleSchema);

module.exports = Role;