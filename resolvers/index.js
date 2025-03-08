const bookResolvers = require("./bookResolvers");
const authorResolvers = require("./authorResolvers");
const categoryResolvers = require("./categoryResolvers");

module.exports = {
  Query: {
    ...bookResolvers.Query,
    ...authorResolvers.Query,
    ...categoryResolvers.Query,
  },

  Mutation: {
    ...bookResolvers.Mutation,
    ...authorResolvers.Mutation,
    ...categoryResolvers.Mutation,
  },

  Book: bookResolvers.Book,
  Author: authorResolvers.Author,
  Category: categoryResolvers.Category,
};
