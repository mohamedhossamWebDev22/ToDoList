function clck(){
    for (i = 0; i < clo.length; i++){
        clo[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";

            console.log("Remove");
            localStorage.ws = tasks.innerHTML;
        }

        console.log('explore');
    }
}

class task{
    constructor (){
    }

    add(){
        if (inputTxt.value == "") {
            alert('U most type something!!');
        }
        else{
            tasks.innerHTML += `<div class="task"><label class="txt">
            ${inputTxt.value}</label>
            <input type="button" class="close" value="&#10003;"></div>`;

            clck();

            inputTxt.value = "";

            console.log('Added a task');

            localStorage.ws = tasks.innerHTML;
        }
    }
}


//Data
let addBtn = document.getElementById("add"),
tasks = document.getElementById("tasks"),
inputTxt = document.getElementById("inputTxt");
const tsk = document.getElementsByClassName("task"),
clo = document.getElementsByClassName("close");
let taskObj = new task("inputTxt", "task", "tasks");



//WebStorage

//Events
addBtn.onclick = function (){taskObj.add()};

window.onload = function () {
    if (localStorage.length > 0){
        console.log(localStorage.ws);
        tasks.innerHTML = localStorage.ws;

        for (i = 0; i < clo.length; i++){
            clo[i].onclick = function () {
                var div = this.parentElement;
                div.style.display = "none";
    
                console.log("Remove");
                localStorage.ws = tasks.innerHTML;
            }
    
            console.log('explore');
        }
    }
    else{
        console.log('Welcome');
    }
}