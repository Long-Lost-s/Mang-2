function play() {
    let array1=[];
    let value=document.getElementById("key").value;
    let number=value.split(",");
    for (let i=0;i<number.length;i++){
        array1.push(number[i]);
    }
    let array2=[];
    let value2=document.getElementById("key1").value;
    let number2=value2.split(",");
    for (let i=0;i<number2.length;i++){
        array2.push(number2[i]);
    }
    let array3=[];
    array3=array1.concat(array2);
    document.getElementById("result").innerHTML=array3.join("-");
}