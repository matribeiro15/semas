import Users from "../../../controller/users.js"
import Cookies from 'universal-cookie';




export default async function handler(req, res) {
  const cookies = new Cookies(req.headers.cookie);
  const ip = req.connection.remoteAddress;
  if (req.method == "POST") {
    var token = cookies.get('auth_token');
    if (req.body.email && req.body.senha && token){
      var buscaEmail=await Users.login(req.body.email,req.body.senha,ip,token);
      if (buscaEmail) {
        res.status(200).json({msg:"Seja bem vindo."});
      }else {
        res.status(401).json({msg:"Email ou senha invalidos! Verifique os campos."});
      }
    }else{
      res.status(400).json({msg:"Requisição inválida! Verifique os campos."});
    }
  }else {
    res.status(400).json({ msg: 'Método não suportado' });
  }
}
