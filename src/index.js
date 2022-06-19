import './style.css';
console.log('here we are');

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

const myArray = arrayToDoList();

function actionNewToDoList(){

    //create Array for To Do List
    //create To Do List
    let task1 = addToDoList('Jemput', 'Jemput keluarga besar di bandara', '09:00 - 12/12/12');
    //add the variable of to do list to the aray 
    myArray.addToArrayList(task1);
    task1 = addToDoList('Pulang', 'Anter aja pak', '19:00 - 12/12/12');
   
    myArray.addToArrayList(task1);
    myArray.showArrayList(); 
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
