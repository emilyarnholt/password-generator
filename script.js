//Assignment Code
var generateBtn = document.querySelector("#generateBtn");

//Write password to the #password input 

  var password = generatePassword()
  var passwordText = document.querySelector('#password');

// fuctioning generate password 
  function generatePassword(){
    var chars = 
    "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var passwordLength = prompt("Please enter the number of characters you want for your new password. It must be more than 8 but less than 128");
    var numbers = confirm("Do you want numbers in your password?");
    var lowerCases = confirm("Do you want lowercases in your password?");
    var upperCases = confirm("Do you want uppercases in your password?");
    var special = confirm("Do you want special characters in your password?");
    var password ="";
    // this is a minimum count for numbers, lowerCases, upperCases & specialCharacters
    var minimumCount = 0;
    // Empty minimums for numbers, lowerCases, upperCases & specialCharacters
    var minimumNumbers = "";
    var minimumLowerCases = "";
    var minimumUpperCases = "";
    var minimumSpecialCharacters = "";
  
   
    
    for (var i = 0; i <= passwordLength; i++){
      var randomNumber = Math.floor(Math.random () * chars.length);
      password += chars.substring(randomNumber , randomNumber +1);
    
  }
  document.querySelector("#password").value = password;


 // passwordText.value = 'password';
}
// Add event listener to generate button 
generateBtn.addEventListener("click", generatePassword);