import { format } from "date-fns";
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

    function findArrayList(findTitle){
       return arrayList.find(arr=>arr.title === findTitle)
    }

    function removeFromArrayList(removedTitle){
        return arrayList = arrayList.filter((array)=> array.title !== removedTitle);
    }

    function changeChecklist(checkedList){
        function findArrayListIndex(){
            return arrayList.findIndex((arr)=> arr.title === checkedList.title)
        }
        if (checkedList.checklist == true){
         return arrayList[findArrayListIndex()].checklist = false;
        }
        else if(checkedList.checklist == false){ 
            return arrayList[findArrayListIndex()].checklist = true;
        }
    }
    return {
        title,
        dueDate,
        priority,
        checklist,
        desc,
        findArrayList,
        changeChecklist,
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
            const formattedDate = format(new Date(document.getElementById('inputDate').value), 'dd MM yy');
            return formattedDate;
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
    //take the parameter from dom
    let task = addToDoList(inputToDo.title(),inputToDo.dueDate(), inputToDo.priority(), false , inputToDo.desc());
    
    //verify the input
    // verifyInput(task);
    console.log(verifyInput(task));
    //console.log(verifyInput(task));
    //add the variable of to do list to the aray 
     if (verifyInput(task) === true)  { 
        arrayToDo.addToArrayList(task);
        console.log(arrayToDo.showArrayList());
        resetForm();
        toggleOpenClose('inputForm');
        showToDoList('outputSection');
        showToDoListSidebar('myNoteList');
        autoUpdateDateInputDefault();
    }   
    else {
        resetForm();
        //toggle alert under the textarea
        alertMessage('Error duplicate title, try another title')
        autoUpdateDateInputDefault();
    }
}

function verifyInput(data){
    //check the array if there is any data.
    if(arrayToDo.showArrayList().length === 0) return true
    else return isTitleOk(data);
}

function isTitleOk(data){
    //console.log(data.title);
    if (arrayToDo.findArrayList(data.title)) return false
    else return true;
    //console.log(!arrayToDo.showArrayList().find(arr=>arr.title === data.title));
}

function alertMessage(text){
    alert(text)
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
            ()=>{   for (let list of arrayToDo.showArrayList().reverse()) {
                        layerTarget.append(toDoListCard(list).allCard());
                    }
                },
        titleCard:
            ()=>{   for (let list of arrayToDo.showArrayList().reverse()) {
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

function autoUpdateDateInputDefault(){
    const inputDate = document.getElementById('inputDate');
    inputDate.value = todaysDate();
}

function todaysDate(){
    const date = new Date();
    let todayPattern = format(date, 'yyyy-MM-dd')
    return todayPattern;
}

window.onload =()=> {
    submitInputForm();
    openFormBtn();
    autoUpdateDateInputDefault();
}

export {addToDoList, loopArray, clearDisplay,showToDoList, showToDoListSidebar, arrayToDo}
