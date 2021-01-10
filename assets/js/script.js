// Write code for a password generator
// Prompt user for password criteria to be included
// Store password criteria in variable for later functionality
// Prevent user from choosing no character types with a loop
// Generate a random string of text based on the password criteria chosen
// Output final result to the user on their screen

// Initialize global variables
var length;
var result;

function generatePassword() {
  // Define default userLength as a catch-all to prevent NaN on parsed prompt
  userLength = 0;
  userLength = parseInt(prompt("How many characters would you like for your password? \nValues between 8 and 128 please."), 10) || 0;

  // Conditional statements to ensure user enters correct data type
  if (userLength == 0) {
    alert("You must select a number between 8 and 128. Try again.");
    return "Cancelled";
  } else {
    while (userLength < 8 || userLength > 128 || typeof userLength != "number") {
      alert("Invalid length. Please choose a number between 8 and 128.");
      userLength = prompt("How many characters would you like for your password? \nValues between 8 and 128 please.");
      generatePassword();
    }
  }

  // Refactor length variable to clean up any decimals from tricksters
  length = Math.ceil(userLength);

  // Criteria check function to confirm what character types to include in the random password
  function criteriaCheck() {
      lcCheck = window.confirm("Would you like to add lowercase characters to your password?");
      upCheck = window.confirm("Would you like to add uppercase characters to your password?");
      numCheck = window.confirm("Would you like to add numeric characters to your password?");
      spCheck = window.confirm("Would you like to add special characters to your password?");
      // If no character types are selected, loop back around until at least one is selected
      if (!lcCheck && !upCheck && !numCheck && !spCheck) {
        alert("You must select at least one character type!")
        criteriaCheck();
      } else {
      }
  }

  // Random generator function that assembles a string to be used to randomly select characters
  function magic() {
    var lcSet = "abcdefghijklmnopqrstuvwxyz";
    var upSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numSet = "0123456789"
    var spSet = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    var criteriaSet = "";
    var randomSet = "";

    if (lcCheck == true) {criteriaSet += lcSet;}
    if (upCheck == true) {criteriaSet += upSet;}
    if (numCheck == true) {criteriaSet += numSet;}
    if (spCheck == true) {criteriaSet += spSet;}

    // Randomly selects characters equal to the password length set by the user
    for(i=0; i<length; i++) {
      randomSet += criteriaSet.charAt(Math.floor(Math.random()*criteriaSet.length));
      result = randomSet;
    }
  }
  criteriaCheck();
  magic();

  console.log("Password length is: " + length);
  console.log("Lowercase letters added?: " + lcCheck);
  console.log("Uppercase letters added?: " + upCheck);
  console.log("Numbers added?: " + numCheck);
  console.log("Special characters added?: " + spCheck);
  console.log("Super secret password: " + result);
  return(result);
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);