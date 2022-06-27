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
    resetForm();
    toggleOpenClose('inputForm');
    //console.log(fetchToDoList('dueDate').toString());
    //displayToDoList('outputSection');
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

function fetchToDoList(dataType) {
    //get the To Do List from array
    return arrayToDo.arrayList.map((array)=>{ return array[dataType]});
}

function fetchToDoListArray(){
    return arrayToDo.arrayList.forEach( (array) => {return array});
}

// function displayToDoList(targetClass) {
//     const layerTarget = document.querySelector(`.${targetClass}`);
//     clearDisplay(layerTarget);
//     createCard()
//     console.log(fetchToDoListArray());
//     layerTarget.append(createCard());
//     return layerTarget
// }

function showToDoList(targetClass) {
    const layerTarget = document.querySelector(`.${targetClass}`);
    clearDisplay(layerTarget);

    function loopArray(targetClass) {
        for (let list of arrayToDo.arrayList) {
            appendToDoList(list, targetClass);
        }
    }
    loopArray(targetClass);
}

function appendToDoList(list, targetClass){
    const layerTarget = document.querySelector(`.${targetClass}`);
    const layerCard = document.createElement('div');
    layerCard.className='layerCard';
    const text = list.title;
    const due = list.dueDate;
    layerCard.append(text, due);
    layerTarget.append(layerCard);
}

// function createCard(){
//     const layerCard = document.createElement('div');
//     layerCard.className='layerCard';
//     const text = fetchToDoList('title').toString();
//     layerCard.append(text);
//     return layerCard
// }

function clearDisplay(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

window.onload =()=> {
    submitInputForm();
    openFormBtn();
}



/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIseUJBQXlCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLDhCQUE4QjtBQUN0RTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsT0FBTztBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4Qyx1QkFBdUI7QUFDckU7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELGFBQWE7QUFDakU7QUFDQTtBQUNBO0FBQ0Esc0RBQXNELFlBQVk7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCxZQUFZO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsWUFBWTtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDbUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImNvbnNvbGUubG9nKCdoZXJlIHdlIGFyZScpO1xyXG5cclxuLy9nYXRoZXIgZGF0YSBpbnB1dCB0ZW1wZWxhdGVcclxuZnVuY3Rpb24gYWRkVG9Eb0xpc3QodGl0bGUsIGR1ZURhdGUsIHByaW9yaXR5ID0gJ0xvdycsIGNoZWNrbGlzdCA9IGZhbHNlKXsgXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHRpdGxlLFxyXG4gICAgICAgIGR1ZURhdGUsXHJcbiAgICAgICAgcHJpb3JpdHksXHJcbiAgICAgICAgY2hlY2tsaXN0XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vY3JlYXRlIEFycmF5IHRvIHNhdmUgdG8gZG8gbGlzdCB0ZW1wZWxhdGVcclxuZnVuY3Rpb24gYXJyYXlUb0RvTGlzdCgpIHtcclxuICAgIGxldCBhcnJheUxpc3QgPSBbXTtcclxuXHJcbiAgICBmdW5jdGlvbiBzaG93QXJyYXlMaXN0KCl7XHJcbiAgICAgICByZXR1cm4gYXJyYXlMaXN0O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGFkZFRvQXJyYXlMaXN0KGRhdGEpe1xyXG4gICAgICAgIGFycmF5TGlzdC5wdXNoKGRhdGEpIFxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlbW92ZUZyb21BcnJheUxpc3QocmVtb3ZlZFRpdGxlKXtcclxuICAgICAgIHJldHVybiBhcnJheUxpc3QgPSBhcnJheUxpc3QuZmlsdGVyKChhcnJheSk9PiBhcnJheS50aXRsZSAhPT0gcmVtb3ZlZFRpdGxlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgYXJyYXlMaXN0LFxyXG4gICAgICAgIHNob3dBcnJheUxpc3QsXHJcbiAgICAgICAgYWRkVG9BcnJheUxpc3QsXHJcbiAgICAgICAgcmVtb3ZlRnJvbUFycmF5TGlzdFxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBnZXRJbnB1dCA9ICgpID0+IHtcclxuICAgIC8vY29uc3QgZ3JhYkRhdGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0aXRsZTogKCk9PnsgXHJcbiAgICAgICAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0VGl0bGUnKTtcclxuICAgICAgICAgICAgcmV0dXJuIGlucHV0LnZhbHVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkdWVEYXRlOiAoKT0+eyBcclxuICAgICAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXREYXRlJyk7XHJcbiAgICAgICAgICAgIHJldHVybiBpbnB1dC52YWx1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcHJpb3JpdHk6ICgpPT57IFxyXG4gICAgICAgICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dFByaW9yaXR5Jyk7XHJcbiAgICAgICAgICAgIHJldHVybiBpbnB1dC52YWx1ZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVzZXRGb3JtKCkge1xyXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1pbnB1dCA9IFwidXNlcklucHV0XCJdJyk7XHJcbiAgICBpbnB1dC5mb3JFYWNoKChpbnApID0+IHsgcmV0dXJuIGlucC52YWx1ZSA9IG51bGwgfSk7XHJcbn1cclxuXHJcbi8vVGhlIExvZ2ljIGFmdGVyIHlvdSBjbGljayBhZGQgXHJcbmNvbnN0IGFycmF5VG9EbyA9IGFycmF5VG9Eb0xpc3QoKTtcclxuY29uc3QgaW5wdXRUb0RvID0gZ2V0SW5wdXQoKTtcclxuXHJcbmZ1bmN0aW9uIGFjdGlvbk5ld1RvRG9MaXN0KGUpe1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgLy9jcmVhdGUgVG8gRG8gTGlzdFxyXG4gICAgLy90YWtlIHRoZSBwYXJhbWV0ZXIgZnJvbSBkb21cclxuICAgIGxldCB0YXNrID0gYWRkVG9Eb0xpc3QoaW5wdXRUb0RvLnRpdGxlKCksaW5wdXRUb0RvLmR1ZURhdGUoKSwgaW5wdXRUb0RvLnByaW9yaXR5KCkpO1xyXG4gICAgLy9hZGQgdGhlIHZhcmlhYmxlIG9mIHRvIGRvIGxpc3QgdG8gdGhlIGFyYXkgXHJcbiAgICBhcnJheVRvRG8uYWRkVG9BcnJheUxpc3QodGFzayk7XHJcbiAgICBjb25zb2xlLmxvZyhhcnJheVRvRG8uc2hvd0FycmF5TGlzdCgpKTtcclxuICAgIHJlc2V0Rm9ybSgpO1xyXG4gICAgdG9nZ2xlT3BlbkNsb3NlKCdpbnB1dEZvcm0nKTtcclxuICAgIC8vY29uc29sZS5sb2coZmV0Y2hUb0RvTGlzdCgnZHVlRGF0ZScpLnRvU3RyaW5nKCkpO1xyXG4gICAgLy9kaXNwbGF5VG9Eb0xpc3QoJ291dHB1dFNlY3Rpb24nKTtcclxuICAgIHNob3dUb0RvTGlzdCgnb3V0cHV0U2VjdGlvbicpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzdWJtaXRJbnB1dEZvcm0oKSB7XHJcbiAgICBjb25zdCBtYWluYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW5iYXInKTtcclxuICAgIG1haW5iYXIuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgYWN0aW9uTmV3VG9Eb0xpc3QpO1xyXG4gIH1cclxuXHJcbmZ1bmN0aW9uIG9wZW5Gb3JtQnRuKCl7XHJcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3BlbkZvcm1JbnB1dEJ0bicpO1xyXG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PnsgdG9nZ2xlT3BlbkNsb3NlKCdpbnB1dEZvcm0nKSB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gdG9nZ2xlT3BlbkNsb3NlKHRhcmdldCl7XHJcbiAgICBjb25zdCB0b2dnbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHt0YXJnZXR9YCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHRvZ2dsZS5oYXNBdHRyaWJ1dGUoJ2Nsb3NlJywnJykpIHtcclxuICAgICAgICAgICAgdG9nZ2xlLnJlbW92ZUF0dHJpYnV0ZSgnY2xvc2UnKTtcclxuICAgICAgICAgICAgdG9nZ2xlLnNldEF0dHJpYnV0ZSgnb3BlbicsJycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICB0b2dnbGUucmVtb3ZlQXR0cmlidXRlKCdvcGVuJyk7XHJcbiAgICAgICAgICAgIHRvZ2dsZS5zZXRBdHRyaWJ1dGUoJ2Nsb3NlJywnJyk7XHJcbiAgICAgICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBmZXRjaFRvRG9MaXN0KGRhdGFUeXBlKSB7XHJcbiAgICAvL2dldCB0aGUgVG8gRG8gTGlzdCBmcm9tIGFycmF5XHJcbiAgICByZXR1cm4gYXJyYXlUb0RvLmFycmF5TGlzdC5tYXAoKGFycmF5KT0+eyByZXR1cm4gYXJyYXlbZGF0YVR5cGVdfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZldGNoVG9Eb0xpc3RBcnJheSgpe1xyXG4gICAgcmV0dXJuIGFycmF5VG9Eby5hcnJheUxpc3QuZm9yRWFjaCggKGFycmF5KSA9PiB7cmV0dXJuIGFycmF5fSk7XHJcbn1cclxuXHJcbi8vIGZ1bmN0aW9uIGRpc3BsYXlUb0RvTGlzdCh0YXJnZXRDbGFzcykge1xyXG4vLyAgICAgY29uc3QgbGF5ZXJUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHt0YXJnZXRDbGFzc31gKTtcclxuLy8gICAgIGNsZWFyRGlzcGxheShsYXllclRhcmdldCk7XHJcbi8vICAgICBjcmVhdGVDYXJkKClcclxuLy8gICAgIGNvbnNvbGUubG9nKGZldGNoVG9Eb0xpc3RBcnJheSgpKTtcclxuLy8gICAgIGxheWVyVGFyZ2V0LmFwcGVuZChjcmVhdGVDYXJkKCkpO1xyXG4vLyAgICAgcmV0dXJuIGxheWVyVGFyZ2V0XHJcbi8vIH1cclxuXHJcbmZ1bmN0aW9uIHNob3dUb0RvTGlzdCh0YXJnZXRDbGFzcykge1xyXG4gICAgY29uc3QgbGF5ZXJUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHt0YXJnZXRDbGFzc31gKTtcclxuICAgIGNsZWFyRGlzcGxheShsYXllclRhcmdldCk7XHJcblxyXG4gICAgZnVuY3Rpb24gbG9vcEFycmF5KHRhcmdldENsYXNzKSB7XHJcbiAgICAgICAgZm9yIChsZXQgbGlzdCBvZiBhcnJheVRvRG8uYXJyYXlMaXN0KSB7XHJcbiAgICAgICAgICAgIGFwcGVuZFRvRG9MaXN0KGxpc3QsIHRhcmdldENsYXNzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBsb29wQXJyYXkodGFyZ2V0Q2xhc3MpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBlbmRUb0RvTGlzdChsaXN0LCB0YXJnZXRDbGFzcyl7XHJcbiAgICBjb25zdCBsYXllclRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3RhcmdldENsYXNzfWApO1xyXG4gICAgY29uc3QgbGF5ZXJDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBsYXllckNhcmQuY2xhc3NOYW1lPSdsYXllckNhcmQnO1xyXG4gICAgY29uc3QgdGV4dCA9IGxpc3QudGl0bGU7XHJcbiAgICBjb25zdCBkdWUgPSBsaXN0LmR1ZURhdGU7XHJcbiAgICBsYXllckNhcmQuYXBwZW5kKHRleHQsIGR1ZSk7XHJcbiAgICBsYXllclRhcmdldC5hcHBlbmQobGF5ZXJDYXJkKTtcclxufVxyXG5cclxuLy8gZnVuY3Rpb24gY3JlYXRlQ2FyZCgpe1xyXG4vLyAgICAgY29uc3QgbGF5ZXJDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbi8vICAgICBsYXllckNhcmQuY2xhc3NOYW1lPSdsYXllckNhcmQnO1xyXG4vLyAgICAgY29uc3QgdGV4dCA9IGZldGNoVG9Eb0xpc3QoJ3RpdGxlJykudG9TdHJpbmcoKTtcclxuLy8gICAgIGxheWVyQ2FyZC5hcHBlbmQodGV4dCk7XHJcbi8vICAgICByZXR1cm4gbGF5ZXJDYXJkXHJcbi8vIH1cclxuXHJcbmZ1bmN0aW9uIGNsZWFyRGlzcGxheShwYXJlbnQpIHtcclxuICAgIHdoaWxlIChwYXJlbnQuZmlyc3RDaGlsZCkge1xyXG4gICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChwYXJlbnQuZmlyc3RDaGlsZCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbndpbmRvdy5vbmxvYWQgPSgpPT4ge1xyXG4gICAgc3VibWl0SW5wdXRGb3JtKCk7XHJcbiAgICBvcGVuRm9ybUJ0bigpO1xyXG59XHJcblxyXG5leHBvcnQge2FkZFRvRG9MaXN0LCBhcnJheVRvRG9MaXN0fVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=