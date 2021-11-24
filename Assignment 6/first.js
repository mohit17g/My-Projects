// Write to function which will take 2 callback function as argument and these two callback function will print "I am callback function 1" & "I am callback function 2" respectively.

function test(cb1, cb2){
    cb1("I am callback function 1");
    cb2("I am callback function 2");
}

function callback1(n1){
    console.log(`${n1}`);
}
function callback2(n2){
    console.log(`${n2}`);
}

test(callback1, callback2);