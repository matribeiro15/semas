import prisma from './prisma.js'
import Leh from './leh.js'

const Atendimento = {};

Atendimento.addFila = async function(hash,user){
    var buscaUser = await prisma.users.findFirst({
      where:{
        "hash":user
      }
    });
    var buscaClient = await prisma.cadastro_usuario.findFirst({
      where:{
        "hash":hash
      }
    });
    if(buscaUser && buscaClient){
      var result = await prisma.fila_de_atendimento.create({
        data:{
          id_client:buscaClient.id,
          id_user:buscaUser.id,
          data:new Date(),
          "hash":Leh.setToken()
        }
      });
      if(result){
        return result;
      }else{
        return false;
      }
    }else{
      return false;
    }
}

export default Atendimento;
