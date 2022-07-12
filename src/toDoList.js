import { addToLocalStorage, arrayToDo, showToDoList, showToDoListSidebar } from ".";

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
    delbtn.onclick = ()=>{ deleteListFunction(list) };
    layer.append(delbtn);
    return layer;
}

function deleteListFunction(list){
    arrayToDo.removeFromArrayList(list.title);
    addToLocalStorage();
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
            const priority = createToDoDiv(list, 'priority');
            
            function classedPriority(list, prio) {
                if (list.priority === "Low") {      
                    prio.classList.add('low');
                }   
                else if(list.priority === "Medium"){
                    prio.classList.add('medium');
                }
                else{
                    prio.classList.add('high');
                }
            }

            classedPriority(list, priority);

            layer.append(priority);
            return layer}
    }
}

function checklistCondition(list){
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
}

function checklistChange(check, list){
    if (check.checked === true) {
        addClassCheckedChecklist(check.parentNode.parentNode.parentNode);
        arrayToDo.changeChecklist(list);
        addToLocalStorage();
    }
    else if (check.checked === false){
        addClassUncheckedChecklist(check.parentNode.parentNode.parentNode);
        arrayToDo.changeChecklist(list);
        addToLocalStorage();
    }
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

function addClassCheckedChecklist(layer){
    layer.classList.remove('unchecked');
    layer.classList.add('checked');
}
function addClassUncheckedChecklist(layer){
    layer.classList.remove('checked');
    layer.classList.add('unchecked');
}

function toDoListCard(list){ 
    const layer = createDiv('toDoList');
    function checkChecklist(){
        if (list.checklist === true){
            addClassCheckedChecklist(layer);
            // layer.style.border='2px solid green'; //could create sub class for this particular style
            return layer
        } else { 
           addClassUncheckedChecklist(layer);
            //layer.style.border='2px solid var(--orangeTangerine)';
            return layer
         }
    }
    return {
        allCard: ()=>{
            const layerChecked = checkChecklist();
            layerChecked.append(toDoListLayer(list).check(), toDoListLayer(list).title(), toDoListLayer(list).desc(), toDoListLayer(list).dueDate(), toDoListLayer(list).priority(), createDeleteListBtn(list));
            return layerChecked },
        titleCard: ()=>{
            let titleCard = toDoListLayer(list).title(); 
            layer.append(textLimiter(titleCard, 'title', 15)); //with limited text.length on sidebar
            return layer } 
    };
}


export {toDoListCard, toDoListLayer}