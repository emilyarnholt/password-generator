//Assignment Code
var generateBtn = document.querySelector("#generate");

//Write password to the #password input 

  var password = generatePassword()
  var passwordText = document.querySelector('#password');

// generate password 
  function generatePassword(){
    var chars = 
    "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var passwordLength = 8;
    var password ="";
    
    for (var i = 0; i <= passwordLength; i++){
      var randomNumber = Math.floor(Math.random () * chars.length);
      password += chars.substring(randomNumber , randomNumber +1);
    
  }

  document.querySelector("#password").value = password;

  passwordText.value = 'password';
}
// Add event listener to generate button 
generateBtn.addEventListener("click", generatepassword);