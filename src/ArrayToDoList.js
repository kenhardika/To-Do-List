import { getFromLocalStorage } from './accessLocalStorage';

// below line is disabled because it is right, storageName should be available to be reassigned
// eslint-disable-next-line import/no-mutable-exports
let storageName;
function setStorageName(name) {
  storageName = name;
}

function addToDoList(title, dueDate, priority, checklist, desc) {
  let arrayList;
  if (localStorage.getItem(storageName) === null) {
    arrayList = [];
  } else {
    arrayList = getFromLocalStorage(storageName);
  }
  function updateArrayList() {
    if (localStorage.getItem(storageName) === null) {
      arrayList = [];
    } else {
      arrayList = getFromLocalStorage(storageName);
    }
  }
  function showArrayList() {
    return arrayList;
  }

  function addToArrayList(data) {
    updateArrayList();
    arrayList.push(data);
  }

  function findArrayList(findTitle) {
    updateArrayList();
    return arrayList.find((arr) => arr.title === findTitle);
  }

  function removeFromArrayList(removedTitle) {
    updateArrayList();
    arrayList = arrayList.filter((array) => array.title !== removedTitle);
  }

  function changeChecklist(checkedList) {
    updateArrayList();

    function findArrayListIndex() {
      return arrayList.findIndex((arr) => arr.title === checkedList.title);
    }
    if (checkedList.checklist === true) {
      arrayList[findArrayListIndex()].checklist = false;
    } else if (checkedList.checklist === false) {
      arrayList[findArrayListIndex()].checklist = true;
    }
  }
  return {
    title,
    dueDate,
    priority,
    checklist,
    desc,
    findArrayList,
    changeChecklist,
    showArrayList,
    addToArrayList,
    removeFromArrayList,
    updateArrayList,
  };
}

const arrayToDo = addToDoList();

export {
  setStorageName, addToDoList, arrayToDo, storageName,
};
