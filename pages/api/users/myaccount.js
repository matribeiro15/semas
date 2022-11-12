import prisma from '../../../controller/prisma.js'
import nextConnect from 'next-connect';
import Leh from '../../../controller/leh'
import Users from '../../../controller/users'
import middleware from '../../../controller/middleware'
const { createHash } = require('crypto');


const handler = nextConnect();
handler.use(middleware)

handler.post(async (req, res,next) => {
  var user = false;
  var auth_token = req.cookies.auth_token;
  var ip = req.connection.remoteAddress;
  if(auth_token !== undefined){
    var checkT = await Users.checkToken(auth_token,ip);
    if(checkT){
      user = checkT;

      var usr = {};
      if((req.body.email[0]).length > 0 && req.body.email[0] !== user.email){

        usr["email"] = req.body.email[0];
      }
      if((req.body.senha[0]).length > 0 && Leh.passwordHash(req.body.senha[0]) !== user.senha){

        usr["senha"] = Leh.passwordHash(req.body.senha[0]);
      }

      console.log(usr,Object.keys(usr));
      if((Object.keys(usr)).length){
        var re = await prisma.users.update({
          data:usr,
          where:{
            id:user.id
          }
        });
        console.log(re);
      }


      user = await prisma.users.findFirst({
        where:{
          id:user.id
        }
      })
      // console.log(user);

      res.status(200).json({"user":user});
    }else{
      console.error("Falha no reconhecimento do cookie");
      res.status(403).json({msg:"Acesso Negado!"});
    }

  }else{
    console.error("auth_token não foi definido");
    res.status(403).json({msg:"Acesso Negado!"});
  }
});


export const config = {
  api: {
    bodyParser: false
  }
}

export default handler
