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

//page start
function onLoadHeader() {
    const header = document.querySelector('.header');
    const headerContainer = document.createElement('div');
    const headerTitle = document.createElement('p');
    const headerTitleDesc = document.createElement('p');

    headerContainer.className='headerContainer';
    headerTitle.className='headerTitle';
    headerTitle.textContent='The Notes';
    headerTitleDesc.className='headerTitleDesc';
    headerTitleDesc.textContent='To-Do-List for your Daily Activity';

    headerContainer.append(headerTitle,headerTitleDesc);

    header.append(headerContainer);
}


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





const grabDataFrom = () => {
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

//The Logic after you click add 
const arrayToDo = arrayToDoList();
const grabDataInput = grabDataFrom();


function actionNewToDoList(e){
    e.preventDefault();
    //create To Do List
    //take the parameter from dom
    let task = addToDoList(grabDataInput.title(),grabDataInput.dueDate(), grabDataInput.priority());
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
    //onLoadPageStructure();
    onLoadHeader();
    submitInputForm();
}



/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVtQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiY29uc29sZS5sb2coJ2hlcmUgd2UgYXJlJyk7XG5cbi8vcGFnZSBzdGFydFxuZnVuY3Rpb24gb25Mb2FkSGVhZGVyKCkge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXInKTtcbiAgICBjb25zdCBoZWFkZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBoZWFkZXJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBoZWFkZXJUaXRsZURlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgICBoZWFkZXJDb250YWluZXIuY2xhc3NOYW1lPSdoZWFkZXJDb250YWluZXInO1xuICAgIGhlYWRlclRpdGxlLmNsYXNzTmFtZT0naGVhZGVyVGl0bGUnO1xuICAgIGhlYWRlclRpdGxlLnRleHRDb250ZW50PSdUaGUgTm90ZXMnO1xuICAgIGhlYWRlclRpdGxlRGVzYy5jbGFzc05hbWU9J2hlYWRlclRpdGxlRGVzYyc7XG4gICAgaGVhZGVyVGl0bGVEZXNjLnRleHRDb250ZW50PSdUby1Eby1MaXN0IGZvciB5b3VyIERhaWx5IEFjdGl2aXR5JztcblxuICAgIGhlYWRlckNvbnRhaW5lci5hcHBlbmQoaGVhZGVyVGl0bGUsaGVhZGVyVGl0bGVEZXNjKTtcblxuICAgIGhlYWRlci5hcHBlbmQoaGVhZGVyQ29udGFpbmVyKTtcbn1cblxuXG4vL2dhdGhlciBkYXRhIGlucHV0IHRlbXBlbGF0ZVxuZnVuY3Rpb24gYWRkVG9Eb0xpc3QodGl0bGUsIGR1ZURhdGUsIHByaW9yaXR5ID0gJ0xvdycsIGNoZWNrbGlzdCA9IGZhbHNlKXsgXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIGR1ZURhdGUsXG4gICAgICAgIHByaW9yaXR5LFxuICAgICAgICBjaGVja2xpc3RcbiAgICB9XG59XG5cbi8vY3JlYXRlIEFycmF5IHRvIHNhdmUgdG8gZG8gbGlzdCB0ZW1wZWxhdGVcbmZ1bmN0aW9uIGFycmF5VG9Eb0xpc3QoKSB7XG4gICAgbGV0IGFycmF5TGlzdCA9IFtdO1xuXG4gICAgZnVuY3Rpb24gc2hvd0FycmF5TGlzdCgpe1xuICAgICAgIHJldHVybiBhcnJheUxpc3Q7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkVG9BcnJheUxpc3QoZGF0YSl7XG4gICAgICAgIGFycmF5TGlzdC5wdXNoKGRhdGEpIFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZUZyb21BcnJheUxpc3QocmVtb3ZlZFRpdGxlKXtcbiAgICAgICByZXR1cm4gYXJyYXlMaXN0ID0gYXJyYXlMaXN0LmZpbHRlcigoYXJyYXkpPT4gYXJyYXkudGl0bGUgIT09IHJlbW92ZWRUaXRsZSk7XG4gICAgfVxuXG4gICAgcmV0dXJue1xuICAgICAgICBhcnJheUxpc3QsXG4gICAgICAgIHNob3dBcnJheUxpc3QsXG4gICAgICAgIGFkZFRvQXJyYXlMaXN0LFxuICAgICAgICByZW1vdmVGcm9tQXJyYXlMaXN0XG4gICAgfVxufVxuXG5cblxuXG5cbmNvbnN0IGdyYWJEYXRhRnJvbSA9ICgpID0+IHtcbiAgICAvL2NvbnN0IGdyYWJEYXRhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcbiAgICByZXR1cm4ge1xuICAgICAgICB0aXRsZTogKCk9PnsgXG4gICAgICAgICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dFRpdGxlJyk7XG4gICAgICAgICAgICByZXR1cm4gaW5wdXQudmFsdWVcbiAgICAgICAgfSxcbiAgICAgICAgZHVlRGF0ZTogKCk9PnsgXG4gICAgICAgICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dERhdGUnKTtcbiAgICAgICAgICAgIHJldHVybiBpbnB1dC52YWx1ZVxuICAgICAgICB9LFxuICAgICAgICBwcmlvcml0eTogKCk9PnsgXG4gICAgICAgICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dFByaW9yaXR5Jyk7XG4gICAgICAgICAgICByZXR1cm4gaW5wdXQudmFsdWVcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy9UaGUgTG9naWMgYWZ0ZXIgeW91IGNsaWNrIGFkZCBcbmNvbnN0IGFycmF5VG9EbyA9IGFycmF5VG9Eb0xpc3QoKTtcbmNvbnN0IGdyYWJEYXRhSW5wdXQgPSBncmFiRGF0YUZyb20oKTtcblxuXG5mdW5jdGlvbiBhY3Rpb25OZXdUb0RvTGlzdChlKXtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy9jcmVhdGUgVG8gRG8gTGlzdFxuICAgIC8vdGFrZSB0aGUgcGFyYW1ldGVyIGZyb20gZG9tXG4gICAgbGV0IHRhc2sgPSBhZGRUb0RvTGlzdChncmFiRGF0YUlucHV0LnRpdGxlKCksZ3JhYkRhdGFJbnB1dC5kdWVEYXRlKCksIGdyYWJEYXRhSW5wdXQucHJpb3JpdHkoKSk7XG4gICAgLy9hZGQgdGhlIHZhcmlhYmxlIG9mIHRvIGRvIGxpc3QgdG8gdGhlIGFyYXkgXG4gICAgYXJyYXlUb0RvLmFkZFRvQXJyYXlMaXN0KHRhc2spO1xuICAgIGNvbnNvbGUubG9nKGFycmF5VG9Eby5zaG93QXJyYXlMaXN0KCkpO1xuICAgIHJlc2V0Rm9ybSgpXG59XG5cbmZ1bmN0aW9uIHN1Ym1pdElucHV0Rm9ybSgpIHtcbiAgICBjb25zdCBtYWluYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW5iYXInKTtcbiAgICBtYWluYmFyLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGFjdGlvbk5ld1RvRG9MaXN0KTtcbiAgfVxuXG53aW5kb3cub25sb2FkID0oKT0+IHtcbiAgICAvL29uTG9hZFBhZ2VTdHJ1Y3R1cmUoKTtcbiAgICBvbkxvYWRIZWFkZXIoKTtcbiAgICBzdWJtaXRJbnB1dEZvcm0oKTtcbn1cblxuZXhwb3J0IHthZGRUb0RvTGlzdCwgYXJyYXlUb0RvTGlzdH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==