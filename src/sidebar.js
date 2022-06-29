import { clearDisplay, loopArray } from ".";


function showToDoListSidebar(targetClass) {
    const layerTarget = document.querySelector(`.${targetClass}`);
    const layerLi = document.createElement('li');
    clearDisplay(layerTarget);
    layerLi.append(loopArray(targetClass).titleCard());
    return layerLi
}

export {showToDoListSidebar}