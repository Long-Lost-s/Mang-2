let eng=["tall", "short", "long", "small", "god", "peanut"];
let vie=["cao", "thap", "dai", "nho", "chua", "lac"];
function trans() {
   let index=-1;
   let value=document.getElementById("lang").value;
   let content="";
    for (let i = 0; i < eng.length; i++) {
        if (value==eng[i]){
            index=i;
            break;
        }
    }
    if (index>-1){
        content=vie[index];
    }else {
        content="khong tim thay";
    }
    document.getElementById("result").innerHTML=content;
}
// function trans() {
//     let index=-1;
//     let value=document.getElementById("lang").value;
//     let content="";
//     for (let i = 0; i < eng.length; i++) {
//        if (value==eng[i]){
//            index=i;
//            break;
//        }
//     }
//     if (index>-1){
//         content=vie[index];
//     } else {
//         content="khong tim thay";
//     }
//     document.getElementById("result").innerHTML=content;
// }
