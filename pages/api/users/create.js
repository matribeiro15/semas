import Users from "../../../controller/users.js"



export default async function handler(req, res) {
  const ip = req.connection.remoteAddress;
  if (req.method == "POST") {
    if (req.body.nome && req.body.email && req.body.senha && req.body.csenha){
      var buscaEmail=await Users.getUser({
        email:req.body.email
      })
      if (buscaEmail) {
        res.status(401).json({msg:"Já Possui uma conta com esse email!"})
      }else {
        var result= await Users.signUp({
          nome:req.body.nome,
          email:req.body.email,
          senha:req.body.senha
        });
        if (result) {
          res.status(200).json({msg:"Conta criada com sucesso, aguardando a aprovação."})
        }else {
          res.status(500).json({msg:"Erro interno, tente mais tarde."})
        }
      }
    }else{
      res.status(400).json({msg:"Requisição inválida! Verifique os campos."})
    }
  }else {
    res.status(400).json({ msg: 'Método não suportado' })
  }
}
