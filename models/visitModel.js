const mongoose = require("mongoose");

const visitSchema = new mongoose.Schema(
  {
    count: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Visit = mongoose.model("visit", visitSchema);

exports.Visit = Visit;
exports.default = Visit;
