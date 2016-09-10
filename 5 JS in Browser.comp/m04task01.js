// Task01 - Create a simple function that will be used as event handler. 
// function should cancel event bubbling

function task01(e) {
    alert('It\'s a joke');
    e.stopPropagation();
}
  