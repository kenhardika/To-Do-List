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
function onLoadPageStructure() {
    const header = document.createElement('div');
    const main = document.createElement('div');
    const footer = document.createElement('div');
    const container = document.createElement('div');

    header.className='header';
    main.className='main';
    footer.className='footer';
    container.className='container';

    container.append(header, main, footer);
    document.body.append(container);
    console.log('page loaded successfully')
};


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
    onLoadPageStructure();
}



/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ21DIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJjb25zb2xlLmxvZygnaGVyZSB3ZSBhcmUnKTtcclxuXHJcbi8vcGFnZSBzdGFydFxyXG5mdW5jdGlvbiBvbkxvYWRQYWdlU3RydWN0dXJlKCkge1xyXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICAgIGhlYWRlci5jbGFzc05hbWU9J2hlYWRlcic7XHJcbiAgICBtYWluLmNsYXNzTmFtZT0nbWFpbic7XHJcbiAgICBmb290ZXIuY2xhc3NOYW1lPSdmb290ZXInO1xyXG4gICAgY29udGFpbmVyLmNsYXNzTmFtZT0nY29udGFpbmVyJztcclxuXHJcbiAgICBjb250YWluZXIuYXBwZW5kKGhlYWRlciwgbWFpbiwgZm9vdGVyKTtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKGNvbnRhaW5lcik7XHJcbiAgICBjb25zb2xlLmxvZygncGFnZSBsb2FkZWQgc3VjY2Vzc2Z1bGx5JylcclxufTtcclxuXHJcblxyXG4vL2dhdGhlciBkYXRhIGlucHV0IHRlbXBlbGF0ZVxyXG5mdW5jdGlvbiBhZGRUb0RvTGlzdCh0aXRsZSwgZGVzYyA9ICcnLCBkdWVEYXRlLCBwcmlvcml0eSA9ICdMb3cnLCBjaGVja2xpc3QgPSBmYWxzZSl7IFxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0aXRsZSxcclxuICAgICAgICBkZXNjLFxyXG4gICAgICAgIGR1ZURhdGUsXHJcbiAgICAgICAgcHJpb3JpdHksXHJcbiAgICAgICAgY2hlY2tsaXN0XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vY3JlYXRlIEFycmF5IHRvIHNhdmUgdG8gZG8gbGlzdCB0ZW1wZWxhdGVcclxuZnVuY3Rpb24gYXJyYXlUb0RvTGlzdCgpIHtcclxuICAgIGxldCBhcnJheUxpc3QgPSBbXTtcclxuXHJcbiAgICBmdW5jdGlvbiBzaG93QXJyYXlMaXN0KCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coYXJyYXlMaXN0KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhZGRUb0FycmF5TGlzdChkYXRhKXtcclxuICAgICAgICBhcnJheUxpc3QucHVzaChkYXRhKSBcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZW1vdmVGcm9tQXJyYXlMaXN0KHJlbW92ZWRUaXRsZSl7XHJcbiAgICAgICByZXR1cm4gYXJyYXlMaXN0ID0gYXJyYXlMaXN0LmZpbHRlcigoYXJyYXkpPT4gYXJyYXkudGl0bGUgIT09IHJlbW92ZWRUaXRsZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIGFycmF5TGlzdCxcclxuICAgICAgICBzaG93QXJyYXlMaXN0LFxyXG4gICAgICAgIGFkZFRvQXJyYXlMaXN0LFxyXG4gICAgICAgIHJlbW92ZUZyb21BcnJheUxpc3RcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG4vL1RoZSBMb2dpYyBhZnRlciB5b3UgY2xpY2sgYWRkIFxyXG5jb25zdCBhcnJheVRvRG8gPSBhcnJheVRvRG9MaXN0KCk7XHJcbi8vY29uc3QgZ3JhYkRhdGFJbnB1dCA9IGdyYWJEYXRhRnJvbSgpO1xyXG5cclxuY29uc3QgZ3JhYkRhdGFGcm9tID0gKCkgPT4ge1xyXG4gICAgLy9jb25zdCBncmFiRGF0YSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHRpdGxlOiBcImlucHV0VGl0bGUudmFsdWVcIixcclxuICAgICAgICBkZXNjOiBcImlucHV0RGVzYy52YWx1ZVwiLFxyXG4gICAgICAgIGR1ZURhdGU6IFwiaW5wdXREdWVEYXRlLnZhbHVlXCIsXHJcbiAgICAgICAgcHJpb3JpdHk6IFwiaW5wdXRQcmlvcml0eS52YWx1ZVwiLFxyXG4gICAgICAgIGNoZWNrbGlzdDogXCJpbnB1dENoZWNrbGlzdC52YWx1ZVwiXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFjdGlvbk5ld1RvRG9MaXN0KCl7XHJcbiAgICAvL2NyZWF0ZSBUbyBEbyBMaXN0XHJcbiAgICAvL3Rha2UgdGhlIHBhcmFtZXRlciBmcm9tIGRvbVxyXG4gICAgbGV0IHRhc2sgPSBhZGRUb0RvTGlzdCgnSmVtcHV0JywgJ0plbXB1dCBrZWx1YXJnYSBiZXNhciBkaSBiYW5kYXJhJywgJzA5OjAwIC0gMTIvMTIvMTInKTtcclxuICAgIC8vYWRkIHRoZSB2YXJpYWJsZSBvZiB0byBkbyBsaXN0IHRvIHRoZSBhcmF5IFxyXG4gICAgYXJyYXlUb0RvLmFkZFRvQXJyYXlMaXN0KHRhc2spO1xyXG4gICAgYXJyYXlUb0RvLnNob3dBcnJheUxpc3QoKTsgXHJcbn1cclxuXHJcbmFjdGlvbk5ld1RvRG9MaXN0KCk7XHJcblxyXG4vLyBjb25zdCB0YXNrMSA9IGFkZFRvRG9MaXN0KCdKZW1wdXQnLCAnSmVtcHV0IGtlbHVhcmdhIGJlc2FyIGRpIGJhbmRhcmEnLCAnMDk6MDAgLSAxMi8xMi8xMicpO1xyXG4vLyBjb25zb2xlLmxvZyh0YXNrMSlcclxuLy8gY29uc3QgbXlPYmogPSB7IHRpdGxlOiAnSmVtcHV0JywgZGVzYzogJ0plbXB1dCBrZWx1YXJnYSBiZXNhciBkaSBiYW5kYXJhJywgZHVlRGF0ZTogJzA5OjAwIC0gMTIvMTIvMTInLCBwcmlvcml0eTogJ1VyZ2VudCd9O1xyXG4vLyBjb25zb2xlLmxvZyhteU9iaik7XHJcblxyXG4vLy8vLy8gSUYgVSBVU0UgQ0xBU1NcclxuLy8gY2xhc3MgQXJyYXlUb0RvTGlzdCB7XHJcbi8vICAgICBjb25zdHJ1Y3Rvcigpe1xyXG4vLyAgICAgICAgIHRoaXMuYXJyYXkgPSBbXTtcclxuLy8gICAgIH1cclxuXHJcbi8vICAgICBwdXNoVG9BcnJheShlbGVtKXtcclxuLy8gICAgICAgICB0aGlzLmFycmF5LnB1c2goZWxlbSk7XHJcbi8vICAgICAgICAgY29uc29sZS5sb2codGhpcy5hcnJheSk7XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgY2FsbFRoZUFycmF5KCkge1xyXG4vLyAgICAgICAgIHJldHVybiB0aGlzLmFycmF5O1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG4vLyBjb25zdCBhZGRUb0FycmF5ID0gbmV3IEFycmF5VG9Eb0xpc3QoKTtcclxuLy8gYWRkVG9BcnJheS5wdXNoVG9BcnJheSh0ZXN0KTtcclxuLy8gYWRkVG9BcnJheS5wdXNoVG9BcnJheShraWRzKTtcclxuXHJcblxyXG53aW5kb3cub25sb2FkID0oKT0+IHtcclxuICAgIG9uTG9hZFBhZ2VTdHJ1Y3R1cmUoKTtcclxufVxyXG5cclxuZXhwb3J0IHthZGRUb0RvTGlzdCwgYXJyYXlUb0RvTGlzdH1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9