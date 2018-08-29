import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt';
import uniqueValidator from 'mongoose-unique-validator';


mongoose.plugin(uniqueValidator);

const UserSchema = new Schema({
        email: {
            type: String,
            unique: 'User with email "{VALUE}" already exist',
            lowercase: true,
            required: 'Email is required',
            trim: true,
        },
        password: {
            type: String,
            required: 'Password is required',
            trim: true,
        },
        firstName: {
            type: String,
            lowercase: true,
            required: 'First name is required',
            trim: true,
        },
        lastName: {
            type: String,
            lowercase: true,
            required: 'Last name is required',
            trim: true,
        },
    },
    {
        timestamps: true,
    }
);

UserSchema.statics.createFields = ['email', 'password', 'firstName', 'lastName'];

UserSchema.pre('save', function(next) {
    if (!this.isModified('password')) {
        return next();
    }

    const salt = bcrypt.genSaltSync(10);
    this.password = bcrypt.hashSync(this.password, salt);

    next();
});

UserSchema.methods.comparePasswords = function(password) {
    return bcrypt.compareSync(password, this.password);
};

UserSchema.statics.findOneWithPublicFields = function(params, cb) {
    return this.findOne(params, cb).select({
        password: 0,
        _id: 0,
        __v: 0,
        createdAt: 0,
        updatedAt: 0,
    });
};

export default mongoose.model('user', UserSchema);