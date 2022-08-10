// Assignment Code
var generateBtn = document.querySelector("#generate");

//added function for generatePassword
function generatePassword () {

//ceated and stored arrays for character types inside variables, created empty variable for cumtomer selections
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = [];
// made for loop to populate index of uppercase array
for (var i = 0; i < lowerCase.length; i++) {
  upperCase[i] = lowerCase[i].toUpperCase()
}
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]; 
var specialC = ["!", "#", "$", "%", "&", "'", ")", "(", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "~"];
var userSelections = [];

// 1. Prompted user for password criteria
//added prompt, for password legnth and alerts for entries outside of parameters 
var pwLength = parseInt(prompt("How many characters would you like your password to be? (Minimum = 8, Max = 128)"));
if(isNaN(pwLength))  {
  alert ("Please enter a numeric value.")
  return;
}
if ((pwLength<8) || (pwLength>128)) {
  alert ("Must be a minimum of 8 characters and a no more than 128 characters.")
  return;
}

// 2. Validated the user input.
//added confirms, and conditional statements to validate the various inputs
if (confirm("Click OK to confirm using lowercase characters.") === true) {
  userSelections = userSelections.concat(lowerCase);
}

if (confirm("Click OK to confirm using uppercase characters.") === true) {
  userSelections = userSelections.concat(upperCase);
}

if (confirm("Click OK to confirm using numeric characters.") === true) {
  userSelections = userSelections.concat(numbers);
}

if (confirm("Click OK to confirm using special characters.") === true) {
  userSelections = userSelections.concat(specialC);
}
//added conditional statement to ensure user selects at least one character type
if (userSelections>=0)
return ("You must select at least one character type. Please try again.")

// 3. Generated PW based on criteria
//created empty variable and for loop to return random values based on user user selections.
var userPW = ""
for (var i = 0; i < pwLength; i++) {
  var randomIndex = Math.floor(Math.random() * userSelections.length);
  var userPW = userPW + userSelections[randomIndex];
}

// 4. Displayed passsword to page.
//set function of return to display newly generated password
  return userPW;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);