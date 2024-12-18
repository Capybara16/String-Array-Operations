// Prompt the user for two words
let word1 = prompt("Enter the first word:");
let word2 = prompt("Enter the second word:");

// Function to reverse a string
function reverseString(str) {
  return str.split("").reverse().join("");
}

// Reverse the strings
let reversedWord1 = reverseString(word1);
let reversedWord2 = reverseString(word2);

// Log the original and reversed strings
console.log("Original Word 1:", word1);
console.log("Reversed Word 1:", reversedWord1);
console.log("Original Word 2:", word2);
console.log("Reversed Word 2:", reversedWord2);

// Check if the strings are palindromes
let isPalindrome1 = word1 === reversedWord1;
let isPalindrome2 = word2 === reversedWord2;

// Log the truth values
console.log(`Is "${word1}" a palindrome?`, isPalindrome1);
console.log(`Is "${word2}" a palindrome?`, isPalindrome2);
