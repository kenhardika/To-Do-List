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

    return {
        title,
        dueDate,
        priority,
        checklist,
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
const arrayToDo = addToDoList();
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
            ()=>{   for (let list of arrayToDo.showArrayList()) {
                        layerTarget.append((0,_toDoList__WEBPACK_IMPORTED_MODULE_1__.toDoListCard)(list).allCard());
                    }
                },
        titleCard:
            ()=>{   for (let list of arrayToDo.showArrayList()) {
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
            let titleCard = toDoListLayer(list).title(); 

            function titleCardLimited() {
                const maxLength = 10;
                const layer = createDiv('title');
                //console.log(titleCard.textContents = titleCard.textContent.substring(0, maxLength) + "...")
                if(titleCard.textContent.length > maxLength){
                    const titleCardLimit = titleCard.textContent.substring(0, maxLength) + "...";
                    layer.append(titleCardLimit)
                    console.log(layer);
                    return layer;
                }
                else{
                    console.log(titleCard);
                    return titleCard;
                }
            };
                console.log(titleCardLimited());
            layer.append(titleCardLimited());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWdEO0FBQ047QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSx1QkFBdUIsaUJBQWlCLElBQUksb0JBQW9CLElBQUkscUJBQXFCLElBQUk7QUFDN0YsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2Qix5QkFBeUI7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksNkRBQW1CO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3Qyw4QkFBOEI7QUFDdEU7QUFDQTtBQUNBO0FBQ0EsOENBQThDLE9BQU87QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCxZQUFZO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsWUFBWTtBQUMvRDtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCLDJDQUEyQyx1REFBWTtBQUN2RDtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLG9CQUFvQjtBQUNwQiwyQ0FBMkMsdURBQVk7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDMEY7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoSTlDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCxZQUFZO0FBQy9ELElBQUksK0NBQVk7QUFDaEIsSUFBSSw0Q0FBUztBQUNiO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUmlFO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixLQUFLO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsS0FBSztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDREQUE2QjtBQUNqQyxJQUFJLCtDQUFZO0FBQ2hCLElBQUksc0RBQW1CO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Qsc0JBQXNCLG9DQUFvQztBQUMxRCx3QkFBd0Isc0NBQXNDO0FBQzlELHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDL0VBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3NpZGViYXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90b0RvTGlzdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNob3dUb0RvTGlzdFNpZGViYXIgfSBmcm9tIFwiLi9zaWRlYmFyXCI7XHJcbmltcG9ydCB7IHRvRG9MaXN0Q2FyZCB9IGZyb20gXCIuL3RvRG9MaXN0XCI7XHJcblxyXG5jb25zb2xlLmxvZygnaGVyZSB3ZSBhcmUnKTtcclxuXHJcbi8vZ2F0aGVyIGRhdGEgaW5wdXQgdGVtcGVsYXRlXHJcbmZ1bmN0aW9uIGFkZFRvRG9MaXN0KHRpdGxlLCBkdWVEYXRlLCBwcmlvcml0eSA9ICdMb3cnLCBjaGVja2xpc3QgPSBmYWxzZSl7IFxyXG4gICAgbGV0IGFycmF5TGlzdCA9IFtdO1xyXG5cclxuICAgIGZ1bmN0aW9uIHNob3dBcnJheUxpc3QoKXtcclxuICAgICAgICByZXR1cm4gYXJyYXlMaXN0O1xyXG4gICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhZGRUb0FycmF5TGlzdChkYXRhKXtcclxuICAgICAgICBhcnJheUxpc3QucHVzaChkYXRhKSBcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZW1vdmVGcm9tQXJyYXlMaXN0KHJlbW92ZWRUaXRsZSl7XHJcbiAgICAgICAgcmV0dXJuIGFycmF5TGlzdCA9IGFycmF5TGlzdC5maWx0ZXIoKGFycmF5KT0+IGFycmF5LnRpdGxlICE9PSByZW1vdmVkVGl0bGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdGl0bGUsXHJcbiAgICAgICAgZHVlRGF0ZSxcclxuICAgICAgICBwcmlvcml0eSxcclxuICAgICAgICBjaGVja2xpc3QsXHJcbiAgICAgICAgc2hvd0FycmF5TGlzdCxcclxuICAgICAgICBhZGRUb0FycmF5TGlzdCxcclxuICAgICAgICByZW1vdmVGcm9tQXJyYXlMaXN0XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IGdldElucHV0ID0gKCkgPT4ge1xyXG4gICAgLy9jb25zdCBncmFiRGF0YSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHRpdGxlOiAoKT0+eyBcclxuICAgICAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXRUaXRsZScpO1xyXG4gICAgICAgICAgICByZXR1cm4gaW5wdXQudmFsdWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIGR1ZURhdGU6ICgpPT57IFxyXG4gICAgICAgICAgICBjb25zdCBpbnB1dCA9IG5ldyBEYXRlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dERhdGUnKS52YWx1ZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBgICR7aW5wdXQuZ2V0RGF0ZSgpfSAtICR7aW5wdXQuZ2V0TW9udGgoKSsxfSAtICR7aW5wdXQuZ2V0RnVsbFllYXIoKX0gYCA7IC8vc2hvdWxkIHRyeSBtb21lbnQuanMgbGF0ZXJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHByaW9yaXR5OiAoKT0+eyBcclxuICAgICAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXRQcmlvcml0eScpO1xyXG4gICAgICAgICAgICByZXR1cm4gaW5wdXQudmFsdWVcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlc2V0Rm9ybSgpIHtcclxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtaW5wdXQgPSBcInVzZXJJbnB1dFwiXScpO1xyXG4gICAgaW5wdXQuZm9yRWFjaCgoaW5wKSA9PiB7IHJldHVybiBpbnAudmFsdWUgPSBudWxsIH0pO1xyXG59XHJcblxyXG4vL1RoZSBMb2dpYyBhZnRlciB5b3UgY2xpY2sgYWRkIFxyXG5jb25zdCBhcnJheVRvRG8gPSBhZGRUb0RvTGlzdCgpO1xyXG5jb25zdCBpbnB1dFRvRG8gPSBnZXRJbnB1dCgpO1xyXG5cclxuZnVuY3Rpb24gYWN0aW9uTmV3VG9Eb0xpc3QoZSl7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvL2NyZWF0ZSBUbyBEbyBMaXN0XHJcbiAgICAvL3Rha2UgdGhlIHBhcmFtZXRlciBmcm9tIGRvbVxyXG4gICAgbGV0IHRhc2sgPSBhZGRUb0RvTGlzdChpbnB1dFRvRG8udGl0bGUoKSxpbnB1dFRvRG8uZHVlRGF0ZSgpLCBpbnB1dFRvRG8ucHJpb3JpdHkoKSk7XHJcbiAgICAvL2FkZCB0aGUgdmFyaWFibGUgb2YgdG8gZG8gbGlzdCB0byB0aGUgYXJheSBcclxuICAgIGFycmF5VG9Eby5hZGRUb0FycmF5TGlzdCh0YXNrKTtcclxuICAgIGNvbnNvbGUubG9nKGFycmF5VG9Eby5zaG93QXJyYXlMaXN0KCkpO1xyXG4gICAgcmVzZXRGb3JtKCk7XHJcbiAgICB0b2dnbGVPcGVuQ2xvc2UoJ2lucHV0Rm9ybScpO1xyXG4gICAgc2hvd1RvRG9MaXN0KCdvdXRwdXRTZWN0aW9uJyk7XHJcbiAgICBzaG93VG9Eb0xpc3RTaWRlYmFyKCdteU5vdGVMaXN0Jyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN1Ym1pdElucHV0Rm9ybSgpIHtcclxuICAgIGNvbnN0IG1haW5iYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbmJhcicpO1xyXG4gICAgbWFpbmJhci5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBhY3Rpb25OZXdUb0RvTGlzdCk7XHJcbiAgfVxyXG5cclxuZnVuY3Rpb24gb3BlbkZvcm1CdG4oKXtcclxuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcGVuRm9ybUlucHV0QnRuJyk7XHJcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+eyB0b2dnbGVPcGVuQ2xvc2UoJ2lucHV0Rm9ybScpIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiB0b2dnbGVPcGVuQ2xvc2UodGFyZ2V0KXtcclxuICAgIGNvbnN0IHRvZ2dsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3RhcmdldH1gKTtcclxuICAgICAgICBpZiAodG9nZ2xlLmhhc0F0dHJpYnV0ZSgnY2xvc2UnLCcnKSkge1xyXG4gICAgICAgICAgICB0b2dnbGUucmVtb3ZlQXR0cmlidXRlKCdjbG9zZScpO1xyXG4gICAgICAgICAgICB0b2dnbGUuc2V0QXR0cmlidXRlKCdvcGVuJywnJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHRvZ2dsZS5yZW1vdmVBdHRyaWJ1dGUoJ29wZW4nKTtcclxuICAgICAgICAgICAgdG9nZ2xlLnNldEF0dHJpYnV0ZSgnY2xvc2UnLCcnKTtcclxuICAgICAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dUb0RvTGlzdCh0YXJnZXRDbGFzcykge1xyXG4gICAgY29uc3QgbGF5ZXJUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHt0YXJnZXRDbGFzc31gKTtcclxuICAgIGNsZWFyRGlzcGxheShsYXllclRhcmdldCk7XHJcbiAgICBsb29wQXJyYXkodGFyZ2V0Q2xhc3MpLmFsbENhcmQoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbG9vcEFycmF5KHRhcmdldENsYXNzKSB7XHJcbiAgICBjb25zdCBsYXllclRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3RhcmdldENsYXNzfWApO1xyXG4gICAgcmV0dXJueyBcclxuICAgICAgICBhbGxDYXJkOiBcclxuICAgICAgICAgICAgKCk9PnsgICBmb3IgKGxldCBsaXN0IG9mIGFycmF5VG9Eby5zaG93QXJyYXlMaXN0KCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXJUYXJnZXQuYXBwZW5kKHRvRG9MaXN0Q2FyZChsaXN0KS5hbGxDYXJkKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgdGl0bGVDYXJkOlxyXG4gICAgICAgICAgICAoKT0+eyAgIGZvciAobGV0IGxpc3Qgb2YgYXJyYXlUb0RvLnNob3dBcnJheUxpc3QoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXllclRhcmdldC5hcHBlbmQodG9Eb0xpc3RDYXJkKGxpc3QpLnRpdGxlQ2FyZCgpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsZWFyRGlzcGxheShwYXJlbnQpIHtcclxuICAgIHdoaWxlIChwYXJlbnQuZmlyc3RDaGlsZCkge1xyXG4gICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChwYXJlbnQuZmlyc3RDaGlsZCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbndpbmRvdy5vbmxvYWQgPSgpPT4ge1xyXG4gICAgc3VibWl0SW5wdXRGb3JtKCk7XHJcbiAgICBvcGVuRm9ybUJ0bigpO1xyXG59XHJcblxyXG5leHBvcnQge2FkZFRvRG9MaXN0LCBsb29wQXJyYXksIGNsZWFyRGlzcGxheSxzaG93VG9Eb0xpc3QsIHNob3dUb0RvTGlzdFNpZGViYXIsIGFycmF5VG9Eb31cclxuIiwiaW1wb3J0IHsgY2xlYXJEaXNwbGF5LCBsb29wQXJyYXkgfSBmcm9tIFwiLlwiO1xyXG5cclxuXHJcbmZ1bmN0aW9uIHNob3dUb0RvTGlzdFNpZGViYXIodGFyZ2V0Q2xhc3MpIHtcclxuICAgIGNvbnN0IGxheWVyVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7dGFyZ2V0Q2xhc3N9YCk7XHJcbiAgICBjbGVhckRpc3BsYXkobGF5ZXJUYXJnZXQpO1xyXG4gICAgbG9vcEFycmF5KHRhcmdldENsYXNzKS50aXRsZUNhcmQoKTtcclxufVxyXG5cclxuZXhwb3J0IHtzaG93VG9Eb0xpc3RTaWRlYmFyfSIsImltcG9ydCB7IGFycmF5VG9Ebywgc2hvd1RvRG9MaXN0LCBzaG93VG9Eb0xpc3RTaWRlYmFyIH0gZnJvbSBcIi5cIjtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZURpdihuYW1lKXtcclxuICAgIGNvbnN0IGxheWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBsYXllci5jbGFzc05hbWUgPSBgJHtuYW1lfWA7XHJcbiAgICByZXR1cm4gbGF5ZXI7XHJcbn1cclxuZnVuY3Rpb24gY3JlYXRlVG9Eb0RpdihsaXN0LCBuYW1lKXtcclxuICAgIGNvbnN0IGxheWVyID0gY3JlYXRlRGl2KG5hbWUpO1xyXG4gICAgLy8gY29uc29sZS5sb2codHlwZW9mKGxpc3RbbmFtZV0pKTtcclxuICAgIGxheWVyLmFwcGVuZChsaXN0W2Ake25hbWV9YF0pO1xyXG4gICAgcmV0dXJuIGxheWVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVEZWxldGVMaXN0QnRuKGxpc3Qpe1xyXG4gICAgY29uc3QgbGF5ZXIgPSBjcmVhdGVEaXYoJ2RlbGV0ZVRoaXNMaXN0Jyk7XHJcbiAgICBjb25zdCBkZWxidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGRlbGJ0bi5pZD0nZGVsZXRlTGlzdCc7XHJcbiAgICBkZWxidG4udGV4dENvbnRlbnQ9J2RlbGV0ZSc7XHJcbiAgICBkZWxidG4ub25jbGljayA9ICgpPT57IGRlbGV0ZUxpc3RGdW5jdGlvbihsaXN0KSB9O1xyXG4gICAgbGF5ZXIuYXBwZW5kKGRlbGJ0bik7XHJcbiAgICByZXR1cm4gbGF5ZXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlbGV0ZUxpc3RGdW5jdGlvbihsaXN0KXtcclxuICAgIGFycmF5VG9Eby5yZW1vdmVGcm9tQXJyYXlMaXN0KGxpc3QudGl0bGUpO1xyXG4gICAgc2hvd1RvRG9MaXN0KCdvdXRwdXRTZWN0aW9uJyk7XHJcbiAgICBzaG93VG9Eb0xpc3RTaWRlYmFyKCdteU5vdGVMaXN0Jyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvRG9MaXN0TGF5ZXIobGlzdCl7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNoZWNrOiAoKT0+IHtcclxuICAgICAgICAgICAgY29uc3QgbGF5ZXIgPSBjcmVhdGVEaXYoJ2NoZWNrbGlzdCcpO1xyXG4gICAgICAgICAgICBsYXllci5hcHBlbmQoY2hlY2tsaXN0Q29uZGl0aW9uKGxpc3QpKTtcclxuICAgICAgICAgICAgcmV0dXJuIGxheWVyOyBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRpdGxlOiAoKT0+IHsgcmV0dXJuIGNyZWF0ZVRvRG9EaXYobGlzdCwgJ3RpdGxlJyl9LFxyXG4gICAgICAgIGR1ZURhdGU6ICgpPT4geyByZXR1cm4gY3JlYXRlVG9Eb0RpdihsaXN0LCAnZHVlRGF0ZScpfSxcclxuICAgICAgICBwcmlvcml0eTogKCk9PiB7IHJldHVybiBjcmVhdGVUb0RvRGl2KGxpc3QsICdwcmlvcml0eScpfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja2xpc3RDb25kaXRpb24obGlzdCl7XHJcbiAgICBpZiAobGlzdC5jaGVja2xpc3QgPT0gZmFsc2UpIHJldHVybiAn4pyVJztcclxuICAgIGVsc2UgcmV0dXJuICfinJMnO1xyXG59XHJcblxyXG4vL2NoYW5nZSBzbyBpdCBjYW4gYmUgcGFydGlhbCB3aGV0ZXIgeW91IHdhbm5hIGFwcGVuZCB0aXRsZSBvbmx5XHJcbmZ1bmN0aW9uIHRvRG9MaXN0Q2FyZChsaXN0KXtcclxuICAgIGNvbnN0IGxheWVyID0gY3JlYXRlRGl2KCd0b0RvTGlzdCcpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBhbGxDYXJkOiAoKT0+e1xyXG4gICAgICAgICAgICBsYXllci5hcHBlbmQodG9Eb0xpc3RMYXllcihsaXN0KS5jaGVjaygpLCB0b0RvTGlzdExheWVyKGxpc3QpLnRpdGxlKCksIHRvRG9MaXN0TGF5ZXIobGlzdCkuZHVlRGF0ZSgpLCB0b0RvTGlzdExheWVyKGxpc3QpLnByaW9yaXR5KCksIGNyZWF0ZURlbGV0ZUxpc3RCdG4obGlzdCkpO1xyXG4gICAgICAgICAgICByZXR1cm4gbGF5ZXIgfSxcclxuICAgICAgICB0aXRsZUNhcmQ6ICgpPT57XHJcbiAgICAgICAgICAgIGxldCB0aXRsZUNhcmQgPSB0b0RvTGlzdExheWVyKGxpc3QpLnRpdGxlKCk7IFxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gdGl0bGVDYXJkTGltaXRlZCgpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1heExlbmd0aCA9IDEwO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbGF5ZXIgPSBjcmVhdGVEaXYoJ3RpdGxlJyk7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHRpdGxlQ2FyZC50ZXh0Q29udGVudHMgPSB0aXRsZUNhcmQudGV4dENvbnRlbnQuc3Vic3RyaW5nKDAsIG1heExlbmd0aCkgKyBcIi4uLlwiKVxyXG4gICAgICAgICAgICAgICAgaWYodGl0bGVDYXJkLnRleHRDb250ZW50Lmxlbmd0aCA+IG1heExlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGVDYXJkTGltaXQgPSB0aXRsZUNhcmQudGV4dENvbnRlbnQuc3Vic3RyaW5nKDAsIG1heExlbmd0aCkgKyBcIi4uLlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGxheWVyLmFwcGVuZCh0aXRsZUNhcmRMaW1pdClcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhsYXllcik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxheWVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aXRsZUNhcmQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aXRsZUNhcmQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aXRsZUNhcmRMaW1pdGVkKCkpO1xyXG4gICAgICAgICAgICBsYXllci5hcHBlbmQodGl0bGVDYXJkTGltaXRlZCgpKTtcclxuICAgICAgICAgICAgcmV0dXJuIGxheWVyIH0gXHJcbiAgICB9O1xyXG59XHJcblxyXG5cclxuZXhwb3J0IHt0b0RvTGlzdENhcmQsIHRvRG9MaXN0TGF5ZXJ9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==