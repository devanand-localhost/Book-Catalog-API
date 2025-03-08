const { gql } = require("apollo-server-express");

// GraphQL Schema

const typeDefs = gql`
  # Types
  type Book {
    id: ID!
    title: String!
    isbn: String
    publishedDate: String
    description: String
    pageCount: Int
    author: Author!
    categories: [Category!]
    createdAt: String!
    updatedAt: String!
  }

  type Author {
    id: ID!
    name: String!
    bio: String
    birthDate: String
    books: [Book!]
    createdAt: String!
    updatedAt: String!
  }

  type Category {
    id: ID!
    name: String!
    description: String
    books: [Book!]
    createdAt: String!
    updatedAt: String!
  }

  # Inputs
  input BookInput {
    title: String!
    isbn: String
    publishedDate: String
    description: String
    pageCount: Int
    author: ID!
    categories: [ID!]
  }

  input UpdateBookInput {
    title: String
    isbn: String
    publishedDate: String
    description: String
    pageCount: Int
    author: ID
    categories: [ID!]
  }

  input AuthorInput {
    name: String!
    bio: String
    birthDate: String
  }

  input UpdateAuthorInput {
    name: String
    bio: String
    birthDate: String
  }

  input CategoryInput {
    name: String!
    description: String
  }

  input UpdateCategoryInput {
    name: String
    description: String
  }

  # Queries
  type Query {
    # Book queries
    books: [Book!]!
    book(id: ID!): Book
    booksByAuthor(authorId: ID!): [Book!]!
    booksByCategory(categoryId: ID!): [Book!]!

    # Author queries
    authors: [Author!]!
    author(id: ID!): Author

    # Category queries
    categories: [Category!]!
    category(id: ID!): Category
  }

  # Mutations
  type Mutation {
    # Book mutations
    createBook(input: BookInput!): Book!
    updateBook(id: ID!, input: UpdateBookInput!): Book!
    deleteBook(id: ID!): Boolean!

    # Author mutations
    createAuthor(input: AuthorInput!): Author!
    updateAuthor(id: ID!, input: UpdateAuthorInput!): Author!
    deleteAuthor(id: ID!): Boolean!

    # Category mutations
    createCategory(input: CategoryInput!): Category!
    updateCategory(id: ID!, input: UpdateCategoryInput!): Category!
    deleteCategory(id: ID!): Boolean!
  }
`;

module.exports = typeDefs;
