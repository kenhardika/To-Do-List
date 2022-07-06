import { showToDoListSidebar } from "./sidebar";
import { toDoListCard } from "./toDoList";

console.log('here we are');

//gather data input tempelate
function addToDoList(title, dueDate, priority, checklist, desc){ 
    let arrayList = [];

    function showArrayList(){
        return arrayList;
     }

    function addToArrayList(data){
        arrayList.push(data) 
    }

    function removeFromArrayList(removedTitle){
        return arrayList = arrayList.filter((array)=> array.title !== removedTitle);
    }

    return {
        title,
        dueDate,
        priority,
        checklist,
        desc,
        showArrayList,
        addToArrayList,
        removeFromArrayList
    }
}

const getInput = () => {
    //const grabData = document.querySelector('input');
    return {
        title: ()=>{ 
            const input = document.getElementById('inputTitle');
            return input.value
        },
        dueDate: ()=>{ 
            const input = new Date(document.getElementById('inputDate').value);
            return ` ${input.getDate()} - ${input.getMonth()+1} - ${input.getFullYear()} ` ; //should try moment.js later
        },
        priority: ()=>{ 
            const input = document.getElementById('inputPriority');
            return input.value
        },
        desc: ()=>{
            const input = document.getElementById('description');
            return input.value
        }
    }
}

function resetForm() {
    const input = document.querySelectorAll('[data-input = "userInput"]');
    input.forEach((inp) => { return inp.value = null });
}

//The Logic after you click add 
const arrayToDo = addToDoList();
const inputToDo = getInput();

function actionNewToDoList(e){
    e.preventDefault();
    //create To Do List
    //take the parameter from dom
    let task = addToDoList(inputToDo.title(),inputToDo.dueDate(), inputToDo.priority(), false , inputToDo.desc());
    //add the variable of to do list to the aray 
    arrayToDo.addToArrayList(task);
    console.log(arrayToDo.showArrayList());
    resetForm();
    toggleOpenClose('inputForm');
    showToDoList('outputSection');
    showToDoListSidebar('myNoteList');
}

function submitInputForm() {
    const mainbar = document.querySelector('.mainbar');
    mainbar.addEventListener('submit', actionNewToDoList);
  }

function openFormBtn(){
    const btn = document.getElementById('openFormInputBtn');
    btn.addEventListener('click', ()=>{ toggleOpenClose('inputForm') });
}

function toggleOpenClose(target){
    const toggle = document.querySelectorAll(`.${target}`);
    toggle.forEach( (elm)=>{
        if (elm.hasAttribute('close','')) {
            elm.removeAttribute('close');
            elm.setAttribute('open','');
        }
        else{
            elm.removeAttribute('open');
            elm.setAttribute('close','');
        }});
}

function showToDoList(targetClass) {
    const layerTarget = document.querySelector(`.${targetClass}`);
    clearDisplay(layerTarget);
    loopArray(targetClass).allCard();
}

function loopArray(targetClass) {
    const layerTarget = document.querySelector(`.${targetClass}`);
    return{ 
        allCard: 
            ()=>{   for (let list of arrayToDo.showArrayList()) {
                        layerTarget.append(toDoListCard(list).allCard());
                    }
                },
        titleCard:
            ()=>{   for (let list of arrayToDo.showArrayList()) {
                        layerTarget.append(toDoListCard(list).titleCard());
                    }
                }
    }
}

function clearDisplay(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

window.onload =()=> {
    submitInputForm();
    openFormBtn();
}

export {addToDoList, loopArray, clearDisplay,showToDoList, showToDoListSidebar, arrayToDo}
