/**
 * create a prompt that asks the user for his/her
grade, in the form of a letter.
Check the letter and capitalize it.
Console log the score according to the letter:
score of:
0-64 is a “F”
65-69 is a “D”
70-79 is a “C”
80-89 is a “B”
90-100 is an “A -V
create the same prompt but for the other way
around – insert number and get back the
letter.
For both prompts – alert if the input is invalid
(not a letter or a letter not a-f in the first, and
not a number or a number not in the allowed
range in the second).
 */

let grade = prompt('Enter your grade as a letter: ( a / b / c / d / f ) :');

switch (grade) {
    case 'f':
        grade.toUpperCase();
        console.log('Your score is 0-64');
        break;
    case 'd':
        grade.toUpperCase();
        console.log('Your score is 65-69');
        break;
    case 'c':
        grade.toUpperCase();
        console.log('Your score is 70-79');
        break;
    case 'b':
        grade.toUpperCase();
        console.log('Your score is 80-89');
        break;
    case 'a':
        grade.toUpperCase();
        console.log('Your score is 90-100');
        break;

    default:
        console.log("invalid input (not a letter)");
        break;
}

let input = prompt('Enter your grade as a number (between 0 to 100) ');

    if (input > 0 && input < 65) {
    console.log('Your grade is "F"'); 
    }else if (input > 64 && input < 70) {
    console.log('Your grade is "D"');    
    }else if (input > 69 && input < 80) {
    console.log('Your grade is "C"');    
    }else if (input > 79 && input < 90) {
    console.log('Your grade is "B"');
    }else if (input > 89 && input === 100) {
    console.log('Your grade is "A"');    
    }
    else {
console.log("invalid input (not a number)");
}


