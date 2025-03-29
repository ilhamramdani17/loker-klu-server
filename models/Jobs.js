import mongoose from "mongoose";

const Jobs = mongoose.model('job', {
    kategoris: {
        type: Object,
        required: 1
    },
    statuses: {
        type: Object,
        required: 1
    }, 
    title: {
        type: String,
        required: 1
    }, 
    company: {
        type: String,
        required: 1
    }, 
    medias: {
        type: Array,
        required: 1
    }, 
    location: {
        type: String,
        required: 1
    }, 
    selary: {
        type: String,
        required: 0
    }, 
    file_requirement: {
        type: Array,
        required: 0
    },
    kualifikasi: {
        type: Array,
        required: 0
    },
    created_at: {
        type: Date, 
        required: true, 
        default: Date.now 
    },
    updated_at: {
        type: Date, 
        required: true, 
        default: Date.now 
    }
})

export default Jobs;
