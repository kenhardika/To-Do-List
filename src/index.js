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
   // setSidebarList(selectSidebarLayer);
    submitInputForm();
    autoUpdateDateInputDefault();
    fetchDataFromLocalStorage('outputSection', storageName);
    //fetchDataFromLocalStorage('outputSection', 'myProjects', 'myProjectList');
    myNotesPage();
    myProjectsPage();
}
onLoadStart('myNotes');

//gather data input tempelate

function addToDoList(title, dueDate, priority, checklist, desc, nameStorage){ 
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
       arrayList.push(data); 
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
        console.log(arrayList[findArrayListIndex()]);
        if (checkedList.checklist == true){
           // console.log(arrayList);
            arrayList[findArrayListIndex()].checklist = false;
            console.log(arrayList[findArrayListIndex()].checklist);
            //console.log(arrayList);
        }
        else if(checkedList.checklist == false){ 
            //console.log(arrayList);
            arrayList[findArrayListIndex()].checklist = true;
            console.log(arrayList[findArrayListIndex()].checklist);
           // console.log(arrayList);
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
        //console.log(arrayToDo.showArrayList());
        addToLocalStorage(storageName);
        fetchDataFromLocalStorage('outputSection', storageName);
        resetForm();
        toggleOpenClose('inputForm');
        // showToDoList('outputSection', storageName);
        // showToDoListSidebar('myNoteList', 'myNotes');
        // showToDoListSidebar('myProjectList', 'myProjects'); 
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
    // else if(storageName ==! nameStorage){ //still not works this condition
    //     console.log('hit Sidebar Only for this ' + nameStorage);
    //     showToDoListSidebar(targetOutputSidebar, nameStorage);
    // }
    //else if(storageName === nameStorage){
    else{
        const layerTarget = document.querySelector(`.outputSection`);
        clearDisplay(layerTarget);
        //console.log('hit storage name and name input for storage match');
        showToDoList(targetOutputMain, nameStorage); 
//        showToDoListSidebar(targetOutputSidebar, nameStorage);
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

function myNotesPage(){
    const myNotesBtn = document.getElementById('myNotesBtn');   
    myNotesBtn.onclick = ()=>{ 
        //onLoadStart('myNotes', 'myNoteList');
        setStorageName('myNotes');
        console.log(storageName);
        fetchDataFromLocalStorage('outputSection', storageName);
    }
   // fetchDataFromLocalStorage('outputSection', storageName, 'myNoteList');
}

function myProjectsPage(){
    const myProjectsBtn = document.getElementById('myProjectsBtn');
    myProjectsBtn.onclick = ()=>{ 
        setStorageName('myProjects');
        console.log(storageName);
        fetchDataFromLocalStorage('outputSection', storageName);
        // onLoadStart('myProjects', 'myProjectList');
}
}

export {addToDoList, loopArray, clearDisplay,showToDoList, showToDoListSidebar, arrayToDo, addToLocalStorage, getFromLocalStorage, fetchDataFromLocalStorage, storageName}
