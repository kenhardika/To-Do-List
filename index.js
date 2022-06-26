/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addToDoList": () => (/* binding */ addToDoList),
/* harmony export */   "arrayToDoList": () => (/* binding */ arrayToDoList)
/* harmony export */ });
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
        arrayList,
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
            const input = document.getElementById('inputDate');
            return input.value
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
    resetForm()
}

function submitInputForm() {
    const mainbar = document.querySelector('.mainbar');
    mainbar.addEventListener('submit', actionNewToDoList);
  }

window.onload =()=> {
    submitInputForm();
}



/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNkJBQTZCLHlCQUF5QjtBQUN0RDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVtQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiY29uc29sZS5sb2coJ2hlcmUgd2UgYXJlJyk7XG5cbi8vZ2F0aGVyIGRhdGEgaW5wdXQgdGVtcGVsYXRlXG5mdW5jdGlvbiBhZGRUb0RvTGlzdCh0aXRsZSwgZHVlRGF0ZSwgcHJpb3JpdHkgPSAnTG93JywgY2hlY2tsaXN0ID0gZmFsc2UpeyBcbiAgICByZXR1cm4ge1xuICAgICAgICB0aXRsZSxcbiAgICAgICAgZHVlRGF0ZSxcbiAgICAgICAgcHJpb3JpdHksXG4gICAgICAgIGNoZWNrbGlzdFxuICAgIH1cbn1cblxuLy9jcmVhdGUgQXJyYXkgdG8gc2F2ZSB0byBkbyBsaXN0IHRlbXBlbGF0ZVxuZnVuY3Rpb24gYXJyYXlUb0RvTGlzdCgpIHtcbiAgICBsZXQgYXJyYXlMaXN0ID0gW107XG5cbiAgICBmdW5jdGlvbiBzaG93QXJyYXlMaXN0KCl7XG4gICAgICAgcmV0dXJuIGFycmF5TGlzdDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRUb0FycmF5TGlzdChkYXRhKXtcbiAgICAgICAgYXJyYXlMaXN0LnB1c2goZGF0YSkgXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlRnJvbUFycmF5TGlzdChyZW1vdmVkVGl0bGUpe1xuICAgICAgIHJldHVybiBhcnJheUxpc3QgPSBhcnJheUxpc3QuZmlsdGVyKChhcnJheSk9PiBhcnJheS50aXRsZSAhPT0gcmVtb3ZlZFRpdGxlKTtcbiAgICB9XG5cbiAgICByZXR1cm57XG4gICAgICAgIGFycmF5TGlzdCxcbiAgICAgICAgc2hvd0FycmF5TGlzdCxcbiAgICAgICAgYWRkVG9BcnJheUxpc3QsXG4gICAgICAgIHJlbW92ZUZyb21BcnJheUxpc3RcbiAgICB9XG59XG5cbmNvbnN0IGdldElucHV0ID0gKCkgPT4ge1xuICAgIC8vY29uc3QgZ3JhYkRhdGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xuICAgIHJldHVybiB7XG4gICAgICAgIHRpdGxlOiAoKT0+eyBcbiAgICAgICAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0VGl0bGUnKTtcbiAgICAgICAgICAgIHJldHVybiBpbnB1dC52YWx1ZVxuICAgICAgICB9LFxuICAgICAgICBkdWVEYXRlOiAoKT0+eyBcbiAgICAgICAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0RGF0ZScpO1xuICAgICAgICAgICAgcmV0dXJuIGlucHV0LnZhbHVlXG4gICAgICAgIH0sXG4gICAgICAgIHByaW9yaXR5OiAoKT0+eyBcbiAgICAgICAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0UHJpb3JpdHknKTtcbiAgICAgICAgICAgIHJldHVybiBpbnB1dC52YWx1ZVxuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiByZXNldEZvcm0oKSB7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1pbnB1dCA9IFwidXNlcklucHV0XCJdJyk7XG4gICAgaW5wdXQuZm9yRWFjaCgoaW5wKSA9PiB7IHJldHVybiBpbnAudmFsdWUgPSBudWxsIH0pO1xufVxuXG4vL1RoZSBMb2dpYyBhZnRlciB5b3UgY2xpY2sgYWRkIFxuY29uc3QgYXJyYXlUb0RvID0gYXJyYXlUb0RvTGlzdCgpO1xuY29uc3QgaW5wdXRUb0RvID0gZ2V0SW5wdXQoKTtcblxuZnVuY3Rpb24gYWN0aW9uTmV3VG9Eb0xpc3QoZSl7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vY3JlYXRlIFRvIERvIExpc3RcbiAgICAvL3Rha2UgdGhlIHBhcmFtZXRlciBmcm9tIGRvbVxuICAgIGxldCB0YXNrID0gYWRkVG9Eb0xpc3QoaW5wdXRUb0RvLnRpdGxlKCksaW5wdXRUb0RvLmR1ZURhdGUoKSwgaW5wdXRUb0RvLnByaW9yaXR5KCkpO1xuICAgIC8vYWRkIHRoZSB2YXJpYWJsZSBvZiB0byBkbyBsaXN0IHRvIHRoZSBhcmF5IFxuICAgIGFycmF5VG9Eby5hZGRUb0FycmF5TGlzdCh0YXNrKTtcbiAgICBjb25zb2xlLmxvZyhhcnJheVRvRG8uc2hvd0FycmF5TGlzdCgpKTtcbiAgICByZXNldEZvcm0oKVxufVxuXG5mdW5jdGlvbiBzdWJtaXRJbnB1dEZvcm0oKSB7XG4gICAgY29uc3QgbWFpbmJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluYmFyJyk7XG4gICAgbWFpbmJhci5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBhY3Rpb25OZXdUb0RvTGlzdCk7XG4gIH1cblxud2luZG93Lm9ubG9hZCA9KCk9PiB7XG4gICAgc3VibWl0SW5wdXRGb3JtKCk7XG59XG5cbmV4cG9ydCB7YWRkVG9Eb0xpc3QsIGFycmF5VG9Eb0xpc3R9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=