import { format } from "date-fns";
import { showToDoListSidebar } from "./sidebar";
import { toDoListCard } from "./toDoList";

let storageName;
function setStorageName(name){
    storageName = name;
}

function onLoadStart(setStrgName){
    openFormBtn();
    setStorageName(setStrgName);
    submitInputForm();
    autoUpdateDateInputDefault();
    fetchDataFromLocalStorage('outputSection', storageName);
    myNotesPage();
    myProjectsPage();
}
onLoadStart('myNotes');
//gather data input tempelate

function addToDoList(title, dueDate, priority, checklist, desc){ 
    let arrayList;
    if(localStorage.getItem(storageName) === null) {
        arrayList = [];
    } else {
        arrayList = getFromLocalStorage(storageName);
    }
    
    function showArrayList(){
        return arrayList;
    }

    function addToArrayList(data){
        updateArrayList();
        arrayList.push(data); 

    }

    function updateArrayList(){
        if(localStorage.getItem(storageName) === null) {
            arrayList = [];
        } else {
            arrayList = getFromLocalStorage(storageName);
        }
    }

    function findArrayList(findTitle){
        updateArrayList();
        return arrayList.find(arr=>arr.title === findTitle)
    }

    function removeFromArrayList(removedTitle){
        updateArrayList();
        return arrayList = arrayList.filter((array)=> array.title !== removedTitle);
    }

    function changeChecklist(checkedList){
        updateArrayList();
        
        function findArrayListIndex(){
            return arrayList.findIndex((arr)=> arr.title === checkedList.title)
        }
        if (checkedList.checklist == true){
            arrayList[findArrayListIndex()].checklist = false;
        }
        else if(checkedList.checklist == false){ 
            arrayList[findArrayListIndex()].checklist = true;
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
        removeFromArrayList, 
        updateArrayList
    }
}


const getInput = () => {
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
    //add the variable of to do list to the aray 
     if (verifyInput(task) === true)  { 
        arrayToDo.addToArrayList(task);
        addToLocalStorage(storageName);
        fetchDataFromLocalStorage('outputSection', storageName);
        resetForm();
        toggleOpenClose('inputForm');
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
    if (arrayToDo.findArrayList(data.title)) return false
    else return true;
}

function alertMessage(text){
    alert(text)
}

function addToLocalStorage(storageName){
        localStorage.setItem(storageName, JSON.stringify(arrayToDo.showArrayList()));
        let arrayLocal = localStorage.getItem(storageName);
        return arrayLocal
}

function getFromLocalStorage(storageName){
    if(!localStorage.getItem(storageName)) return 
    else{
        let arrayLocal = localStorage.getItem(storageName);
        return JSON.parse(arrayLocal);}
}

function fetchDataFromLocalStorage(targetOutputMain, nameStorage){
    if(!localStorage.getItem(nameStorage)) 
        {
            const layerTarget = document.querySelector(`.outputSection`);
            clearDisplay(layerTarget);
        }
    else{
        const layerTarget = document.querySelector(`.outputSection`);
        clearDisplay(layerTarget);
        showToDoList(targetOutputMain, nameStorage); 
        showToDoListSidebar('myNoteList', 'myNotes');
        showToDoListSidebar('myProjectList', 'myProjects');
    }
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
    let localSave = getFromLocalStorage(nameStorage);

    return{ 
        allCard: 
            ()=>{
                localSave = getFromLocalStorage(nameStorage);
                for (let list of localSave) {
                        layerTarget.append(toDoListCard(list, nameStorage).allCard());
                    }
                },
        titleCard:
            ()=>{
                if (!localSave) return 
                else{
                    for (let list of localSave) {
                            layerTarget.append(toDoListCard(list, nameStorage).titleCard());
                        }}
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

function buttonChangeClicked(myBtn, otherBtn){
    if(myBtn.classList.contains('toggledOn')){
         return
     } 
     else if(!myBtn.classList.contains('toggledOn')) {
        otherBtn.classList.remove('toggledOn');    
        myBtn.classList.add('toggledOn');
     }
}

function myNotesPage(){
    const myNotesBtn = document.getElementById('myNotesBtn');
    const myProjectsBtn = document.getElementById('myProjectsBtn');
    myNotesBtn.onclick = ()=>{ 
        setStorageName('myNotes');
        fetchDataFromLocalStorage('outputSection', storageName);
        buttonChangeClicked(myNotesBtn, myProjectsBtn);
    }
}

function myProjectsPage(){
    const myProjectsBtn = document.getElementById('myProjectsBtn');
    const myNotesBtn = document.getElementById('myNotesBtn');
    myProjectsBtn.onclick = ()=>{ 
        setStorageName('myProjects');
        fetchDataFromLocalStorage('outputSection', storageName);
        buttonChangeClicked( myProjectsBtn, myNotesBtn);
    }
}

export {addToDoList, loopArray, clearDisplay,showToDoList, showToDoListSidebar, arrayToDo, addToLocalStorage, getFromLocalStorage, fetchDataFromLocalStorage, storageName}
