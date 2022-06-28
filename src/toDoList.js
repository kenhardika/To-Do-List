function createDiv(name){
    const layer = document.createElement('div');
    layer.className = `${name}`;
    return layer
}
function createToDoDiv(list, name){
    const layer = createDiv(name);
    layer.append(list[`${name}`]);
    return layer
}

function toDoListLayer(list){
    return {
        check: ()=> { return createToDoDiv(list, 'checklist')},
        title: ()=> { return createToDoDiv(list, 'title')},
        dueDate: ()=> { return createToDoDiv(list, 'dueDate')},
        priority: ()=> { return createToDoDiv(list, 'priority')}
    }
}

function toDoListCard(list){
    const layer = createDiv('toDoList');
    layer.append(toDoListLayer(list).check(), toDoListLayer(list).title(), toDoListLayer(list).dueDate(), toDoListLayer(list).priority());
    return layer
}


export default toDoListCard