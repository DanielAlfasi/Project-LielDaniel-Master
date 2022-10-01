const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Vehicle = require('./vehicle')
const rentVehicle = require('./rent')


const userSchema = new mongoose.Schema({
    name : {
        type: String,
        required: false,
        trim: true
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be a positive number')
            }
        }
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if(!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            } 

        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 7,
        validate(value) {
          if(validator.contains(value.toLowerCase(), "password")){
             throw new Error('Password should not contain password!')
          }
    }
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }],
    avatar: {
        type: Buffer
    }
},{
    timestamps: true

})

userSchema.virtual('vehicles', {
    ref: 'Vehicle',
    localField: '_id',
    foreignField: 'owner'
})

userSchema.virtual('rents', {
    ref: 'rentVehicle',
    localField: '_id',
    foreignField: 'owner'
})

userSchema.methods.generateAuthToken = async function () {
    const user = this
    const token = jwt.sign({ _id: user._id.toString()} , 'thisismynewcourse')

    user.tokens = user.tokens.concat({ token })
    await user.save()

    return token
}

userSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({email})

    if (!user) {
        throw new Error('Unable to login')
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if(!isMatch) {
        throw new Error('Unable to login')
    }

    return user
}

// Hash the plain text password before saving
userSchema.pre('save' , async function (next) {
    const user = this

   if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 8)
   }

    next()
})

// Delete user tasks when user is removed
userSchema.pre('remove', async function (next) {
    const user = this
    await Vehicle.deleteMany({owner : user._id})
    next()
})


// Sends the user public profile
userSchema.methods.toJSON = function () {
    const user = this
    const userObject = user.toObject()

    delete userObject.password
    delete userObject.tokens
    //delete userObject.avatar // Until I figure how to use it with axios.
    
    return userObject
}

const User = mongoose.model('User', userSchema)


module.exports = User