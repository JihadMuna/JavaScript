const book1 = {
    bookName: "English",
    authorName: "Ahmad",
    publishYear: 2020
};
const book2 = {
    bookName: "Arabic",
    authorName: "Mahmoud",
    publishYear: 2021
};
const bookUtils = {
    getFirstPublished:function(book1,book2) {
   let firstPublished = book1.publishYear < book2.publishYear? book1 : book2;
   return firstPublished;
    },
    setNewEdition:function(book,newEditionYear){
        book.latestEdition = newEditionYear;
    }
}
console.log('The first published book is: '+ bookUtils.getFirstPublished(book1,book2).bookName);
