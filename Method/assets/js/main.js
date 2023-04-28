const input= document.querySelector("input");
const list=document.getElementById("list");
let name=[];
function button() {
    if(input.value.trim() !=""){
        if(name.includes(input.value.trim())==false){
            name.push(input.value.trim());
            input.value="";
            fillList();
        }
        else{
            alert("Bu adda istifadeci var")
        }
    }
    else{
        alert("Ad daxil et")
    }
}

function fillList() {
    let result=name.reduce(
        (result, value)=>result+=`<h2>${value}</h2>`,''
    );
    list.innerHTML=result;
}


