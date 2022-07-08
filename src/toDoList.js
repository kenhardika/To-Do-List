import { arrayToDo, showToDoList, showToDoListSidebar } from ".";

function createDiv(name){
    const layer = document.createElement('div');
    layer.className = `${name}`;
    return layer;
}
function createToDoDiv(list, name){
    const layer = createDiv(name);
    layer.append(list[`${name}`]);
    return layer;
}

function createDeleteListBtn(list){
    const layer = createDiv('deleteBtnDiv');
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
            const baseLayer = createDiv('checklistDiv');
            const layer = createDiv('checklist');
            layer.append(checklistCondition(list));
            baseLayer.append(layer);
            return baseLayer; 
        },
        title: ()=> {
            const layer = createDiv('titleDiv');
            layer.append(createToDoDiv(list, 'title'));
            return layer},
        desc: ()=> { 
            const layer = createDiv('descDiv');
            layer.append(createToDoDiv(list, 'desc'));
            return layer}, 
        dueDate: ()=> { 
            const layer = createDiv('dueDateDiv');
            layer.append(createToDoDiv(list, 'dueDate'));
            return layer},
        priority: ()=> { 
            const layer = createDiv('priorityDiv');
            layer.append(createToDoDiv(list, 'priority'));
            return layer}
    }
}

function checklistCondition(list){
   //function addChecklist() {
  //  const layerChecklist = createDiv('layerChecklist');
    const checklist = document.createElement('input');
    checklist.type='checkbox';
    checklist.id='checklist';
    checklist.addEventListener('change', ()=>{ checklistChange(checklist, list)});
    
    if(list.checklist == true){
        checklist.checked = true;
        return checklist;
    }
    else if(list.checklist == false) {
        checklist.checked = false;
        return checklist;
    }


     //  layerChecklist.append(checklist);
    //return checklist
    //}
    
    // if (list.checklist == false) return '✕'; //should be radio button
    // else return '✓';
}

function checklistChange(check, list){
//console.log(check.checked);
    if (check.checked === true) {
        //checkboxChecked(check);
        arrayToDo.changeChecklist(list);
    //    console.log(arrayToDo.showArrayList());
    }
    else if (check.checked === false){
        // checkboxUnchecked(check);
        arrayToDo.changeChecklist(list);
        //console.log(arrayToDo.showArrayList());
    }
}

function checkboxChecked(check){
    // checkboxes.forEach((ar)=>{ return ar.parentNode.parentNode.parentNode.classList.add('checked') })
    //list.checklist = true;
    check.parentNode.parentNode.style.backgroundColor="green";
}

function checkboxUnchecked(check){
    //checkboxes.forEach((ar)=>{ return ar.parentNode.parentNode.parentNode.classList.add('unchecked') });
    //list.checklist = false;
    check.parentNode.parentNode.style.backgroundColor="whitesmoke";
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

function toDoListCard(list){
    const layer = createDiv('toDoList');
    return {
        allCard: ()=>{
            layer.append(toDoListLayer(list).check(), toDoListLayer(list).title(), toDoListLayer(list).desc(), toDoListLayer(list).dueDate(), toDoListLayer(list).priority(), createDeleteListBtn(list));
            return layer },
        titleCard: ()=>{
            let titleCard = toDoListLayer(list).title(); 
            layer.append(textLimiter(titleCard, 'title', 10)); //with limited text.length on sidebar
            return layer } 
    };
}


export {toDoListCard, toDoListLayer}