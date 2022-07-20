function getFromLocalStorage(getStorageName) {
  if (!localStorage.getItem(getStorageName)) return;

  const arrayLocal = localStorage.getItem(getStorageName);
  // eslint-disable-next-line consistent-return
  return JSON.parse(arrayLocal);
}

function addToLocalStorage(addStorageName, arrayInput) {
  localStorage.setItem(
    addStorageName,
    JSON.stringify(arrayInput.showArrayList()),
  );
  const arrayLocal = localStorage.getItem(addStorageName);
  return arrayLocal;
}

export { getFromLocalStorage, addToLocalStorage };
