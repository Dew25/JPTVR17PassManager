import {httpModule} from './HttpModule.js';
import {authModule} from './AuthModule.js';
import{resourcesModul} from './ResourcesModule.js';

class ResourcesModule{
  printAddResourcesForm(){
       document.getElementById('content').innerHTML=
        `<div class="row w-100 mt-5">
          <div class="w-50 mx-auto">
            <H2 class="w-100 text-center my-5">Добавьте новый ресурс</H2>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="lblResource">Адресс страницы</span>
              </div>
              <input type="text" class="form-control" id="resource-url" aria-describedby="lblResource">
            </div>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="lblLogin">Логин</span>
              </div>
              <input type="text" class="form-control" id="login" aria-describedby="lblLogin">
            </div>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="lblPassword">Пароль</span>
              </div>
              <input type="text" class="form-control" id="password" aria-describedby="lblPassword">
            </div>
            <button id="btnAddResource" type="button" class="btn btn-primary w-100">Запомнить</button>
        </div>`;
    document.getElementById('btnAddResource').addEventListener('click',resourcesModule.createAccount); 
  } 
  createAccount(){
    let resourceUrl = document.getElementById('resource-url').value;
    let login = document.getElementById('login').value;
    let password = document.getElementById('password').value;
    let data={
      "login":login,
      "password":password,
      "resourceUrl":resourceUrl    
    };
    httpModule.http({url:'createAccount',options:{method:'POST',data:data}})
            .then(function(response){
              if(response === null || response === undefined){
                document.getElementById('info').innerHTML='Не удалось получить данные с сервера';
                return;
              }
              if(response.authStatus === 'false'){
                document.getElementById('info').innerHTML='Авторизуйтесь, пожалуйста';
                authModule.printLoginForm();
                return;
              }
              if(response.actionStatus === 'false'){
                document.getElementById('info').innerHTML='Не удалось получить данные с сервера';
                return;
              }
              document.getElementById('info').innerHTML='Новая запись добавлена';
              resourcesModule.printAddResourcesForm();
            });
  }
  writeChangesAccount(){
    let resourceUrl = document.getElementById('accountId').options[document.getElementById('accountId').selectedIndex].text;
    let login = document.getElementById('login-resource').value;
    let password = document.getElementById('password-resource').value;
    let accountId = document.getElementById('accountId').value;
    
    let data={
      "login":login,
      "password":password,
      "resourceUrl":resourceUrl,
      "accountId":accountId
    };
    httpModule.http({url:'changeAccount',options:{method:'POST',data:data}})
            .then(function(response){
              if(response === null || response === undefined){
                document.getElementById('info').innerHTML='Не удалось получить данные с сервера';
                return;
              }
              if(response.authStatus === 'false'){
                document.getElementById('info').innerHTML='Авторизуйтесь, пожалуйста';
                authModule.printLoginForm();
                return;
              }
              if(response.actionStatus === 'false'){
                document.getElementById('info').innerHTML='Не удалось получить данные с сервера';
                return;
              }
              document.getElementById('info').innerHTML='Запись изменена';
            });
  }
  getListResources(){
    httpModule.http({url:'listResources',options:{method:'GET'}})
            .then(function(response){
              if(response === null || response === undefined){
                document.getElementById('info').innerHTML='Не удалось получить данные с сервера';
                return;
              }
              if(response.authStatus === 'false'){
                document.getElementById('info').innerHTML='Авторизуйтесь, пожалуйста';
                authModule.printLoginForm();
                return;
              }
              resourcesModule.printResourcesForm(response.dataJson);
              
            });
  }
  showAccoundFor(){
    let select = document.getElementById('accountId');
    let accountId = select.options[select.selectedIndex].value;
    let params = {
      "accountId": accountId
    }
    httpModule.http({url:'resource',options:{method:'GET',params: params}})
            .then(function(response){
              if(response === null || response === undefined){
                document.getElementById('info').innerHTML='Не удалось получить данные с сервера';
                return;
              }
              if(response.authStatus === 'false'){
                document.getElementById('info').innerHTML='Авторизуйтесь, пожалуйста';
                authModule.printLoginForm();
                return;
              }
              
              document.getElementById('accountId').value=response.dataJson.id;
              document.getElementById('password-resource').value=response.dataJson.password;
              document.getElementById('login-resource').value=response.dataJson.login;
              document.getElementById('btnChange').style.display='block';
              document.getElementById('info').innerHTML='&nbsp;';
            })
//    let selectedOption = select.options[select.selectedIndex];
//    if(selectedOption.value !== ''){
//      document.getElementById('password-resource').value='password';
//      document.getElementById('login-resource').value='root';
//    }
  }
  changeEnabledButton(){
    let btnChange = document.getElementById('btnChange');
    btnChange.style.display = 'none';
    let btnWrite = document.getElementById('btnWrite');
    btnWrite.style.display = 'block';
    document.getElementById('login-resource').readOnly=false;
    document.getElementById('password-resource').readOnly=false;
  }
  doWriteChanges(){
    resourcesModule.writeChangesAccount();
    let btnChange = document.getElementById('btnChange');
    btnChange.style.display = 'block';
    let btnWrite = document.getElementById('btnWrite');
    btnWrite.style.display = 'none';
    document.getElementById('login-resource').readOnly=true;
    document.getElementById('password-resource').readOnly=true;
  }
  printResourcesForm(listAccounts){
    document.getElementById('content').innerHTML=
        `<div class="mt-5 w-100">
          <div class="w-100 mx-auto">
            <div class="card p-4 m-auto w-100">
              <h1 class="h3 mb-4 font-weight-normal text-center">Профиль пользователя</h1>
              <div class="row mx-md-n2">
                <div class="col px-md-2">
                  <div class="p-3 border bg-light">
                    <div id='select-box' class="input-group mb-3">
                      <select id='accountId' class='w-100'>
                        <option selected hidden>Выберите ...</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="col px-md-2">
                  <div class="p-3 border bg-light">
                    <div class="input-group mb-3">
                      <div class="input-group-prepend">
                        <span class="input-group-text" id="lblLogin">Логин</span>
                      </div>
                      <input type="text" readonly class="form-control" id="login-resource" aria-describedby="lblLogin">
                    </div>
                    <div class="input-group mb-3">
                      <div class="input-group-prepend">
                        <span class="input-group-text" id="lblPassword">Пароль</span>
                      </div>
                      <input type="text" readonly class="form-control" id="password-resource" aria-describedby="lblPassword">
                    </div>
                  </div>
                </div>
              </div>
              <input type="hidden" id="accountId">
              <button id='btnChange' type="button" class="btn btn-light col-2 align-self-end mt-3" style="display:none;">Изменить</button>
              <button id='btnWrite' type="button" class="btn btn-primary col-2 align-self-end mt-3" style="display:none;">Записать</button>
            </div>
          </div>
        </div>`;
    
    let select = document.getElementById('accountId');
    for(let i=0; i < listAccounts.length;i++){
      select.append(new Option(listAccounts[i].resourceUrl,listAccounts[i].id));
    }
    select.addEventListener('change',resourcesModule.showAccoundFor);
    document.getElementById('btnChange').addEventListener('click', resourcesModule.changeEnabledButton);
    document.getElementById('btnWrite').addEventListener('click', resourcesModule.doWriteChanges);
  }
}
let resourcesModule = new ResourcesModule();
export {resourcesModule};


