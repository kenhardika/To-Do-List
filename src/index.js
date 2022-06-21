console.log('here we are');

//page start
function onLoadPageStructure() {
    const header = document.createElement('div');
    const main = document.createElement('div');
    const footer = document.createElement('div');
    const container = document.createElement('div');

    header.className='header';
    main.className='main';
    footer.className='footer';
    container.className='container';

    container.append(header, main, footer);
    document.body.append(container);
    console.log('page loaded successfully')
};


//gather data input tempelate
function addToDoList(title, desc = '', dueDate, priority = 'Low', checklist = false){ 
    return {
        title,
        desc,
        dueDate,
        priority,
        checklist
    }
}

//create Array to save to do list tempelate
function arrayToDoList() {
    let arrayList = [];

    function showArrayList(){
        console.log(arrayList);
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



//The Logic after you click add 
const arrayToDo = arrayToDoList();
//const grabDataInput = grabDataFrom();

const grabDataFrom = () => {
    //const grabData = document.querySelector('input');
    return {
        title: "inputTitle.value",
        desc: "inputDesc.value",
        dueDate: "inputDueDate.value",
        priority: "inputPriority.value",
        checklist: "inputChecklist.value"
    }
}

function actionNewToDoList(){
    //create To Do List
    //take the parameter from dom
    let task = addToDoList('Jemput', 'Jemput keluarga besar di bandara', '09:00 - 12/12/12');
    //add the variable of to do list to the aray 
    arrayToDo.addToArrayList(task);
    arrayToDo.showArrayList(); 
}

actionNewToDoList();

// const task1 = addToDoList('Jemput', 'Jemput keluarga besar di bandara', '09:00 - 12/12/12');
// console.log(task1)
// const myObj = { title: 'Jemput', desc: 'Jemput keluarga besar di bandara', dueDate: '09:00 - 12/12/12', priority: 'Urgent'};
// console.log(myObj);

////// IF U USE CLASS
// class ArrayToDoList {
//     constructor(){
//         this.array = [];
//     }

//     pushToArray(elem){
//         this.array.push(elem);
//         console.log(this.array);
//     }

//     callTheArray() {
//         return this.array;
//     }
// }

// const addToArray = new ArrayToDoList();
// addToArray.pushToArray(test);
// addToArray.pushToArray(kids);


window.onload =()=> {
    onLoadPageStructure();
}

export {addToDoList, arrayToDoList}
