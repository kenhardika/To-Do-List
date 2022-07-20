import { format } from 'date-fns';
import { addToLocalStorage } from './accessLocalStorage';
import {
  addToDoList,
  arrayToDo,
  setStorageName,
  storageName,
} from './ArrayToDoList';
import { fetchDataFromLocalStorage } from './displayToDoList';

// gather data input tempelate

const getInput = () => ({
  title: () => {
    const input = document.getElementById('inputTitle');
    return input.value;
  },
  dueDate: () => {
    const formattedDate = format(
      new Date(document.getElementById('inputDate').value),
      'dd MM yy',
    );
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
  input.forEach((inp) => {
    // eslint-disable-next-line no-param-reassign
    inp.value = null;
  });
}

// The Logic after you click add
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
  btn.addEventListener('click', () => {
    toggleOpenClose('inputForm');
  });
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
  if (myBtn.classList.contains('toggledOn')) return;
  if (!myBtn.classList.contains('toggledOn')) {
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
    addToLocalStorage(storageName, arrayToDo);
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
