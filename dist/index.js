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
    displayToDoList('outputSection');
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

function displayToDoList(targetClass) {
    const layerTarget = document.querySelector(`.${targetClass}`);
    clearDisplay(layerTarget);
    const text = fetchToDoList('title').toString();
    // text.className ='displayText';
    return layerTarget.append(text);
}

// function clearDisplay(targetClass) {
//     const layerTarget = document.querySelector(`.${targetClass}`);
//     layerTarget.removeChild(display.childNodes[0]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIseUJBQXlCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3Qyw4QkFBOEI7QUFDdEU7QUFDQTtBQUNBO0FBQ0EsOENBQThDLE9BQU87QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsdUJBQXVCO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCxZQUFZO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNELFlBQVk7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNtQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiY29uc29sZS5sb2coJ2hlcmUgd2UgYXJlJyk7XHJcblxyXG4vL2dhdGhlciBkYXRhIGlucHV0IHRlbXBlbGF0ZVxyXG5mdW5jdGlvbiBhZGRUb0RvTGlzdCh0aXRsZSwgZHVlRGF0ZSwgcHJpb3JpdHkgPSAnTG93JywgY2hlY2tsaXN0ID0gZmFsc2UpeyBcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdGl0bGUsXHJcbiAgICAgICAgZHVlRGF0ZSxcclxuICAgICAgICBwcmlvcml0eSxcclxuICAgICAgICBjaGVja2xpc3RcclxuICAgIH1cclxufVxyXG5cclxuLy9jcmVhdGUgQXJyYXkgdG8gc2F2ZSB0byBkbyBsaXN0IHRlbXBlbGF0ZVxyXG5mdW5jdGlvbiBhcnJheVRvRG9MaXN0KCkge1xyXG4gICAgbGV0IGFycmF5TGlzdCA9IFtdO1xyXG5cclxuICAgIGZ1bmN0aW9uIHNob3dBcnJheUxpc3QoKXtcclxuICAgICAgIHJldHVybiBhcnJheUxpc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYWRkVG9BcnJheUxpc3QoZGF0YSl7XHJcbiAgICAgICAgYXJyYXlMaXN0LnB1c2goZGF0YSkgXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlRnJvbUFycmF5TGlzdChyZW1vdmVkVGl0bGUpe1xyXG4gICAgICAgcmV0dXJuIGFycmF5TGlzdCA9IGFycmF5TGlzdC5maWx0ZXIoKGFycmF5KT0+IGFycmF5LnRpdGxlICE9PSByZW1vdmVkVGl0bGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybntcclxuICAgICAgICBhcnJheUxpc3QsXHJcbiAgICAgICAgc2hvd0FycmF5TGlzdCxcclxuICAgICAgICBhZGRUb0FycmF5TGlzdCxcclxuICAgICAgICByZW1vdmVGcm9tQXJyYXlMaXN0XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IGdldElucHV0ID0gKCkgPT4ge1xyXG4gICAgLy9jb25zdCBncmFiRGF0YSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHRpdGxlOiAoKT0+eyBcclxuICAgICAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXRUaXRsZScpO1xyXG4gICAgICAgICAgICByZXR1cm4gaW5wdXQudmFsdWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIGR1ZURhdGU6ICgpPT57IFxyXG4gICAgICAgICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dERhdGUnKTtcclxuICAgICAgICAgICAgcmV0dXJuIGlucHV0LnZhbHVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwcmlvcml0eTogKCk9PnsgXHJcbiAgICAgICAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0UHJpb3JpdHknKTtcclxuICAgICAgICAgICAgcmV0dXJuIGlucHV0LnZhbHVlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZXNldEZvcm0oKSB7XHJcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWlucHV0ID0gXCJ1c2VySW5wdXRcIl0nKTtcclxuICAgIGlucHV0LmZvckVhY2goKGlucCkgPT4geyByZXR1cm4gaW5wLnZhbHVlID0gbnVsbCB9KTtcclxufVxyXG5cclxuLy9UaGUgTG9naWMgYWZ0ZXIgeW91IGNsaWNrIGFkZCBcclxuY29uc3QgYXJyYXlUb0RvID0gYXJyYXlUb0RvTGlzdCgpO1xyXG5jb25zdCBpbnB1dFRvRG8gPSBnZXRJbnB1dCgpO1xyXG5cclxuZnVuY3Rpb24gYWN0aW9uTmV3VG9Eb0xpc3QoZSl7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvL2NyZWF0ZSBUbyBEbyBMaXN0XHJcbiAgICAvL3Rha2UgdGhlIHBhcmFtZXRlciBmcm9tIGRvbVxyXG4gICAgbGV0IHRhc2sgPSBhZGRUb0RvTGlzdChpbnB1dFRvRG8udGl0bGUoKSxpbnB1dFRvRG8uZHVlRGF0ZSgpLCBpbnB1dFRvRG8ucHJpb3JpdHkoKSk7XHJcbiAgICAvL2FkZCB0aGUgdmFyaWFibGUgb2YgdG8gZG8gbGlzdCB0byB0aGUgYXJheSBcclxuICAgIGFycmF5VG9Eby5hZGRUb0FycmF5TGlzdCh0YXNrKTtcclxuICAgIGNvbnNvbGUubG9nKGFycmF5VG9Eby5zaG93QXJyYXlMaXN0KCkpO1xyXG4gICAgcmVzZXRGb3JtKCk7XHJcbiAgICB0b2dnbGVPcGVuQ2xvc2UoJ2lucHV0Rm9ybScpO1xyXG4gICAgLy9jb25zb2xlLmxvZyhmZXRjaFRvRG9MaXN0KCdkdWVEYXRlJykudG9TdHJpbmcoKSk7XHJcbiAgICBkaXNwbGF5VG9Eb0xpc3QoJ291dHB1dFNlY3Rpb24nKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc3VibWl0SW5wdXRGb3JtKCkge1xyXG4gICAgY29uc3QgbWFpbmJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluYmFyJyk7XHJcbiAgICBtYWluYmFyLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGFjdGlvbk5ld1RvRG9MaXN0KTtcclxuICB9XHJcblxyXG5mdW5jdGlvbiBvcGVuRm9ybUJ0bigpe1xyXG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29wZW5Gb3JtSW5wdXRCdG4nKTtcclxuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57IHRvZ2dsZU9wZW5DbG9zZSgnaW5wdXRGb3JtJykgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvZ2dsZU9wZW5DbG9zZSh0YXJnZXQpe1xyXG4gICAgY29uc3QgdG9nZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7dGFyZ2V0fWApO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICh0b2dnbGUuaGFzQXR0cmlidXRlKCdjbG9zZScsJycpKSB7XHJcbiAgICAgICAgICAgIHRvZ2dsZS5yZW1vdmVBdHRyaWJ1dGUoJ2Nsb3NlJyk7XHJcbiAgICAgICAgICAgIHRvZ2dsZS5zZXRBdHRyaWJ1dGUoJ29wZW4nLCcnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgdG9nZ2xlLnJlbW92ZUF0dHJpYnV0ZSgnb3BlbicpO1xyXG4gICAgICAgICAgICB0b2dnbGUuc2V0QXR0cmlidXRlKCdjbG9zZScsJycpO1xyXG4gICAgICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZmV0Y2hUb0RvTGlzdChkYXRhVHlwZSkge1xyXG4gICAgLy9nZXQgdGhlIFRvIERvIExpc3QgZnJvbSBhcnJheVxyXG4gICAgcmV0dXJuIGFycmF5VG9Eby5hcnJheUxpc3QubWFwKChhcnJheSk9PnsgcmV0dXJuIGFycmF5W2RhdGFUeXBlXX0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5VG9Eb0xpc3QodGFyZ2V0Q2xhc3MpIHtcclxuICAgIGNvbnN0IGxheWVyVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7dGFyZ2V0Q2xhc3N9YCk7XHJcbiAgICBjbGVhckRpc3BsYXkobGF5ZXJUYXJnZXQpO1xyXG4gICAgY29uc3QgdGV4dCA9IGZldGNoVG9Eb0xpc3QoJ3RpdGxlJykudG9TdHJpbmcoKTtcclxuICAgIC8vIHRleHQuY2xhc3NOYW1lID0nZGlzcGxheVRleHQnO1xyXG4gICAgcmV0dXJuIGxheWVyVGFyZ2V0LmFwcGVuZCh0ZXh0KTtcclxufVxyXG5cclxuLy8gZnVuY3Rpb24gY2xlYXJEaXNwbGF5KHRhcmdldENsYXNzKSB7XHJcbi8vICAgICBjb25zdCBsYXllclRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3RhcmdldENsYXNzfWApO1xyXG4vLyAgICAgbGF5ZXJUYXJnZXQucmVtb3ZlQ2hpbGQoZGlzcGxheS5jaGlsZE5vZGVzWzBdKTtcclxuLy8gfVxyXG5cclxuZnVuY3Rpb24gY2xlYXJEaXNwbGF5KHBhcmVudCkge1xyXG4gICAgd2hpbGUgKHBhcmVudC5maXJzdENoaWxkKSB7XHJcbiAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKHBhcmVudC5maXJzdENoaWxkKTtcclxuICAgIH1cclxufVxyXG5cclxud2luZG93Lm9ubG9hZCA9KCk9PiB7XHJcbiAgICBzdWJtaXRJbnB1dEZvcm0oKTtcclxuICAgIG9wZW5Gb3JtQnRuKCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7YWRkVG9Eb0xpc3QsIGFycmF5VG9Eb0xpc3R9XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==