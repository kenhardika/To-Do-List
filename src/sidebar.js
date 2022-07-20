// eslint-disable-next-line import/no-cycle
import { clearDisplay, loopArray } from '.';

function showToDoListSidebar(targetClass, nameStorage) {
  const layerTarget = document.querySelector(`.${targetClass}`);
  clearDisplay(layerTarget);
  loopArray(targetClass, nameStorage).titleCard();
}

// eslint-disable-next-line import/prefer-default-export
export { showToDoListSidebar };
