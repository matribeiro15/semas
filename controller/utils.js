import Router from 'next/router';
const getMyData = async function(callback){
  var response = await fetch('/api/users/mydata');
  response = await response.json();
  if(callback){
    callback(response.user);
  }
}

const checkUserLogin = async function(callback){
  getMyData(function(user){
    if(!user){
      Router.push('/login');
    }
    if(user.dados_pessoais && user.dados_pessoais.length == 0){
      Router.push('/completar-cadastro')
    }
    callback(user);
  });
}
export {getMyData,checkUserLogin}
