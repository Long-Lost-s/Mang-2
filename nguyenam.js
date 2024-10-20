// let num=[-4, 7, -11, 19, 6, -5, 3, -96, -19];
// let count=0;
// for (let i = 0; i < num.length; i++) {
//     if (num[i]<0){
//         count++;
//     }
// }
// document.write(count);

let array=["hello", "hehe", "hi", "goodbye", "god", "peanut"];
function play() {
    let value=document.getElementById("key").value;
    let result="";
    for (let i = 0; i < array.length; i++) {
        if (value==array[i]){
            result="V in the array";
            break;
        }else {
            result="V not in the array";
        }
    }
    document.getElementById("result").innerHTML=result;
}
