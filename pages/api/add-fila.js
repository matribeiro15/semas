import Atendimento from '../../controller/atendimento.js'
import Users from "../../controller/users.js"
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
    if(req.body.hash){
      var result = await Atendimento.addFila(req.body.hash,user.hash);
      if(result){
        res.status(200).json(result);
      }else{
        res.status(400).json({msg:"Erro ao adicionar o usuário à fila. Verifique os campos e tente novamente!"});
      }
    }else{
      res.status(400).json({msg:"Requisição Inválida!"});
    }

  }else{
    res.status(403).json({msg:"Acesso Negado!"});
  }
}
