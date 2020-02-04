const mongoose= require('mongoose');
const bcrypt = require('bcypt');
const jwt = require('jsonwebtoken');

const userSchema = new userSchema({
    dateCreated:{
        type: Date,
        default: new Date
    },
    displayName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    question:[{
        questionId: {
            type: mongoose.Types.ObjectId,
            required: false
        },
        title: {
            type: String,
            required: false
        },
        content: {
            type: String,
            required: false
        },
        date: {
            type: Date,
            default: new Date
        },
        vote: {
            upVote:[{
                userId:{
                    type: mongoose.Types.ObjectId,
                },
                value:{
                    type: Number,
                    value: 1
                }                
            }],
        }
    }],
    answer:[{
        answerId: {
            type: mongoose.Types.ObjectId,
            required: false
        },
        title: {
            type: String,
            required: false
        },
        content: {
            type: String,
            required: false
        },
        date: {
            type: Date,
            default: new Date
        },
        vote: {
            upVote:[{
                userId:{
                    type: mongoose.Types.ObjectId,
                },
                value:{
                    type: Number,
                    value: 1
                }                
            }],
        }
    }],

})

userSchema.pre('save', async function(next){
    //Hash password before saving the user model
    const user = this
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }
    next()
})
userSchema.methods.generateAuthToken = async function(password) {
    // Generate an auth token for the user
    const token = jwt.sign({password}, "8hhg5f56g7t67")
    return token
}
const User = mongoose.model('users', userSchema);
module.exports = User;
