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
    getFirstPublished:function(book1,book2) {
   let firstPublished = book1.publishYear < book2.publishYear? book1 : book2;
   return firstPublished;
    },
    setNewEdition:function(book,newEditionYear){
        book.latestEdition = newEditionYear;
    },
    setLanguage:function(book,language)

}
console.log('The first published book is: '+ bookUtils.getFirstPublished(book1,book2).bookName);
console.log('The new Edition is: '+ bookUtils.setNewEdition(book1).latestEdition);
