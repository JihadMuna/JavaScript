const book = {
    title: "learning JavaScript",
    authorName: "Yishai",
    publishingYear: 2023,
    language: "English",
    price: 100,
//‘The book <book name> was written by <author name> in the year <publishing year>’
getBookDescription:function (books){
   console.log(
       'The book ' +
        book.title +
        ' was written by ' +
        book.authorName +
        ' in the year ' +
        book.publishingYear +
        '.'
        );
},
}   
book.getBookDescription();