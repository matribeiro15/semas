import Users from "../../../controller/users.js"
import Cookies from 'universal-cookie';
export default async function handler(req, res) {
  const cookies = new Cookies(req.headers.cookie);
  const ip = req.connection.remoteAddress;
  var token = cookies.get('auth_token');
  if(token){
    var user = await Users.checkToken(token,ip);
    if(user){
      if(req.method === 'POST'){
        console.log(req.body);
        if(req.body.crp){
          console.log("Tem CRP!");
        }else{
          console.log("Não Tem CRP!");
        }
        if(typeof req.body.cress == 'string' &&
          typeof req.body.crp == 'string' &&
          typeof req.body.telefone == 'string' &&
          typeof req.body.cpf == 'string' &&
          typeof req.body.rg == 'string' &&
          typeof req.body.endereco == 'string' &&
          typeof req.body.especialidade == 'string' &&
          typeof req.body.data_nasc == 'string'
        ){
          var result = await Users.complete(req.body,user.id);
          if(result){
            res.status(200).json({msg:"Dados Registrados Com Sucesso!"});
          }else{
            res.status(501).json({msg:"Erro Interno! Tente novamente mais tarde"});
          }
        }else{
          res.status(400).json({msg:"Erro de Requisição! Verifique os campos e tente novamente"});
        }
      }else{
        res.status(400).json({msg:"Método Inválido!"});
      }
    }else{
      res.status(403).json({msg:"Você precisa estar logado!"});
    }
  }else{
    res.status(403).json({msg:"Você precisa estar logado!"});
  }
}
