const fruits = ["Banana", "Orange", "Apple", "Mango"];
/* We should using splice modify the array to be this:
["Banana", "Orange", "Lemon", "Kiwi", "Apple","Mango"]; */

fruits.splice(2,0,"Lemon"); // 1.Inserts "Lemon" at index 2
fruits.splice(3,0,"Kiwi"); // 2.Inserts "Lemon" at index 3

console.log('fruits', fruits); //V