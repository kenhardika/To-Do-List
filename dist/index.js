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
/* harmony export */   "clearDisplay": () => (/* binding */ clearDisplay),
/* harmony export */   "loopArray": () => (/* binding */ loopArray),
/* harmony export */   "showToDoList": () => (/* binding */ showToDoList),
/* harmony export */   "showToDoListSidebar": () => (/* reexport safe */ _sidebar__WEBPACK_IMPORTED_MODULE_0__.showToDoListSidebar)
/* harmony export */ });
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar */ "./src/sidebar.js");
/* harmony import */ var _toDoList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDoList */ "./src/toDoList.js");



console.log('here we are');

//gather data input tempelate
function addToDoList(title, dueDate, priority = 'Low', checklist = false){ 
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

    return {
        title,
        dueDate,
        priority,
        checklist,
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
const arrayToDo = addToDoList();
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
            ()=>{   for (let list of arrayToDo.showArrayList()) {
                        layerTarget.append((0,_toDoList__WEBPACK_IMPORTED_MODULE_1__.toDoListCard)(list).allCard());
                    }
                },
        titleCard:
            ()=>{   for (let list of arrayToDo.showArrayList()) {
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

// function todaysDate(){
//     const maxOneDigit = 9;
//     const date = new Date();
//     if(date.getMonth()+1 < maxOneDigit && date.getDay() < maxOneDigit)
//     return `${date.getFullYear()}-0${date.getMonth()+1}-0${date.getDate()}` //this wont work if the date is more than 1 digit
// }

// function setTodaysDate(){
//     console.log(todaysDate());
//     const dateInput = document.getElementById('inputDate');
//     dateInput.setAttribute('min', `${todaysDate()}`)
//}

window.onload =()=> {
    submitInputForm();
    openFormBtn();
    // setTodaysDate();
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
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");


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

    ___WEBPACK_IMPORTED_MODULE_0__.arrayToDo.removeFromArrayList(list.title);
    
    // console.log(arrayToDo.arrayList);
    // console.log(arrayToDo.showArrayList());
    
    (0,___WEBPACK_IMPORTED_MODULE_0__.showToDoList)('outputSection');
    (0,___WEBPACK_IMPORTED_MODULE_0__.showToDoListSidebar)('myNoteList');
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
            layer.append(toDoListLayer(list).check(), toDoListLayer(list).title(), toDoListLayer(list).dueDate(), toDoListLayer(list).priority(), createDeleteListBtn(list));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LWRvLWxpc3QvLi9zcmMvc2lkZWJhci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3RvRG9MaXN0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2hvd1RvRG9MaXN0U2lkZWJhciB9IGZyb20gXCIuL3NpZGViYXJcIjtcbmltcG9ydCB7IHRvRG9MaXN0Q2FyZCB9IGZyb20gXCIuL3RvRG9MaXN0XCI7XG5cbmNvbnNvbGUubG9nKCdoZXJlIHdlIGFyZScpO1xuXG4vL2dhdGhlciBkYXRhIGlucHV0IHRlbXBlbGF0ZVxuZnVuY3Rpb24gYWRkVG9Eb0xpc3QodGl0bGUsIGR1ZURhdGUsIHByaW9yaXR5ID0gJ0xvdycsIGNoZWNrbGlzdCA9IGZhbHNlKXsgXG4gICAgbGV0IGFycmF5TGlzdCA9IFtdO1xuXG4gICAgZnVuY3Rpb24gc2hvd0FycmF5TGlzdCgpe1xuICAgICAgICByZXR1cm4gYXJyYXlMaXN0O1xuICAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRUb0FycmF5TGlzdChkYXRhKXtcbiAgICAgICAgYXJyYXlMaXN0LnB1c2goZGF0YSkgXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlRnJvbUFycmF5TGlzdChyZW1vdmVkVGl0bGUpe1xuICAgICAgICByZXR1cm4gYXJyYXlMaXN0ID0gYXJyYXlMaXN0LmZpbHRlcigoYXJyYXkpPT4gYXJyYXkudGl0bGUgIT09IHJlbW92ZWRUaXRsZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIGR1ZURhdGUsXG4gICAgICAgIHByaW9yaXR5LFxuICAgICAgICBjaGVja2xpc3QsXG4gICAgICAgIHNob3dBcnJheUxpc3QsXG4gICAgICAgIGFkZFRvQXJyYXlMaXN0LFxuICAgICAgICByZW1vdmVGcm9tQXJyYXlMaXN0XG4gICAgfVxufVxuXG5jb25zdCBnZXRJbnB1dCA9ICgpID0+IHtcbiAgICAvL2NvbnN0IGdyYWJEYXRhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcbiAgICByZXR1cm4ge1xuICAgICAgICB0aXRsZTogKCk9PnsgXG4gICAgICAgICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dFRpdGxlJyk7XG4gICAgICAgICAgICByZXR1cm4gaW5wdXQudmFsdWVcbiAgICAgICAgfSxcbiAgICAgICAgZHVlRGF0ZTogKCk9PnsgXG4gICAgICAgICAgICBjb25zdCBpbnB1dCA9IG5ldyBEYXRlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dERhdGUnKS52YWx1ZSk7XG4gICAgICAgICAgICByZXR1cm4gYCAke2lucHV0LmdldERhdGUoKX0gLSAke2lucHV0LmdldE1vbnRoKCkrMX0gLSAke2lucHV0LmdldEZ1bGxZZWFyKCl9IGAgOyAvL3Nob3VsZCB0cnkgbW9tZW50LmpzIGxhdGVyXG4gICAgICAgIH0sXG4gICAgICAgIHByaW9yaXR5OiAoKT0+eyBcbiAgICAgICAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0UHJpb3JpdHknKTtcbiAgICAgICAgICAgIHJldHVybiBpbnB1dC52YWx1ZVxuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiByZXNldEZvcm0oKSB7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1pbnB1dCA9IFwidXNlcklucHV0XCJdJyk7XG4gICAgaW5wdXQuZm9yRWFjaCgoaW5wKSA9PiB7IHJldHVybiBpbnAudmFsdWUgPSBudWxsIH0pO1xufVxuXG4vL1RoZSBMb2dpYyBhZnRlciB5b3UgY2xpY2sgYWRkIFxuY29uc3QgYXJyYXlUb0RvID0gYWRkVG9Eb0xpc3QoKTtcbmNvbnN0IGlucHV0VG9EbyA9IGdldElucHV0KCk7XG5cbmZ1bmN0aW9uIGFjdGlvbk5ld1RvRG9MaXN0KGUpe1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAvL2NyZWF0ZSBUbyBEbyBMaXN0XG4gICAgLy90YWtlIHRoZSBwYXJhbWV0ZXIgZnJvbSBkb21cbiAgICBsZXQgdGFzayA9IGFkZFRvRG9MaXN0KGlucHV0VG9Eby50aXRsZSgpLGlucHV0VG9Eby5kdWVEYXRlKCksIGlucHV0VG9Eby5wcmlvcml0eSgpKTtcbiAgICAvL2FkZCB0aGUgdmFyaWFibGUgb2YgdG8gZG8gbGlzdCB0byB0aGUgYXJheSBcbiAgICBhcnJheVRvRG8uYWRkVG9BcnJheUxpc3QodGFzayk7XG4gICAgY29uc29sZS5sb2coYXJyYXlUb0RvLnNob3dBcnJheUxpc3QoKSk7XG4gICAgcmVzZXRGb3JtKCk7XG4gICAgdG9nZ2xlT3BlbkNsb3NlKCdpbnB1dEZvcm0nKTtcbiAgICBzaG93VG9Eb0xpc3QoJ291dHB1dFNlY3Rpb24nKTtcbiAgICBzaG93VG9Eb0xpc3RTaWRlYmFyKCdteU5vdGVMaXN0Jyk7XG59XG5cbmZ1bmN0aW9uIHN1Ym1pdElucHV0Rm9ybSgpIHtcbiAgICBjb25zdCBtYWluYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW5iYXInKTtcbiAgICBtYWluYmFyLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGFjdGlvbk5ld1RvRG9MaXN0KTtcbiAgfVxuXG5mdW5jdGlvbiBvcGVuRm9ybUJ0bigpe1xuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcGVuRm9ybUlucHV0QnRuJyk7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PnsgdG9nZ2xlT3BlbkNsb3NlKCdpbnB1dEZvcm0nKSB9KTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlT3BlbkNsb3NlKHRhcmdldCl7XG4gICAgY29uc3QgdG9nZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7dGFyZ2V0fWApO1xuICAgICAgICBpZiAodG9nZ2xlLmhhc0F0dHJpYnV0ZSgnY2xvc2UnLCcnKSkge1xuICAgICAgICAgICAgdG9nZ2xlLnJlbW92ZUF0dHJpYnV0ZSgnY2xvc2UnKTtcbiAgICAgICAgICAgIHRvZ2dsZS5zZXRBdHRyaWJ1dGUoJ29wZW4nLCcnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgdG9nZ2xlLnJlbW92ZUF0dHJpYnV0ZSgnb3BlbicpO1xuICAgICAgICAgICAgdG9nZ2xlLnNldEF0dHJpYnV0ZSgnY2xvc2UnLCcnKTtcbiAgICAgICAgfVxufVxuXG5mdW5jdGlvbiBzaG93VG9Eb0xpc3QodGFyZ2V0Q2xhc3MpIHtcbiAgICBjb25zdCBsYXllclRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3RhcmdldENsYXNzfWApO1xuICAgIGNsZWFyRGlzcGxheShsYXllclRhcmdldCk7XG4gICAgbG9vcEFycmF5KHRhcmdldENsYXNzKS5hbGxDYXJkKCk7XG59XG5cbmZ1bmN0aW9uIGxvb3BBcnJheSh0YXJnZXRDbGFzcykge1xuICAgIGNvbnN0IGxheWVyVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7dGFyZ2V0Q2xhc3N9YCk7XG4gICAgcmV0dXJueyBcbiAgICAgICAgYWxsQ2FyZDogXG4gICAgICAgICAgICAoKT0+eyAgIGZvciAobGV0IGxpc3Qgb2YgYXJyYXlUb0RvLnNob3dBcnJheUxpc3QoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXJUYXJnZXQuYXBwZW5kKHRvRG9MaXN0Q2FyZChsaXN0KS5hbGxDYXJkKCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgdGl0bGVDYXJkOlxuICAgICAgICAgICAgKCk9PnsgICBmb3IgKGxldCBsaXN0IG9mIGFycmF5VG9Eby5zaG93QXJyYXlMaXN0KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyVGFyZ2V0LmFwcGVuZCh0b0RvTGlzdENhcmQobGlzdCkudGl0bGVDYXJkKCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gY2xlYXJEaXNwbGF5KHBhcmVudCkge1xuICAgIHdoaWxlIChwYXJlbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQocGFyZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbn1cblxuLy8gZnVuY3Rpb24gdG9kYXlzRGF0ZSgpe1xuLy8gICAgIGNvbnN0IG1heE9uZURpZ2l0ID0gOTtcbi8vICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbi8vICAgICBpZihkYXRlLmdldE1vbnRoKCkrMSA8IG1heE9uZURpZ2l0ICYmIGRhdGUuZ2V0RGF5KCkgPCBtYXhPbmVEaWdpdClcbi8vICAgICByZXR1cm4gYCR7ZGF0ZS5nZXRGdWxsWWVhcigpfS0wJHtkYXRlLmdldE1vbnRoKCkrMX0tMCR7ZGF0ZS5nZXREYXRlKCl9YCAvL3RoaXMgd29udCB3b3JrIGlmIHRoZSBkYXRlIGlzIG1vcmUgdGhhbiAxIGRpZ2l0XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIHNldFRvZGF5c0RhdGUoKXtcbi8vICAgICBjb25zb2xlLmxvZyh0b2RheXNEYXRlKCkpO1xuLy8gICAgIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dERhdGUnKTtcbi8vICAgICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCdtaW4nLCBgJHt0b2RheXNEYXRlKCl9YClcbi8vfVxuXG53aW5kb3cub25sb2FkID0oKT0+IHtcbiAgICBzdWJtaXRJbnB1dEZvcm0oKTtcbiAgICBvcGVuRm9ybUJ0bigpO1xuICAgIC8vIHNldFRvZGF5c0RhdGUoKTtcbn1cblxuZXhwb3J0IHthZGRUb0RvTGlzdCwgbG9vcEFycmF5LCBjbGVhckRpc3BsYXksc2hvd1RvRG9MaXN0LCBzaG93VG9Eb0xpc3RTaWRlYmFyLCBhcnJheVRvRG99XG4iLCJpbXBvcnQgeyBjbGVhckRpc3BsYXksIGxvb3BBcnJheSB9IGZyb20gXCIuXCI7XG5cblxuZnVuY3Rpb24gc2hvd1RvRG9MaXN0U2lkZWJhcih0YXJnZXRDbGFzcykge1xuICAgIGNvbnN0IGxheWVyVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7dGFyZ2V0Q2xhc3N9YCk7XG4gICAgY2xlYXJEaXNwbGF5KGxheWVyVGFyZ2V0KTtcbiAgICBsb29wQXJyYXkodGFyZ2V0Q2xhc3MpLnRpdGxlQ2FyZCgpO1xufVxuXG5leHBvcnQge3Nob3dUb0RvTGlzdFNpZGViYXJ9IiwiaW1wb3J0IHsgYXJyYXlUb0RvLCBzaG93VG9Eb0xpc3QsIHNob3dUb0RvTGlzdFNpZGViYXIgfSBmcm9tIFwiLlwiO1xuXG5mdW5jdGlvbiBjcmVhdGVEaXYobmFtZSl7XG4gICAgY29uc3QgbGF5ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsYXllci5jbGFzc05hbWUgPSBgJHtuYW1lfWA7XG4gICAgcmV0dXJuIGxheWVyO1xufVxuZnVuY3Rpb24gY3JlYXRlVG9Eb0RpdihsaXN0LCBuYW1lKXtcbiAgICBjb25zdCBsYXllciA9IGNyZWF0ZURpdihuYW1lKTtcbiAgICAvLyBjb25zb2xlLmxvZyh0eXBlb2YobGlzdFtuYW1lXSkpO1xuICAgIGxheWVyLmFwcGVuZChsaXN0W2Ake25hbWV9YF0pO1xuICAgIHJldHVybiBsYXllcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRGVsZXRlTGlzdEJ0bihsaXN0KXtcbiAgICBjb25zdCBsYXllciA9IGNyZWF0ZURpdignZGVsZXRlVGhpc0xpc3QnKTtcbiAgICBjb25zdCBkZWxidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBkZWxidG4uaWQ9J2RlbGV0ZUxpc3QnO1xuICAgIGRlbGJ0bi50ZXh0Q29udGVudD0nZGVsZXRlJztcbiAgICBkZWxidG4ub25jbGljayA9ICgpPT57IGRlbGV0ZUxpc3RGdW5jdGlvbihsaXN0KSB9O1xuICAgIGxheWVyLmFwcGVuZChkZWxidG4pO1xuICAgIHJldHVybiBsYXllcjtcbn1cblxuZnVuY3Rpb24gZGVsZXRlTGlzdEZ1bmN0aW9uKGxpc3Qpe1xuXG4gICAgYXJyYXlUb0RvLnJlbW92ZUZyb21BcnJheUxpc3QobGlzdC50aXRsZSk7XG4gICAgXG4gICAgLy8gY29uc29sZS5sb2coYXJyYXlUb0RvLmFycmF5TGlzdCk7XG4gICAgLy8gY29uc29sZS5sb2coYXJyYXlUb0RvLnNob3dBcnJheUxpc3QoKSk7XG4gICAgXG4gICAgc2hvd1RvRG9MaXN0KCdvdXRwdXRTZWN0aW9uJyk7XG4gICAgc2hvd1RvRG9MaXN0U2lkZWJhcignbXlOb3RlTGlzdCcpO1xufVxuXG5mdW5jdGlvbiB0b0RvTGlzdExheWVyKGxpc3Qpe1xuICAgIHJldHVybiB7XG4gICAgICAgIGNoZWNrOiAoKT0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxheWVyID0gY3JlYXRlRGl2KCdjaGVja2xpc3QnKTtcbiAgICAgICAgICAgIGxheWVyLmFwcGVuZChjaGVja2xpc3RDb25kaXRpb24obGlzdCkpO1xuICAgICAgICAgICAgcmV0dXJuIGxheWVyOyBcbiAgICAgICAgfSxcbiAgICAgICAgdGl0bGU6ICgpPT4geyByZXR1cm4gY3JlYXRlVG9Eb0RpdihsaXN0LCAndGl0bGUnKX0sXG4gICAgICAgIGR1ZURhdGU6ICgpPT4geyByZXR1cm4gY3JlYXRlVG9Eb0RpdihsaXN0LCAnZHVlRGF0ZScpfSxcbiAgICAgICAgcHJpb3JpdHk6ICgpPT4geyByZXR1cm4gY3JlYXRlVG9Eb0RpdihsaXN0LCAncHJpb3JpdHknKX1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNoZWNrbGlzdENvbmRpdGlvbihsaXN0KXtcbiAgICBpZiAobGlzdC5jaGVja2xpc3QgPT0gZmFsc2UpIHJldHVybiAn4pyVJztcbiAgICBlbHNlIHJldHVybiAn4pyTJztcbn1cblxuLy9jaGFuZ2Ugc28gaXQgY2FuIGJlIHBhcnRpYWwgd2hldGVyIHlvdSB3YW5uYSBhcHBlbmQgdGl0bGUgb25seVxuZnVuY3Rpb24gdG9Eb0xpc3RDYXJkKGxpc3Qpe1xuICAgIGNvbnN0IGxheWVyID0gY3JlYXRlRGl2KCd0b0RvTGlzdCcpO1xuICAgIHJldHVybiB7XG4gICAgICAgIGFsbENhcmQ6ICgpPT57XG4gICAgICAgICAgICBsYXllci5hcHBlbmQodG9Eb0xpc3RMYXllcihsaXN0KS5jaGVjaygpLCB0b0RvTGlzdExheWVyKGxpc3QpLnRpdGxlKCksIHRvRG9MaXN0TGF5ZXIobGlzdCkuZHVlRGF0ZSgpLCB0b0RvTGlzdExheWVyKGxpc3QpLnByaW9yaXR5KCksIGNyZWF0ZURlbGV0ZUxpc3RCdG4obGlzdCkpO1xuICAgICAgICAgICAgcmV0dXJuIGxheWVyIH0sXG4gICAgICAgIHRpdGxlQ2FyZDogKCk9PntcbiAgICAgICAgICAgIGxheWVyLmFwcGVuZCh0b0RvTGlzdExheWVyKGxpc3QpLnRpdGxlKCkpO1xuICAgICAgICAgICAgcmV0dXJuIGxheWVyIH0gXG4gICAgfTtcbn1cblxuXG5leHBvcnQge3RvRG9MaXN0Q2FyZCwgdG9Eb0xpc3RMYXllcn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9