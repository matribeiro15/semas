import Users from "../../../controller/users.js"
import Cidadao from "../../../controller/clients.js"
import Cookies from 'universal-cookie';

export default async function handler(req, res) {
  const cookies = new Cookies(req.headers.cookie);
  const ip = req.connection.remoteAddress;
  var user = false
  console.log(req.body);
  if (cookies.get("auth_token")) {
    var token= (cookies.get("auth_token"))
    user= await Users.checkToken(token,ip);
  }
  if(user){
    var obj = req.body
    for(var i in obj){
      obj[i] = {contains:obj[i]};
    }
    var dados = await Cidadao.search(obj);
    if(!dados){
      dados = [];
    }
    res.status(200).json(dados);
  }else{
    res.status(403).json({ msg: "Você precisa estar logado!" });
  }
}
