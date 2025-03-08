# AUTHOR OPERATIONS

# =====================================

# Query - Get all authors

```graphql
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
```

# Query - Get single author by ID

```graphql
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
```

# Mutation - Create new author

```graphql
mutation CreateAuthor {
  createAuthor(
    input: {
      name: "George R.R. Martin"
      bio: "American novelist and short story writer, screenwriter, and television producer."
      birthDate: "1948-09-20"
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
```

# Mutation - Update existing author

```graphql
mutation UpdateAuthor {
  updateAuthor(
    id: "AUTHOR_ID_HERE"
    input: { bio: "Updated biography for this author." }
  ) {
    id
    name
    bio
    birthDate
    createdAt
    updatedAt
  }
}
```

# Mutation - Delete author

```graphql
mutation DeleteAuthor {
  deleteAuthor(id: "AUTHOR_ID_HERE")
}
```

# CATEGORY OPERATIONS

# =====================================

# Query - Get all categories

```graphql
query GetAllCategories {
  categories {
    id
    name
    description
    createdAt
    updatedAt
  }
}
```

# Query - Get single category by ID

```graphql
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
```

# Mutation - Create new category

```graphql
mutation CreateCategory {
  createCategory(
    input: {
      name: "Science Fiction"
      description: "Fiction based on imagined future scientific or technological advances."
    }
  ) {
    id
    name
    description
    createdAt
    updatedAt
  }
}
```

# Mutation - Update existing category

```graphql
mutation UpdateCategory {
  updateCategory(
    id: "CATEGORY_ID_HERE"
    input: { description: "Updated description for this category." }
  ) {
    id
    name
    description
    createdAt
    updatedAt
  }
}
```

# Mutation - Delete category

```graphql
mutation DeleteCategory {
  deleteCategory(id: "CATEGORY_ID_HERE")
}
```

# BOOK OPERATIONS

# =====================================

# Query - Get all books

```graphql
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
```

# Query - Get single book by ID

```graphql
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
```

# Query - Get books by author

```graphql
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
```

# Query - Get books by category

```graphql
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
```

# Mutation - Create new book

```graphql
mutation CreateBook {
  createBook(
    input: {
      title: "A Game of Thrones"
      isbn: "9780553573404"
      publishedDate: "1996-08-01"
      description: "The first novel in A Song of Ice and Fire, a series of fantasy novels."
      pageCount: 694
      author: "AUTHOR_ID_HERE"
      categories: ["CATEGORY_ID_HERE"]
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
```

# Mutation - Update existing book

```graphql
mutation UpdateBook {
  updateBook(
    id: "BOOK_ID_HERE"
    input: { description: "Updated description for this book.", pageCount: 698 }
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
```

# Mutation - Delete book

```graphql
mutation DeleteBook {
  deleteBook(id: "BOOK_ID_HERE")
}
```

# COMPLEX QUERIES (MULTIPLE OPERATIONS IN ONE REQUEST)

# ====================================================

# Query - Get all data at once (books, authors, categories)

```graphql
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
```

# Query - Get detailed book with author's other books

```graphql
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
```

# Query - Get categories with their books and authors

```graphql
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
```
