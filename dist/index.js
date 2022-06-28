/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/toDoList.js":
/*!*************************!*\
  !*** ./src/toDoList.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createDiv(name){
    const layer = document.createElement('div');
    layer.className = `${name}`;
    return layer
}
function createToDoDiv(list, name){
    const layer = createDiv(name);
    layer.append(list[`${name}`]);
    return layer
}

function toDoListLayer(list){
    return {
        check: ()=> { return createToDoDiv(list, 'checklist')},
        title: ()=> { return createToDoDiv(list, 'title')},
        dueDate: ()=> { return createToDoDiv(list, 'dueDate')},
        priority: ()=> { return createToDoDiv(list, 'priority')}
    }
}

function toDoListCard(list){
    const layer = createDiv('toDoList');
    // const layerTitle = createToDoDiv(list, 'title');
    // const layerDueDate = createToDoDiv(list, 'dueDate');
    // const layerPriority = createToDoDiv(list, 'priority');
    layer.append(toDoListLayer(list).check(), toDoListLayer(list).title(), toDoListLayer(list).dueDate(), toDoListLayer(list).priority());
    return layer
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toDoListCard);

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addToDoList": () => (/* binding */ addToDoList),
/* harmony export */   "arrayToDo": () => (/* binding */ arrayToDo),
/* harmony export */   "arrayToDoList": () => (/* binding */ arrayToDoList)
/* harmony export */ });
/* harmony import */ var _toDoList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDoList */ "./src/toDoList.js");


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
    function loopArray(targetClass) {
        for (let list of arrayToDo.arrayList().reverse()) {
            console.log(list);
            appendToDoList(list, targetClass);
        }
    }
    loopArray(targetClass);
}

function appendToDoList(list, targetClass){
    const layerTarget = document.querySelector(`.${targetClass}`);
    layerTarget.append((0,_toDoList__WEBPACK_IMPORTED_MODULE_0__["default"])(list));
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



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0EseUJBQXlCLEtBQUs7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsS0FBSztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHdDQUF3QztBQUM5RCxzQkFBc0Isb0NBQW9DO0FBQzFELHdCQUF3QixzQ0FBc0M7QUFDOUQseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWU7Ozs7OztVQzlCZjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOc0M7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDhCQUE4QjtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLHVCQUF1QixpQkFBaUIsSUFBSSxvQkFBb0IsSUFBSSxxQkFBcUIsSUFBSTtBQUM3RixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLHlCQUF5QjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLDhCQUE4QjtBQUN0RTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsT0FBTztBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELFlBQVk7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCxZQUFZO0FBQy9ELHVCQUF1QixxREFBWTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUM4QyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdG9Eb0xpc3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY3JlYXRlRGl2KG5hbWUpe1xyXG4gICAgY29uc3QgbGF5ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGxheWVyLmNsYXNzTmFtZSA9IGAke25hbWV9YDtcclxuICAgIHJldHVybiBsYXllclxyXG59XHJcbmZ1bmN0aW9uIGNyZWF0ZVRvRG9EaXYobGlzdCwgbmFtZSl7XHJcbiAgICBjb25zdCBsYXllciA9IGNyZWF0ZURpdihuYW1lKTtcclxuICAgIGxheWVyLmFwcGVuZChsaXN0W2Ake25hbWV9YF0pO1xyXG4gICAgcmV0dXJuIGxheWVyXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvRG9MaXN0TGF5ZXIobGlzdCl7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNoZWNrOiAoKT0+IHsgcmV0dXJuIGNyZWF0ZVRvRG9EaXYobGlzdCwgJ2NoZWNrbGlzdCcpfSxcclxuICAgICAgICB0aXRsZTogKCk9PiB7IHJldHVybiBjcmVhdGVUb0RvRGl2KGxpc3QsICd0aXRsZScpfSxcclxuICAgICAgICBkdWVEYXRlOiAoKT0+IHsgcmV0dXJuIGNyZWF0ZVRvRG9EaXYobGlzdCwgJ2R1ZURhdGUnKX0sXHJcbiAgICAgICAgcHJpb3JpdHk6ICgpPT4geyByZXR1cm4gY3JlYXRlVG9Eb0RpdihsaXN0LCAncHJpb3JpdHknKX1cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdG9Eb0xpc3RDYXJkKGxpc3Qpe1xyXG4gICAgY29uc3QgbGF5ZXIgPSBjcmVhdGVEaXYoJ3RvRG9MaXN0Jyk7XHJcbiAgICAvLyBjb25zdCBsYXllclRpdGxlID0gY3JlYXRlVG9Eb0RpdihsaXN0LCAndGl0bGUnKTtcclxuICAgIC8vIGNvbnN0IGxheWVyRHVlRGF0ZSA9IGNyZWF0ZVRvRG9EaXYobGlzdCwgJ2R1ZURhdGUnKTtcclxuICAgIC8vIGNvbnN0IGxheWVyUHJpb3JpdHkgPSBjcmVhdGVUb0RvRGl2KGxpc3QsICdwcmlvcml0eScpO1xyXG4gICAgbGF5ZXIuYXBwZW5kKHRvRG9MaXN0TGF5ZXIobGlzdCkuY2hlY2soKSwgdG9Eb0xpc3RMYXllcihsaXN0KS50aXRsZSgpLCB0b0RvTGlzdExheWVyKGxpc3QpLmR1ZURhdGUoKSwgdG9Eb0xpc3RMYXllcihsaXN0KS5wcmlvcml0eSgpKTtcclxuICAgIHJldHVybiBsYXllclxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdG9Eb0xpc3RDYXJkIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgdG9Eb0xpc3RDYXJkIGZyb20gXCIuL3RvRG9MaXN0XCI7XHJcblxyXG5jb25zb2xlLmxvZygnaGVyZSB3ZSBhcmUnKTtcclxuXHJcbi8vZ2F0aGVyIGRhdGEgaW5wdXQgdGVtcGVsYXRlXHJcbmZ1bmN0aW9uIGFkZFRvRG9MaXN0KHRpdGxlLCBkdWVEYXRlLCBwcmlvcml0eSA9ICdMb3cnLCBjaGVja2xpc3QgPSBmYWxzZSl7IFxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0aXRsZSxcclxuICAgICAgICBkdWVEYXRlLFxyXG4gICAgICAgIHByaW9yaXR5LFxyXG4gICAgICAgIGNoZWNrbGlzdFxyXG4gICAgfVxyXG59XHJcblxyXG4vL2NyZWF0ZSBBcnJheSB0byBzYXZlIHRvIGRvIGxpc3QgdGVtcGVsYXRlXHJcbmZ1bmN0aW9uIGFycmF5VG9Eb0xpc3QoKSB7XHJcbiAgICBsZXQgYXJyYXlMaXN0ID0gW107XHJcblxyXG4gICAgZnVuY3Rpb24gc2hvd0FycmF5TGlzdCgpe1xyXG4gICAgICAgcmV0dXJuIGFycmF5TGlzdDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhZGRUb0FycmF5TGlzdChkYXRhKXtcclxuICAgICAgICBhcnJheUxpc3QucHVzaChkYXRhKSBcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZW1vdmVGcm9tQXJyYXlMaXN0KHJlbW92ZWRUaXRsZSl7XHJcbiAgICAgICByZXR1cm4gYXJyYXlMaXN0ID0gYXJyYXlMaXN0LmZpbHRlcigoYXJyYXkpPT4gYXJyYXkudGl0bGUgIT09IHJlbW92ZWRUaXRsZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIGFycmF5TGlzdDogKCk9PnsgcmV0dXJuIEFycmF5LmZyb20oYXJyYXlMaXN0KSB9LFxyXG4gICAgICAgIHNob3dBcnJheUxpc3QsXHJcbiAgICAgICAgYWRkVG9BcnJheUxpc3QsXHJcbiAgICAgICAgcmVtb3ZlRnJvbUFycmF5TGlzdFxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBnZXRJbnB1dCA9ICgpID0+IHtcclxuICAgIC8vY29uc3QgZ3JhYkRhdGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0aXRsZTogKCk9PnsgXHJcbiAgICAgICAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0VGl0bGUnKTtcclxuICAgICAgICAgICAgcmV0dXJuIGlucHV0LnZhbHVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkdWVEYXRlOiAoKT0+eyBcclxuICAgICAgICAgICAgY29uc3QgaW5wdXQgPSBuZXcgRGF0ZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXREYXRlJykudmFsdWUpO1xyXG4gICAgICAgICAgICByZXR1cm4gYCAke2lucHV0LmdldERhdGUoKX0gLSAke2lucHV0LmdldE1vbnRoKCkrMX0gLSAke2lucHV0LmdldEZ1bGxZZWFyKCl9IGAgOyAvL3Nob3VsZCB0cnkgbW9tZW50LmpzIGxhdGVyXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwcmlvcml0eTogKCk9PnsgXHJcbiAgICAgICAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0UHJpb3JpdHknKTtcclxuICAgICAgICAgICAgcmV0dXJuIGlucHV0LnZhbHVlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZXNldEZvcm0oKSB7XHJcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWlucHV0ID0gXCJ1c2VySW5wdXRcIl0nKTtcclxuICAgIGlucHV0LmZvckVhY2goKGlucCkgPT4geyByZXR1cm4gaW5wLnZhbHVlID0gbnVsbCB9KTtcclxufVxyXG5cclxuLy9UaGUgTG9naWMgYWZ0ZXIgeW91IGNsaWNrIGFkZCBcclxuY29uc3QgYXJyYXlUb0RvID0gYXJyYXlUb0RvTGlzdCgpO1xyXG5jb25zdCBpbnB1dFRvRG8gPSBnZXRJbnB1dCgpO1xyXG5cclxuZnVuY3Rpb24gYWN0aW9uTmV3VG9Eb0xpc3QoZSl7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvL2NyZWF0ZSBUbyBEbyBMaXN0XHJcbiAgICAvL3Rha2UgdGhlIHBhcmFtZXRlciBmcm9tIGRvbVxyXG4gICAgbGV0IHRhc2sgPSBhZGRUb0RvTGlzdChpbnB1dFRvRG8udGl0bGUoKSxpbnB1dFRvRG8uZHVlRGF0ZSgpLCBpbnB1dFRvRG8ucHJpb3JpdHkoKSk7XHJcbiAgICAvL2FkZCB0aGUgdmFyaWFibGUgb2YgdG8gZG8gbGlzdCB0byB0aGUgYXJheSBcclxuICAgIGFycmF5VG9Eby5hZGRUb0FycmF5TGlzdCh0YXNrKTtcclxuICAgIGNvbnNvbGUubG9nKGFycmF5VG9Eby5zaG93QXJyYXlMaXN0KCkpO1xyXG4gICAgcmVzZXRGb3JtKCk7XHJcbiAgICB0b2dnbGVPcGVuQ2xvc2UoJ2lucHV0Rm9ybScpO1xyXG4gICAgc2hvd1RvRG9MaXN0KCdvdXRwdXRTZWN0aW9uJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN1Ym1pdElucHV0Rm9ybSgpIHtcclxuICAgIGNvbnN0IG1haW5iYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbmJhcicpO1xyXG4gICAgbWFpbmJhci5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBhY3Rpb25OZXdUb0RvTGlzdCk7XHJcbiAgfVxyXG5cclxuZnVuY3Rpb24gb3BlbkZvcm1CdG4oKXtcclxuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcGVuRm9ybUlucHV0QnRuJyk7XHJcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+eyB0b2dnbGVPcGVuQ2xvc2UoJ2lucHV0Rm9ybScpIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiB0b2dnbGVPcGVuQ2xvc2UodGFyZ2V0KXtcclxuICAgIGNvbnN0IHRvZ2dsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3RhcmdldH1gKTtcclxuICAgICAgICBpZiAodG9nZ2xlLmhhc0F0dHJpYnV0ZSgnY2xvc2UnLCcnKSkge1xyXG4gICAgICAgICAgICB0b2dnbGUucmVtb3ZlQXR0cmlidXRlKCdjbG9zZScpO1xyXG4gICAgICAgICAgICB0b2dnbGUuc2V0QXR0cmlidXRlKCdvcGVuJywnJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHRvZ2dsZS5yZW1vdmVBdHRyaWJ1dGUoJ29wZW4nKTtcclxuICAgICAgICAgICAgdG9nZ2xlLnNldEF0dHJpYnV0ZSgnY2xvc2UnLCcnKTtcclxuICAgICAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dUb0RvTGlzdCh0YXJnZXRDbGFzcykge1xyXG4gICAgY29uc3QgbGF5ZXJUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHt0YXJnZXRDbGFzc31gKTtcclxuICAgIGNsZWFyRGlzcGxheShsYXllclRhcmdldCk7XHJcbiAgICBmdW5jdGlvbiBsb29wQXJyYXkodGFyZ2V0Q2xhc3MpIHtcclxuICAgICAgICBmb3IgKGxldCBsaXN0IG9mIGFycmF5VG9Eby5hcnJheUxpc3QoKS5yZXZlcnNlKCkpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cobGlzdCk7XHJcbiAgICAgICAgICAgIGFwcGVuZFRvRG9MaXN0KGxpc3QsIHRhcmdldENsYXNzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBsb29wQXJyYXkodGFyZ2V0Q2xhc3MpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBlbmRUb0RvTGlzdChsaXN0LCB0YXJnZXRDbGFzcyl7XHJcbiAgICBjb25zdCBsYXllclRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3RhcmdldENsYXNzfWApO1xyXG4gICAgbGF5ZXJUYXJnZXQuYXBwZW5kKHRvRG9MaXN0Q2FyZChsaXN0KSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsZWFyRGlzcGxheShwYXJlbnQpIHtcclxuICAgIHdoaWxlIChwYXJlbnQuZmlyc3RDaGlsZCkge1xyXG4gICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChwYXJlbnQuZmlyc3RDaGlsZCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbndpbmRvdy5vbmxvYWQgPSgpPT4ge1xyXG4gICAgc3VibWl0SW5wdXRGb3JtKCk7XHJcbiAgICBvcGVuRm9ybUJ0bigpO1xyXG59XHJcblxyXG5leHBvcnQge2FkZFRvRG9MaXN0LCBhcnJheVRvRG9MaXN0LCBhcnJheVRvRG99XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==