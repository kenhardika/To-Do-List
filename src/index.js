import './style.css';
console.log('here we are');


function addToDoList(title, desc, dueDate, priority){

    const notPrint = () => { 
        console.log('should not be printed if this not called');
     }

    return {
        title,
        desc,
        dueDate,
        priority,
        showTitle(){
            return `THIS IS THE TITLE ${title}`;
            }
    }
}

const test = addToDoList('The Title Is a Title', 'This is a title description', '12/12/12', 'PRIORITY NUMBER ONE');
console.log(test.showTitle());
console.log('TESTING');


class ArrayToDoList {
    constructor(){
        this.array = [];
    }

    pushToArray(elem){
        this.array.push(elem);
        console.log(this.array);
    }

    callTheArray() {
        return this.array;
    }
}

const addToArray = new ArrayToDoList();
addToArray.pushToArray(test);
const kids = addToDoList('Bangun Pagi', 'Wake up in the morning for school', 'everyday', 'High');
addToArray.pushToArray(kids);


function arrayToDo() {
    let arrayList = [];
    return{
        addToArrayList: (element)=> { arrayList.push(element) },
        showArrayList: console.log(arrayList),
        arrayList
    }
}

const myArray = arrayToDo();
myArray.addToArrayList('data1');
myArray.addToArrayList('data2');
console.log(myArray.arrayList)
