const Author = require("../models/Author");
const Book = require("../models/Book");

module.exports = {
  Query: {
    authors: async () => {
      return await Author.find().sort({ name: 1 });
    },

    author: async (_, { id }) => {
      return await Author.findById(id);
    },
  },

  Mutation: {
    createAuthor: async (_, { input }) => {
      const author = new Author(input);
      await author.save();
      return author;
    },

    updateAuthor: async (_, { id, input }) => {
      return await Author.findByIdAndUpdate(
        id,
        { $set: input },
        { new: true, runValidators: true }
      );
    },

    deleteAuthor: async (_, { id }) => {
      // First check if author has books
      const books = await Book.find({ author: id });
      if (books.length > 0) {
        throw new Error("Cannot delete author with associated books");
      }

      await Author.findByIdAndDelete(id);
      return true;
    },
  },

  Author: {
    books: async (author) => {
      return await Book.find({ author: author.id });
    },
  },
};
