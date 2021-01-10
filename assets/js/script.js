// Write code for a password generator
// Prompt user for password criteria to be included
// Get desired password length
// Get character types to include
// Prevent user from choosing no character types with a loop
// Store password criteria in variables
// Generate a random string of text based on the password criteria chosen
// Output final result to the user on their screen

// Initialize global variables
var length;
var result;

function generatePassword() {
  // Define default userLength as a catch-all to prevent NaN on parsed prompt
  userLength = 0;
  console.log(userLength);
  userLength = parseInt(prompt("How many characters would you like for your password? \nValues between 8 and 128 please."), 10) || 0;
  console.log(userLength);
    // Conditional statements to ensure user enters correct data type
    if (userLength == 0) {
      alert("You must select a number between 8 and 128. Try again.");
      return "Cancelled";
    } else {
      // A loop to ensure user inputs acceptable values
      while (userLength < 8 || userLength > 128 || typeof userLength != "number") {
        console.log(userLength);
        alert("Invalid length. Please choose a number between 8 and 128.");
        userLength = prompt("How many characters would you like for your password? \nValues between 8 and 128 please.");
        generatePassword();
        console.log(userLength);
      }
    }
    // Refactor length variable to clean up any decimals from tricksters
    length = Math.ceil(userLength);

  
  console.log(result);
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
