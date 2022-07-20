import { format } from 'date-fns';
// eslint-disable-next-line import/no-cycle
import { showToDoListSidebar } from './sidebar';
// eslint-disable-next-line import/no-cycle
import { toDoListCard } from './toDoList';

// eslint-disable-next-line import/no-mutable-exports
let storageName;
function setStorageName(name) {
  storageName = name;
}

function getFromLocalStorage(getStorageName) {
  if (!localStorage.getItem(getStorageName)) return;

  const arrayLocal = localStorage.getItem(getStorageName);
  // eslint-disable-next-line consistent-return
  return JSON.parse(arrayLocal);
}

// gather data input tempelate

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

const getInput = () => ({
  title: () => {
    const input = document.getElementById('inputTitle');
    return input.value;
  },
  dueDate: () => {
    const formattedDate = format(new Date(document.getElementById('inputDate').value), 'dd MM yy');
    return formattedDate;
  },
  priority: () => {
    const input = document.getElementById('inputPriority');
    return input.value;
  },
  desc: () => {
    const input = document.getElementById('description');
    return input.value;
  },
});

function resetForm() {
  const input = document.querySelectorAll('[data-input = "userInput"]');
  // eslint-disable-next-line no-param-reassign
  input.forEach((inp) => { inp.value = null; });
}

// The Logic after you click add
const arrayToDo = addToDoList();
const inputToDo = getInput();

function isTitleOk(data) {
  if (arrayToDo.findArrayList(data.title)) return false;
  return true;
}

function verifyInput(data) {
  // check the array if there is any data.
  if (!arrayToDo.showArrayList()) return true;
  return isTitleOk(data);
}

function alertMessage(text) {
  // eslint-disable-next-line no-alert
  alert(text);
}

function addToLocalStorage(addStorageName) {
  localStorage.setItem(addStorageName, JSON.stringify(arrayToDo.showArrayList()));
  const arrayLocal = localStorage.getItem(addStorageName);
  return arrayLocal;
}

function toggleOpenClose(target) {
  const toggle = document.querySelectorAll(`.${target}`);
  toggle.forEach((elm) => {
    if (elm.hasAttribute('close', '')) {
      elm.removeAttribute('close');
      elm.setAttribute('open', '');
    } else {
      elm.removeAttribute('open');
      elm.setAttribute('close', '');
    }
  });
}

function openFormBtn() {
  const btn = document.getElementById('openFormInputBtn');
  btn.addEventListener('click', () => { toggleOpenClose('inputForm'); });
}

function loopArray(targetClass, nameStorage) {
  const layerTarget = document.querySelector(`.${targetClass}`);
  let localSave = getFromLocalStorage(nameStorage);

  return {
    allCard:
            () => {
              localSave = getFromLocalStorage(nameStorage);
              for (const list of localSave) {
                layerTarget.append(toDoListCard(list, nameStorage).allCard());
              }
            },
    titleCard:
            () => {
              if (!localSave) return;

              for (const list of localSave) {
                layerTarget.append(toDoListCard(list, nameStorage).titleCard());
              }
            },
  };
}

function clearDisplay(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function showToDoList(targetClass, nameStorage) {
  const layerTarget = document.querySelector(`.${targetClass}`);
  clearDisplay(layerTarget);
  loopArray(targetClass, nameStorage).allCard();
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

function todaysDate() {
  const date = new Date();
  const todayPattern = format(date, 'yyyy-MM-dd');
  return todayPattern;
}

function autoUpdateDateInputDefault() {
  const inputDate = document.getElementById('inputDate');
  inputDate.value = todaysDate();
}

function buttonChangeClicked(myBtn, otherBtn) {
  // eslint-disable-next-line no-empty
  if (myBtn.classList.contains('toggledOn')) {

  } else if (!myBtn.classList.contains('toggledOn')) {
    otherBtn.classList.remove('toggledOn');
    myBtn.classList.add('toggledOn');
  }
}

function myNotesPage() {
  const myNotesBtn = document.getElementById('myNotesBtn');
  const myProjectsBtn = document.getElementById('myProjectsBtn');
  myNotesBtn.onclick = () => {
    setStorageName('myNotes');
    fetchDataFromLocalStorage('outputSection', storageName);
    buttonChangeClicked(myNotesBtn, myProjectsBtn);
  };
}

function myProjectsPage() {
  const myProjectsBtn = document.getElementById('myProjectsBtn');
  const myNotesBtn = document.getElementById('myNotesBtn');
  myProjectsBtn.onclick = () => {
    setStorageName('myProjects');
    fetchDataFromLocalStorage('outputSection', storageName);
    buttonChangeClicked(myProjectsBtn, myNotesBtn);
  };
}

function actionNewToDoList(e) {
  e.preventDefault();
  // take the parameter from dom
  const task = addToDoList(
    inputToDo.title(),
    inputToDo.dueDate(),
    inputToDo.priority(),
    false,
    inputToDo.desc(),
  );
  // verify the input
  // add the variable of to do list to the aray
  if (verifyInput(task) === true) {
    arrayToDo.addToArrayList(task);
    addToLocalStorage(storageName);
    fetchDataFromLocalStorage('outputSection', storageName);
    resetForm();
    toggleOpenClose('inputForm');
    autoUpdateDateInputDefault();
  } else {
    resetForm();
    // toggle alert under the textarea
    alertMessage('Error duplicate title, try another title');
    autoUpdateDateInputDefault();
  }
}

function submitInputForm() {
  const mainbar = document.querySelector('.mainbar');
  mainbar.addEventListener('submit', actionNewToDoList);
}

function onLoadStart(setStrgName) {
  openFormBtn();
  setStorageName(setStrgName);
  submitInputForm();
  autoUpdateDateInputDefault();
  fetchDataFromLocalStorage('outputSection', storageName);
  myNotesPage();
  myProjectsPage();
}
onLoadStart('myNotes');

export {
  addToDoList, loopArray, clearDisplay, showToDoList, showToDoListSidebar, arrayToDo,
  addToLocalStorage, getFromLocalStorage, fetchDataFromLocalStorage, storageName,
};
