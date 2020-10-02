// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 *
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 *
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
 */
function processFirstItem(stringList, callback) {
  return callback(stringList[0]);
}

// ⭐️ Example Challenge END ⭐️

///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 *
 * 1. What is the difference between counter1 and counter2?
 *
 *  Counter1 is function scoped
 *  Counter2 is global scoped
 *
 * 2. Which of the two uses a closure? How can you tell?
 *
 *  Counter1 uses a closure when it returns a function counter() that then returns the variable 'count' incremented by 1. When this function returns count, it has to reach outside of itself to find "count".
 *
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better?
 *
 *  A:
 *
 */

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
    return count++;
  };
}

const counter1 = counterMaker();

counter1();
counter1();
counter1();
counter1();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}

/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning() {
  let score = Math.floor(Math.random() * 3); // This will output a random num between 0 - 2

  return score;
}
console.log(inning());

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/

function finalScore(inning, points) {
  let totoalInnings = points;
  let final = {
    Home: 0,
    Away: 0,
  };

  for (let inn = 0; inn < totoalInnings; inn++) {
    final.Home += inning();
    final.Away += inning();
  }
  return final;
}
console.log(finalScore(inning, 9));

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam

Final Score: awayTeam - homeTeam */

/*
function scoreboard(getInningScore, inning, numInns) {
  let gameScores = []; // create an empty array
  for (let i = 0; i < numInns; i++) {
    // create a for loop to loop
    gameScores.push(`Inning ${final.home} `);
  }
  return gameScores;
}
console.log(scoreboard(finalScore(inning, 9)));


// 2nd attempt at rewritting my code

function scoreboard(getInningScore, inning, numInns) {
  let gameScores = {
    home: 0,
    away: 0,
  };

  for (let i = 0; i < numInns; i++) {
    gameScores.home += inning();
    gameScores.away += inning();
    
  }
  return gameScores;
}
console.log(scoreboard(finalScore,inning, 9));


*/
function getScore() {
  let inning = 1;
  return function (score) {
    let prefix = "st";
    if (inning == 2) prefix = "nd";
    if (inning == 3) prefix = "rd";
    if (inning > 3) prefix = "th";
    console.log(`${inning++}${prefix} inning: ${score.Away} - ${score.Home}`);
  };
}

function scoreboard(getInningScore, inning, numInns) {
  let score = {
    Home: 0,
    Away: 0,
  };
  let getScore = getInningScore();

  for (let inn = 0; inn < numInns; inn++) {
    score.Home += inning();
    score.Away += inning();

    getScore(score);
  }

  console.log(`Final Score: ${score.Away} - ${score.Home}`);
}

scoreboard(getScore, inning, 9);
