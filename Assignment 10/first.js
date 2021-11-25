// Write a function to sort a given array using bubble sort? You dont have to use the sort method Which is avilable inside array.

var arr=[90,45,123,52,12];
for(let i=0; i<arr.length; i++){
    console.log(arr[i]);    
}
function bubble_sort(arr){
for(let round=0; round<arr.length; round++){
for(i=0; i<arr.length-round-1; i++){
    if(arr[i]>arr[i+1]){
        let temp=arr[i];
        arr[i]=arr[i+1];
        arr[i+1]=temp;
    }
}
}
console.log(arr);
}
bubble_sort(arr);