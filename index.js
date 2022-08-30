 readlineSync = require("readline-sync");
var playername = readlineSync.question("whats your name? ");
console.log("--------")
console.log(playername + " lets play a quiz");
console.log("-------")
console.log("rules:-")
console.log("1)each question  is of 1 mark")

console.log("-----")

var score = 0;
//var highscore=[{name:"rahul",score:5},{name:"ankit",score:4}]
console.log("Q1 which fruit is my favourite");
option = ["mango", "appple", "banana"];
index = readlineSync.keyInSelect(option, "ans")

if (option[index] == option[0]) {
  score++
  console.log("Right");
}
else {
  
  console.log("Wrong");
 
}
console.log("------")
console.log("Q2 which bike among i like the most? ");
option1 = ["pulsar 220", "ktmrc 390", "duke 390"];
index1 = readlineSync.keyInSelect(option1, "ans")

if (option1[index1] == option1[2]) {
  score++;
  console.log("Right");
  console.log("")
}
else {
  
  console.log("Wrong");
  
}
console.log("-------")
console.log("Q3 Which game i was more addicted to  ? ");
option2 = ["pubg ", "clash of clans", "free fire"];
index2 = readlineSync.keyInSelect(option2, "ans")

if (option2[index2] == option2[2]) {
  score++;
  console.log("Right");
  console.log("")
}
else {
  
  console.log("Wrong");
  
}
console.log("-------")
console.log("Q4 Which is my first watched anime ? ");
option3 = ["death note", "AOT", "Demon slayer"];
index3 = readlineSync.keyInSelect(option3, "ans")

if (option3[index3] == option3[2]) {
  score++;
  console.log("Right");
  console.log("")
}
else {
  
  console.log(" Wrong");
  
}
console.log("-------")
console.log("Q5 who is my favourite captain? ");
option4 = ["MS dhoni ", "virat  kholi", "rohit sharma"];
index4 = readlineSync.keyInSelect(option4, "ans")

if (option4[index4] == option4[0]) {
  score++;
  console.log("Right");

}
else {
  
  console.log("Wrong");

}
console.log("-------");
console.log("-------")
console.log("your score = " + score + "/5")










