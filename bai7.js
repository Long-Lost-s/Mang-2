let array=["hello", "hehe", "hi", "goodbye", "god", "peanut"];
function play() {
    let value=document.getElementById("key").value;
    let result="";
    for (let i = 0; i < array.length; i++) {
        if (value==array[i]){
            array.splice(i,1);
            break;
        }
    }
document.getElementById("result").innerHTML=array.join("-");
}