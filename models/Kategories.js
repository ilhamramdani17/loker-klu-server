import mongoose from "mongoose";

const Kategories = mongoose.model('kategorie',{
    kategori: {
        type: String,
        required: 1
    },
    intensitas: {
        type: Number,
        default: 0
    }
})

export default Kategories;
