const Category = require("../models/Category");
const Book = require("../models/Book");

module.exports = {
  Query: {
    categories: async () => {
      return await Category.find().sort({ name: 1 });
    },

    category: async (_, { id }) => {
      return await Category.findById(id);
    },
  },

  Mutation: {
    createCategory: async (_, { input }) => {
      const category = new Category(input);
      await category.save();
      return category;
    },

    updateCategory: async (_, { id, input }) => {
      return await Category.findByIdAndUpdate(
        id,
        { $set: input },
        { new: true, runValidators: true }
      );
    },

    deleteCategory: async (_, { id }) => {
      // Check if category is used in any book
      const books = await Book.find({ categories: id });
      if (books.length > 0) {
        throw new Error("Cannot delete category that is used by books");
      }

      await Category.findByIdAndDelete(id);
      return true;
    },
  },

  Category: {
    books: async (category) => {
      return await Book.find({ categories: category.id });
    },
  },
};
