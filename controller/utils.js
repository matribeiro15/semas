import Router from 'next/router';
const getMyData = async function(callback){
  var response = await fetch('/api/users/mydata');
  response = await response.json();
  if(callback){
    callback(response.user);
  }
}

var moneyBRL = function(value){
  value = parseFloat(value);
  return value.toLocaleString('pt-BR',{style:"currency",currency:"BRL"});
}

var setMask = function(mask,text){
  if(!text){
    return '';
  }
  mask = mask.split('');
  text = text.split('');
  var n = 0;
  var result = ''
  for (var i = 0; i < mask.length; i++) {
    if(mask[i] == 'd'){
      if(typeof text[n] == 'string'){
        result += text[n];
        n++;
      }
    }else{
      result += mask[i];
      if(mask[i] === text[n]){
        n++;
      }
    }
  }
  return result;
}

var ucwords = (str)=>{
    str = str.toLowerCase();
    return (str + '').replace(/^([a-z])|\s+([a-z])/g, function ($1) {
        return $1.toUpperCase();
    });
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
export {getMyData,checkUserLogin,ucwords,setMask,moneyBRL}
