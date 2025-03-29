import mongoose from "mongoose";

const Status = mongoose.model("statuse", {
  status: {
    type: String,
    required: 1,
  },
  intensitas: {
    type: Number,
    default: 0,
  },
});

export default Status;
