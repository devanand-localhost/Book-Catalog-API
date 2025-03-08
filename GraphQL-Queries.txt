# AUTHOR OPERATIONS
# =====================================

# Query - Get all authors
query GetAllAuthors {
  authors {
    id
    name
    bio
    birthDate
    createdAt
    updatedAt
  }
}

# Query - Get single author by ID
query GetAuthorById {
  author(id: "AUTHOR_ID_HERE") {
    id
    name
    bio
    birthDate
    books {
      id
      title
    }
    createdAt
    updatedAt
  }
}

# Mutation - Create new author
mutation CreateAuthor {
  createAuthor(input: {
    name: "George R.R. Martin",
    bio: "American novelist and short story writer, screenwriter, and television producer.",
    birthDate: "1948-09-20"
  }) {
    id
    name
    bio
    birthDate
    createdAt
    updatedAt
  }
}

# Mutation - Update existing author
mutation UpdateAuthor {
  updateAuthor(
    id: "AUTHOR_ID_HERE",
    input: {
      bio: "Updated biography for this author."
    }
  ) {
    id
    name
    bio
    birthDate
    createdAt
    updatedAt
  }
}

# Mutation - Delete author
mutation DeleteAuthor {
  deleteAuthor(id: "AUTHOR_ID_HERE")
}

# CATEGORY OPERATIONS
# =====================================

# Query - Get all categories
query GetAllCategories {
  categories {
    id
    name
    description
    createdAt
    updatedAt
  }
}

# Query - Get single category by ID
query GetCategoryById {
  category(id: "CATEGORY_ID_HERE") {
    id
    name
    description
    books {
      id
      title
    }
    createdAt
    updatedAt
  }
}

# Mutation - Create new category
mutation CreateCategory {
  createCategory(input: {
    name: "Science Fiction",
    description: "Fiction based on imagined future scientific or technological advances."
  }) {
    id
    name
    description
    createdAt
    updatedAt
  }
}

# Mutation - Update existing category
mutation UpdateCategory {
  updateCategory(
    id: "CATEGORY_ID_HERE",
    input: {
      description: "Updated description for this category."
    }
  ) {
    id
    name
    description
    createdAt
    updatedAt
  }
}

# Mutation - Delete category
mutation DeleteCategory {
  deleteCategory(id: "CATEGORY_ID_HERE")
}

# BOOK OPERATIONS
# =====================================

# Query - Get all books
query GetAllBooks {
  books {
    id
    title
    isbn
    publishedDate
    description
    pageCount
    author {
      id
      name
    }
    categories {
      id
      name
    }
    createdAt
    updatedAt
  }
}

# Query - Get single book by ID
query GetBookById {
  book(id: "BOOK_ID_HERE") {
    id
    title
    isbn
    publishedDate
    description
    pageCount
    author {
      id
      name
      bio
    }
    categories {
      id
      name
    }
    createdAt
    updatedAt
  }
}

# Query - Get books by author
query GetBooksByAuthor {
  booksByAuthor(authorId: "AUTHOR_ID_HERE") {
    id
    title
    isbn
    publishedDate
    pageCount
    categories {
      id
      name
    }
  }
}

# Query - Get books by category
query GetBooksByCategory {
  booksByCategory(categoryId: "CATEGORY_ID_HERE") {
    id
    title
    isbn
    publishedDate
    pageCount
    author {
      id
      name
    }
  }
}

# Mutation - Create new book
mutation CreateBook {
  createBook(input: {
    title: "A Game of Thrones",
    isbn: "9780553573404",
    publishedDate: "1996-08-01",
    description: "The first novel in A Song of Ice and Fire, a series of fantasy novels.",
    pageCount: 694,
    author: "AUTHOR_ID_HERE",
    categories: ["CATEGORY_ID_HERE"]
  }) {
    id
    title
    isbn
    publishedDate
    description
    pageCount
    author {
      id
      name
    }
    categories {
      id
      name
    }
    createdAt
    updatedAt
  }
}

# Mutation - Update existing book
mutation UpdateBook {
  updateBook(
    id: "BOOK_ID_HERE",
    input: {
      description: "Updated description for this book.",
      pageCount: 698
    }
  ) {
    id
    title
    isbn
    publishedDate
    description
    pageCount
    author {
      id
      name
    }
    categories {
      id
      name
    }
    createdAt
    updatedAt
  }
}

# Mutation - Delete book
mutation DeleteBook {
  deleteBook(id: "BOOK_ID_HERE")
}

# COMPLEX QUERIES (MULTIPLE OPERATIONS IN ONE REQUEST)
# ====================================================

# Query - Get all data at once (books, authors, categories)
query GetAllData {
  books {
    id
    title
    isbn
  }
  authors {
    id
    name
  }
  categories {
    id
    name
  }
}

# Query - Get detailed book with author's other books
query GetBookWithAuthorWorks {
  book(id: "BOOK_ID_HERE") {
    id
    title
    author {
      id
      name
      books {
        id
        title
        publishedDate
      }
    }
  }
}

# Query - Get categories with their books and authors
query GetCategoriesWithBooks {
  categories {
    id
    name
    books {
      id
      title
      author {
        id
        name
      }
    }
  }
}