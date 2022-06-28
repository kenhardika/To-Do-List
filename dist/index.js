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
    console.log('showToDoList');
    console.log(arrayToDo.arrayList());
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
    layerTarget.append(toDoListCard(list));
}

function toDoListCard(list){
    const layerCard = document.createElement('div');
    layerCard.className = 'ToDoList';
    layerCard.append(list.title, list.dueDate, list.priority);
    return layerCard
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



/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qiw4QkFBOEI7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSx1QkFBdUIsaUJBQWlCLElBQUksb0JBQW9CLElBQUkscUJBQXFCLElBQUk7QUFDN0YsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2Qix5QkFBeUI7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3Qyw4QkFBOEI7QUFDdEU7QUFDQTtBQUNBO0FBQ0EsOENBQThDLE9BQU87QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELFlBQVk7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsWUFBWTtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDbUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImNvbnNvbGUubG9nKCdoZXJlIHdlIGFyZScpO1xyXG5cclxuLy9nYXRoZXIgZGF0YSBpbnB1dCB0ZW1wZWxhdGVcclxuZnVuY3Rpb24gYWRkVG9Eb0xpc3QodGl0bGUsIGR1ZURhdGUsIHByaW9yaXR5ID0gJ0xvdycsIGNoZWNrbGlzdCA9IGZhbHNlKXsgXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHRpdGxlLFxyXG4gICAgICAgIGR1ZURhdGUsXHJcbiAgICAgICAgcHJpb3JpdHksXHJcbiAgICAgICAgY2hlY2tsaXN0XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vY3JlYXRlIEFycmF5IHRvIHNhdmUgdG8gZG8gbGlzdCB0ZW1wZWxhdGVcclxuZnVuY3Rpb24gYXJyYXlUb0RvTGlzdCgpIHtcclxuICAgIGxldCBhcnJheUxpc3QgPSBbXTtcclxuXHJcbiAgICBmdW5jdGlvbiBzaG93QXJyYXlMaXN0KCl7XHJcbiAgICAgICByZXR1cm4gYXJyYXlMaXN0O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGFkZFRvQXJyYXlMaXN0KGRhdGEpe1xyXG4gICAgICAgIGFycmF5TGlzdC5wdXNoKGRhdGEpIFxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlbW92ZUZyb21BcnJheUxpc3QocmVtb3ZlZFRpdGxlKXtcclxuICAgICAgIHJldHVybiBhcnJheUxpc3QgPSBhcnJheUxpc3QuZmlsdGVyKChhcnJheSk9PiBhcnJheS50aXRsZSAhPT0gcmVtb3ZlZFRpdGxlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgYXJyYXlMaXN0OiAoKT0+eyByZXR1cm4gQXJyYXkuZnJvbShhcnJheUxpc3QpIH0sXHJcbiAgICAgICAgc2hvd0FycmF5TGlzdCxcclxuICAgICAgICBhZGRUb0FycmF5TGlzdCxcclxuICAgICAgICByZW1vdmVGcm9tQXJyYXlMaXN0XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IGdldElucHV0ID0gKCkgPT4ge1xyXG4gICAgLy9jb25zdCBncmFiRGF0YSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHRpdGxlOiAoKT0+eyBcclxuICAgICAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXRUaXRsZScpO1xyXG4gICAgICAgICAgICByZXR1cm4gaW5wdXQudmFsdWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIGR1ZURhdGU6ICgpPT57IFxyXG4gICAgICAgICAgICBjb25zdCBpbnB1dCA9IG5ldyBEYXRlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dERhdGUnKS52YWx1ZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBgICR7aW5wdXQuZ2V0RGF0ZSgpfSAtICR7aW5wdXQuZ2V0TW9udGgoKSsxfSAtICR7aW5wdXQuZ2V0RnVsbFllYXIoKX0gYCA7IC8vc2hvdWxkIHRyeSBtb21lbnQuanMgbGF0ZXJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHByaW9yaXR5OiAoKT0+eyBcclxuICAgICAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXRQcmlvcml0eScpO1xyXG4gICAgICAgICAgICByZXR1cm4gaW5wdXQudmFsdWVcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlc2V0Rm9ybSgpIHtcclxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtaW5wdXQgPSBcInVzZXJJbnB1dFwiXScpO1xyXG4gICAgaW5wdXQuZm9yRWFjaCgoaW5wKSA9PiB7IHJldHVybiBpbnAudmFsdWUgPSBudWxsIH0pO1xyXG59XHJcblxyXG4vL1RoZSBMb2dpYyBhZnRlciB5b3UgY2xpY2sgYWRkIFxyXG5jb25zdCBhcnJheVRvRG8gPSBhcnJheVRvRG9MaXN0KCk7XHJcbmNvbnN0IGlucHV0VG9EbyA9IGdldElucHV0KCk7XHJcblxyXG5mdW5jdGlvbiBhY3Rpb25OZXdUb0RvTGlzdChlKXtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIC8vY3JlYXRlIFRvIERvIExpc3RcclxuICAgIC8vdGFrZSB0aGUgcGFyYW1ldGVyIGZyb20gZG9tXHJcbiAgICBsZXQgdGFzayA9IGFkZFRvRG9MaXN0KGlucHV0VG9Eby50aXRsZSgpLGlucHV0VG9Eby5kdWVEYXRlKCksIGlucHV0VG9Eby5wcmlvcml0eSgpKTtcclxuICAgIC8vYWRkIHRoZSB2YXJpYWJsZSBvZiB0byBkbyBsaXN0IHRvIHRoZSBhcmF5IFxyXG4gICAgYXJyYXlUb0RvLmFkZFRvQXJyYXlMaXN0KHRhc2spO1xyXG4gICAgY29uc29sZS5sb2coYXJyYXlUb0RvLnNob3dBcnJheUxpc3QoKSk7XHJcbiAgICByZXNldEZvcm0oKTtcclxuICAgIHRvZ2dsZU9wZW5DbG9zZSgnaW5wdXRGb3JtJyk7XHJcbiAgICBzaG93VG9Eb0xpc3QoJ291dHB1dFNlY3Rpb24nKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc3VibWl0SW5wdXRGb3JtKCkge1xyXG4gICAgY29uc3QgbWFpbmJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluYmFyJyk7XHJcbiAgICBtYWluYmFyLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGFjdGlvbk5ld1RvRG9MaXN0KTtcclxuICB9XHJcblxyXG5mdW5jdGlvbiBvcGVuRm9ybUJ0bigpe1xyXG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29wZW5Gb3JtSW5wdXRCdG4nKTtcclxuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57IHRvZ2dsZU9wZW5DbG9zZSgnaW5wdXRGb3JtJykgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvZ2dsZU9wZW5DbG9zZSh0YXJnZXQpe1xyXG4gICAgY29uc3QgdG9nZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7dGFyZ2V0fWApO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICh0b2dnbGUuaGFzQXR0cmlidXRlKCdjbG9zZScsJycpKSB7XHJcbiAgICAgICAgICAgIHRvZ2dsZS5yZW1vdmVBdHRyaWJ1dGUoJ2Nsb3NlJyk7XHJcbiAgICAgICAgICAgIHRvZ2dsZS5zZXRBdHRyaWJ1dGUoJ29wZW4nLCcnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgdG9nZ2xlLnJlbW92ZUF0dHJpYnV0ZSgnb3BlbicpO1xyXG4gICAgICAgICAgICB0b2dnbGUuc2V0QXR0cmlidXRlKCdjbG9zZScsJycpO1xyXG4gICAgICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd1RvRG9MaXN0KHRhcmdldENsYXNzKSB7XHJcbiAgICBjb25zdCBsYXllclRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3RhcmdldENsYXNzfWApO1xyXG4gICAgY2xlYXJEaXNwbGF5KGxheWVyVGFyZ2V0KTtcclxuICAgIGNvbnNvbGUubG9nKCdzaG93VG9Eb0xpc3QnKTtcclxuICAgIGNvbnNvbGUubG9nKGFycmF5VG9Eby5hcnJheUxpc3QoKSk7XHJcbiAgICBmdW5jdGlvbiBsb29wQXJyYXkodGFyZ2V0Q2xhc3MpIHtcclxuICAgICAgICBmb3IgKGxldCBsaXN0IG9mIGFycmF5VG9Eby5hcnJheUxpc3QoKS5yZXZlcnNlKCkpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cobGlzdCk7XHJcbiAgICAgICAgICAgIGFwcGVuZFRvRG9MaXN0KGxpc3QsIHRhcmdldENsYXNzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBsb29wQXJyYXkodGFyZ2V0Q2xhc3MpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBlbmRUb0RvTGlzdChsaXN0LCB0YXJnZXRDbGFzcyl7XHJcbiAgICBjb25zdCBsYXllclRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3RhcmdldENsYXNzfWApO1xyXG4gICAgbGF5ZXJUYXJnZXQuYXBwZW5kKHRvRG9MaXN0Q2FyZChsaXN0KSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvRG9MaXN0Q2FyZChsaXN0KXtcclxuICAgIGNvbnN0IGxheWVyQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbGF5ZXJDYXJkLmNsYXNzTmFtZSA9ICdUb0RvTGlzdCc7XHJcbiAgICBsYXllckNhcmQuYXBwZW5kKGxpc3QudGl0bGUsIGxpc3QuZHVlRGF0ZSwgbGlzdC5wcmlvcml0eSk7XHJcbiAgICByZXR1cm4gbGF5ZXJDYXJkXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsZWFyRGlzcGxheShwYXJlbnQpIHtcclxuICAgIHdoaWxlIChwYXJlbnQuZmlyc3RDaGlsZCkge1xyXG4gICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChwYXJlbnQuZmlyc3RDaGlsZCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbndpbmRvdy5vbmxvYWQgPSgpPT4ge1xyXG4gICAgc3VibWl0SW5wdXRGb3JtKCk7XHJcbiAgICBvcGVuRm9ybUJ0bigpO1xyXG59XHJcblxyXG5leHBvcnQge2FkZFRvRG9MaXN0LCBhcnJheVRvRG9MaXN0fVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=