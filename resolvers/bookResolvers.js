const Book = require("../models/Book");
const Author = require("../models/Author");
const Category = require("../models/Category");

module.exports = {
  Query: {
    books: async () => {
      return await Book.find().sort({ createdAt: -1 });
    },

    book: async (_, { id }) => {
      return await Book.findById(id);
    },

    booksByAuthor: async (_, { authorId }) => {
      return await Book.find({ author: authorId }).sort({ createdAt: -1 });
    },

    booksByCategory: async (_, { categoryId }) => {
      return await Book.find({ categories: categoryId }).sort({
        createdAt: -1,
      });
    },
  },

  Mutation: {
    createBook: async (_, { input }) => {
      const book = new Book(input);
      await book.save();
      return book;
    },

    updateBook: async (_, { id, input }) => {
      return await Book.findByIdAndUpdate(
        id,
        { $set: input },
        { new: true, runValidators: true }
      );
    },

    deleteBook: async (_, { id }) => {
      await Book.findByIdAndDelete(id);
      return true;
    },
  },

  Book: {
    author: async (book) => {
      return await Author.findById(book.author);
    },

    categories: async (book) => {
      if (book.categories && book.categories.length > 0) {
        return await Category.find({ _id: { $in: book.categories } });
      }
      return [];
    },
  },
};
