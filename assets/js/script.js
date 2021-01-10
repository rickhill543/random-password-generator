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
var lowerChar;
var upperChar;
var numberChar;
var specialChar;
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

  // A series of functions to determine criteria
  function criteriaCheck() {
      function lowerCheck() {
        var lcCheck = window.confirm("Would you like to add lowercase characters to your password?");
        if (lcCheck) {
          lowerChar = 1;
        } else {
            lowerChar = 0;
            }
      }
      function upperCheck() {
        var upCheck = window.confirm("Would you like to add uppercase characters to your password?");
        if (upCheck) {
          upperChar = 1;
        } else {
            upperChar = 0;
            }
      }
      function numberCheck() {
        var numCheck = window.confirm("Would you like to add numeric characters to your password?");
        if (numCheck) {
          numberChar = 1;
        } else {
            numberChar = 0;
            }
      }
      function specialCheck() {
        var spCheck = window.confirm("Would you like to add special characters to your password?");
        if (spCheck) {
          specialChar = 1;
        } else {
            specialChar = 0;
            }
      }
      lowerCheck();
      upperCheck();
      numberCheck();
      specialCheck();
      // If no character types is seleted, start over
      if (!lowerChar && !upperChar && !numberChar && !specialChar) {
        alert("You must select at least one character type!")
        criteriaCheck();
      } else {
      }
    }

    function magic() {
    var lcSet = "abcdefghijklmnopqrstuvwxyz";
    var upSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numSet = "0123456789"
    var spSet = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    var resultSet = "";

    // Lots of conditional statements for output... must be refactored
    if (lowerChar && upperChar && numberChar && specialChar) {
      var compChar = lcSet + upSet + numSet + spSet;
      for(i=0; i<length; i++) {
        resultSet += compChar.charAt(Math.floor(Math.random()*compChar.length));
        result = resultSet;
      }
    } else if (lowerChar && upperChar && numberChar && !specialChar) {
        var compChar = lcSet + upSet + numSet;
        for(i=0; i<length; i++) {
          resultSet += compChar.charAt(Math.floor(Math.random()*compChar.length));
          result = resultSet;
        }
    } else if (lowerChar && upperChar && !numberChar && !specialChar) {
        var compChar = lcSet + upSet;
        for(i=0; i<length; i++) {
          resultSet += compChar.charAt(Math.floor(Math.random()*compChar.length));
          result = resultSet;
        }
    } else if (lowerChar && !upperChar && !numberChar && !specialChar) {
        var compChar = lcSet;
        for(i=0; i<length; i++) {
          resultSet += compChar.charAt(Math.floor(Math.random()*compChar.length));
          result = resultSet;
        }
    } else if (lowerChar && upperChar && !numberChar && specialChar) {
        var compChar = lcSet + upSet + spSet;
        for(i=0; i<length; i++) {
          resultSet += compChar.charAt(Math.floor(Math.random()*compChar.length));
          result = resultSet;
        }
    } else if (lowerChar && !upperChar && numberChar && specialChar) {
        var compChar = lcSet + numSet + spSet;
        for(i=0; i<length; i++) {
          resultSet += compChar.charAt(Math.floor(Math.random()*compChar.length));
          result = resultSet;
        }
    } else if (lowerChar && !upperChar && numberChar && !specialChar) {
        var compChar = lcSet + numSet;
        for(i=0; i<length; i++) {
          resultSet += compChar.charAt(Math.floor(Math.random()*compChar.length));
          result = resultSet;
        }
    } else if (lowerChar && !upperChar && !numberChar && specialChar) {
        var compChar = lcSet + spSet;
        for(i=0; i<length; i++) {
          resultSet += compChar.charAt(Math.floor(Math.random()*compChar.length));
          result = resultSet;
        }
    } else if (!lowerChar && upperChar && numberChar && specialChar) {
        var compChar = upSet + numSet + spSet;
        for(i=0; i<length; i++) {
          resultSet += compChar.charAt(Math.floor(Math.random()*compChar.length));
          result = resultSet;
        }
    } else if (!lowerChar && upperChar && numberChar && !specialChar) {
        var compChar = upSet + numSet;
        for(i=0; i<length; i++) {
          resultSet += compChar.charAt(Math.floor(Math.random()*compChar.length));
          result = resultSet;
        }
    } else if (!lowerChar && upperChar && !numberChar && specialChar) {
        var compChar = upSet + spSet;
        for(i=0; i<length; i++) {
          resultSet += compChar.charAt(Math.floor(Math.random()*compChar.length));
          result = resultSet;
        }
    } else if (!lowerChar && upperChar && !numberChar && !specialChar) {
        var compChar = upSet;
        for(i=0; i<length; i++) {
          resultSet += compChar.charAt(Math.floor(Math.random()*compChar.length));
          result = resultSet;
        }
    } else if (!lowerChar && !upperChar && numberChar && specialChar) {
        var compChar = numSet + spSet;
        for(i=0; i<length; i++) {
          resultSet += compChar.charAt(Math.floor(Math.random()*compChar.length));
          result = resultSet;
        }
    } else if (!lowerChar && !upperChar && numberChar && !specialChar) {
        var compChar = numSet;
        for(i=0; i<length; i++) {
          resultSet += compChar.charAt(Math.floor(Math.random()*compChar.length));
          result = resultSet;
        }
    }
      else if (!lowerChar && !upperChar && !numberChar && specialChar) {
        var compChar = spSet;
        for(i=0; i<length; i++) {
          resultSet += compChar.charAt(Math.floor(Math.random()*compChar.length));
          result = resultSet;
        }
    }
  }

  criteriaCheck();
  magic();
  console.log("Password length is: " + Math.ceil(length));
  console.log(length);
  console.log(lowerChar);
  console.log(upperChar);
  console.log(numberChar);
  console.log(specialChar);
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
