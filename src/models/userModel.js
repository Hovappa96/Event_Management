const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        enum: ["Mr", "Mrs", "Miss"]
    },
    fullName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowerCase: true
    },
    mobile: {
        type: Number,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    createdAt: {
        type: Date
    },
    modifiedAt: {
        type: Date
    }
}, { timestamps: true })


module.exports = mongoose.model("user", userSchema)