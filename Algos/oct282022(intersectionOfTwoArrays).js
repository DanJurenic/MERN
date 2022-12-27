/* 
Efficiently combine two already sorted multiset arrays 
into an array containing the sorted set intersection of the two.

Output: only the shared values between the two arrays (deduped).

Venn Diagram Visualization (bottom) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
*/

const numsA1 = [0, 1, 2, 2, 2, 7];
const numsB1 = [2, 2, 6, 6, 7];
const expected1 = [2, 7];

const numsA2 = [0, 1, 2, 2, 2, 7];
const numsB2 = [2, 2];
const expected2 = [2];

const numsA3 = [0, 1, 2, 2, 2, 7];
const numsB3 = [10];
const expected3 = [];

const numsA4 = [];
const numsB4 = [];
const expected4 = [];

/**
 * Venn Diagram Visualization (bottom):
 * @see https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedA
 * @param {Array<number>} sortedB Both sets are multisets
 *    (multi in that it can contain multiple dupes).
 * @returns {Array<number>} The sorted set intersection: a new array that is
 *    sorted and contains only the shared values between the two arrays
 *    deduped.
 */

// My groups answer ******************************
//  function orderedIntersection(sortedA, sortedB) {
//     let returnArray = []
//     let shorterArray = []
//     let longerArray = []

//     if (sortedA > sortedB) {
//       shorterArray = sortedB
//       longerArray = sortedA
//     } else {
//       shorterArray = sortedA
//       longerArray = sortedB
//     }

//     for (let i = 0; i < shorterArray.length; i++) {
//       for (let j = 0; j < longerArray.length; j++) {
//         if (shorterArray[i] ===  longerArray[j] && returnArray.includes(shorterArray[i]) == false) {
//           returnArray.push(shorterArray[i])
//         }
//       }
//     }
//     return returnArray
//   }

// function orderedIntersection(sortedA, sortedB) {
//     let returnArr = [];
//     let i = 0, j = 0;
//     while (i < sortedA.length && j < sortedB.length) {
//         if (sortedA[i] > sortedB[j]) {
//             if (j < sortedB.length) j++;
//         } else if (sortedA[i] < sortedB[j]) {
//             if (i < sortedA.length) i++;
//         } else if (sortedA[i] == sortedB[j]) {
//             sortedA[i] != returnArr[returnArr.length - 1] ? returnArr.push(sortedA[i]) : null;
//             i++;
//             j++;
//         }
//     } return returnArr;
// }

function orderedIntersection(sortedA, sortedB) {
    let expected = []

    if (sortedA.length <= 0 && sortedB.length <= 0){
        return expected;
    }

    for (index=0; index<sortedA.length ; index++){
        for (index2=0 ; index2<sortedB.length ; index2++){
            if (sortedA[index] === sortedB[index2]){
                if (expected.includes(sortedA[index]) == false){
                    expected.push(sortedA[index]);
                }
            }
        }
    }

    return expected;
}

console.log(orderedIntersection(numsA1,numsB1));
console.log(orderedIntersection(numsA2,numsB2));
console.log(orderedIntersection(numsA3,numsB3));
console.log(orderedIntersection(numsA4,numsB4));