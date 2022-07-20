import { addToLocalStorage, getFromLocalStorage } from './accessLocalStorage';
import { arrayToDo } from './ArrayToDoList';
import clearDisplay from './clearDisplay';

function createDiv(name) {
  const layer = document.createElement('div');
  layer.className = `${name}`;
  return layer;
}
function createToDoDiv(list, name) {
  const layer = createDiv(name);
  layer.append(list[`${name}`]);
  return layer;
}

function addClassCheckedChecklist(layer) {
  layer.classList.remove('unchecked');
  layer.classList.add('checked');
}
function addClassUncheckedChecklist(layer) {
  layer.classList.remove('checked');
  layer.classList.add('unchecked');
}
function addChangeListener(elm, list, nameStorage) {
  elm.addEventListener('change', () => {
  // eslint-disable-next-line no-use-before-define
    checklistChange(elm, list, nameStorage);
  });
}
function checklistCondition(list, nameStorage) {
  const checklist = document.createElement('input');
  checklist.type = 'checkbox';
  checklist.id = 'checklist';
  addChangeListener(checklist, list, nameStorage);
  if (list.checklist === true) {
    checklist.checked = true;
  }
  if (list.checklist === false) {
    checklist.checked = false;
  }
  return checklist;
}

function toDoListLayer(list, nameStorage) {
  return {
    check: () => {
      const baseLayer = createDiv('checklistDiv');
      const layer = createDiv('checklist');
      layer.append(checklistCondition(list, nameStorage));
      baseLayer.append(layer);
      return baseLayer;
    },
    title: () => {
      const layer = createDiv('titleDiv');
      layer.append(createToDoDiv(list, 'title'));
      return layer;
    },
    desc: () => {
      const layer = createDiv('descDiv');
      layer.append(createToDoDiv(list, 'desc'));
      return layer;
    },
    dueDate: () => {
      const layer = createDiv('dueDateDiv');
      layer.append(createToDoDiv(list, 'dueDate'));
      return layer;
    },
    priority: () => {
      const layer = createDiv('priorityDiv');
      const priority = createToDoDiv(list, 'priority');

      function classedPriority(listPrio, prio) {
        if (listPrio.priority === 'Low') {
          prio.classList.add('low');
        } else if (listPrio.priority === 'Medium') {
          prio.classList.add('medium');
        } else {
          prio.classList.add('high');
        }
      }

      classedPriority(list, priority);

      layer.append(priority);
      return layer;
    },
  };
}

function textLimiter(obj, className, maxLength) {
  const layer = createDiv(`${className}`);
  if (obj.textContent.length > maxLength) {
    const textLimit = `${obj.textContent.substring(0, maxLength)}...`;
    layer.append(textLimit);
    return layer;
  }

  return obj;
}

function toDoListCard(list, nameStorage) {
  const layer = createDiv('toDoList');
  function checkChecklist() {
    if (list.checklist === true) {
      addClassCheckedChecklist(layer);
      return layer;
    }
    addClassUncheckedChecklist(layer);
    return layer;
  }
  return {
    allCard: () => {
      const layerChecked = checkChecklist();
      layerChecked.append(
        toDoListLayer(list, nameStorage).check(),
        toDoListLayer(list).title(),
        toDoListLayer(list).desc(),
        toDoListLayer(list).dueDate(),
        toDoListLayer(list).priority(),
        // eslint-disable-next-line no-use-before-define
        createDeleteListBtn(list, nameStorage),
      );
      return layerChecked;
    },
    titleCard: () => {
      const titleCard = toDoListLayer(list).title();
      layer.append(textLimiter(titleCard, 'title', 15));
      return layer;
    },
  };
}

function displayToDoList(targetClass, nameStorage) {
  const layerTarget = document.querySelector(`.${targetClass}`);
  let localSave = getFromLocalStorage(nameStorage);

  return {
    allCard: () => {
      localSave = getFromLocalStorage(nameStorage);
      localSave.forEach((list) => {
        layerTarget.append(toDoListCard(list, nameStorage).allCard());
      });
    },
    titleCard: () => {
      if (!localSave) return;
      localSave.forEach((list) => {
        layerTarget.append(toDoListCard(list, nameStorage).titleCard());
      });
    },
  };
}

function showToDoList(targetClass, nameStorage) {
  const layerTarget = document.querySelector(`.${targetClass}`);
  clearDisplay(layerTarget);
  displayToDoList(targetClass, nameStorage).allCard();
}

function showToDoListSidebar(targetClass, nameStorage) {
  const layerTarget = document.querySelector(`.${targetClass}`);
  clearDisplay(layerTarget);
  displayToDoList(targetClass, nameStorage).titleCard();
}

function fetchDataFromLocalStorage(targetOutputMain, nameStorage) {
  if (!localStorage.getItem(nameStorage)) {
    const layerTarget = document.querySelector('.outputSection');
    clearDisplay(layerTarget);
  } else {
    const layerTarget = document.querySelector('.outputSection');
    clearDisplay(layerTarget);
    showToDoList(targetOutputMain, nameStorage);
    showToDoListSidebar('myNoteList', 'myNotes');
    showToDoListSidebar('myProjectList', 'myProjects');
  }
}

function checklistChange(check, list, nameStorage) {
  console.log('checklistChanged');
  if (check.checked === true) {
    addClassCheckedChecklist(check.parentNode.parentNode.parentNode);
    arrayToDo.changeChecklist(list);
    addToLocalStorage(nameStorage, arrayToDo);
    fetchDataFromLocalStorage('outputSection', nameStorage);
  } else if (check.checked === false) {
    addClassUncheckedChecklist(check.parentNode.parentNode.parentNode);
    arrayToDo.changeChecklist(list);
    addToLocalStorage(nameStorage, arrayToDo);
    fetchDataFromLocalStorage('outputSection', nameStorage);
  }
}

function deleteListFunction(list, nameStorage) {
  arrayToDo.removeFromArrayList(list.title);
  addToLocalStorage(nameStorage, arrayToDo);
  fetchDataFromLocalStorage('outputSection', nameStorage);
}

function createDeleteListBtn(list, nameStorage) {
  const layer = createDiv('deleteBtnDiv');
  const delbtn = document.createElement('button');
  delbtn.id = 'deleteList';
  delbtn.onclick = () => {
    deleteListFunction(list, nameStorage);
  };
  layer.append(delbtn);
  return layer;
}

export { displayToDoList, fetchDataFromLocalStorage };
