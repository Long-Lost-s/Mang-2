function play() {
    let array=[];
    let value=document.getElementById("key").value;
    let s = value.split(",");
    for (let i = 0; i < s.length; i++) {
        array.push(s[i]);
    }
    array.sort((a,b)=>{
        return b - a;
})
    document.getElementById("result").innerHTML=array.join("-");
}