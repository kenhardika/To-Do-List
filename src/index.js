console.log('here we are');

//page start
function onLoadHeader() {
    const header = document.querySelector('.header');
    const headerContainer = document.createElement('div');
    const headerTitle = document.createElement('p');
    const headerTitleDesc = document.createElement('p');

    headerContainer.className='headerContainer';
    headerTitle.className='headerTitle';
    headerTitle.textContent='The Notes';
    headerTitleDesc.className='headerTitleDesc';
    headerTitleDesc.textContent='To-Do-List for your Daily Activity';

    headerContainer.append(headerTitle,headerTitleDesc);

    header.append(headerContainer);
}


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





const grabDataFrom = () => {
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

//The Logic after you click add 
const arrayToDo = arrayToDoList();
const grabDataInput = grabDataFrom();


function actionNewToDoList(e){
    e.preventDefault();
    //create To Do List
    //take the parameter from dom
    let task = addToDoList(grabDataInput.title(),grabDataInput.dueDate(), grabDataInput.priority());
    //add the variable of to do list to the aray 
    arrayToDo.addToArrayList(task);
    console.log(arrayToDo.showArrayList());
    resetForm()
}

function submitInputForm() {
    const mainbar = document.querySelector('.mainbar');
    mainbar.addEventListener('submit', actionNewToDoList);
  }

window.onload =()=> {
    //onLoadPageStructure();
    onLoadHeader();
    submitInputForm();
}

export {addToDoList, arrayToDoList}
