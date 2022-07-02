import { clearDisplay, loopArray } from ".";


function showToDoListSidebar(targetClass) {
    const layerTarget = document.querySelector(`.${targetClass}`);
    clearDisplay(layerTarget);
    loopArray(targetClass).titleCard();
}

export {showToDoListSidebar}