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
    if(req.body.cadastro){
      var cad = await Cidadao.get({
        hash:req.body.cadastro
      });
      if(cad){
        var request = req.body;
        request.id_cadastro = cad.id;
        request.cadastro_usuario = {
          connect:{
            id:cad.id
          }
        }
        request.user = user.hash;
        var result = await Cidadao.newChild(req.body);
        if(result){
          res.status(200).json(result);
        }else{
          res.status(400).json({ msg: "Requisição Inválida! Verifique os campos e tente novamente!" });
        }
      }else{
        res.status(400).json({ msg: "Requisição Inválida! Verifique os campos e tente novamente!" });
      }
    }else{
      res.status(400).json({ msg: "Requisição Inválida! Verifique os campos e tente novamente!" });
    }
  }else{
    res.status(403).json({ msg: "Você precisa estar logado!" });
  }
}
