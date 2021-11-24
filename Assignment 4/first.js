// Write a program to show the grade of a student. Total number greater than 79 less than equal to 100 =>grade A, Total number greater than 59 less than equal to 79 =>grade B, Total number greater than 30 less than 59 equal to=>grade C, Total number less than equal to 30 =>grade D.

function grade(a){
    var result;
    if(a<=100 && a>79){
        result=console.log("Grade A");
    } if(a<=79 && a>59){
        result=console.log("Grade B");
    } if(a<=59 && a>30){
        result=console.log("Grade C");
    } if(a<=30){
        result=console.log("Grade D");
    }
    return result;
} 
grade(70);



// let a=59;
// if(a<=100 && a>79){
//     console.log("Grade A");
// }if(a<=79 && a>59){
//     console.log("Grade B");
// } if(a<=59 && a>30){
//     console.log("Grade C");
// } if(a<=30){
//     console.log("Grade D");
// }



// function grade(a){
//     if(a<=100 && a>79){
//         console.log("Grade A");
//     } else if(a<=79 && a>59){
//         console.log("Grade B");
//     } else if(a<=59 && a>30){
//         console.log("Grade C");
//     } else{
//         console.log("Grade D");
//     }
// }
// grade(31);



// let a=30;
// if(a<=100 && a>79){
//         console.log("Grade A");
// } else if(a<=79 && a>59){
//        console.log("Grade B");
// } else if(a<=59 && a>30){
//         console.log("Grade C");
// } else{
//         console.log("Grade D");
// }



// function grade(a){
//     if(a>79){
//             console.log("Grade A");
//     } else if(a>59){
//             console.log("Grade B");
//     } else if(a>30){
//             console.log("Grade C");
//     } else{
//             console.log("Grade D");
//     }
// }
// grade(75);