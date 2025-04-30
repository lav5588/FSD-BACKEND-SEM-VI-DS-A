// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('fsd');

// Create a new document in the collection.
db.getCollection('my_books').insertMany([
    {
        "title": "The Great Gatsby",
        "author": "F. Scott Fitzgerald",
        "data": "1925",
        "image": "https://images-na.ssl-images-amazon.com/images/I/81af+MCATTL.jpg"
    },
    {
        "title": "To Kill a Mockingbird",
        "author": "Harper Lee",
        "data": "1960",
        "image": "https://m.media-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        "title": "1984",
        "author": "George Orwell",
        "data": "1949",
        "image": "https://images-na.ssl-images-amazon.com/images/I/71kxa1-0mfL.jpg"
    },
    {
        "title": "The Catcher in the Rye",
        "author": "J.D. Salinger",
        "data": "1951",
        "image": "https://images-na.ssl-images-amazon.com/images/I/91NNUivLAML.jpg"
    },
    {
        "title": "Pride and Prejudice",
        "author": "Jane Austen",
        "data": "1813",
        "image": "https://images-na.ssl-images-amazon.com/images/I/81t2CVWEsUL.jpg"
    }
]
);
