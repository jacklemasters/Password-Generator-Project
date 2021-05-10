// Assignment Code
var htmlButton = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  var pwLength = Math.floor(Math.random()*128)+8;
    charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    retval = "";
  for (var i = 0; i < pwLength; i++){
    retval += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  return retval;
  
}

// Add event listener to generate button (COULD NOT GET THIS TO WORK!)
const htmlButton = document.getElementById("generate");
htmlButton.addEventListener("click", writePassword);
