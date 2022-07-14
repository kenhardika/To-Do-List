import { clearDisplay, loopArray } from ".";


function showToDoListSidebar(targetClass, nameStorage) {
    const layerTarget = document.querySelector(`.${targetClass}`);
    clearDisplay(layerTarget);
    loopArray(targetClass, nameStorage).titleCard();
}

export {showToDoListSidebar}