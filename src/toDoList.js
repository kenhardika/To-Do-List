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

function createDeleteListBtn(list, nameStorage){
    const layer = createDiv('deleteBtnDiv');
    const delbtn = document.createElement('button');
    delbtn.id='deleteList';
    delbtn.onclick = ()=>{ deleteListFunction(list, nameStorage) };
    layer.append(delbtn);
    return layer;
}

function deleteListFunction(list, nameStorage){
    arrayToDo.removeFromArrayList(list.title);
    addToLocalStorage(nameStorage);
    showToDoList('outputSection', nameStorage);
    showToDoListSidebar('myNoteList', nameStorage);
}

function toDoListLayer(list, nameStorage){
    return {
        check: ()=> {
            const baseLayer = createDiv('checklistDiv');
            const layer = createDiv('checklist');
            layer.append(checklistCondition(list, nameStorage));
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

function checklistCondition(list, nameStorage){
    const checklist = document.createElement('input');
    checklist.type='checkbox';
    checklist.id='checklist';
    checklist.addEventListener('change', ()=>{ checklistChange(checklist, list, nameStorage)});
    
    if(list.checklist == true){
        checklist.checked = true;
        return checklist;
    }
    else if(list.checklist == false) {
        checklist.checked = false;
        return checklist;
    }
}

function checklistChange(check, list, nameStorage){
    if (check.checked === true) {
       // console.log(nameStorage);
        addClassCheckedChecklist(check.parentNode.parentNode.parentNode);
        arrayToDo.changeChecklist(list);
        addToLocalStorage(nameStorage);
    }
    else if (check.checked === false){
        //console.log(nameStorage);
        addClassUncheckedChecklist(check.parentNode.parentNode.parentNode);
        arrayToDo.changeChecklist(list);
        addToLocalStorage(nameStorage);
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

function toDoListCard(list, nameStorage){ 
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
            layerChecked.append(toDoListLayer(list, nameStorage).check(), toDoListLayer(list).title(), toDoListLayer(list).desc(), toDoListLayer(list).dueDate(), toDoListLayer(list).priority(), createDeleteListBtn(list, nameStorage));
            return layerChecked },
        titleCard: ()=>{
            let titleCard = toDoListLayer(list).title(); 
            layer.append(textLimiter(titleCard, 'title', 15)); //with limited text.length on sidebar
            return layer } 
    };
}


export {toDoListCard, toDoListLayer}