console.log('here we are');

//gather data input tempelate
function addToDoList(title, dueDate, priority = 'Low', checklist = false){ 
    return {
        title,
        dueDate,
        priority,
        checklist
    }
}

//create Array to save to do list tempelate
function arrayToDoList() {
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

    return{
        arrayList,
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
            const input = document.getElementById('inputDate');
            return input.value
        },
        priority: ()=>{ 
            const input = document.getElementById('inputPriority');
            return input.value
        }
    }
}

function resetForm() {
    const input = document.querySelectorAll('[data-input = "userInput"]');
    input.forEach((inp) => { return inp.value = null });
}

//The Logic after you click add 
const arrayToDo = arrayToDoList();
const inputToDo = getInput();

function actionNewToDoList(e){
    e.preventDefault();
    //create To Do List
    //take the parameter from dom
    let task = addToDoList(inputToDo.title(),inputToDo.dueDate(), inputToDo.priority());
    //add the variable of to do list to the aray 
    arrayToDo.addToArrayList(task);
    console.log(arrayToDo.showArrayList());
    resetForm();
    toggleOpenClose('inputForm');
    //console.log(fetchToDoList('dueDate').toString());
    displayToDoList('outputSection');
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
    const toggle = document.querySelector(`.${target}`);
        
        if (toggle.hasAttribute('close','')) {
            toggle.removeAttribute('close');
            toggle.setAttribute('open','');
        }
        else{
            toggle.removeAttribute('open');
            toggle.setAttribute('close','');
        }
}

function fetchToDoList(dataType) {
    //get the To Do List from array
    return arrayToDo.arrayList.map((array)=>{ return array[dataType]});
}

function displayToDoList(targetClass) {
    const layerTarget = document.querySelector(`.${targetClass}`);
    clearDisplay(layerTarget);
    const text = fetchToDoList('title').toString();
    // text.className ='displayText';
    return layerTarget.append(text);
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

export {addToDoList, arrayToDoList}
