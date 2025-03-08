# Book Catalog API using Node.js, GraphQL and MongoDB

### Start using - npm start / npm run dev

### Access the GraphQL Playground at http://localhost:4000/graphql

## Example Queries and Mutations

### Create Author
```graphql
mutation CreateAuthor {
  createAuthor(input: {
    name: "J.K. Rowling",
    bio: "British author, best known for the Harry Potter series",
    birthDate: "1965-07-31"
  }) {
    id
    name
    bio
    birthDate
  }
}
```
### Create Category
```graphql
mutation CreateCategory {
  createCategory(input: {
    name: "Fantasy",
    description: "Fantasy literature is literature set in an imaginary universe, often but not always without any locations, events, or people from the real world."
  }) {
    id
    name
    description
  }
}
```
### Create Book
```graphql
mutation CreateBook {
  createBook(input: {
    title: "Harry Potter and the Philosopher's Stone",
    isbn: "9780747532743",
    publishedDate: "1997-06-26",
    description: "The first novel in the Harry Potter series.",
    pageCount: 223,
    author: "AUTHOR_ID_HERE", # Replace with actual author ID
    categories: ["CATEGORY_ID_HERE"] # Replace with actual category ID
  }) {
    id
    title
    isbn
    publishedDate
    description
    pageCount
    author {
      name
    }
    categories {
      name
    }
  }
}
```

### Query All Books
```graphql
query GetAllBooks {
  books {
    id
    title
    isbn
    publishedDate
    pageCount
    author {
      id
      name
    }
    categories {
      id
      name
    }
  }
}
```

### Query Book by ID
```graphql
query GetBook {
  book(id: "BOOK_ID_HERE") { # Replace with actual book ID
    id
    title
    isbn
    publishedDate
    description
    pageCount
    author {
      name
      bio
    }
    categories {
      name
    }
  }
}
```

### Query Books by Author
```graphql
query GetBooksByAuthor {
  booksByAuthor(authorId: "AUTHOR_ID_HERE") { # Replace with actual author ID
    id
    title
    publishedDate
  }
}
```

### Update Book
```graphql
mutation UpdateBook {
  updateBook(
    id: "BOOK_ID_HERE", # Replace with actual book ID
    input: {
      title: "Harry Potter and the Philosopher's Stone (Updated)",
      pageCount: 225
    }
  ) {
    id
    title
    pageCount
  }
}
```

### Delete Book
```graphql
mutation DeleteBook {
  deleteBook(id: "BOOK_ID_HERE") # Replace with actual book ID
}
```
