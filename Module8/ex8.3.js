const book1 = {
    bookName: "English",
    authorName: "Ahmad",
    publishYear: 2020,
    editionYear: 2021,
    language: 
};
const book2 = {
    bookName: "Arabic",
    authorName: "Mahmoud",
    publishYear: 2021,
    editionYear: 2022
};
const bookUtils = {
    getFirstPublished:function(b1,b2) {
   let firstPublished = b1.publishYear < b2.publishYear? b1 : b2;
   return firstPublished;
    },
    setNewEdition:function(book,newEditionYear){
       let newEditionYear = book.latestEdition;
        return newEditionYear;
    },
    setLanguage:function(book,newLanguage){
        let newLanguage = book.
    }

}
console.log('The first published book is: '+ bookUtils.getFirstPublished(book1,book2).bookName);
console.log('The new Edition is: '+ bookUtils.setNewEdition(book1).latestEdition);
