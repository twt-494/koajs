import mongoose, { Schema } from 'mongoose';

const SummarySchema = new Schema({
    userId: {
        type: String,
        required: 'User id is required',
    },
    title: {
        type: String,
        required: 'Title is required',
        trim: true,
    },
    phone: {
        type: String,
        trim: true,
    },
    skype: {
        type: String,
        trim: true,
    },
    description: {
        type: String,
        required: 'Desc is required',
        trim: true,
    },
    tags: {
        type: [String],
        required: 'Tags are required',
        trim: true,
    },
    history: [{
        companyName: {
            type: String,
            required: 'Company name is required',
            trim: true,
        },
        title: {
            type: String,
            required: 'Company title is required',
            trim: true,
        },
        date: {
            start: {
                type: Date,
                required: 'Start date is required',
            },
            end: {
                type: Date,
            },
        },
        currentWork: {
            type: Boolean,
            default: false,
        },
        description: {
            type: String,
            required: 'Description is required',
            trim: true,
        },
    }],
});

SummarySchema.statics.createFields = ['title', 'phone', 'skype', 'description', 'history', 'tags'];

export default mongoose.model('Summary', SummarySchema);
