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
/* harmony export */   "loopArray": () => (/* binding */ loopArray),
/* harmony export */   "showToDoList": () => (/* binding */ showToDoList),
/* harmony export */   "showToDoListSidebar": () => (/* reexport safe */ _sidebar__WEBPACK_IMPORTED_MODULE_0__.showToDoListSidebar)
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
        checklist,
        // removeList: (removedTitle)=> {
        //     arrayToDo.arrayList = arrayToDo.arrayList.filter((array)=> array.title !== removedTitle);
        //     console.log(arrayToDo.arrayList);
        //     console.log(arrayToDo.showArrayList());
        //     return arrayToDo.arrayList
        //}
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

//function removeFromArrayList(list){
    // arrayToDo = list.filter((array)=> array.title !== removedTitle);
    // return arrayToDo
//}

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
            ()=>{   for (let list of arrayToDo.arrayList.reverse()) {
                        layerTarget.append((0,_toDoList__WEBPACK_IMPORTED_MODULE_1__.toDoListCard)(list).allCard());
                        console.log(list.title);
                    }
                },
        titleCard:
            ()=>{   for (let list of arrayToDo.arrayList.reverse()) {
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
    
    console.log(___WEBPACK_IMPORTED_MODULE_0__.arrayToDo.arrayList);
    console.log(___WEBPACK_IMPORTED_MODULE_0__.arrayToDo.showArrayList());
    
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFnRDtBQUNOO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsdUJBQXVCLGlCQUFpQixJQUFJLG9CQUFvQixJQUFJLHFCQUFxQixJQUFJO0FBQzdGLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIseUJBQXlCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDZEQUFtQjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLDhCQUE4QjtBQUN0RTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsT0FBTztBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELFlBQVk7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCxZQUFZO0FBQy9EO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEIsMkNBQTJDLHVEQUFZO0FBQ3ZEO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxvQkFBb0I7QUFDcEIsMkNBQTJDLHVEQUFZO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixtQkFBbUIsSUFBSSxrQkFBa0IsSUFBSSxlQUFlO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsYUFBYTtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3lHOzs7Ozs7Ozs7Ozs7Ozs7O0FDbks3RDtBQUM1QztBQUNBO0FBQ0E7QUFDQSxtREFBbUQsWUFBWTtBQUMvRCxJQUFJLCtDQUFZO0FBQ2hCLElBQUksNENBQVM7QUFDYjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1JpRTtBQUNqRTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsS0FBSztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLEtBQUs7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDREQUE2QjtBQUNqQztBQUNBLGdCQUFnQixrREFBbUI7QUFDbkMsZ0JBQWdCLHNEQUF1QjtBQUN2QztBQUNBLElBQUksK0NBQVk7QUFDaEIsSUFBSSxzREFBbUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxzQkFBc0Isb0NBQW9DO0FBQzFELHdCQUF3QixzQ0FBc0M7QUFDOUQseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUNsRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc2lkZWJhci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3RvRG9MaXN0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2hvd1RvRG9MaXN0U2lkZWJhciB9IGZyb20gXCIuL3NpZGViYXJcIjtcclxuaW1wb3J0IHsgdG9Eb0xpc3RDYXJkIH0gZnJvbSBcIi4vdG9Eb0xpc3RcIjtcclxuXHJcbmNvbnNvbGUubG9nKCdoZXJlIHdlIGFyZScpO1xyXG5cclxuLy9nYXRoZXIgZGF0YSBpbnB1dCB0ZW1wZWxhdGVcclxuZnVuY3Rpb24gYWRkVG9Eb0xpc3QodGl0bGUsIGR1ZURhdGUsIHByaW9yaXR5ID0gJ0xvdycsIGNoZWNrbGlzdCA9IGZhbHNlKXsgXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHRpdGxlLFxyXG4gICAgICAgIGR1ZURhdGUsXHJcbiAgICAgICAgcHJpb3JpdHksXHJcbiAgICAgICAgY2hlY2tsaXN0LFxyXG4gICAgICAgIC8vIHJlbW92ZUxpc3Q6IChyZW1vdmVkVGl0bGUpPT4ge1xyXG4gICAgICAgIC8vICAgICBhcnJheVRvRG8uYXJyYXlMaXN0ID0gYXJyYXlUb0RvLmFycmF5TGlzdC5maWx0ZXIoKGFycmF5KT0+IGFycmF5LnRpdGxlICE9PSByZW1vdmVkVGl0bGUpO1xyXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhhcnJheVRvRG8uYXJyYXlMaXN0KTtcclxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coYXJyYXlUb0RvLnNob3dBcnJheUxpc3QoKSk7XHJcbiAgICAgICAgLy8gICAgIHJldHVybiBhcnJheVRvRG8uYXJyYXlMaXN0XHJcbiAgICAgICAgLy99XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vY3JlYXRlIEFycmF5IHRvIHNhdmUgdG8gZG8gbGlzdCB0ZW1wZWxhdGVcclxuZnVuY3Rpb24gYXJyYXlUb0RvTGlzdCgpIHtcclxuICAgIGxldCBhcnJheUxpc3QgPSBbXTtcclxuXHJcbiAgICBmdW5jdGlvbiBzaG93QXJyYXlMaXN0KCl7XHJcbiAgICAgICByZXR1cm4gYXJyYXlMaXN0O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGFkZFRvQXJyYXlMaXN0KGRhdGEpe1xyXG4gICAgICAgIGFycmF5TGlzdC5wdXNoKGRhdGEpIFxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlbW92ZUZyb21BcnJheUxpc3QocmVtb3ZlZFRpdGxlKXtcclxuICAgICAgIHJldHVybiBhcnJheUxpc3QgPSBhcnJheUxpc3QuZmlsdGVyKChhcnJheSk9PiBhcnJheS50aXRsZSAhPT0gcmVtb3ZlZFRpdGxlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgYXJyYXlMaXN0LFxyXG4gICAgICAgIHNob3dBcnJheUxpc3QsXHJcbiAgICAgICAgYWRkVG9BcnJheUxpc3QsXHJcbiAgICAgICAgcmVtb3ZlRnJvbUFycmF5TGlzdFxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbmNvbnN0IGdldElucHV0ID0gKCkgPT4ge1xyXG4gICAgLy9jb25zdCBncmFiRGF0YSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHRpdGxlOiAoKT0+eyBcclxuICAgICAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXRUaXRsZScpO1xyXG4gICAgICAgICAgICByZXR1cm4gaW5wdXQudmFsdWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIGR1ZURhdGU6ICgpPT57IFxyXG4gICAgICAgICAgICBjb25zdCBpbnB1dCA9IG5ldyBEYXRlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dERhdGUnKS52YWx1ZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBgICR7aW5wdXQuZ2V0RGF0ZSgpfSAtICR7aW5wdXQuZ2V0TW9udGgoKSsxfSAtICR7aW5wdXQuZ2V0RnVsbFllYXIoKX0gYCA7IC8vc2hvdWxkIHRyeSBtb21lbnQuanMgbGF0ZXJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHByaW9yaXR5OiAoKT0+eyBcclxuICAgICAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXRQcmlvcml0eScpO1xyXG4gICAgICAgICAgICByZXR1cm4gaW5wdXQudmFsdWVcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlc2V0Rm9ybSgpIHtcclxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtaW5wdXQgPSBcInVzZXJJbnB1dFwiXScpO1xyXG4gICAgaW5wdXQuZm9yRWFjaCgoaW5wKSA9PiB7IHJldHVybiBpbnAudmFsdWUgPSBudWxsIH0pO1xyXG59XHJcblxyXG4vL1RoZSBMb2dpYyBhZnRlciB5b3UgY2xpY2sgYWRkIFxyXG5jb25zdCBhcnJheVRvRG8gPSBhcnJheVRvRG9MaXN0KCk7XHJcbmNvbnN0IGlucHV0VG9EbyA9IGdldElucHV0KCk7XHJcblxyXG5mdW5jdGlvbiBhY3Rpb25OZXdUb0RvTGlzdChlKXtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIC8vY3JlYXRlIFRvIERvIExpc3RcclxuICAgIC8vdGFrZSB0aGUgcGFyYW1ldGVyIGZyb20gZG9tXHJcbiAgICBsZXQgdGFzayA9IGFkZFRvRG9MaXN0KGlucHV0VG9Eby50aXRsZSgpLGlucHV0VG9Eby5kdWVEYXRlKCksIGlucHV0VG9Eby5wcmlvcml0eSgpKTtcclxuICAgIC8vYWRkIHRoZSB2YXJpYWJsZSBvZiB0byBkbyBsaXN0IHRvIHRoZSBhcmF5IFxyXG4gICAgYXJyYXlUb0RvLmFkZFRvQXJyYXlMaXN0KHRhc2spO1xyXG4gICAgY29uc29sZS5sb2coYXJyYXlUb0RvLnNob3dBcnJheUxpc3QoKSk7XHJcbiAgICByZXNldEZvcm0oKTtcclxuICAgIHRvZ2dsZU9wZW5DbG9zZSgnaW5wdXRGb3JtJyk7XHJcbiAgICBzaG93VG9Eb0xpc3QoJ291dHB1dFNlY3Rpb24nKTtcclxuICAgIHNob3dUb0RvTGlzdFNpZGViYXIoJ215Tm90ZUxpc3QnKTtcclxufVxyXG5cclxuLy9mdW5jdGlvbiByZW1vdmVGcm9tQXJyYXlMaXN0KGxpc3Qpe1xyXG4gICAgLy8gYXJyYXlUb0RvID0gbGlzdC5maWx0ZXIoKGFycmF5KT0+IGFycmF5LnRpdGxlICE9PSByZW1vdmVkVGl0bGUpO1xyXG4gICAgLy8gcmV0dXJuIGFycmF5VG9Eb1xyXG4vL31cclxuXHJcbmZ1bmN0aW9uIHN1Ym1pdElucHV0Rm9ybSgpIHtcclxuICAgIGNvbnN0IG1haW5iYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbmJhcicpO1xyXG4gICAgbWFpbmJhci5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBhY3Rpb25OZXdUb0RvTGlzdCk7XHJcbiAgfVxyXG5cclxuZnVuY3Rpb24gb3BlbkZvcm1CdG4oKXtcclxuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcGVuRm9ybUlucHV0QnRuJyk7XHJcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+eyB0b2dnbGVPcGVuQ2xvc2UoJ2lucHV0Rm9ybScpIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiB0b2dnbGVPcGVuQ2xvc2UodGFyZ2V0KXtcclxuICAgIGNvbnN0IHRvZ2dsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3RhcmdldH1gKTtcclxuICAgICAgICBpZiAodG9nZ2xlLmhhc0F0dHJpYnV0ZSgnY2xvc2UnLCcnKSkge1xyXG4gICAgICAgICAgICB0b2dnbGUucmVtb3ZlQXR0cmlidXRlKCdjbG9zZScpO1xyXG4gICAgICAgICAgICB0b2dnbGUuc2V0QXR0cmlidXRlKCdvcGVuJywnJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHRvZ2dsZS5yZW1vdmVBdHRyaWJ1dGUoJ29wZW4nKTtcclxuICAgICAgICAgICAgdG9nZ2xlLnNldEF0dHJpYnV0ZSgnY2xvc2UnLCcnKTtcclxuICAgICAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dUb0RvTGlzdCh0YXJnZXRDbGFzcykge1xyXG4gICAgY29uc3QgbGF5ZXJUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHt0YXJnZXRDbGFzc31gKTtcclxuICAgIGNsZWFyRGlzcGxheShsYXllclRhcmdldCk7XHJcbiAgICBsb29wQXJyYXkodGFyZ2V0Q2xhc3MpLmFsbENhcmQoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbG9vcEFycmF5KHRhcmdldENsYXNzKSB7XHJcbiAgICBjb25zdCBsYXllclRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3RhcmdldENsYXNzfWApO1xyXG4gICAgcmV0dXJueyBcclxuICAgICAgICBhbGxDYXJkOiBcclxuICAgICAgICAgICAgKCk9PnsgICBmb3IgKGxldCBsaXN0IG9mIGFycmF5VG9Eby5hcnJheUxpc3QucmV2ZXJzZSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyVGFyZ2V0LmFwcGVuZCh0b0RvTGlzdENhcmQobGlzdCkuYWxsQ2FyZCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cobGlzdC50aXRsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICB0aXRsZUNhcmQ6XHJcbiAgICAgICAgICAgICgpPT57ICAgZm9yIChsZXQgbGlzdCBvZiBhcnJheVRvRG8uYXJyYXlMaXN0LnJldmVyc2UoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXllclRhcmdldC5hcHBlbmQodG9Eb0xpc3RDYXJkKGxpc3QpLnRpdGxlQ2FyZCgpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsZWFyRGlzcGxheShwYXJlbnQpIHtcclxuICAgIHdoaWxlIChwYXJlbnQuZmlyc3RDaGlsZCkge1xyXG4gICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChwYXJlbnQuZmlyc3RDaGlsZCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIGZ1bmN0aW9uIHRvZGF5c0RhdGUoKXtcclxuLy8gICAgIGNvbnN0IG1heE9uZURpZ2l0ID0gOTtcclxuLy8gICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4vLyAgICAgaWYoZGF0ZS5nZXRNb250aCgpKzEgPCBtYXhPbmVEaWdpdCAmJiBkYXRlLmdldERheSgpIDwgbWF4T25lRGlnaXQpXHJcbi8vICAgICByZXR1cm4gYCR7ZGF0ZS5nZXRGdWxsWWVhcigpfS0wJHtkYXRlLmdldE1vbnRoKCkrMX0tMCR7ZGF0ZS5nZXREYXRlKCl9YCAvL3RoaXMgd29udCB3b3JrIGlmIHRoZSBkYXRlIGlzIG1vcmUgdGhhbiAxIGRpZ2l0XHJcbi8vIH1cclxuXHJcbi8vIGZ1bmN0aW9uIHNldFRvZGF5c0RhdGUoKXtcclxuLy8gICAgIGNvbnNvbGUubG9nKHRvZGF5c0RhdGUoKSk7XHJcbi8vICAgICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXREYXRlJyk7XHJcbi8vICAgICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCdtaW4nLCBgJHt0b2RheXNEYXRlKCl9YClcclxuLy99XHJcblxyXG53aW5kb3cub25sb2FkID0oKT0+IHtcclxuICAgIHN1Ym1pdElucHV0Rm9ybSgpO1xyXG4gICAgb3BlbkZvcm1CdG4oKTtcclxuICAgIC8vIHNldFRvZGF5c0RhdGUoKTtcclxufVxyXG5cclxuZXhwb3J0IHthZGRUb0RvTGlzdCwgYXJyYXlUb0RvTGlzdCwgbG9vcEFycmF5LCBjbGVhckRpc3BsYXksc2hvd1RvRG9MaXN0LCBzaG93VG9Eb0xpc3RTaWRlYmFyLCBhcnJheVRvRG99XHJcbiIsImltcG9ydCB7IGNsZWFyRGlzcGxheSwgbG9vcEFycmF5IH0gZnJvbSBcIi5cIjtcclxuXHJcblxyXG5mdW5jdGlvbiBzaG93VG9Eb0xpc3RTaWRlYmFyKHRhcmdldENsYXNzKSB7XHJcbiAgICBjb25zdCBsYXllclRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3RhcmdldENsYXNzfWApO1xyXG4gICAgY2xlYXJEaXNwbGF5KGxheWVyVGFyZ2V0KTtcclxuICAgIGxvb3BBcnJheSh0YXJnZXRDbGFzcykudGl0bGVDYXJkKCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7c2hvd1RvRG9MaXN0U2lkZWJhcn0iLCJpbXBvcnQgeyBhcnJheVRvRG8sIHNob3dUb0RvTGlzdCwgc2hvd1RvRG9MaXN0U2lkZWJhciB9IGZyb20gXCIuXCI7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVEaXYobmFtZSl7XHJcbiAgICBjb25zdCBsYXllciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbGF5ZXIuY2xhc3NOYW1lID0gYCR7bmFtZX1gO1xyXG4gICAgcmV0dXJuIGxheWVyO1xyXG59XHJcbmZ1bmN0aW9uIGNyZWF0ZVRvRG9EaXYobGlzdCwgbmFtZSl7XHJcbiAgICBjb25zdCBsYXllciA9IGNyZWF0ZURpdihuYW1lKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHR5cGVvZihsaXN0W25hbWVdKSk7XHJcbiAgICBsYXllci5hcHBlbmQobGlzdFtgJHtuYW1lfWBdKTtcclxuICAgIHJldHVybiBsYXllcjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlRGVsZXRlTGlzdEJ0bihsaXN0KXtcclxuICAgIGNvbnN0IGxheWVyID0gY3JlYXRlRGl2KCdkZWxldGVUaGlzTGlzdCcpO1xyXG4gICAgY29uc3QgZGVsYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBkZWxidG4uaWQ9J2RlbGV0ZUxpc3QnO1xyXG4gICAgZGVsYnRuLnRleHRDb250ZW50PSdkZWxldGUnO1xyXG4gICAgZGVsYnRuLm9uY2xpY2sgPSAoKT0+eyBkZWxldGVMaXN0RnVuY3Rpb24obGlzdCkgfTtcclxuICAgIGxheWVyLmFwcGVuZChkZWxidG4pO1xyXG4gICAgcmV0dXJuIGxheWVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkZWxldGVMaXN0RnVuY3Rpb24obGlzdCl7XHJcbiAgICBcclxuICAgIGFycmF5VG9Eby5yZW1vdmVGcm9tQXJyYXlMaXN0KGxpc3QudGl0bGUpO1xyXG4gICAgXHJcbiAgICBjb25zb2xlLmxvZyhhcnJheVRvRG8uYXJyYXlMaXN0KTtcclxuICAgIGNvbnNvbGUubG9nKGFycmF5VG9Eby5zaG93QXJyYXlMaXN0KCkpO1xyXG4gICAgXHJcbiAgICBzaG93VG9Eb0xpc3QoJ291dHB1dFNlY3Rpb24nKTtcclxuICAgIHNob3dUb0RvTGlzdFNpZGViYXIoJ215Tm90ZUxpc3QnKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdG9Eb0xpc3RMYXllcihsaXN0KXtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgY2hlY2s6ICgpPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBsYXllciA9IGNyZWF0ZURpdignY2hlY2tsaXN0Jyk7XHJcbiAgICAgICAgICAgIGxheWVyLmFwcGVuZChjaGVja2xpc3RDb25kaXRpb24obGlzdCkpO1xyXG4gICAgICAgICAgICByZXR1cm4gbGF5ZXI7IFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdGl0bGU6ICgpPT4geyByZXR1cm4gY3JlYXRlVG9Eb0RpdihsaXN0LCAndGl0bGUnKX0sXHJcbiAgICAgICAgZHVlRGF0ZTogKCk9PiB7IHJldHVybiBjcmVhdGVUb0RvRGl2KGxpc3QsICdkdWVEYXRlJyl9LFxyXG4gICAgICAgIHByaW9yaXR5OiAoKT0+IHsgcmV0dXJuIGNyZWF0ZVRvRG9EaXYobGlzdCwgJ3ByaW9yaXR5Jyl9XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrbGlzdENvbmRpdGlvbihsaXN0KXtcclxuICAgIGlmIChsaXN0LmNoZWNrbGlzdCA9PSBmYWxzZSkgcmV0dXJuICfinJUnO1xyXG4gICAgZWxzZSByZXR1cm4gJ+Kckyc7XHJcbn1cclxuXHJcbi8vY2hhbmdlIHNvIGl0IGNhbiBiZSBwYXJ0aWFsIHdoZXRlciB5b3Ugd2FubmEgYXBwZW5kIHRpdGxlIG9ubHlcclxuZnVuY3Rpb24gdG9Eb0xpc3RDYXJkKGxpc3Qpe1xyXG4gICAgY29uc3QgbGF5ZXIgPSBjcmVhdGVEaXYoJ3RvRG9MaXN0Jyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGFsbENhcmQ6ICgpPT57XHJcbiAgICAgICAgICAgIGxheWVyLmFwcGVuZCh0b0RvTGlzdExheWVyKGxpc3QpLmNoZWNrKCksIHRvRG9MaXN0TGF5ZXIobGlzdCkudGl0bGUoKSwgdG9Eb0xpc3RMYXllcihsaXN0KS5kdWVEYXRlKCksIHRvRG9MaXN0TGF5ZXIobGlzdCkucHJpb3JpdHkoKSwgY3JlYXRlRGVsZXRlTGlzdEJ0bihsaXN0KSk7XHJcbiAgICAgICAgICAgIHJldHVybiBsYXllciB9LFxyXG4gICAgICAgIHRpdGxlQ2FyZDogKCk9PntcclxuICAgICAgICAgICAgbGF5ZXIuYXBwZW5kKHRvRG9MaXN0TGF5ZXIobGlzdCkudGl0bGUoKSk7XHJcbiAgICAgICAgICAgIHJldHVybiBsYXllciB9IFxyXG4gICAgfTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCB7dG9Eb0xpc3RDYXJkLCB0b0RvTGlzdExheWVyfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=