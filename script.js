// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperChoice;
var lowerChoice;//= confirm("Would you like to include Lowercase ?")
var numericChoice;//= confirm("Would you like to include numeric character?")
var specialChoice;//
var lowercase = ["a","b","c","d","e", "f","g",
"h","i","j","k","l","o","m","n","p","q","r", "s",
"t","u","v","w", "x","y","z"]

var uppercase = ["A","B","C","D","E","F","G",
"H","I","J","K","L","O","M","N","P","R", "S","T","U",
"V","W","X","Y","Z"]
var numeric = ["1","2","3","4","5","6","7","8","9"]

var special= ['@','%',  '+', "\\",'/',"'",'!','#','$','^','?',':',',',
    ')','(','}','{',']','[','~','-','_','.'];
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
 // console.log("password is "+ password.join(" "))
  var passwordText = document.querySelector("#password");

  passwordText.value = password.join('');

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword ()
{
  
  var a=false;
  do{
  var numberChoice = prompt("How many character would you like to include?");
 if(numberChoice < 8){
   alert("the minimum size required is 8");
 }
 else if (numberChoice > 128)
 {
  alert("the maximum size required is 128")
 }
 else {
    a=true
    }
 }
 while (a ===false)
 do{
var upperChoice = confirm("Would you like to include Upper case ?")
var lowerChoice= confirm("Would you like to include Lowercase ?")
var numericChoice = confirm("Would you like to include numeric character?")
var specialChoice = confirm("Would you like to include special Character?")
if(upperChoice=== false && lowerChoice=== false && numericChoice=== false && specialChoice===false)
   {
     alert("You must choose at least one type of character!!!");
   }
  }
while(upperChoice=== false && lowerChoice=== false && numericChoice=== false && specialChoice===false)
 
/* }

function userChoice(){  */
  var choiceArr= [];
  var Character =[];
  var random=[];
  
  if (upperChoice){
    choiceArr= choiceArr.concat(uppercase);
    Character.push(uppercase[Math.floor(Math.random() * uppercase.length)])
      
      }
  if(lowerChoice){
    choiceArr=choiceArr.concat(lowercase);
    Character.push(lowercase[Math.floor(Math.random() * lowercase.length)])
      }
   if(numericChoice){
    choiceArr=choiceArr.concat(numeric);
    Character.push(numeric[Math.floor(Math.random() * numeric.length)])
      }
   if(specialChoice){
    choiceArr=choiceArr.concat(numeric);
    Character.push(special[Math.floor(Math.random() * special.length)])
       }

       /* console.log(Character)
       console.log(Character.lenght); */

      for (var i=Character.length;i <= numberChoice-1;i++)
              {
       random[i]= choiceArr[Math.floor(Math.random() * choiceArr.length)];
         Character.push(random[i]);
          
              }
       //console.log(Character)
      return Character
  }
