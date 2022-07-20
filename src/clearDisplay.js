function clearDisplay(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

export default clearDisplay;
