import {authModule} from './AuthModule.js';
import {httpModule} from './HttpModule.js';


class UserModule{
    addNewUser(){
       document.getElementById('content').innerHTML=
        `<div class="w-100 d-flex justify-content-center">
            <div class="card w-50">
                <div class="card-body">
                  <h5 class="card-title w-100 text-center">Зарегистрировать пользователя</h5>
                  <p class="card-text d-flex justify-content-end">Имя пользователя: <input class="w-50 ml-3" type="text" id="firstname"></p>
                  <p class="card-text d-flex justify-content-end">Фамилия пользователя: <input class="w-50 ml-3" type="text" id="lastname"></p>
                  <p class="card-text d-flex justify-content-end">email пользователя: <input class="w-50 ml-3" type="email" id="email"></p>
                  <p class="card-text d-flex justify-content-end">Логин: <input class="w-50 ml-3" type="text" id="login"></p>
                  <p class="card-text d-flex justify-content-end">Пароль: <input class="w-50 ml-3" type="text" id="password"></p>
                  <a href="#" id="btnAddUser" class="btn btn-primary w-100">Зарегистрировать пользователя</a>
                </div>
            </div>
          </div>`;
            document.getElementById('btnAddUser').onclick=function(){
                userModule.createUser();
            }
           
            
      }
      createUser(){
          let firstname = document.getElementById('firstname').value;
          let lastname = document.getElementById('lastname').value;
          let email = document.getElementById('email').value;
          let login = document.getElementById('login').value;
          let password = document.getElementById('password').value;
          let user = {
              "firstname": firstname,
              "lastname": lastname,
              "email": email,
              "login": login,
              "password": password,
          }
          httpModule.http({url:'createUser',options:{method:'POST',data:user}})
                  .then(function(response){
                      if(response !== null || response !== undefined){
                        if(response.actionStatus === 'true'){
                            document.getElementById('info').innerHTML='Пользователь добавлен';
                            document.getElementById('content').innerHTML='';
                        }else{
                            document.getElementById('info').innerHTML='Пользователя добавить не удалось';
                        }
                      }
                  })
      }
      printUserProfileForm(){
        let user = null;
        if(sessionStorage.getItem('user') !== null){
            user = JSON.parse(sessionStorage.getItem('user'));
            console.log("user.login="+user.login);
            document.getElementById('content').innerHTML=
                `<div class="row mt-5">
                     <div class="card p-4 m-auto w-50">
                        <h1 class="h3 mb-4 font-weight-normal text-center">Профиль пользователя</h1>
                        <div class="input-group mb-2">
                            <div class="input-group-prepend">
                              <span class="input-group-text">Имя </span>
                            </div>
                            <input type="text" id="firstname" class="form-control"  value="${user.person.firstname}">
                        </div>
                        <div class="input-group mb-2">
                            <div class="input-group-prepend">
                              <span class="input-group-text">Фамилия </span>
                            </div>
                            <input type="text" id="lastname" class="form-control"  value="${user.person.lastname}">
                        </div>
                        <div class="input-group mb-2">
                            <div class="input-group-prepend">
                              <span class="input-group-text">Элуктронная почта </span>
                            </div>
                            <input type="text" id="email" class="form-control"  value="${user.person.email}">
                        </div>
                        <div class="input-group mb-2">
                            <div class="input-group-prepend">
                              <span class="input-group-text">Логин </span>
                            </div>
                            <input type="text" id="login" class="form-control"  value="${user.login}">
                        </div>
                        <div class="input-group mb-2">
                            <div class="input-group-prepend">
                              <span class="input-group-text">Новый пароль </span>
                            </div>
                            <input type="text" id="password" class="form-control"  value="">
                        </div>
                        <button id='btnChangeProfile' class="btn btn-primary btn-block" type="button">Изменить</button>
                     </div>
                </div>`;
        }else{
            document.getElementById('content').innerHTML='Данных о пользователе нет'
            authModule.authMenu();
        }
        document.getElementById('btnChangeProfile').onclick = function(){
            userModule.changeProfile();
        }
    }
    changeProfile(){
        let firstname = document.getElementById('firstname').value;
        let lastname = document.getElementById('lastname').value;
        let email = document.getElementById('email').value;
        let login = document.getElementById('login').value;
        let password = document.getElementById('password').value;
        if("" === password){
            password = null;
        }
        let user = {
            "firstname": firstname,
            "lastname": lastname,
            "email": email,
            "login": login,
            "password": password
        }
        httpModule.http({url:'changeUserProfile', options: {method:'POST',data:user}})
                .then(function(response){
                    if(response !== null || response !== undefined){
                        if(response.authStatus === 'true'){
                            if(response.user !== null){
                                sessionStorage.setItem('user',JSON.stringify(response.user));
                                document.getElementById('info').innerHTML='Профиль пользователя изменен';
                            }else{
                                document.getElementById('info').innerHTML='Профиль пользователя не поменялся';
                                if(sessionStorage.getItem('user')!== null){
                                    sessionStorage.removeItem('user');
                                }
                            }
                        }else{
                            document.getElementById('info').innerHTML='Профиль пользователя не поменялся';
                            if(sessionStorage.getItem('user')!== null){
                                sessionStorage.removeItem('user');
                            }
                        }
                    }else{
                         document.getElementById('info').innerHTML='Ошибка на сервере';
                    }
                    userModule.printUserProfileForm();
                });
    }
}
let userModule = new UserModule();
export {userModule};

