module.exports = function check(str, bracketsConfig) {
    let strArr = str.split("");
    let roundO = 0;
    let roundC = 0;
    let curlyO = 0;
    let curlyC = 0;
    let squareO = 0;
    let squareC = 0;
    let res;
    strArr.forEach((el) => {
        if (el === "(") roundO + 1;
        if (el === ")") roundC + 1;
        if (el === "{") curlyO + 1;
        if (el === "}") curlyC + 1;
        if (el === "[") squareO + 1;
        if (el === "]") squareC + 1;
    });
    if (roundO === roundC) {
        if (curlyO === curlyC) {
            if (squareO === squareC) {
                return true;
            }
        }
    } else {
        return false;
    }
};
// module.exports = function check(str, bracketsConfig) {
//     let strArr = str.split("");
//     let prev = "";
//     let res = false;
//     function r(strArr) {
//         for (let i = 0; i < strArr.length; i++) {
//             if (!prev) {
//                 prev = strArr[i];
//             }
//             if (prev === "{" && strArr[i] === "}") {
//                 strArr.splice(strArr[i - 1], 2);
//                 prev = "";
//                 if (strArr.length === 0) {
//                     res = true;
//                 } else {
//                     r(strArr);
//                 }
//             } else if (prev === "(" && strArr[i] === ")") {
//                 strArr.splice(strArr[i - 1], 2);
//                 prev = "";
//                 if (strArr.length === 0) {
//                     res = true;
//                 } else {
//                     r(strArr);
//                 }
//             } else if (prev === "[" && strArr[i] === "]") {
//                 strArr.splice(strArr[i - 1], 2);
//                 prev = "";
//                 if (strArr.length === 0) {
//                     console.log("true");
//                     res = true;
//                 } else {
//                     r(strArr);
//                 }
//             } else {
//                 res = false;
//             }
//         }
//     }
//     r(strArr);
//     return res;
// };
