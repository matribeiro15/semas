import Users from "../../../controller/users.js"
import Cookies from 'universal-cookie';




export default async function handler(req, res) {
  const cookies = new Cookies(req.headers.cookie);
  const ip = req.connection.remoteAddress;
  if (req.method == "POST") {
    if (req.body.email && req.body.senha){
      var buscaEmail=await Users.login(req.body.email,req.body.senha,ip);
      if (buscaEmail) {
        cookies.set('auth_token',buscaEmail);
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
