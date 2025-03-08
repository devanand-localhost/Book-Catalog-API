const mongoose = require("mongoose");

// Book Model
const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    isbn: {
      type: String,
      trim: true,
      unique: true,
    },
    publishedDate: {
      type: Date,
    },
    description: {
      type: String,
      trim: true,
    },
    pageCount: {
      type: Number,
      min: 1,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Author",
      required: true,
    },
    categories: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Book", bookSchema);
