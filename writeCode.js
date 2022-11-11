function addToZero(arr){
    if(arr < 2){
        return false
    }
    for(let i = 0; i < arr.length; i++){
        for(let k = i + 1; k < arr.length; k++){
            if(arr[i] + arr[k] === 0){
                return true
            }
        }
    }
    return false
}
//---------
// time: O(n^2)
// space: O(1)
//---------
console.log(addToZero([]));
// -> False
console.log(addToZero([1]));
// -> False
console.log(addToZero([1, 2, 3]));
// -> False
console.log(addToZero([1, 2, 3, -2]));
// -> True

console.log('-------------------------')

function hasUniqueChars(str){
    str = str.split('')
    for(let i = 0; i < str.length; i++){
        for(let k = i + 1; k < str.length; k++){
            if(str[i] === str[k]){
                return false
            }
        }
    }
    return true
}
//---------
// time: O(n^2)
// space: O(1)
//---------
console.log(hasUniqueChars("Monday"));
// -> True
console.log(hasUniqueChars("Moonday"));
// -> False

console.log('-------------------------')

function isPangram(sent){
    sent = sent.toLowerCase().split('')
    let alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    if(alpha.every(x => sent.includes(x))){
        return true
    } else {
        return false
    }
}
//---------
// time: O(n)
// space: O(1)
//---------
console.log(isPangram("The quick brown fox jumps over the lazy dog!"));
// -> True
console.log(isPangram("I like cats, but not mice"));
// -> False

console.log('-------------------------')

function findLongestWord(arr){
    let longestWord = 0
    for(let i = 0; i < arr.length; i++){
        if(arr[i].length > longestWord){
            longestWord = arr[i].length
        }
    }
    return longestWord
}
//---------
// time: O(n)
// space: O(n)
//---------
console.log(findLongestWord(["hi", "hello", "wonweon"]));
// -> 7