// Connect to MongoDB shell
// mongo

// Switch to the book-catalog database
use book-catalog

// View all books
db.books.find().pretty()

// View all authors
db.authors.find().pretty()

// View all categories
db.categories.find().pretty()

// Find a specific book by title (partial match using regex)
db.books.find({title: /Harry Potter/}).pretty()

// Find books by a specific author (using author's ObjectId)
db.books.find({author: ObjectId("authorIdHere")}).pretty()

// Find books in a specific category
db.books.find({categories: ObjectId("categoryIdHere")}).pretty()

// Find books with more than 300 pages
db.books.find({pageCount: {$gt: 300}}).pretty()

// Find books published after a certain date
db.books.find({publishedDate: {$gt: ISODate("2000-01-01")}}).pretty()

// Count total number of books
db.books.countDocuments()

// Count total number of authors
db.authors.countDocuments()

// Count total number of categories
db.categories.countDocuments()

// Sort books by publication date (newest first)
db.books.find().sort({publishedDate: -1}).pretty()

// Sort authors alphabetically by name
db.authors.find().sort({name: 1}).pretty()

// Find the 5 most recently added books
db.books.find().sort({createdAt: -1}).limit(5).pretty()

// Full book details with projection (selected fields only)
db.books.find({}, {title: 1, isbn: 1, publishedDate: 1, pageCount: 1}).pretty()

// Get books with their author data using aggregation
db.books.aggregate([
  {
    $lookup: {
      from: "authors",
      localField: "author",
      foreignField: "_id",
      as: "authorDetails"
    }
  },
  {
    $project: {
      title: 1,
      isbn: 1,
      publishedDate: 1,
      "authorDetails.name": 1
    }
  }
]).pretty()

// Get books with their categories using aggregation
db.books.aggregate([
  {
    $lookup: {
      from: "categories",
      localField: "categories",
      foreignField: "_id",
      as: "categoryDetails"
    }
  },
  {
    $project: {
      title: 1,
      isbn: 1,
      "categoryDetails.name": 1
    }
  }
]).pretty()