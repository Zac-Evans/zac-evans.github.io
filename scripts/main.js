let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/sonic.jpg') {
      myImage.setAttribute ('src','images/lego-sonic.jpg');
    } else {
      myImage.setAttribute ('src','images/sonic.jpg');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
 let myName = prompt('Please enter your name.');
 if (!myName || myName === null) {
   setUserName();
 } else{
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Sonic is cool, ' + myName + '.';
 }
}


if(!localStorage.getItem('name')){
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Sonic is cool, ' + storedName +'.';
 }

myButton.onclick = function () {
  setUserName();
 }
