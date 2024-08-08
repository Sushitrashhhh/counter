const decreaseBt = document.getElementById("DEC");
const resetBt = document.getElementById("reset");
const increaseBt = document.getElementById("INC");
const countLable = document.getElementById("countLable");

let count = 0;

increaseBt.onclick = function(){
    count++;
    countLable.textContent=count;
}

decreaseBt.onclick = function(){
    count--;
    countLable.textContent=count;
}

resetBt.onclick = function(){
    count=0;
    countLable.textContent=count;
}