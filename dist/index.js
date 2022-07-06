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
function addToDoList(title, dueDate, priority, checklist, desc){ 
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
        desc,
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
        },
        desc: ()=>{
            const input = document.getElementById('description');
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
    let task = addToDoList(inputToDo.title(),inputToDo.dueDate(), inputToDo.priority(), false , inputToDo.desc());
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
    const toggle = document.querySelectorAll(`.${target}`);
    toggle.forEach( (elm)=>{
        if (elm.hasAttribute('close','')) {
            elm.removeAttribute('close');
            elm.setAttribute('open','');
        }
        else{
            elm.removeAttribute('open');
            elm.setAttribute('close','');
        }});
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

function textLimiter(obj, className, maxLength) {
    const layer = createDiv(`${className}`);
    if(obj.textContent.length > maxLength){
        const textLimit = obj.textContent.substring(0, maxLength) + "...";
        layer.append(textLimit);
        return layer;
    }
    else{
        return obj;
    }
};

//change so it can be partial wheter you wanna append title only
function toDoListCard(list){
    const layer = createDiv('toDoList');
    return {
        allCard: ()=>{
            layer.append(toDoListLayer(list).check(), toDoListLayer(list).title(), toDoListLayer(list).dueDate(), toDoListLayer(list).priority(), createDeleteListBtn(list));
            return layer },
        titleCard: ()=>{
            let titleCard = toDoListLayer(list).title(); 
            layer.append(textLimiter(titleCard, 'title', 10)); //with limited text.length on sidebar
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3NpZGViYXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90b0RvTGlzdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNob3dUb0RvTGlzdFNpZGViYXIgfSBmcm9tIFwiLi9zaWRlYmFyXCI7XHJcbmltcG9ydCB7IHRvRG9MaXN0Q2FyZCB9IGZyb20gXCIuL3RvRG9MaXN0XCI7XHJcblxyXG5jb25zb2xlLmxvZygnaGVyZSB3ZSBhcmUnKTtcclxuXHJcbi8vZ2F0aGVyIGRhdGEgaW5wdXQgdGVtcGVsYXRlXHJcbmZ1bmN0aW9uIGFkZFRvRG9MaXN0KHRpdGxlLCBkdWVEYXRlLCBwcmlvcml0eSwgY2hlY2tsaXN0LCBkZXNjKXsgXHJcbiAgICBsZXQgYXJyYXlMaXN0ID0gW107XHJcblxyXG4gICAgZnVuY3Rpb24gc2hvd0FycmF5TGlzdCgpe1xyXG4gICAgICAgIHJldHVybiBhcnJheUxpc3Q7XHJcbiAgICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGFkZFRvQXJyYXlMaXN0KGRhdGEpe1xyXG4gICAgICAgIGFycmF5TGlzdC5wdXNoKGRhdGEpIFxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlbW92ZUZyb21BcnJheUxpc3QocmVtb3ZlZFRpdGxlKXtcclxuICAgICAgICByZXR1cm4gYXJyYXlMaXN0ID0gYXJyYXlMaXN0LmZpbHRlcigoYXJyYXkpPT4gYXJyYXkudGl0bGUgIT09IHJlbW92ZWRUaXRsZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0aXRsZSxcclxuICAgICAgICBkdWVEYXRlLFxyXG4gICAgICAgIHByaW9yaXR5LFxyXG4gICAgICAgIGNoZWNrbGlzdCxcclxuICAgICAgICBkZXNjLFxyXG4gICAgICAgIHNob3dBcnJheUxpc3QsXHJcbiAgICAgICAgYWRkVG9BcnJheUxpc3QsXHJcbiAgICAgICAgcmVtb3ZlRnJvbUFycmF5TGlzdFxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBnZXRJbnB1dCA9ICgpID0+IHtcclxuICAgIC8vY29uc3QgZ3JhYkRhdGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0aXRsZTogKCk9PnsgXHJcbiAgICAgICAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0VGl0bGUnKTtcclxuICAgICAgICAgICAgcmV0dXJuIGlucHV0LnZhbHVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkdWVEYXRlOiAoKT0+eyBcclxuICAgICAgICAgICAgY29uc3QgaW5wdXQgPSBuZXcgRGF0ZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXREYXRlJykudmFsdWUpO1xyXG4gICAgICAgICAgICByZXR1cm4gYCAke2lucHV0LmdldERhdGUoKX0gLSAke2lucHV0LmdldE1vbnRoKCkrMX0gLSAke2lucHV0LmdldEZ1bGxZZWFyKCl9IGAgOyAvL3Nob3VsZCB0cnkgbW9tZW50LmpzIGxhdGVyXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwcmlvcml0eTogKCk9PnsgXHJcbiAgICAgICAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0UHJpb3JpdHknKTtcclxuICAgICAgICAgICAgcmV0dXJuIGlucHV0LnZhbHVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkZXNjOiAoKT0+e1xyXG4gICAgICAgICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbicpO1xyXG4gICAgICAgICAgICByZXR1cm4gaW5wdXQudmFsdWVcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlc2V0Rm9ybSgpIHtcclxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtaW5wdXQgPSBcInVzZXJJbnB1dFwiXScpO1xyXG4gICAgaW5wdXQuZm9yRWFjaCgoaW5wKSA9PiB7IHJldHVybiBpbnAudmFsdWUgPSBudWxsIH0pO1xyXG59XHJcblxyXG4vL1RoZSBMb2dpYyBhZnRlciB5b3UgY2xpY2sgYWRkIFxyXG5jb25zdCBhcnJheVRvRG8gPSBhZGRUb0RvTGlzdCgpO1xyXG5jb25zdCBpbnB1dFRvRG8gPSBnZXRJbnB1dCgpO1xyXG5cclxuZnVuY3Rpb24gYWN0aW9uTmV3VG9Eb0xpc3QoZSl7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvL2NyZWF0ZSBUbyBEbyBMaXN0XHJcbiAgICAvL3Rha2UgdGhlIHBhcmFtZXRlciBmcm9tIGRvbVxyXG4gICAgbGV0IHRhc2sgPSBhZGRUb0RvTGlzdChpbnB1dFRvRG8udGl0bGUoKSxpbnB1dFRvRG8uZHVlRGF0ZSgpLCBpbnB1dFRvRG8ucHJpb3JpdHkoKSwgZmFsc2UgLCBpbnB1dFRvRG8uZGVzYygpKTtcclxuICAgIC8vYWRkIHRoZSB2YXJpYWJsZSBvZiB0byBkbyBsaXN0IHRvIHRoZSBhcmF5IFxyXG4gICAgYXJyYXlUb0RvLmFkZFRvQXJyYXlMaXN0KHRhc2spO1xyXG4gICAgY29uc29sZS5sb2coYXJyYXlUb0RvLnNob3dBcnJheUxpc3QoKSk7XHJcbiAgICByZXNldEZvcm0oKTtcclxuICAgIHRvZ2dsZU9wZW5DbG9zZSgnaW5wdXRGb3JtJyk7XHJcbiAgICBzaG93VG9Eb0xpc3QoJ291dHB1dFNlY3Rpb24nKTtcclxuICAgIHNob3dUb0RvTGlzdFNpZGViYXIoJ215Tm90ZUxpc3QnKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc3VibWl0SW5wdXRGb3JtKCkge1xyXG4gICAgY29uc3QgbWFpbmJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluYmFyJyk7XHJcbiAgICBtYWluYmFyLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGFjdGlvbk5ld1RvRG9MaXN0KTtcclxuICB9XHJcblxyXG5mdW5jdGlvbiBvcGVuRm9ybUJ0bigpe1xyXG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29wZW5Gb3JtSW5wdXRCdG4nKTtcclxuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57IHRvZ2dsZU9wZW5DbG9zZSgnaW5wdXRGb3JtJykgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvZ2dsZU9wZW5DbG9zZSh0YXJnZXQpe1xyXG4gICAgY29uc3QgdG9nZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLiR7dGFyZ2V0fWApO1xyXG4gICAgdG9nZ2xlLmZvckVhY2goIChlbG0pPT57XHJcbiAgICAgICAgaWYgKGVsbS5oYXNBdHRyaWJ1dGUoJ2Nsb3NlJywnJykpIHtcclxuICAgICAgICAgICAgZWxtLnJlbW92ZUF0dHJpYnV0ZSgnY2xvc2UnKTtcclxuICAgICAgICAgICAgZWxtLnNldEF0dHJpYnV0ZSgnb3BlbicsJycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBlbG0ucmVtb3ZlQXR0cmlidXRlKCdvcGVuJyk7XHJcbiAgICAgICAgICAgIGVsbS5zZXRBdHRyaWJ1dGUoJ2Nsb3NlJywnJyk7XHJcbiAgICAgICAgfX0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93VG9Eb0xpc3QodGFyZ2V0Q2xhc3MpIHtcclxuICAgIGNvbnN0IGxheWVyVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7dGFyZ2V0Q2xhc3N9YCk7XHJcbiAgICBjbGVhckRpc3BsYXkobGF5ZXJUYXJnZXQpO1xyXG4gICAgbG9vcEFycmF5KHRhcmdldENsYXNzKS5hbGxDYXJkKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvb3BBcnJheSh0YXJnZXRDbGFzcykge1xyXG4gICAgY29uc3QgbGF5ZXJUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHt0YXJnZXRDbGFzc31gKTtcclxuICAgIHJldHVybnsgXHJcbiAgICAgICAgYWxsQ2FyZDogXHJcbiAgICAgICAgICAgICgpPT57ICAgZm9yIChsZXQgbGlzdCBvZiBhcnJheVRvRG8uc2hvd0FycmF5TGlzdCgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyVGFyZ2V0LmFwcGVuZCh0b0RvTGlzdENhcmQobGlzdCkuYWxsQ2FyZCgpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgIHRpdGxlQ2FyZDpcclxuICAgICAgICAgICAgKCk9PnsgICBmb3IgKGxldCBsaXN0IG9mIGFycmF5VG9Eby5zaG93QXJyYXlMaXN0KCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXJUYXJnZXQuYXBwZW5kKHRvRG9MaXN0Q2FyZChsaXN0KS50aXRsZUNhcmQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjbGVhckRpc3BsYXkocGFyZW50KSB7XHJcbiAgICB3aGlsZSAocGFyZW50LmZpcnN0Q2hpbGQpIHtcclxuICAgICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQocGFyZW50LmZpcnN0Q2hpbGQpO1xyXG4gICAgfVxyXG59XHJcblxyXG53aW5kb3cub25sb2FkID0oKT0+IHtcclxuICAgIHN1Ym1pdElucHV0Rm9ybSgpO1xyXG4gICAgb3BlbkZvcm1CdG4oKTtcclxufVxyXG5cclxuZXhwb3J0IHthZGRUb0RvTGlzdCwgbG9vcEFycmF5LCBjbGVhckRpc3BsYXksc2hvd1RvRG9MaXN0LCBzaG93VG9Eb0xpc3RTaWRlYmFyLCBhcnJheVRvRG99XHJcbiIsImltcG9ydCB7IGNsZWFyRGlzcGxheSwgbG9vcEFycmF5IH0gZnJvbSBcIi5cIjtcclxuXHJcblxyXG5mdW5jdGlvbiBzaG93VG9Eb0xpc3RTaWRlYmFyKHRhcmdldENsYXNzKSB7XHJcbiAgICBjb25zdCBsYXllclRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3RhcmdldENsYXNzfWApO1xyXG4gICAgY2xlYXJEaXNwbGF5KGxheWVyVGFyZ2V0KTtcclxuICAgIGxvb3BBcnJheSh0YXJnZXRDbGFzcykudGl0bGVDYXJkKCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7c2hvd1RvRG9MaXN0U2lkZWJhcn0iLCJpbXBvcnQgeyBhcnJheVRvRG8sIHNob3dUb0RvTGlzdCwgc2hvd1RvRG9MaXN0U2lkZWJhciB9IGZyb20gXCIuXCI7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVEaXYobmFtZSl7XHJcbiAgICBjb25zdCBsYXllciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbGF5ZXIuY2xhc3NOYW1lID0gYCR7bmFtZX1gO1xyXG4gICAgcmV0dXJuIGxheWVyO1xyXG59XHJcbmZ1bmN0aW9uIGNyZWF0ZVRvRG9EaXYobGlzdCwgbmFtZSl7XHJcbiAgICBjb25zdCBsYXllciA9IGNyZWF0ZURpdihuYW1lKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHR5cGVvZihsaXN0W25hbWVdKSk7XHJcbiAgICBsYXllci5hcHBlbmQobGlzdFtgJHtuYW1lfWBdKTtcclxuICAgIHJldHVybiBsYXllcjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlRGVsZXRlTGlzdEJ0bihsaXN0KXtcclxuICAgIGNvbnN0IGxheWVyID0gY3JlYXRlRGl2KCdkZWxldGVUaGlzTGlzdCcpO1xyXG4gICAgY29uc3QgZGVsYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBkZWxidG4uaWQ9J2RlbGV0ZUxpc3QnO1xyXG4gICAgZGVsYnRuLnRleHRDb250ZW50PSdkZWxldGUnO1xyXG4gICAgZGVsYnRuLm9uY2xpY2sgPSAoKT0+eyBkZWxldGVMaXN0RnVuY3Rpb24obGlzdCkgfTtcclxuICAgIGxheWVyLmFwcGVuZChkZWxidG4pO1xyXG4gICAgcmV0dXJuIGxheWVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkZWxldGVMaXN0RnVuY3Rpb24obGlzdCl7XHJcbiAgICBhcnJheVRvRG8ucmVtb3ZlRnJvbUFycmF5TGlzdChsaXN0LnRpdGxlKTtcclxuICAgIHNob3dUb0RvTGlzdCgnb3V0cHV0U2VjdGlvbicpO1xyXG4gICAgc2hvd1RvRG9MaXN0U2lkZWJhcignbXlOb3RlTGlzdCcpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB0b0RvTGlzdExheWVyKGxpc3Qpe1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBjaGVjazogKCk9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxheWVyID0gY3JlYXRlRGl2KCdjaGVja2xpc3QnKTtcclxuICAgICAgICAgICAgbGF5ZXIuYXBwZW5kKGNoZWNrbGlzdENvbmRpdGlvbihsaXN0KSk7XHJcbiAgICAgICAgICAgIHJldHVybiBsYXllcjsgXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0aXRsZTogKCk9PiB7IHJldHVybiBjcmVhdGVUb0RvRGl2KGxpc3QsICd0aXRsZScpfSxcclxuICAgICAgICBkdWVEYXRlOiAoKT0+IHsgcmV0dXJuIGNyZWF0ZVRvRG9EaXYobGlzdCwgJ2R1ZURhdGUnKX0sXHJcbiAgICAgICAgcHJpb3JpdHk6ICgpPT4geyByZXR1cm4gY3JlYXRlVG9Eb0RpdihsaXN0LCAncHJpb3JpdHknKX1cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tsaXN0Q29uZGl0aW9uKGxpc3Qpe1xyXG4gICAgaWYgKGxpc3QuY2hlY2tsaXN0ID09IGZhbHNlKSByZXR1cm4gJ+KclSc7XHJcbiAgICBlbHNlIHJldHVybiAn4pyTJztcclxufVxyXG5cclxuZnVuY3Rpb24gdGV4dExpbWl0ZXIob2JqLCBjbGFzc05hbWUsIG1heExlbmd0aCkge1xyXG4gICAgY29uc3QgbGF5ZXIgPSBjcmVhdGVEaXYoYCR7Y2xhc3NOYW1lfWApO1xyXG4gICAgaWYob2JqLnRleHRDb250ZW50Lmxlbmd0aCA+IG1heExlbmd0aCl7XHJcbiAgICAgICAgY29uc3QgdGV4dExpbWl0ID0gb2JqLnRleHRDb250ZW50LnN1YnN0cmluZygwLCBtYXhMZW5ndGgpICsgXCIuLi5cIjtcclxuICAgICAgICBsYXllci5hcHBlbmQodGV4dExpbWl0KTtcclxuICAgICAgICByZXR1cm4gbGF5ZXI7XHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICAgIHJldHVybiBvYmo7XHJcbiAgICB9XHJcbn07XHJcblxyXG4vL2NoYW5nZSBzbyBpdCBjYW4gYmUgcGFydGlhbCB3aGV0ZXIgeW91IHdhbm5hIGFwcGVuZCB0aXRsZSBvbmx5XHJcbmZ1bmN0aW9uIHRvRG9MaXN0Q2FyZChsaXN0KXtcclxuICAgIGNvbnN0IGxheWVyID0gY3JlYXRlRGl2KCd0b0RvTGlzdCcpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBhbGxDYXJkOiAoKT0+e1xyXG4gICAgICAgICAgICBsYXllci5hcHBlbmQodG9Eb0xpc3RMYXllcihsaXN0KS5jaGVjaygpLCB0b0RvTGlzdExheWVyKGxpc3QpLnRpdGxlKCksIHRvRG9MaXN0TGF5ZXIobGlzdCkuZHVlRGF0ZSgpLCB0b0RvTGlzdExheWVyKGxpc3QpLnByaW9yaXR5KCksIGNyZWF0ZURlbGV0ZUxpc3RCdG4obGlzdCkpO1xyXG4gICAgICAgICAgICByZXR1cm4gbGF5ZXIgfSxcclxuICAgICAgICB0aXRsZUNhcmQ6ICgpPT57XHJcbiAgICAgICAgICAgIGxldCB0aXRsZUNhcmQgPSB0b0RvTGlzdExheWVyKGxpc3QpLnRpdGxlKCk7IFxyXG4gICAgICAgICAgICBsYXllci5hcHBlbmQodGV4dExpbWl0ZXIodGl0bGVDYXJkLCAndGl0bGUnLCAxMCkpOyAvL3dpdGggbGltaXRlZCB0ZXh0Lmxlbmd0aCBvbiBzaWRlYmFyXHJcbiAgICAgICAgICAgIHJldHVybiBsYXllciB9IFxyXG4gICAgfTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCB7dG9Eb0xpc3RDYXJkLCB0b0RvTGlzdExheWVyfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=