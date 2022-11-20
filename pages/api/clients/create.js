import Users from "../../../controller/users.js"
import middleware from "../../../controller/middleware.js"
import nextConnect from 'next-connect';
import Cookies from 'universal-cookie';
import Cidadao from '../../../controller/clients.js'
import {ucwords} from '../../../controller/utils.js'


const handler = nextConnect()
handler.use(middleware)

handler.post(async (req, res)=>{
  // console.log(req);
  if(req.body){
    const cookies = new Cookies(req.headers.cookie);
    const ip = req.connection.remoteAddress;
    var user = false;
    if (cookies.get("auth_token")) {
      var token= (cookies.get("auth_token"))
      user= await Users.checkToken(token,ip);
    }
    if(user){
      var obj = req.body;
      for(var x in obj){
        if(x !== 'saneamento_basico'){
          obj[x] = obj[x][0];
        }
      }
      obj.data_nasc = new Date(obj.data_nasc);
      obj.expedicao = new Date(obj.expedicao);
      obj.renda_individual = parseFloat((obj.renda_individual.replaceAll(/(R\$|\.)/g,'')).replace(',','.'))
      obj.nome = ucwords(obj.nome);
      obj['user'] = user.hash;
      obj.cpf = obj.cpf.replace(/[\.\-\ a-z]/gi,'');
      obj.telefone_celular = obj.telefone_celular.replace(/[\.\-\ \(\)a-z]/gi,'');
      obj.telefone_celular_alternativo = obj.telefone_celular_alternativo.replace(/[\.\-\ \(\)a-z]/gi,'');
      // console.log(obj);
      try {
        var result = await Cidadao.new(obj);
      } catch (e) {

          if (e.code === 'P2002') {
            res.status(401).json({msg:"Usuário Já Cadastrado"})
          }else{
            res.status(400).json({msg:"Houve algum conflito de dados, verifique os campos e tente novamente!"})
          }

      }
      console.log(result);
      if(result){
        res.status(200).json(result);
      }else{
        res.status(400).json("Verifique os Campos e tente novamente!");
      }
    }else{
      res.status(403).json({msg:"Acesso Negado!"});
    }
  }else{
    res.status(400).json({msg:"Requisição Inválida!"});
  }
})
export const config={
  api: {
    bodyParser:false
  }
}
export default handler
