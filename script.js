// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.',
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

let mandatoryCharacters;

let allCharacters = specialCharacters
  .concat(numericCharacters)
  .concat(lowerCasedCharacters)
  .concat(upperCasedCharacters);

let passwordLength = 10;

// Function to prompt user for password options
function getPasswordOptions() {
  alert('password should not be less than 8 characters');
  alert('should include lowercase characters');
  alert('should include uppercase characters');
  alert('should include numbers');
  alert('should include special character');
}

getPasswordOptions()

// Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random() * allCharacters.length)];
}

// Function to generate password with user input
function generatePassword() {
  let mandatoryCharacters = [
    specialCharacters[Math.floor(Math.random() * specialCharacters.length)],
    numericCharacters[Math.floor(Math.random() * numericCharacters.length)],
    lowerCasedCharacters[
      Math.floor(Math.random() * lowerCasedCharacters.length)
    ],
    upperCasedCharacters[
      Math.floor(Math.random() * upperCasedCharacters.length)
    ],
  ];

  let remainingPasswordLength = passwordLength - mandatoryCharacters.length;

  let result = '';

  for (let i = 0; i < remainingPasswordLength; i++) {
    result += getRandom(allCharacters);
  }
  return result + mandatoryCharacters.join('');
}

var generateBtn = document.querySelector('#generate');

// Write password to the #password input

function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

