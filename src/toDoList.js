import { arrayToDo, showToDoList, showToDoListSidebar } from ".";

function createDiv(name){
    const layer = document.createElement('div');
    layer.className = `${name}`;
    return layer;
}
function createToDoDiv(list, name){
    const layer = createDiv(name);
    // console.log(typeof(list[name]));
    layer.append(list[`${name}`]);
    return layer;
}

function createDeleteListBtn(list){
    const layer = createDiv('deleteThisList');
    const delbtn = document.createElement('button');
    delbtn.id='deleteList';
    delbtn.textContent='delete';
    delbtn.onclick = ()=>{ deleteListFunction(list) };
    layer.append(delbtn);
    return layer;
}

function deleteListFunction(list){
    arrayToDo.removeFromArrayList(list.title);
    showToDoList('outputSection');
    showToDoListSidebar('myNoteList');
}

function toDoListLayer(list){
    return {
        check: ()=> {
            const layer = createDiv('checklist');
            layer.append(checklistCondition(list));
            return layer; 
        },
        title: ()=> { return createToDoDiv(list, 'title')},
        desc: ()=> { return createToDoDiv(list, 'desc')}, 
        dueDate: ()=> { return createToDoDiv(list, 'dueDate')},
        priority: ()=> { return createToDoDiv(list, 'priority')}
    }
}

function checklistCondition(list){
    if (list.checklist == false) return '✕'; //should be radio button
    else return '✓';
}

function textLimiter(obj, className, maxLength) {
    const layer = createDiv(`${className}`);
    if(obj.textContent.length > maxLength){
        const textLimit = obj.textContent.substring(0, maxLength) + "...";
        layer.append(textLimit);
        return layer;
    }
    else{
        return obj;
    }
};

//change so it can be partial wheter you wanna append title only
function toDoListCard(list){
    const layer = createDiv('toDoList');
    return {
        allCard: ()=>{
            layer.append(toDoListLayer(list).check(), toDoListLayer(list).title(), toDoListLayer(list).desc() , toDoListLayer(list).dueDate(), toDoListLayer(list).priority(), createDeleteListBtn(list));
            return layer },
        titleCard: ()=>{
            let titleCard = toDoListLayer(list).title(); 
            layer.append(textLimiter(titleCard, 'title', 10)); //with limited text.length on sidebar
            return layer } 
    };
}


export {toDoListCard, toDoListLayer}