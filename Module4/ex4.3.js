/**
* John and Mike both play basketball on different teams.
* In the latest 3 games, John's team scored 89, 120, and 103 points,
while Mike's team scored 116, 94, and 123 points.

1. Calculate the average score for each team. -v
2. Decide which team wins on average (highest average
score), and print the winner to the console. Also include
the average score in the output. -V
3. Then change the scores to show different winners. Don't
forget to take into account that there might be a draw (the
same average score). -V
4. EXTRA: Mary also plays basketball, and her team scored
97, 134, and 105 points. Like before, log the average
winner to the console. -V
5. Like before, change the scores to generate different
winners, keeping in mind there might be draws. -V
 */

let team1Score = 89 + 120 + 103;
let team2Score = 116 + 94 + 123;
let team3Score = 97 + 14 + 105;

averageScore1 = team1Score / 3;
console.log('averageScore1 is:', averageScore1)
averageScore2 = team2Score / 3;
console.log('averageScore2 is:', averageScore2)
averageScore3 = team3Score / 3;
console.log('averageScore3 is:', averageScore3)

if (averageScore1 > averageScore2 && averageScore1 > averageScore3) {
console.log(`John's team is win with average score of: ${averageScore1}`);    
}else if (averageScore2 > averageScore1 && averageScore2 > averageScore3) {
    console.log(`Mike's team is win with average score of: ${averageScore2}`);
}
    else if (averageScore3 > averageScore1 && averageScore3 > averageScore2) {
        console.log(`May's team is win with average score of: ${averageScore3}`);
    }
     else {
        "All teams have the same average score."
    }

