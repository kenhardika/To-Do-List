import { format } from "date-fns";
import { showToDoListSidebar } from "./sidebar";
import { toDoListCard } from "./toDoList";

console.log('here we are');
const storageName = 'arrayNotes';
//gather data input tempelate
function addToDoList(title, dueDate, priority, checklist, desc, nameStorage){ 
    let arrayList;
    console.log(storageName);
    if(localStorage.getItem(storageName)===null) {
        arrayList = [];
        console.log(arrayList);
    } else {
        arrayList = getFromLocalStorage(storageName);
        console.log(arrayList);
    }
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
        //arrayList = getFromLocalStorage(nameStorage);
        //console.log(nameStorage);
        function findArrayListIndex(){
            return arrayList.findIndex((arr)=> arr.title === checkedList.title)
        }
        if (checkedList.checklist == true){
            console.log(arrayList);
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
    let task = addToDoList(inputToDo.title(),inputToDo.dueDate(), inputToDo.priority(), false , inputToDo.desc(), storageName);
    //verify the input
    //add the variable of to do list to the aray 
     if (verifyInput(task) === true)  { 
        arrayToDo.addToArrayList(task);
        console.log(arrayToDo.showArrayList());
        addToLocalStorage(storageName);
        resetForm();
        toggleOpenClose('inputForm');
        showToDoList('outputSection', storageName);
        showToDoListSidebar('myNoteList', storageName);
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
    if(!arrayToDo.showArrayList()) return true;
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

function addToLocalStorage(storageName){
    localStorage.setItem(storageName, JSON.stringify(arrayToDo.showArrayList()));
    let arrayLocal = localStorage.getItem(storageName);
    console.log(JSON.parse(arrayLocal));
}

function getFromLocalStorage(storageName){
        let arrayLocal = localStorage.getItem(storageName);
        return JSON.parse(arrayLocal);
}

function fetchDataFromLocalStorage(targetOutputMain, nameStorage, targetOutputSidebar){
    if(!localStorage.getItem(nameStorage)) return;
    else
    showToDoList(targetOutputMain, nameStorage);
    showToDoListSidebar(targetOutputSidebar, nameStorage);
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

function showToDoList(targetClass, nameStorage) {
    const layerTarget = document.querySelector(`.${targetClass}`);
    clearDisplay(layerTarget);
    loopArray(targetClass, nameStorage).allCard();
}

function loopArray(targetClass, nameStorage) {
    const layerTarget = document.querySelector(`.${targetClass}`);
    const localSave = getFromLocalStorage(nameStorage);
    //console.log(localSave);
    return{ 
        allCard: 
            ()=>{
                //console.log(getFromLocalStorage(nameStorage));   
                for (let list of localSave) {
                        layerTarget.append(toDoListCard(list, nameStorage).allCard());
                    }
                },
        titleCard:
            ()=>{
                //console.log(getFromLocalStorage(nameStorage));   
                for (let list of localSave) {
                        layerTarget.append(toDoListCard(list, nameStorage).titleCard());
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
    fetchDataFromLocalStorage('outputSection', storageName, 'myNoteList');
}

export {addToDoList, loopArray, clearDisplay,showToDoList, showToDoListSidebar, arrayToDo, addToLocalStorage, getFromLocalStorage, storageName}
