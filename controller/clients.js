
import prisma from './prisma.js'
import Leh from './leh.js'
var Cidadao = {}

Cidadao.new = async function(dados){
  var allowed = [
    "nome",
    "nome_social",
    "rg",
    "orgao_expedidor",
    "expedicao",
    "cpf",
    "nis",
    "indentificacao_estrangeira",
    "telefone_celular",
    "telefone_celular_alternativo",
    "natural_de",
    "estado_civil",
    "nacionalidade",
    "data_nasc",
    "escolaridade",
    "sexo",
    "profissao_ocupacao",
    "renda_individual",
    "logradouro",
    "bairro_setor",
    "cep",
    "numero",
    "area",
    "complemento",
    "tipo_de_imovel",
    "numero_de_comodos",
    "tempo_de_moradia",
    "edificada_em",
    "user",
    "estado_de_conservacao",
    "saneamento_basico",
  ];
  for(var x in dados){
    if(!allowed.includes(x)){
      delete dados[x];
    }else if(x == 'saneamento_basico'){
      dados[x] = dados[x].join(';');
    }
  }
  dados.hash = Leh.setToken()
  dados.data = new Date();

  var resp = await prisma.cadastro_usuario.create({
    data:dados
  });
  if(resp.hash){
    return resp;
  }else{
    return false;
  }
}

Cidadao.get = async (wr)=>{
  try {
    var cid = await prisma.cadastro_usuario.findFirst({
      where:wr
    });
    if(cid){
      return cid;
    }else{
      return false;
    }
  } catch (e) {
    return false;
  }
}
Cidadao.search = async (wr)=>{
  try {
    var cid = await prisma.cadastro_usuario.findMany({
      where:wr
    });
    if(cid){
      return cid;
    }else{
      return false;
    }
  } catch (e) {
    return false;
  }
}
export default Cidadao;
