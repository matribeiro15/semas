import Users from "../../../controller/users.js"
import Cidadao from "../../../controller/clients.js"
import Cookies from 'universal-cookie';

export default async function handler(req, res) {
  const cookies = new Cookies(req.headers.cookie);
  const ip = req.connection.remoteAddress;
  var user = false
  if (cookies.get("auth_token")) {
    var token= (cookies.get("auth_token"))
    user= await Users.checkToken(token,ip);
  }
  if(user){
    // var dados = await Cidadao.get(req.body);
    // if(!dados){
    //   dados = [];
    // }
    var obj = req.body;
    for(var x in obj){
      if(obj[x].length == 0){
        delete obj[x];
      }
    }
    var us = obj.user;
    delete obj.user;
    obj.recebe_algum_beneficio = '['+obj.recebe_algum_beneficio.join('][')+']';
    console.log(obj);
    var resp = await Cidadao.updateBasic(obj,us)
    if(resp){
      res.status(200).json(resp);
    }else{
      res.status(400).json({msg:"Erro de requisição. Verifique os campos e tente novamente."});
    }
  }else{
    res.status(403).json({ msg: "Você precisa estar logado!" });
  }
}
