import './style.css';
console.log('here we are');


function addToDoList(title, desc, dueDate, priority){

    const showTitle = () => {console.log(title)};


    return {
        showTitle,
        desc,
        dueDate,
        priority
    }

}

const test = addToDoList('The Title Is a Title', 'This is a title description', '12/12/12', 'PRIORITY NUMBER ONE');

test.showTitle();
console.log(test.desc);
