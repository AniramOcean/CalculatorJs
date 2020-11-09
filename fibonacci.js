// 0 1 1 2 3 5 8 13

// F(n) = F (n -1) + F (n - 2)

// SLOWLY
function f(n) {
    if (n === 0) return 0;
    if (n < 2) return 1;
    return f(n - 1) + f(n - 2);
}


// FASTER
function fibLoop(num = 0) {
    if (num === 0 || num === 1) return num;
    let num1 = 0, num2 = 1, currentNum = 1;
    for (let i = 2; i <= num; i++) {
        currentNum = num1 + num2;
        num1 = num2;
        num2 = currentNum;
    }
    return currentNum;
}


console.log(fibLoop(0));
console.log(fibLoop(1));
// console.log(fibLoop(2));
// console.log(fibLoop(6));
// console.log(fibLoop(17));
// console.log(fibLoop(50));
// console.log(f(1));
// console.log(f(6));
// console.log(f(14));
// console.log(f(40));
