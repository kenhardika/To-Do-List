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
        desc: ()=> { return createToDoDiv(list, 'desc')}, 
        dueDate: ()=> { return createToDoDiv(list, 'dueDate')},
        priority: ()=> { return createToDoDiv(list, 'priority')}
    }
}

function checklistCondition(list){
    if (list.checklist == false) return '✕'; //should be radio button
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
            layer.append(toDoListLayer(list).check(), toDoListLayer(list).title(), toDoListLayer(list).desc() , toDoListLayer(list).dueDate(), toDoListLayer(list).priority(), createDeleteListBtn(list));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zaWRlYmFyLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdG9Eb0xpc3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzaG93VG9Eb0xpc3RTaWRlYmFyIH0gZnJvbSBcIi4vc2lkZWJhclwiO1xyXG5pbXBvcnQgeyB0b0RvTGlzdENhcmQgfSBmcm9tIFwiLi90b0RvTGlzdFwiO1xyXG5cclxuY29uc29sZS5sb2coJ2hlcmUgd2UgYXJlJyk7XHJcblxyXG4vL2dhdGhlciBkYXRhIGlucHV0IHRlbXBlbGF0ZVxyXG5mdW5jdGlvbiBhZGRUb0RvTGlzdCh0aXRsZSwgZHVlRGF0ZSwgcHJpb3JpdHksIGNoZWNrbGlzdCwgZGVzYyl7IFxyXG4gICAgbGV0IGFycmF5TGlzdCA9IFtdO1xyXG5cclxuICAgIGZ1bmN0aW9uIHNob3dBcnJheUxpc3QoKXtcclxuICAgICAgICByZXR1cm4gYXJyYXlMaXN0O1xyXG4gICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhZGRUb0FycmF5TGlzdChkYXRhKXtcclxuICAgICAgICBhcnJheUxpc3QucHVzaChkYXRhKSBcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZW1vdmVGcm9tQXJyYXlMaXN0KHJlbW92ZWRUaXRsZSl7XHJcbiAgICAgICAgcmV0dXJuIGFycmF5TGlzdCA9IGFycmF5TGlzdC5maWx0ZXIoKGFycmF5KT0+IGFycmF5LnRpdGxlICE9PSByZW1vdmVkVGl0bGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdGl0bGUsXHJcbiAgICAgICAgZHVlRGF0ZSxcclxuICAgICAgICBwcmlvcml0eSxcclxuICAgICAgICBjaGVja2xpc3QsXHJcbiAgICAgICAgZGVzYyxcclxuICAgICAgICBzaG93QXJyYXlMaXN0LFxyXG4gICAgICAgIGFkZFRvQXJyYXlMaXN0LFxyXG4gICAgICAgIHJlbW92ZUZyb21BcnJheUxpc3RcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgZ2V0SW5wdXQgPSAoKSA9PiB7XHJcbiAgICAvL2NvbnN0IGdyYWJEYXRhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdGl0bGU6ICgpPT57IFxyXG4gICAgICAgICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dFRpdGxlJyk7XHJcbiAgICAgICAgICAgIHJldHVybiBpbnB1dC52YWx1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZHVlRGF0ZTogKCk9PnsgXHJcbiAgICAgICAgICAgIGNvbnN0IGlucHV0ID0gbmV3IERhdGUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0RGF0ZScpLnZhbHVlKTtcclxuICAgICAgICAgICAgcmV0dXJuIGAgJHtpbnB1dC5nZXREYXRlKCl9IC0gJHtpbnB1dC5nZXRNb250aCgpKzF9IC0gJHtpbnB1dC5nZXRGdWxsWWVhcigpfSBgIDsgLy9zaG91bGQgdHJ5IG1vbWVudC5qcyBsYXRlclxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcHJpb3JpdHk6ICgpPT57IFxyXG4gICAgICAgICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dFByaW9yaXR5Jyk7XHJcbiAgICAgICAgICAgIHJldHVybiBpbnB1dC52YWx1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGVzYzogKCk9PntcclxuICAgICAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24nKTtcclxuICAgICAgICAgICAgcmV0dXJuIGlucHV0LnZhbHVlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZXNldEZvcm0oKSB7XHJcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWlucHV0ID0gXCJ1c2VySW5wdXRcIl0nKTtcclxuICAgIGlucHV0LmZvckVhY2goKGlucCkgPT4geyByZXR1cm4gaW5wLnZhbHVlID0gbnVsbCB9KTtcclxufVxyXG5cclxuLy9UaGUgTG9naWMgYWZ0ZXIgeW91IGNsaWNrIGFkZCBcclxuY29uc3QgYXJyYXlUb0RvID0gYWRkVG9Eb0xpc3QoKTtcclxuY29uc3QgaW5wdXRUb0RvID0gZ2V0SW5wdXQoKTtcclxuXHJcbmZ1bmN0aW9uIGFjdGlvbk5ld1RvRG9MaXN0KGUpe1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgLy9jcmVhdGUgVG8gRG8gTGlzdFxyXG4gICAgLy90YWtlIHRoZSBwYXJhbWV0ZXIgZnJvbSBkb21cclxuICAgIGxldCB0YXNrID0gYWRkVG9Eb0xpc3QoaW5wdXRUb0RvLnRpdGxlKCksaW5wdXRUb0RvLmR1ZURhdGUoKSwgaW5wdXRUb0RvLnByaW9yaXR5KCksIGZhbHNlICwgaW5wdXRUb0RvLmRlc2MoKSk7XHJcbiAgICAvL2FkZCB0aGUgdmFyaWFibGUgb2YgdG8gZG8gbGlzdCB0byB0aGUgYXJheSBcclxuICAgIGFycmF5VG9Eby5hZGRUb0FycmF5TGlzdCh0YXNrKTtcclxuICAgIGNvbnNvbGUubG9nKGFycmF5VG9Eby5zaG93QXJyYXlMaXN0KCkpO1xyXG4gICAgcmVzZXRGb3JtKCk7XHJcbiAgICB0b2dnbGVPcGVuQ2xvc2UoJ2lucHV0Rm9ybScpO1xyXG4gICAgc2hvd1RvRG9MaXN0KCdvdXRwdXRTZWN0aW9uJyk7XHJcbiAgICBzaG93VG9Eb0xpc3RTaWRlYmFyKCdteU5vdGVMaXN0Jyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN1Ym1pdElucHV0Rm9ybSgpIHtcclxuICAgIGNvbnN0IG1haW5iYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbmJhcicpO1xyXG4gICAgbWFpbmJhci5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBhY3Rpb25OZXdUb0RvTGlzdCk7XHJcbiAgfVxyXG5cclxuZnVuY3Rpb24gb3BlbkZvcm1CdG4oKXtcclxuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcGVuRm9ybUlucHV0QnRuJyk7XHJcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+eyB0b2dnbGVPcGVuQ2xvc2UoJ2lucHV0Rm9ybScpIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiB0b2dnbGVPcGVuQ2xvc2UodGFyZ2V0KXtcclxuICAgIGNvbnN0IHRvZ2dsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke3RhcmdldH1gKTtcclxuICAgIHRvZ2dsZS5mb3JFYWNoKCAoZWxtKT0+e1xyXG4gICAgICAgIGlmIChlbG0uaGFzQXR0cmlidXRlKCdjbG9zZScsJycpKSB7XHJcbiAgICAgICAgICAgIGVsbS5yZW1vdmVBdHRyaWJ1dGUoJ2Nsb3NlJyk7XHJcbiAgICAgICAgICAgIGVsbS5zZXRBdHRyaWJ1dGUoJ29wZW4nLCcnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgZWxtLnJlbW92ZUF0dHJpYnV0ZSgnb3BlbicpO1xyXG4gICAgICAgICAgICBlbG0uc2V0QXR0cmlidXRlKCdjbG9zZScsJycpO1xyXG4gICAgICAgIH19KTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd1RvRG9MaXN0KHRhcmdldENsYXNzKSB7XHJcbiAgICBjb25zdCBsYXllclRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3RhcmdldENsYXNzfWApO1xyXG4gICAgY2xlYXJEaXNwbGF5KGxheWVyVGFyZ2V0KTtcclxuICAgIGxvb3BBcnJheSh0YXJnZXRDbGFzcykuYWxsQ2FyZCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBsb29wQXJyYXkodGFyZ2V0Q2xhc3MpIHtcclxuICAgIGNvbnN0IGxheWVyVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7dGFyZ2V0Q2xhc3N9YCk7XHJcbiAgICByZXR1cm57IFxyXG4gICAgICAgIGFsbENhcmQ6IFxyXG4gICAgICAgICAgICAoKT0+eyAgIGZvciAobGV0IGxpc3Qgb2YgYXJyYXlUb0RvLnNob3dBcnJheUxpc3QoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXllclRhcmdldC5hcHBlbmQodG9Eb0xpc3RDYXJkKGxpc3QpLmFsbENhcmQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICB0aXRsZUNhcmQ6XHJcbiAgICAgICAgICAgICgpPT57ICAgZm9yIChsZXQgbGlzdCBvZiBhcnJheVRvRG8uc2hvd0FycmF5TGlzdCgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyVGFyZ2V0LmFwcGVuZCh0b0RvTGlzdENhcmQobGlzdCkudGl0bGVDYXJkKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2xlYXJEaXNwbGF5KHBhcmVudCkge1xyXG4gICAgd2hpbGUgKHBhcmVudC5maXJzdENoaWxkKSB7XHJcbiAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKHBhcmVudC5maXJzdENoaWxkKTtcclxuICAgIH1cclxufVxyXG5cclxud2luZG93Lm9ubG9hZCA9KCk9PiB7XHJcbiAgICBzdWJtaXRJbnB1dEZvcm0oKTtcclxuICAgIG9wZW5Gb3JtQnRuKCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7YWRkVG9Eb0xpc3QsIGxvb3BBcnJheSwgY2xlYXJEaXNwbGF5LHNob3dUb0RvTGlzdCwgc2hvd1RvRG9MaXN0U2lkZWJhciwgYXJyYXlUb0RvfVxyXG4iLCJpbXBvcnQgeyBjbGVhckRpc3BsYXksIGxvb3BBcnJheSB9IGZyb20gXCIuXCI7XHJcblxyXG5cclxuZnVuY3Rpb24gc2hvd1RvRG9MaXN0U2lkZWJhcih0YXJnZXRDbGFzcykge1xyXG4gICAgY29uc3QgbGF5ZXJUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHt0YXJnZXRDbGFzc31gKTtcclxuICAgIGNsZWFyRGlzcGxheShsYXllclRhcmdldCk7XHJcbiAgICBsb29wQXJyYXkodGFyZ2V0Q2xhc3MpLnRpdGxlQ2FyZCgpO1xyXG59XHJcblxyXG5leHBvcnQge3Nob3dUb0RvTGlzdFNpZGViYXJ9IiwiaW1wb3J0IHsgYXJyYXlUb0RvLCBzaG93VG9Eb0xpc3QsIHNob3dUb0RvTGlzdFNpZGViYXIgfSBmcm9tIFwiLlwiO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlRGl2KG5hbWUpe1xyXG4gICAgY29uc3QgbGF5ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGxheWVyLmNsYXNzTmFtZSA9IGAke25hbWV9YDtcclxuICAgIHJldHVybiBsYXllcjtcclxufVxyXG5mdW5jdGlvbiBjcmVhdGVUb0RvRGl2KGxpc3QsIG5hbWUpe1xyXG4gICAgY29uc3QgbGF5ZXIgPSBjcmVhdGVEaXYobmFtZSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh0eXBlb2YobGlzdFtuYW1lXSkpO1xyXG4gICAgbGF5ZXIuYXBwZW5kKGxpc3RbYCR7bmFtZX1gXSk7XHJcbiAgICByZXR1cm4gbGF5ZXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZURlbGV0ZUxpc3RCdG4obGlzdCl7XHJcbiAgICBjb25zdCBsYXllciA9IGNyZWF0ZURpdignZGVsZXRlVGhpc0xpc3QnKTtcclxuICAgIGNvbnN0IGRlbGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgZGVsYnRuLmlkPSdkZWxldGVMaXN0JztcclxuICAgIGRlbGJ0bi50ZXh0Q29udGVudD0nZGVsZXRlJztcclxuICAgIGRlbGJ0bi5vbmNsaWNrID0gKCk9PnsgZGVsZXRlTGlzdEZ1bmN0aW9uKGxpc3QpIH07XHJcbiAgICBsYXllci5hcHBlbmQoZGVsYnRuKTtcclxuICAgIHJldHVybiBsYXllcjtcclxufVxyXG5cclxuZnVuY3Rpb24gZGVsZXRlTGlzdEZ1bmN0aW9uKGxpc3Qpe1xyXG4gICAgYXJyYXlUb0RvLnJlbW92ZUZyb21BcnJheUxpc3QobGlzdC50aXRsZSk7XHJcbiAgICBzaG93VG9Eb0xpc3QoJ291dHB1dFNlY3Rpb24nKTtcclxuICAgIHNob3dUb0RvTGlzdFNpZGViYXIoJ215Tm90ZUxpc3QnKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdG9Eb0xpc3RMYXllcihsaXN0KXtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgY2hlY2s6ICgpPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBsYXllciA9IGNyZWF0ZURpdignY2hlY2tsaXN0Jyk7XHJcbiAgICAgICAgICAgIGxheWVyLmFwcGVuZChjaGVja2xpc3RDb25kaXRpb24obGlzdCkpO1xyXG4gICAgICAgICAgICByZXR1cm4gbGF5ZXI7IFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdGl0bGU6ICgpPT4geyByZXR1cm4gY3JlYXRlVG9Eb0RpdihsaXN0LCAndGl0bGUnKX0sXHJcbiAgICAgICAgZGVzYzogKCk9PiB7IHJldHVybiBjcmVhdGVUb0RvRGl2KGxpc3QsICdkZXNjJyl9LCBcclxuICAgICAgICBkdWVEYXRlOiAoKT0+IHsgcmV0dXJuIGNyZWF0ZVRvRG9EaXYobGlzdCwgJ2R1ZURhdGUnKX0sXHJcbiAgICAgICAgcHJpb3JpdHk6ICgpPT4geyByZXR1cm4gY3JlYXRlVG9Eb0RpdihsaXN0LCAncHJpb3JpdHknKX1cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tsaXN0Q29uZGl0aW9uKGxpc3Qpe1xyXG4gICAgaWYgKGxpc3QuY2hlY2tsaXN0ID09IGZhbHNlKSByZXR1cm4gJ+KclSc7IC8vc2hvdWxkIGJlIHJhZGlvIGJ1dHRvblxyXG4gICAgZWxzZSByZXR1cm4gJ+Kckyc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRleHRMaW1pdGVyKG9iaiwgY2xhc3NOYW1lLCBtYXhMZW5ndGgpIHtcclxuICAgIGNvbnN0IGxheWVyID0gY3JlYXRlRGl2KGAke2NsYXNzTmFtZX1gKTtcclxuICAgIGlmKG9iai50ZXh0Q29udGVudC5sZW5ndGggPiBtYXhMZW5ndGgpe1xyXG4gICAgICAgIGNvbnN0IHRleHRMaW1pdCA9IG9iai50ZXh0Q29udGVudC5zdWJzdHJpbmcoMCwgbWF4TGVuZ3RoKSArIFwiLi4uXCI7XHJcbiAgICAgICAgbGF5ZXIuYXBwZW5kKHRleHRMaW1pdCk7XHJcbiAgICAgICAgcmV0dXJuIGxheWVyO1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgfVxyXG59O1xyXG5cclxuLy9jaGFuZ2Ugc28gaXQgY2FuIGJlIHBhcnRpYWwgd2hldGVyIHlvdSB3YW5uYSBhcHBlbmQgdGl0bGUgb25seVxyXG5mdW5jdGlvbiB0b0RvTGlzdENhcmQobGlzdCl7XHJcbiAgICBjb25zdCBsYXllciA9IGNyZWF0ZURpdigndG9Eb0xpc3QnKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgYWxsQ2FyZDogKCk9PntcclxuICAgICAgICAgICAgbGF5ZXIuYXBwZW5kKHRvRG9MaXN0TGF5ZXIobGlzdCkuY2hlY2soKSwgdG9Eb0xpc3RMYXllcihsaXN0KS50aXRsZSgpLCB0b0RvTGlzdExheWVyKGxpc3QpLmRlc2MoKSAsIHRvRG9MaXN0TGF5ZXIobGlzdCkuZHVlRGF0ZSgpLCB0b0RvTGlzdExheWVyKGxpc3QpLnByaW9yaXR5KCksIGNyZWF0ZURlbGV0ZUxpc3RCdG4obGlzdCkpO1xyXG4gICAgICAgICAgICByZXR1cm4gbGF5ZXIgfSxcclxuICAgICAgICB0aXRsZUNhcmQ6ICgpPT57XHJcbiAgICAgICAgICAgIGxldCB0aXRsZUNhcmQgPSB0b0RvTGlzdExheWVyKGxpc3QpLnRpdGxlKCk7IFxyXG4gICAgICAgICAgICBsYXllci5hcHBlbmQodGV4dExpbWl0ZXIodGl0bGVDYXJkLCAndGl0bGUnLCAxMCkpOyAvL3dpdGggbGltaXRlZCB0ZXh0Lmxlbmd0aCBvbiBzaWRlYmFyXHJcbiAgICAgICAgICAgIHJldHVybiBsYXllciB9IFxyXG4gICAgfTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCB7dG9Eb0xpc3RDYXJkLCB0b0RvTGlzdExheWVyfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=