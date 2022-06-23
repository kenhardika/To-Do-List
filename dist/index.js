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
function addToDoList(title, desc = '', dueDate, priority = 'Low', checklist = false){ 
    return {
        title,
        desc,
        dueDate,
        priority,
        checklist
    }
}

//create Array to save to do list tempelate
function arrayToDoList() {
    let arrayList = [];

    function showArrayList(){
        console.log(arrayList);
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



//The Logic after you click add 
const arrayToDo = arrayToDoList();
//const grabDataInput = grabDataFrom();

const grabDataFrom = () => {
    //const grabData = document.querySelector('input');
    return {
        title: "inputTitle.value",
        desc: "inputDesc.value",
        dueDate: "inputDueDate.value",
        priority: "inputPriority.value",
        checklist: "inputChecklist.value"
    }
}

function actionNewToDoList(){
    //create To Do List
    //take the parameter from dom
    let task = addToDoList('Jemput', 'Jemput keluarga besar di bandara', '09:00 - 12/12/12');
    //add the variable of to do list to the aray 
    arrayToDo.addToArrayList(task);
    arrayToDo.showArrayList(); 
}

actionNewToDoList();

// const task1 = addToDoList('Jemput', 'Jemput keluarga besar di bandara', '09:00 - 12/12/12');
// console.log(task1)
// const myObj = { title: 'Jemput', desc: 'Jemput keluarga besar di bandara', dueDate: '09:00 - 12/12/12', priority: 'Urgent'};
// console.log(myObj);

////// IF U USE CLASS
// class ArrayToDoList {
//     constructor(){
//         this.array = [];
//     }

//     pushToArray(elem){
//         this.array.push(elem);
//         console.log(this.array);
//     }

//     callTheArray() {
//         return this.array;
//     }
// }

// const addToArray = new ArrayToDoList();
// addToArray.pushToArray(test);
// addToArray.pushToArray(kids);


window.onload =()=> {
    //onLoadPageStructure();
    onLoadHeader();
}



/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNtQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiY29uc29sZS5sb2coJ2hlcmUgd2UgYXJlJyk7XHJcblxyXG4vL3BhZ2Ugc3RhcnRcclxuZnVuY3Rpb24gb25Mb2FkSGVhZGVyKCkge1xyXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpO1xyXG4gICAgY29uc3QgaGVhZGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBoZWFkZXJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGNvbnN0IGhlYWRlclRpdGxlRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuXHJcbiAgICBoZWFkZXJDb250YWluZXIuY2xhc3NOYW1lPSdoZWFkZXJDb250YWluZXInO1xyXG4gICAgaGVhZGVyVGl0bGUuY2xhc3NOYW1lPSdoZWFkZXJUaXRsZSc7XHJcbiAgICBoZWFkZXJUaXRsZS50ZXh0Q29udGVudD0nVGhlIE5vdGVzJztcclxuICAgIGhlYWRlclRpdGxlRGVzYy5jbGFzc05hbWU9J2hlYWRlclRpdGxlRGVzYyc7XHJcbiAgICBoZWFkZXJUaXRsZURlc2MudGV4dENvbnRlbnQ9J1RvLURvLUxpc3QgZm9yIHlvdXIgRGFpbHkgQWN0aXZpdHknO1xyXG5cclxuICAgIGhlYWRlckNvbnRhaW5lci5hcHBlbmQoaGVhZGVyVGl0bGUsaGVhZGVyVGl0bGVEZXNjKTtcclxuXHJcbiAgICBoZWFkZXIuYXBwZW5kKGhlYWRlckNvbnRhaW5lcik7XHJcbn1cclxuXHJcblxyXG4vL2dhdGhlciBkYXRhIGlucHV0IHRlbXBlbGF0ZVxyXG5mdW5jdGlvbiBhZGRUb0RvTGlzdCh0aXRsZSwgZGVzYyA9ICcnLCBkdWVEYXRlLCBwcmlvcml0eSA9ICdMb3cnLCBjaGVja2xpc3QgPSBmYWxzZSl7IFxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0aXRsZSxcclxuICAgICAgICBkZXNjLFxyXG4gICAgICAgIGR1ZURhdGUsXHJcbiAgICAgICAgcHJpb3JpdHksXHJcbiAgICAgICAgY2hlY2tsaXN0XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vY3JlYXRlIEFycmF5IHRvIHNhdmUgdG8gZG8gbGlzdCB0ZW1wZWxhdGVcclxuZnVuY3Rpb24gYXJyYXlUb0RvTGlzdCgpIHtcclxuICAgIGxldCBhcnJheUxpc3QgPSBbXTtcclxuXHJcbiAgICBmdW5jdGlvbiBzaG93QXJyYXlMaXN0KCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coYXJyYXlMaXN0KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhZGRUb0FycmF5TGlzdChkYXRhKXtcclxuICAgICAgICBhcnJheUxpc3QucHVzaChkYXRhKSBcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZW1vdmVGcm9tQXJyYXlMaXN0KHJlbW92ZWRUaXRsZSl7XHJcbiAgICAgICByZXR1cm4gYXJyYXlMaXN0ID0gYXJyYXlMaXN0LmZpbHRlcigoYXJyYXkpPT4gYXJyYXkudGl0bGUgIT09IHJlbW92ZWRUaXRsZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIGFycmF5TGlzdCxcclxuICAgICAgICBzaG93QXJyYXlMaXN0LFxyXG4gICAgICAgIGFkZFRvQXJyYXlMaXN0LFxyXG4gICAgICAgIHJlbW92ZUZyb21BcnJheUxpc3RcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG4vL1RoZSBMb2dpYyBhZnRlciB5b3UgY2xpY2sgYWRkIFxyXG5jb25zdCBhcnJheVRvRG8gPSBhcnJheVRvRG9MaXN0KCk7XHJcbi8vY29uc3QgZ3JhYkRhdGFJbnB1dCA9IGdyYWJEYXRhRnJvbSgpO1xyXG5cclxuY29uc3QgZ3JhYkRhdGFGcm9tID0gKCkgPT4ge1xyXG4gICAgLy9jb25zdCBncmFiRGF0YSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHRpdGxlOiBcImlucHV0VGl0bGUudmFsdWVcIixcclxuICAgICAgICBkZXNjOiBcImlucHV0RGVzYy52YWx1ZVwiLFxyXG4gICAgICAgIGR1ZURhdGU6IFwiaW5wdXREdWVEYXRlLnZhbHVlXCIsXHJcbiAgICAgICAgcHJpb3JpdHk6IFwiaW5wdXRQcmlvcml0eS52YWx1ZVwiLFxyXG4gICAgICAgIGNoZWNrbGlzdDogXCJpbnB1dENoZWNrbGlzdC52YWx1ZVwiXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFjdGlvbk5ld1RvRG9MaXN0KCl7XHJcbiAgICAvL2NyZWF0ZSBUbyBEbyBMaXN0XHJcbiAgICAvL3Rha2UgdGhlIHBhcmFtZXRlciBmcm9tIGRvbVxyXG4gICAgbGV0IHRhc2sgPSBhZGRUb0RvTGlzdCgnSmVtcHV0JywgJ0plbXB1dCBrZWx1YXJnYSBiZXNhciBkaSBiYW5kYXJhJywgJzA5OjAwIC0gMTIvMTIvMTInKTtcclxuICAgIC8vYWRkIHRoZSB2YXJpYWJsZSBvZiB0byBkbyBsaXN0IHRvIHRoZSBhcmF5IFxyXG4gICAgYXJyYXlUb0RvLmFkZFRvQXJyYXlMaXN0KHRhc2spO1xyXG4gICAgYXJyYXlUb0RvLnNob3dBcnJheUxpc3QoKTsgXHJcbn1cclxuXHJcbmFjdGlvbk5ld1RvRG9MaXN0KCk7XHJcblxyXG4vLyBjb25zdCB0YXNrMSA9IGFkZFRvRG9MaXN0KCdKZW1wdXQnLCAnSmVtcHV0IGtlbHVhcmdhIGJlc2FyIGRpIGJhbmRhcmEnLCAnMDk6MDAgLSAxMi8xMi8xMicpO1xyXG4vLyBjb25zb2xlLmxvZyh0YXNrMSlcclxuLy8gY29uc3QgbXlPYmogPSB7IHRpdGxlOiAnSmVtcHV0JywgZGVzYzogJ0plbXB1dCBrZWx1YXJnYSBiZXNhciBkaSBiYW5kYXJhJywgZHVlRGF0ZTogJzA5OjAwIC0gMTIvMTIvMTInLCBwcmlvcml0eTogJ1VyZ2VudCd9O1xyXG4vLyBjb25zb2xlLmxvZyhteU9iaik7XHJcblxyXG4vLy8vLy8gSUYgVSBVU0UgQ0xBU1NcclxuLy8gY2xhc3MgQXJyYXlUb0RvTGlzdCB7XHJcbi8vICAgICBjb25zdHJ1Y3Rvcigpe1xyXG4vLyAgICAgICAgIHRoaXMuYXJyYXkgPSBbXTtcclxuLy8gICAgIH1cclxuXHJcbi8vICAgICBwdXNoVG9BcnJheShlbGVtKXtcclxuLy8gICAgICAgICB0aGlzLmFycmF5LnB1c2goZWxlbSk7XHJcbi8vICAgICAgICAgY29uc29sZS5sb2codGhpcy5hcnJheSk7XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgY2FsbFRoZUFycmF5KCkge1xyXG4vLyAgICAgICAgIHJldHVybiB0aGlzLmFycmF5O1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG4vLyBjb25zdCBhZGRUb0FycmF5ID0gbmV3IEFycmF5VG9Eb0xpc3QoKTtcclxuLy8gYWRkVG9BcnJheS5wdXNoVG9BcnJheSh0ZXN0KTtcclxuLy8gYWRkVG9BcnJheS5wdXNoVG9BcnJheShraWRzKTtcclxuXHJcblxyXG53aW5kb3cub25sb2FkID0oKT0+IHtcclxuICAgIC8vb25Mb2FkUGFnZVN0cnVjdHVyZSgpO1xyXG4gICAgb25Mb2FkSGVhZGVyKCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7YWRkVG9Eb0xpc3QsIGFycmF5VG9Eb0xpc3R9XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==