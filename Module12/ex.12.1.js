
const library = [
    {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true
    },
    {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true
    },
    {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false
    }
    ];
    function displayReadBooks (library) {
const readableBooks = library.filter((book) => book.readingStatus === true)
.map ((book) => ({
    "Book Name": book.title,
      "Author Name": book.author,
      "Reading Status": book.readingStatus,
    }));
    readableBooks.map((book) => {
        console.log(`Book Name: ${book["Book Name"]}`);
        console.log(`Author Name: ${book["Author Name"]}`);
      console.log(`Reading Status: ${book["Reading Status"]}`);
      console.log('-------------------'); // to make space between the two books
    })
}

    displayReadBooks(library);
