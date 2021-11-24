// Given an array containing marks of 5 subjects, calculate the total marks and percentage

var arr=[90,70,67,80,92];
var arr1=["Maths=","Physics=","Chemestry=","English=","Hindi="]
let sum=0;
for(let i=0; i<arr.length; i++){
    console.log(arr1[i],arr[i]);
    sum=sum+arr[i];
}
console.log("\n");
console.log("Total marks= "+sum);
console.log("Percentage= "+sum/5+"%");
console.log("\n\n\n\n\n");



// Given an array and a number, write a program to find if that number is present in that array or not?

var arr=[12,45,67,8,23];
function find(arr,n){
    for(let i=0; i<arr.length; i++){
    if(arr[i]==n){
    x="Number is prsent in the array";
    break;
    } else {
        x="Number is not present in the array";
    }
}
console.log(x);
}
find(arr,12);