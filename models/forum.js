const mongoose = require("mongoose");

const forumSchema = new mongoose.Schema(
  {
    // getsUpdates: {
    //   type: Boolean,
    //   default: false,
    // },
    // ProfileName: {
    //   type: String,
    //   default: "",
    // },
    Body: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Forum", forumSchema);
