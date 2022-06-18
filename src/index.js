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
