function isPalindrome(word) {
  // Write your algorithm here
  const splittedWord = word.split("")
  const reversedArray = splittedWord.reverse()
  const reversedWord = reversedArray.join("")
  
  if(word.toLowerCase() === reversedWord.toLowerCase()){
    return true
  }else{
    return false
  }

}

/* 
  Split the word into list
  reverse the list
  join the list
  if condtion to check pallindrome 
*/

/*
  The function will take in a string, then split into a list then we reverse the list 
  after the list has been reversed we join it to form a reversed string. After that we compare
  if the original string and the reversed string match using if condition, if they are equal
  we should return true else we return false.
*/


// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
