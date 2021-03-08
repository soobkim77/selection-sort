const { performance } = require("perf_hooks");
/**
 * For each element in array, get then next min
 * value and remove it from list 1, and add to list 2
 */
// 0.06590470000449568 ms
// Using Math.min to get the min value
// function selectionSort(arr) {
//     let newArray = [];
//     while (arr.length != 0) {
//         let newMin = Math.min(...arr);
//         newArray.push(newMin);
//         arr.splice(arr.indexOf(newMin), 1);
//     }
//     return newArray;
// }

// 0.049809600002598015 ms
// Looping and finding the min value instead of math min
function selectionSort(arr) {
    let newArray = [];
    while (arr.length != 0) {
        let newMin = 100000000000000000000000000000000000000000000000000000000;
        arr.forEach((item) => {
            if (newMin > item) {
                newMin = item;
            }
        });
        newArray.push(newMin);
        arr.splice(arr.indexOf(newMin), 1);
    }
    return newArray;
}

// 0.05497739999811165 ms
// A quick recursive variant of the above function that doesn't run too well
// function selectionSort(arr) {
//     let minArray = [];
//     return recurSelectionSort(arr, minArray);
// }

// function recurSelectionSort(arr, minArray) {
//     if (arr.length != 0) {
//         let newMin = 100000000000000000000000000000000000000000000000000000000;
//         arr.forEach((item) => {
//             if (newMin > item) {
//                 newMin = item;
//             }
//         });
//         minArray.push(newMin);
//         arr.splice(arr.indexOf(newMin), 1);
//         return recurSelectionSort(arr, minArray);
//     } else {
//         return minArray;
//     }
// }

if (require.main === module) {
    // add your own tests in here
    console.log("Expecting: [-1, 2, 3, 5]");
    console.log("=>", selectionSort([3, -1, 5, 2]));

    console.log("");

    // BENCHMARK HERE, and print the average runtime
    let timesArray = [];
    for (let i = 0; i < 1000; i++) {
        const longInput = [];

        for (let i = 0; i < 100; ++i) {
            longInput.push(Math.random());
        }
        let t1 = performance.now();
        let dummyVar = selectionSort(longInput);
        let t2 = performance.now();
        timesArray[i] = t2 - t1;
    }
    let allTimes = timesArray.reduce((a, b) => a + b);
    console.log(allTimes / 1000);
}

module.exports = selectionSort;