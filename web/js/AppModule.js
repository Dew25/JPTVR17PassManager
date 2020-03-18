import {authModule} from './AuthModule.js';
/* global bookModule, readerModule, authModule */

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
authModule.authMenu();
