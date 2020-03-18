import {authModule} from './AuthModule.js';
/* global bookModule, readerModule, authModule */
export {authMenu};
document.getElementById("userProfile").onclick = function(){
  toogleMenuActive("userProfile"); //находится в текущем скрипте
  bookModule.listBooks(); // импортирована из скрипта (модуля) book.js
};
document.getElementById("userPasswords").onclick = function(){
  toogleMenuActive("userPasswords"); //находится в текущем скрипте
  bookModule.printNewBookForm(); // импортирована из скрипта (модуля) book.js
};

document.getElementById("showLogin").onclick = function(){
  toogleMenuActive("showLogin");
  authModule.printLoginForm();
};
document.getElementById("sysout").onclick = function(){
  toogleMenuActive("sysout");
  authModule.systemOutput();
};

function toogleMenuActive(elementId){
  let activeElement = document.getElementById(elementId);
  let passiveElements = document.getElementsByClassName("nav-item");
  for(let i = 0; i < passiveElements.length; i++){
    if(activeElement === passiveElements[i]){
      passiveElements[i].classList.add("active");
    }else{
      if(passiveElements[i].classList.contains("active")){
        passiveElements[i].classList.remove("active");
      }
    }
  }
}
authMenu();

function authMenu(){
  let user = null;
  if(localStorage.getItem('user') !== null){
    user = JSON.parse(localStorage.getItem('user'));
  }
  if(user !== null){
    document.getElementById("userProfile").style.display = 'block';
    document.getElementById("userPasswords").style.display = 'block';
    document.getElementById("sysout").style.display = 'block';
    document.getElementById("showLogin").style.display = 'none';
  }else{
    document.getElementById("userProfile").style.display = 'none';
    document.getElementById("userPasswords").style.display = 'none';
    document.getElementById("sysout").style.display = 'none';
    document.getElementById("showLogin").style.display = 'block';
  }
}
