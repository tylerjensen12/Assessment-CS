const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(extraLargeArray);
let resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(extraLargeArray);
let resultsInsert = perf.stop();


console.log('Results for the extraLargeArray');
console.log("append", resultsAppend.preciseWords);
console.log("insert", resultsInsert.preciseWords);

perf.start();                     // Starts timer
doublerAppend(tinyArray);
resultsAppend = perf.stop();  // Stops timer and save time results

// Second function
perf.start();
doublerInsert(tinyArray);
resultsInsert = perf.stop();

console.log('Results for the tinyArray');
console.log("append", resultsAppend.preciseWords);
console.log("insert", resultsInsert.preciseWords);

perf.start();                     // Starts timer
doublerAppend(smallArray);
resultsAppend = perf.stop();  // Stops timer and save time results

// Second function
perf.start();
doublerInsert(smallArray);
resultsInsert = perf.stop();

console.log('Results for the smallArray');
console.log("append", resultsAppend.preciseWords);
console.log("insert", resultsInsert.preciseWords);

perf.start();                     // Starts timer
doublerAppend(mediumArray);
resultsAppend = perf.stop();  // Stops timer and save time results

// Second function
perf.start();
doublerInsert(mediumArray);
resultsInsert = perf.stop();

console.log('Results for the mediumArray');
console.log("append", resultsAppend.preciseWords);
console.log("insert", resultsInsert.preciseWords);

perf.start();                     // Starts timer
doublerAppend(largeArray);
resultsAppend = perf.stop();  // Stops timer and save time results

// Second function
perf.start();
doublerInsert(largeArray);
resultsInsert = perf.stop();

console.log('Results for the largeArray');
console.log("append", resultsAppend.preciseWords);
console.log("insert", resultsInsert.preciseWords);