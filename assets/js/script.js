// Write code for a password generator
// Prompt user for password criteria to be included
// Get desired password length
// Get character types to include
// Prevent user from choosing no character types with a loop
// Store password criteria in variables
// Generate a random string of text based on the password criteria chosen
// Output final result to the user on their screen


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
