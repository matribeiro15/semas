import prisma from "./prisma.js"
import Leh from "./leh.js"
var Users={};
Users.signUp = async function(obj){
  if (obj.nome !== undefined && obj.email !== undefined && obj.senha !== undefined) {
    var user={
      "nome":obj.nome,
      "email":obj.email,
      "senha":Leh.passwordHash(obj.senha),
      "hash":Leh.setToken()
    }
    var result= await prisma.users.create({
      data:user
    });
    if (result) {
      return result;

    }else{
      return false;
    }

  }else{
    return false;
  }
}
Users.login = async function(login,senha,ip_user,token){
  //busca por cpf
  var cpflogin = login.replaceAll(/[^\d]/g,'');
  var busca = await prisma.dados_pessoais.findFirst({
    where:{
      cpf:cpflogin
    }
  });
  var obj = {
    where:{
      "senha":Leh.passwordHash(senha)
    }
  }

  if (busca) {
    obj.where.id = busca.id_user
  }else {
    obj.where.email= login;
  }
  var busca = await prisma.users.findFirst(obj);
  if (busca) {
    var sessao = {
      id_user:busca.id,
      ip:ip_user,
      data: new Date(),
      hash:token
    }
    var result = await prisma.sessions.create({
      data:sessao
    });
    if (result) {
      return result.hash;
    } else {
      return false;
    }
  }else {
    return false;
  }
}
Users.checkToken = async function(token,ip){
  var busca = await prisma.sessions.findFirst({
    where:{
      hash:token,
      "ip":ip,
      status:"active"
    }
  });
  if (busca) {
    prisma.sessions.update({
      where:{
        id:busca.id
      },
      data:{
        last_access:new Date()
      }
    });
    var user = await prisma.users.findFirst({
      where:{
        id:busca.id_user
      },
      include:{
        dados_pessoais: true
      }
    });
    return user ? user : false;
  }else {
    return false;

  }

}
Users.getUser = async function(wr){
  var busca= await prisma.users.findFirst({
    where:wr
  })
  if (busca) {
    return busca;
  }else {
    return false;
  }
}

Users.complete = async function(obj,id_user){
  var fields = [
    "cress",
    "crp",
    "telefone",
    "cpf",
    "rg",
    "endereco",
    "especialidade",
    "data_nasc"
  ];
  for(var x in obj){
    if(!fields.includes(x) || obj[x].length == 0){
      delete obj[x];
    }
  }



  obj.telefone = Leh.apenasNumeros(obj.telefone);
  obj.cpf = Leh.apenasNumeros(obj.cpf);
  obj.data_nasc = new Date(obj.data_nasc);
  obj.id_user = id_user;
  var result = await prisma.dados_pessoais.create({
    data:obj
  });
  if(result){
    return result;
  }else{
    return false;
  }
}


export default Users;
