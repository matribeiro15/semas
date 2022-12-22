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
    if(req.query.hash){
      var cad = await Cidadao.getChild({
        "hash":req.query.hash
      });
      // console.log(req.query.hash);
      if(cad){
        // var request = req.body;
        // request.id_cadastro = cad.id;
        // request.cadastro_usuario = {
        //   connect:{
        //     id:cad.id
        //   }
        // }
        // request.user = user.hash;
        var result = await Cidadao.removeChild(cad.id);
        if(result){
          res.status(200).json({});
        }else{
          res.status(400).json({ msg: "(Erro 4003) Requisição Inválida! Verifique os campos e tente novamente!" });
        }
      }else{
        res.status(400).json({ msg: "(Erro 4002) Requisição Inválida! Verifique os campos e tente novamente!" });
      }
    }else{
      res.status(400).json({ msg: "(Erro 4001) Requisição Inválida! Verifique os campos e tente novamente!" });
    }
  }else{
    res.status(403).json({ msg: "Acesso Negado! Você precisa estar logado!" });
  }
}
