/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addToDoList": () => (/* binding */ addToDoList),
/* harmony export */   "arrayToDo": () => (/* binding */ arrayToDo),
/* harmony export */   "arrayToDoList": () => (/* binding */ arrayToDoList),
/* harmony export */   "clearDisplay": () => (/* binding */ clearDisplay),
/* harmony export */   "loopArray": () => (/* binding */ loopArray)
/* harmony export */ });
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar */ "./src/sidebar.js");
/* harmony import */ var _toDoList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDoList */ "./src/toDoList.js");



console.log('here we are');

//gather data input tempelate
function addToDoList(title, dueDate, priority = 'Low', checklist = false){ 
    return {
        title,
        dueDate,
        priority,
        checklist
    }
}

//create Array to save to do list tempelate
function arrayToDoList() {
    let arrayList = [];

    function showArrayList(){
       return arrayList;
    }

    function addToArrayList(data){
        arrayList.push(data) 
    }

    function removeFromArrayList(removedTitle){
       return arrayList = arrayList.filter((array)=> array.title !== removedTitle);
    }

    return{
        arrayList: ()=>{ return Array.from(arrayList) },
        showArrayList,
        addToArrayList,
        removeFromArrayList
    }
}

const getInput = () => {
    //const grabData = document.querySelector('input');
    return {
        title: ()=>{ 
            const input = document.getElementById('inputTitle');
            return input.value
        },
        dueDate: ()=>{ 
            const input = new Date(document.getElementById('inputDate').value);
            return ` ${input.getDate()} - ${input.getMonth()+1} - ${input.getFullYear()} ` ; //should try moment.js later
        },
        priority: ()=>{ 
            const input = document.getElementById('inputPriority');
            return input.value
        }
    }
}

function resetForm() {
    const input = document.querySelectorAll('[data-input = "userInput"]');
    input.forEach((inp) => { return inp.value = null });
}

//The Logic after you click add 
const arrayToDo = arrayToDoList();
const inputToDo = getInput();

function actionNewToDoList(e){
    e.preventDefault();
    //create To Do List
    //take the parameter from dom
    let task = addToDoList(inputToDo.title(),inputToDo.dueDate(), inputToDo.priority());
    //add the variable of to do list to the aray 
    arrayToDo.addToArrayList(task);
    console.log(arrayToDo.showArrayList());
    resetForm();
    toggleOpenClose('inputForm');
    showToDoList('outputSection');
    (0,_sidebar__WEBPACK_IMPORTED_MODULE_0__.showToDoListSidebar)('myNoteList');
}

function submitInputForm() {
    const mainbar = document.querySelector('.mainbar');
    mainbar.addEventListener('submit', actionNewToDoList);
  }

function openFormBtn(){
    const btn = document.getElementById('openFormInputBtn');
    btn.addEventListener('click', ()=>{ toggleOpenClose('inputForm') });
}

function toggleOpenClose(target){
    const toggle = document.querySelector(`.${target}`);
        if (toggle.hasAttribute('close','')) {
            toggle.removeAttribute('close');
            toggle.setAttribute('open','');
        }
        else{
            toggle.removeAttribute('open');
            toggle.setAttribute('close','');
        }
}

function showToDoList(targetClass) {
    const layerTarget = document.querySelector(`.${targetClass}`);
    clearDisplay(layerTarget);
    loopArray(targetClass).allCard();
}

function loopArray(targetClass) {
    const layerTarget = document.querySelector(`.${targetClass}`);
    return{ 
        allCard: 
            ()=>{   for (let list of arrayToDo.arrayList().reverse()) {
                        layerTarget.append((0,_toDoList__WEBPACK_IMPORTED_MODULE_1__.toDoListCard)(list).allCard());
                    }
                },
        titleCard:
            ()=>{   for (let list of arrayToDo.arrayList()) {
                        layerTarget.append((0,_toDoList__WEBPACK_IMPORTED_MODULE_1__.toDoListCard)(list).titleCard());
                    }
                }
    }
}

function clearDisplay(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function todaysDate(){
    const date = new Date();
    return `${date.getFullYear()}-0${date.getMonth()+1}-0${date.getDate()}`
}

function setTodaysDate(){
    console.log(todaysDate());
    const dateInput = document.getElementById('inputDate');
    dateInput.setAttribute('min', `${todaysDate()}`)
}

window.onload =()=> {
    submitInputForm();
    openFormBtn();
    setTodaysDate();
}




/***/ }),

/***/ "./src/sidebar.js":
/*!************************!*\
  !*** ./src/sidebar.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showToDoListSidebar": () => (/* binding */ showToDoListSidebar)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");



function showToDoListSidebar(targetClass) {
    const layerTarget = document.querySelector(`.${targetClass}`);
    (0,___WEBPACK_IMPORTED_MODULE_0__.clearDisplay)(layerTarget);
    (0,___WEBPACK_IMPORTED_MODULE_0__.loopArray)(targetClass).titleCard();
}



/***/ }),

/***/ "./src/toDoList.js":
/*!*************************!*\
  !*** ./src/toDoList.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toDoListCard": () => (/* binding */ toDoListCard),
/* harmony export */   "toDoListLayer": () => (/* binding */ toDoListLayer)
/* harmony export */ });
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

function toDoListLayer(list){
    return {
        check: ()=> {
            const layer = createDiv('checklist');
            layer.append(checklistCondition(list));
            return layer; 
        },
        title: ()=> { return createToDoDiv(list, 'title')},
        dueDate: ()=> { return createToDoDiv(list, 'dueDate')},
        priority: ()=> { return createToDoDiv(list, 'priority')}
    }
}

function checklistCondition(list){
    if (list.checklist == false) return '✕';
    else return '✓';
}

//change so it can be partial wheter you wanna append title only
function toDoListCard(list){
    const layer = createDiv('toDoList');
    return {
        allCard: ()=>{
            layer.append(toDoListLayer(list).check(), toDoListLayer(list).title(), toDoListLayer(list).dueDate(), toDoListLayer(list).priority());
            return layer },
        titleCard: ()=>{
            layer.append(toDoListLayer(list).title());
            return layer } 
    };
}




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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by1kby1saXN0Ly4vc3JjL3NpZGViYXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90b0RvTGlzdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNob3dUb0RvTGlzdFNpZGViYXIgfSBmcm9tIFwiLi9zaWRlYmFyXCI7XHJcbmltcG9ydCB7IHRvRG9MaXN0Q2FyZCB9IGZyb20gXCIuL3RvRG9MaXN0XCI7XHJcblxyXG5jb25zb2xlLmxvZygnaGVyZSB3ZSBhcmUnKTtcclxuXHJcbi8vZ2F0aGVyIGRhdGEgaW5wdXQgdGVtcGVsYXRlXHJcbmZ1bmN0aW9uIGFkZFRvRG9MaXN0KHRpdGxlLCBkdWVEYXRlLCBwcmlvcml0eSA9ICdMb3cnLCBjaGVja2xpc3QgPSBmYWxzZSl7IFxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0aXRsZSxcclxuICAgICAgICBkdWVEYXRlLFxyXG4gICAgICAgIHByaW9yaXR5LFxyXG4gICAgICAgIGNoZWNrbGlzdFxyXG4gICAgfVxyXG59XHJcblxyXG4vL2NyZWF0ZSBBcnJheSB0byBzYXZlIHRvIGRvIGxpc3QgdGVtcGVsYXRlXHJcbmZ1bmN0aW9uIGFycmF5VG9Eb0xpc3QoKSB7XHJcbiAgICBsZXQgYXJyYXlMaXN0ID0gW107XHJcblxyXG4gICAgZnVuY3Rpb24gc2hvd0FycmF5TGlzdCgpe1xyXG4gICAgICAgcmV0dXJuIGFycmF5TGlzdDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhZGRUb0FycmF5TGlzdChkYXRhKXtcclxuICAgICAgICBhcnJheUxpc3QucHVzaChkYXRhKSBcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZW1vdmVGcm9tQXJyYXlMaXN0KHJlbW92ZWRUaXRsZSl7XHJcbiAgICAgICByZXR1cm4gYXJyYXlMaXN0ID0gYXJyYXlMaXN0LmZpbHRlcigoYXJyYXkpPT4gYXJyYXkudGl0bGUgIT09IHJlbW92ZWRUaXRsZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIGFycmF5TGlzdDogKCk9PnsgcmV0dXJuIEFycmF5LmZyb20oYXJyYXlMaXN0KSB9LFxyXG4gICAgICAgIHNob3dBcnJheUxpc3QsXHJcbiAgICAgICAgYWRkVG9BcnJheUxpc3QsXHJcbiAgICAgICAgcmVtb3ZlRnJvbUFycmF5TGlzdFxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBnZXRJbnB1dCA9ICgpID0+IHtcclxuICAgIC8vY29uc3QgZ3JhYkRhdGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0aXRsZTogKCk9PnsgXHJcbiAgICAgICAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0VGl0bGUnKTtcclxuICAgICAgICAgICAgcmV0dXJuIGlucHV0LnZhbHVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkdWVEYXRlOiAoKT0+eyBcclxuICAgICAgICAgICAgY29uc3QgaW5wdXQgPSBuZXcgRGF0ZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXREYXRlJykudmFsdWUpO1xyXG4gICAgICAgICAgICByZXR1cm4gYCAke2lucHV0LmdldERhdGUoKX0gLSAke2lucHV0LmdldE1vbnRoKCkrMX0gLSAke2lucHV0LmdldEZ1bGxZZWFyKCl9IGAgOyAvL3Nob3VsZCB0cnkgbW9tZW50LmpzIGxhdGVyXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwcmlvcml0eTogKCk9PnsgXHJcbiAgICAgICAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0UHJpb3JpdHknKTtcclxuICAgICAgICAgICAgcmV0dXJuIGlucHV0LnZhbHVlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZXNldEZvcm0oKSB7XHJcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWlucHV0ID0gXCJ1c2VySW5wdXRcIl0nKTtcclxuICAgIGlucHV0LmZvckVhY2goKGlucCkgPT4geyByZXR1cm4gaW5wLnZhbHVlID0gbnVsbCB9KTtcclxufVxyXG5cclxuLy9UaGUgTG9naWMgYWZ0ZXIgeW91IGNsaWNrIGFkZCBcclxuY29uc3QgYXJyYXlUb0RvID0gYXJyYXlUb0RvTGlzdCgpO1xyXG5jb25zdCBpbnB1dFRvRG8gPSBnZXRJbnB1dCgpO1xyXG5cclxuZnVuY3Rpb24gYWN0aW9uTmV3VG9Eb0xpc3QoZSl7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvL2NyZWF0ZSBUbyBEbyBMaXN0XHJcbiAgICAvL3Rha2UgdGhlIHBhcmFtZXRlciBmcm9tIGRvbVxyXG4gICAgbGV0IHRhc2sgPSBhZGRUb0RvTGlzdChpbnB1dFRvRG8udGl0bGUoKSxpbnB1dFRvRG8uZHVlRGF0ZSgpLCBpbnB1dFRvRG8ucHJpb3JpdHkoKSk7XHJcbiAgICAvL2FkZCB0aGUgdmFyaWFibGUgb2YgdG8gZG8gbGlzdCB0byB0aGUgYXJheSBcclxuICAgIGFycmF5VG9Eby5hZGRUb0FycmF5TGlzdCh0YXNrKTtcclxuICAgIGNvbnNvbGUubG9nKGFycmF5VG9Eby5zaG93QXJyYXlMaXN0KCkpO1xyXG4gICAgcmVzZXRGb3JtKCk7XHJcbiAgICB0b2dnbGVPcGVuQ2xvc2UoJ2lucHV0Rm9ybScpO1xyXG4gICAgc2hvd1RvRG9MaXN0KCdvdXRwdXRTZWN0aW9uJyk7XHJcbiAgICBzaG93VG9Eb0xpc3RTaWRlYmFyKCdteU5vdGVMaXN0Jyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN1Ym1pdElucHV0Rm9ybSgpIHtcclxuICAgIGNvbnN0IG1haW5iYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbmJhcicpO1xyXG4gICAgbWFpbmJhci5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBhY3Rpb25OZXdUb0RvTGlzdCk7XHJcbiAgfVxyXG5cclxuZnVuY3Rpb24gb3BlbkZvcm1CdG4oKXtcclxuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcGVuRm9ybUlucHV0QnRuJyk7XHJcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+eyB0b2dnbGVPcGVuQ2xvc2UoJ2lucHV0Rm9ybScpIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiB0b2dnbGVPcGVuQ2xvc2UodGFyZ2V0KXtcclxuICAgIGNvbnN0IHRvZ2dsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3RhcmdldH1gKTtcclxuICAgICAgICBpZiAodG9nZ2xlLmhhc0F0dHJpYnV0ZSgnY2xvc2UnLCcnKSkge1xyXG4gICAgICAgICAgICB0b2dnbGUucmVtb3ZlQXR0cmlidXRlKCdjbG9zZScpO1xyXG4gICAgICAgICAgICB0b2dnbGUuc2V0QXR0cmlidXRlKCdvcGVuJywnJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHRvZ2dsZS5yZW1vdmVBdHRyaWJ1dGUoJ29wZW4nKTtcclxuICAgICAgICAgICAgdG9nZ2xlLnNldEF0dHJpYnV0ZSgnY2xvc2UnLCcnKTtcclxuICAgICAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dUb0RvTGlzdCh0YXJnZXRDbGFzcykge1xyXG4gICAgY29uc3QgbGF5ZXJUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHt0YXJnZXRDbGFzc31gKTtcclxuICAgIGNsZWFyRGlzcGxheShsYXllclRhcmdldCk7XHJcbiAgICBsb29wQXJyYXkodGFyZ2V0Q2xhc3MpLmFsbENhcmQoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbG9vcEFycmF5KHRhcmdldENsYXNzKSB7XHJcbiAgICBjb25zdCBsYXllclRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3RhcmdldENsYXNzfWApO1xyXG4gICAgcmV0dXJueyBcclxuICAgICAgICBhbGxDYXJkOiBcclxuICAgICAgICAgICAgKCk9PnsgICBmb3IgKGxldCBsaXN0IG9mIGFycmF5VG9Eby5hcnJheUxpc3QoKS5yZXZlcnNlKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXJUYXJnZXQuYXBwZW5kKHRvRG9MaXN0Q2FyZChsaXN0KS5hbGxDYXJkKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgdGl0bGVDYXJkOlxyXG4gICAgICAgICAgICAoKT0+eyAgIGZvciAobGV0IGxpc3Qgb2YgYXJyYXlUb0RvLmFycmF5TGlzdCgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyVGFyZ2V0LmFwcGVuZCh0b0RvTGlzdENhcmQobGlzdCkudGl0bGVDYXJkKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2xlYXJEaXNwbGF5KHBhcmVudCkge1xyXG4gICAgd2hpbGUgKHBhcmVudC5maXJzdENoaWxkKSB7XHJcbiAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKHBhcmVudC5maXJzdENoaWxkKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdG9kYXlzRGF0ZSgpe1xyXG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICByZXR1cm4gYCR7ZGF0ZS5nZXRGdWxsWWVhcigpfS0wJHtkYXRlLmdldE1vbnRoKCkrMX0tMCR7ZGF0ZS5nZXREYXRlKCl9YFxyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRUb2RheXNEYXRlKCl7XHJcbiAgICBjb25zb2xlLmxvZyh0b2RheXNEYXRlKCkpO1xyXG4gICAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0RGF0ZScpO1xyXG4gICAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgnbWluJywgYCR7dG9kYXlzRGF0ZSgpfWApXHJcbn1cclxuXHJcbndpbmRvdy5vbmxvYWQgPSgpPT4ge1xyXG4gICAgc3VibWl0SW5wdXRGb3JtKCk7XHJcbiAgICBvcGVuRm9ybUJ0bigpO1xyXG4gICAgc2V0VG9kYXlzRGF0ZSgpO1xyXG59XHJcblxyXG5leHBvcnQge2FkZFRvRG9MaXN0LCBhcnJheVRvRG9MaXN0LCBsb29wQXJyYXksIGNsZWFyRGlzcGxheSwgYXJyYXlUb0RvfVxyXG4iLCJpbXBvcnQgeyBjbGVhckRpc3BsYXksIGxvb3BBcnJheSB9IGZyb20gXCIuXCI7XHJcblxyXG5cclxuZnVuY3Rpb24gc2hvd1RvRG9MaXN0U2lkZWJhcih0YXJnZXRDbGFzcykge1xyXG4gICAgY29uc3QgbGF5ZXJUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHt0YXJnZXRDbGFzc31gKTtcclxuICAgIGNsZWFyRGlzcGxheShsYXllclRhcmdldCk7XHJcbiAgICBsb29wQXJyYXkodGFyZ2V0Q2xhc3MpLnRpdGxlQ2FyZCgpO1xyXG59XHJcblxyXG5leHBvcnQge3Nob3dUb0RvTGlzdFNpZGViYXJ9IiwiZnVuY3Rpb24gY3JlYXRlRGl2KG5hbWUpe1xyXG4gICAgY29uc3QgbGF5ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGxheWVyLmNsYXNzTmFtZSA9IGAke25hbWV9YDtcclxuICAgIHJldHVybiBsYXllcjtcclxufVxyXG5mdW5jdGlvbiBjcmVhdGVUb0RvRGl2KGxpc3QsIG5hbWUpe1xyXG4gICAgY29uc3QgbGF5ZXIgPSBjcmVhdGVEaXYobmFtZSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh0eXBlb2YobGlzdFtuYW1lXSkpO1xyXG4gICAgbGF5ZXIuYXBwZW5kKGxpc3RbYCR7bmFtZX1gXSk7XHJcbiAgICByZXR1cm4gbGF5ZXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvRG9MaXN0TGF5ZXIobGlzdCl7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNoZWNrOiAoKT0+IHtcclxuICAgICAgICAgICAgY29uc3QgbGF5ZXIgPSBjcmVhdGVEaXYoJ2NoZWNrbGlzdCcpO1xyXG4gICAgICAgICAgICBsYXllci5hcHBlbmQoY2hlY2tsaXN0Q29uZGl0aW9uKGxpc3QpKTtcclxuICAgICAgICAgICAgcmV0dXJuIGxheWVyOyBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRpdGxlOiAoKT0+IHsgcmV0dXJuIGNyZWF0ZVRvRG9EaXYobGlzdCwgJ3RpdGxlJyl9LFxyXG4gICAgICAgIGR1ZURhdGU6ICgpPT4geyByZXR1cm4gY3JlYXRlVG9Eb0RpdihsaXN0LCAnZHVlRGF0ZScpfSxcclxuICAgICAgICBwcmlvcml0eTogKCk9PiB7IHJldHVybiBjcmVhdGVUb0RvRGl2KGxpc3QsICdwcmlvcml0eScpfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja2xpc3RDb25kaXRpb24obGlzdCl7XHJcbiAgICBpZiAobGlzdC5jaGVja2xpc3QgPT0gZmFsc2UpIHJldHVybiAn4pyVJztcclxuICAgIGVsc2UgcmV0dXJuICfinJMnO1xyXG59XHJcblxyXG4vL2NoYW5nZSBzbyBpdCBjYW4gYmUgcGFydGlhbCB3aGV0ZXIgeW91IHdhbm5hIGFwcGVuZCB0aXRsZSBvbmx5XHJcbmZ1bmN0aW9uIHRvRG9MaXN0Q2FyZChsaXN0KXtcclxuICAgIGNvbnN0IGxheWVyID0gY3JlYXRlRGl2KCd0b0RvTGlzdCcpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBhbGxDYXJkOiAoKT0+e1xyXG4gICAgICAgICAgICBsYXllci5hcHBlbmQodG9Eb0xpc3RMYXllcihsaXN0KS5jaGVjaygpLCB0b0RvTGlzdExheWVyKGxpc3QpLnRpdGxlKCksIHRvRG9MaXN0TGF5ZXIobGlzdCkuZHVlRGF0ZSgpLCB0b0RvTGlzdExheWVyKGxpc3QpLnByaW9yaXR5KCkpO1xyXG4gICAgICAgICAgICByZXR1cm4gbGF5ZXIgfSxcclxuICAgICAgICB0aXRsZUNhcmQ6ICgpPT57XHJcbiAgICAgICAgICAgIGxheWVyLmFwcGVuZCh0b0RvTGlzdExheWVyKGxpc3QpLnRpdGxlKCkpO1xyXG4gICAgICAgICAgICByZXR1cm4gbGF5ZXIgfSBcclxuICAgIH07XHJcbn1cclxuXHJcblxyXG5leHBvcnQge3RvRG9MaXN0Q2FyZCwgdG9Eb0xpc3RMYXllcn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9