// Write a function with function name hello which should print message "HELLO TO JAVASCRIPT".

function hello() {
    console.log("HELLO TO JAVASCRIPT");
}
hello();



// Write a function for calculating power. Eg power(2, 3) it should print 8.

function power(a, b) {
    let c = 1;
    let k = b;
    while (k != 0) {
        c = c * a;
        k--;
    }
    console.log("value of ", a, "^", b, "is", c);
    // console.log("using Math.pow >> value of ", a, "^", b, "is", Math.pow(a, b));
    //  console.log("value of "+ a+" to the power "+ b+" is "+c);
    // console.log(`value of ${a} to the power ${b} is ${c}`);
}
power(2, 3);



// function power(a,b){
//     let c=a ** b;
//     console.log(`value of ${a} to the power ${b} is ${c}`);
// }
// power(2,4);