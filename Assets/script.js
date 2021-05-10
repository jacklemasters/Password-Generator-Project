// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var pwLength = 8;
    charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    retval = '';
  //var maxLength = 128;
  //var numberMinCount = 2;
  for (var i = 0, n = charset.length; i < length; ++i) {
    retval =+ charset.charAt(Math.floor(Math.random() * n));
  }
  return retval;


  passwordText.value = password;
  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);{
  console.log(passwordText);
};
