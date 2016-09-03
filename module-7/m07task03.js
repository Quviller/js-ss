// Task03 
// Using JavaScript and DOM create click event handler for Button that 
// replaces content of a paragraph 4 with a number 42

function m07task03() {
  document.getElementById('last').innerHTML = '42';
}

document.getElementById('testButton').addEventListener('click', m07task03,false);