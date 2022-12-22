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
    console.log(req.body);
    var dados = await Cidadao.get(req.body);
    if(!dados){
      dados = [];
    }
    res.status(200).json(dados);
  }else{
    res.status(403).json({ msg: "Você precisa estar logado!" });
  }
}
