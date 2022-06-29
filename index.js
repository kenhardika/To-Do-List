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

window.onload =()=> {
    submitInputForm();
    openFormBtn();
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
    const layerLi = document.createElement('li');
    (0,___WEBPACK_IMPORTED_MODULE_0__.clearDisplay)(layerTarget);
    layerLi.append((0,___WEBPACK_IMPORTED_MODULE_0__.loopArray)(targetClass).titleCard());
    return layerLi
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZ0Q7QUFDTjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsOEJBQThCO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsdUJBQXVCLGlCQUFpQixJQUFJLG9CQUFvQixJQUFJLHFCQUFxQixJQUFJO0FBQzdGLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIseUJBQXlCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDZEQUFtQjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsOEJBQThCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxPQUFPO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsWUFBWTtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELFlBQVk7QUFDL0Q7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQiwyQ0FBMkMsdURBQVk7QUFDdkQ7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxvQkFBb0I7QUFDcEIsMkNBQTJDLHVEQUFZO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3VFOzs7Ozs7Ozs7Ozs7Ozs7O0FDdkkzQjtBQUM1QztBQUNBO0FBQ0E7QUFDQSxtREFBbUQsWUFBWTtBQUMvRDtBQUNBLElBQUksK0NBQVk7QUFDaEIsbUJBQW1CLDRDQUFTO0FBQzVCO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQ0E7QUFDQSx5QkFBeUIsS0FBSztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLEtBQUs7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULHNCQUFzQixvQ0FBb0M7QUFDMUQsd0JBQXdCLHNDQUFzQztBQUM5RCx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQzNDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zaWRlYmFyLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdG9Eb0xpc3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzaG93VG9Eb0xpc3RTaWRlYmFyIH0gZnJvbSBcIi4vc2lkZWJhclwiO1xyXG5pbXBvcnQgeyB0b0RvTGlzdENhcmQgfSBmcm9tIFwiLi90b0RvTGlzdFwiO1xyXG5cclxuY29uc29sZS5sb2coJ2hlcmUgd2UgYXJlJyk7XHJcblxyXG4vL2dhdGhlciBkYXRhIGlucHV0IHRlbXBlbGF0ZVxyXG5mdW5jdGlvbiBhZGRUb0RvTGlzdCh0aXRsZSwgZHVlRGF0ZSwgcHJpb3JpdHkgPSAnTG93JywgY2hlY2tsaXN0ID0gZmFsc2UpeyBcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdGl0bGUsXHJcbiAgICAgICAgZHVlRGF0ZSxcclxuICAgICAgICBwcmlvcml0eSxcclxuICAgICAgICBjaGVja2xpc3RcclxuICAgIH1cclxufVxyXG5cclxuLy9jcmVhdGUgQXJyYXkgdG8gc2F2ZSB0byBkbyBsaXN0IHRlbXBlbGF0ZVxyXG5mdW5jdGlvbiBhcnJheVRvRG9MaXN0KCkge1xyXG4gICAgbGV0IGFycmF5TGlzdCA9IFtdO1xyXG5cclxuICAgIGZ1bmN0aW9uIHNob3dBcnJheUxpc3QoKXtcclxuICAgICAgIHJldHVybiBhcnJheUxpc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYWRkVG9BcnJheUxpc3QoZGF0YSl7XHJcbiAgICAgICAgYXJyYXlMaXN0LnB1c2goZGF0YSkgXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlRnJvbUFycmF5TGlzdChyZW1vdmVkVGl0bGUpe1xyXG4gICAgICAgcmV0dXJuIGFycmF5TGlzdCA9IGFycmF5TGlzdC5maWx0ZXIoKGFycmF5KT0+IGFycmF5LnRpdGxlICE9PSByZW1vdmVkVGl0bGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybntcclxuICAgICAgICBhcnJheUxpc3Q6ICgpPT57IHJldHVybiBBcnJheS5mcm9tKGFycmF5TGlzdCkgfSxcclxuICAgICAgICBzaG93QXJyYXlMaXN0LFxyXG4gICAgICAgIGFkZFRvQXJyYXlMaXN0LFxyXG4gICAgICAgIHJlbW92ZUZyb21BcnJheUxpc3RcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgZ2V0SW5wdXQgPSAoKSA9PiB7XHJcbiAgICAvL2NvbnN0IGdyYWJEYXRhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdGl0bGU6ICgpPT57IFxyXG4gICAgICAgICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dFRpdGxlJyk7XHJcbiAgICAgICAgICAgIHJldHVybiBpbnB1dC52YWx1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZHVlRGF0ZTogKCk9PnsgXHJcbiAgICAgICAgICAgIGNvbnN0IGlucHV0ID0gbmV3IERhdGUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0RGF0ZScpLnZhbHVlKTtcclxuICAgICAgICAgICAgcmV0dXJuIGAgJHtpbnB1dC5nZXREYXRlKCl9IC0gJHtpbnB1dC5nZXRNb250aCgpKzF9IC0gJHtpbnB1dC5nZXRGdWxsWWVhcigpfSBgIDsgLy9zaG91bGQgdHJ5IG1vbWVudC5qcyBsYXRlclxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcHJpb3JpdHk6ICgpPT57IFxyXG4gICAgICAgICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dFByaW9yaXR5Jyk7XHJcbiAgICAgICAgICAgIHJldHVybiBpbnB1dC52YWx1ZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVzZXRGb3JtKCkge1xyXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1pbnB1dCA9IFwidXNlcklucHV0XCJdJyk7XHJcbiAgICBpbnB1dC5mb3JFYWNoKChpbnApID0+IHsgcmV0dXJuIGlucC52YWx1ZSA9IG51bGwgfSk7XHJcbn1cclxuXHJcbi8vVGhlIExvZ2ljIGFmdGVyIHlvdSBjbGljayBhZGQgXHJcbmNvbnN0IGFycmF5VG9EbyA9IGFycmF5VG9Eb0xpc3QoKTtcclxuY29uc3QgaW5wdXRUb0RvID0gZ2V0SW5wdXQoKTtcclxuXHJcbmZ1bmN0aW9uIGFjdGlvbk5ld1RvRG9MaXN0KGUpe1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgLy9jcmVhdGUgVG8gRG8gTGlzdFxyXG4gICAgLy90YWtlIHRoZSBwYXJhbWV0ZXIgZnJvbSBkb21cclxuICAgIGxldCB0YXNrID0gYWRkVG9Eb0xpc3QoaW5wdXRUb0RvLnRpdGxlKCksaW5wdXRUb0RvLmR1ZURhdGUoKSwgaW5wdXRUb0RvLnByaW9yaXR5KCkpO1xyXG4gICAgLy9hZGQgdGhlIHZhcmlhYmxlIG9mIHRvIGRvIGxpc3QgdG8gdGhlIGFyYXkgXHJcbiAgICBhcnJheVRvRG8uYWRkVG9BcnJheUxpc3QodGFzayk7XHJcbiAgICBjb25zb2xlLmxvZyhhcnJheVRvRG8uc2hvd0FycmF5TGlzdCgpKTtcclxuICAgIHJlc2V0Rm9ybSgpO1xyXG4gICAgdG9nZ2xlT3BlbkNsb3NlKCdpbnB1dEZvcm0nKTtcclxuICAgIHNob3dUb0RvTGlzdCgnb3V0cHV0U2VjdGlvbicpO1xyXG4gICAgc2hvd1RvRG9MaXN0U2lkZWJhcignbXlOb3RlTGlzdCcpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzdWJtaXRJbnB1dEZvcm0oKSB7XHJcbiAgICBjb25zdCBtYWluYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW5iYXInKTtcclxuICAgIG1haW5iYXIuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgYWN0aW9uTmV3VG9Eb0xpc3QpO1xyXG4gIH1cclxuXHJcbmZ1bmN0aW9uIG9wZW5Gb3JtQnRuKCl7XHJcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3BlbkZvcm1JbnB1dEJ0bicpO1xyXG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PnsgdG9nZ2xlT3BlbkNsb3NlKCdpbnB1dEZvcm0nKSB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gdG9nZ2xlT3BlbkNsb3NlKHRhcmdldCl7XHJcbiAgICBjb25zdCB0b2dnbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHt0YXJnZXR9YCk7XHJcbiAgICAgICAgaWYgKHRvZ2dsZS5oYXNBdHRyaWJ1dGUoJ2Nsb3NlJywnJykpIHtcclxuICAgICAgICAgICAgdG9nZ2xlLnJlbW92ZUF0dHJpYnV0ZSgnY2xvc2UnKTtcclxuICAgICAgICAgICAgdG9nZ2xlLnNldEF0dHJpYnV0ZSgnb3BlbicsJycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICB0b2dnbGUucmVtb3ZlQXR0cmlidXRlKCdvcGVuJyk7XHJcbiAgICAgICAgICAgIHRvZ2dsZS5zZXRBdHRyaWJ1dGUoJ2Nsb3NlJywnJyk7XHJcbiAgICAgICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93VG9Eb0xpc3QodGFyZ2V0Q2xhc3MpIHtcclxuICAgIGNvbnN0IGxheWVyVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7dGFyZ2V0Q2xhc3N9YCk7XHJcbiAgICBjbGVhckRpc3BsYXkobGF5ZXJUYXJnZXQpO1xyXG4gICAgbG9vcEFycmF5KHRhcmdldENsYXNzKS5hbGxDYXJkKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvb3BBcnJheSh0YXJnZXRDbGFzcykge1xyXG4gICAgY29uc3QgbGF5ZXJUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHt0YXJnZXRDbGFzc31gKTtcclxuICAgIHJldHVybnsgXHJcbiAgICAgICAgYWxsQ2FyZDogXHJcbiAgICAgICAgICAgICgpPT57ICAgZm9yIChsZXQgbGlzdCBvZiBhcnJheVRvRG8uYXJyYXlMaXN0KCkucmV2ZXJzZSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyVGFyZ2V0LmFwcGVuZCh0b0RvTGlzdENhcmQobGlzdCkuYWxsQ2FyZCgpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgIHRpdGxlQ2FyZDpcclxuICAgICAgICAgICAgKCk9PnsgICBmb3IgKGxldCBsaXN0IG9mIGFycmF5VG9Eby5hcnJheUxpc3QoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXllclRhcmdldC5hcHBlbmQodG9Eb0xpc3RDYXJkKGxpc3QpLnRpdGxlQ2FyZCgpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsZWFyRGlzcGxheShwYXJlbnQpIHtcclxuICAgIHdoaWxlIChwYXJlbnQuZmlyc3RDaGlsZCkge1xyXG4gICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChwYXJlbnQuZmlyc3RDaGlsZCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbndpbmRvdy5vbmxvYWQgPSgpPT4ge1xyXG4gICAgc3VibWl0SW5wdXRGb3JtKCk7XHJcbiAgICBvcGVuRm9ybUJ0bigpO1xyXG59XHJcblxyXG5leHBvcnQge2FkZFRvRG9MaXN0LCBhcnJheVRvRG9MaXN0LCBsb29wQXJyYXksIGNsZWFyRGlzcGxheSwgYXJyYXlUb0RvfVxyXG4iLCJpbXBvcnQgeyBjbGVhckRpc3BsYXksIGxvb3BBcnJheSB9IGZyb20gXCIuXCI7XHJcblxyXG5cclxuZnVuY3Rpb24gc2hvd1RvRG9MaXN0U2lkZWJhcih0YXJnZXRDbGFzcykge1xyXG4gICAgY29uc3QgbGF5ZXJUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHt0YXJnZXRDbGFzc31gKTtcclxuICAgIGNvbnN0IGxheWVyTGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgY2xlYXJEaXNwbGF5KGxheWVyVGFyZ2V0KTtcclxuICAgIGxheWVyTGkuYXBwZW5kKGxvb3BBcnJheSh0YXJnZXRDbGFzcykudGl0bGVDYXJkKCkpO1xyXG4gICAgcmV0dXJuIGxheWVyTGlcclxufVxyXG5cclxuZXhwb3J0IHtzaG93VG9Eb0xpc3RTaWRlYmFyfSIsImZ1bmN0aW9uIGNyZWF0ZURpdihuYW1lKXtcclxuICAgIGNvbnN0IGxheWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBsYXllci5jbGFzc05hbWUgPSBgJHtuYW1lfWA7XHJcbiAgICByZXR1cm4gbGF5ZXI7XHJcbn1cclxuZnVuY3Rpb24gY3JlYXRlVG9Eb0RpdihsaXN0LCBuYW1lKXtcclxuICAgIGNvbnN0IGxheWVyID0gY3JlYXRlRGl2KG5hbWUpO1xyXG4gICAgLy8gY29uc29sZS5sb2codHlwZW9mKGxpc3RbbmFtZV0pKTtcclxuICAgIGxheWVyLmFwcGVuZChsaXN0W2Ake25hbWV9YF0pO1xyXG4gICAgcmV0dXJuIGxheWVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiB0b0RvTGlzdExheWVyKGxpc3Qpe1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBjaGVjazogKCk9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxheWVyID0gY3JlYXRlRGl2KCdjaGVja2xpc3QnKTtcclxuICAgICAgICAgICAgbGF5ZXIuYXBwZW5kKGNoZWNrbGlzdENvbmRpdGlvbihsaXN0KSk7XHJcbiAgICAgICAgICAgIHJldHVybiBsYXllcjsgXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0aXRsZTogKCk9PiB7IHJldHVybiBjcmVhdGVUb0RvRGl2KGxpc3QsICd0aXRsZScpfSxcclxuICAgICAgICBkdWVEYXRlOiAoKT0+IHsgcmV0dXJuIGNyZWF0ZVRvRG9EaXYobGlzdCwgJ2R1ZURhdGUnKX0sXHJcbiAgICAgICAgcHJpb3JpdHk6ICgpPT4geyByZXR1cm4gY3JlYXRlVG9Eb0RpdihsaXN0LCAncHJpb3JpdHknKX1cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tsaXN0Q29uZGl0aW9uKGxpc3Qpe1xyXG4gICAgaWYgKGxpc3QuY2hlY2tsaXN0ID09IGZhbHNlKSByZXR1cm4gJ+KclSc7XHJcbiAgICBlbHNlIHJldHVybiAn4pyTJztcclxufVxyXG5cclxuLy9jaGFuZ2Ugc28gaXQgY2FuIGJlIHBhcnRpYWwgd2hldGVyIHlvdSB3YW5uYSBhcHBlbmQgdGl0bGUgb25seVxyXG5mdW5jdGlvbiB0b0RvTGlzdENhcmQobGlzdCl7XHJcbiAgICBjb25zdCBsYXllciA9IGNyZWF0ZURpdigndG9Eb0xpc3QnKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgYWxsQ2FyZDogKCk9PntcclxuICAgICAgICAgICAgbGF5ZXIuYXBwZW5kKHRvRG9MaXN0TGF5ZXIobGlzdCkuY2hlY2soKSwgdG9Eb0xpc3RMYXllcihsaXN0KS50aXRsZSgpLCB0b0RvTGlzdExheWVyKGxpc3QpLmR1ZURhdGUoKSwgdG9Eb0xpc3RMYXllcihsaXN0KS5wcmlvcml0eSgpKTtcclxuICAgICAgICAgICAgcmV0dXJuIGxheWVyIH0sXHJcbiAgICAgICAgdGl0bGVDYXJkOiAoKT0+e1xyXG4gICAgICAgICAgICBsYXllci5hcHBlbmQodG9Eb0xpc3RMYXllcihsaXN0KS50aXRsZSgpKTtcclxuICAgICAgICAgICAgcmV0dXJuIGxheWVyIH0gXHJcbiAgICB9O1xyXG59XHJcblxyXG5cclxuZXhwb3J0IHt0b0RvTGlzdENhcmQsIHRvRG9MaXN0TGF5ZXJ9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==