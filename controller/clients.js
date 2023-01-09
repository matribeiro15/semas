
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
    }else{
      if(typeof dados[x] == 'string' && dados[x].length == 0){
        delete dados[x];
      }
    }
  }
  dados.hash = Leh.setToken()
  dados.data = new Date();
  if(dados.data_nasc && typeof dados.data_nasc == 'string'){
    dados.data_nasc = new Date(dados.data_nasc);
  }
  if(dados.cep){
    dados.cep = dados.cep.replaceAll('-','');
  }

  var resp = await prisma.cadastro_usuario.create({
    data:dados
  });
  if(resp.hash){
    return resp;
  }else{
    return false;
  }
}

Cidadao.newChild = async function(dados){
  var allowed = [
    "responsavel",
    "observacao",
    "nome",
    "data_nasc",
    "parentesco",
    "renda_individual",
    "nis",
    "cpf",
    "nome_social",
    "user",
    "rg",
    "id_cadastro"
  ];
  for(var x in dados){
    if(!allowed.includes(x)){
      delete dados[x];
    }else{
      if(typeof dados[x] == 'string' && dados[x].length == 0){
        delete dados[x];
      }
    }
  }
  if(dados.cpf){
    dados.cpf = dados.cpf.replaceAll('.','').replaceAll('-','');
  }
  if(dados.data_nasc){
    dados.data_nasc = new Date(dados.data_nasc);
  }
  dados.hash = Leh.setToken()
  dados.data = new Date();

  var resp = await prisma.nucleo_familiar.create({
    data:dados
  });
  if(resp.hash){
    return resp;
  }else{
    return false;
  }
}
Cidadao.removeChild = async (id)=>{
  var result = await prisma.nucleo_familiar.delete({
    where:{
      "id":id
    }
  });
  if(result){
    return true;
  }else{
    return false;
  }
}

Cidadao.get = async (wr)=>{
  try {
    var cid = await prisma.cadastro_usuario.findFirst({
      where:wr,
      include:{
        nucleo_familiar:true
      }
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


Cidadao.getChild = async (wr)=>{

  try {
    var cid = await prisma.nucleo_familiar.findFirst({
      where:wr
    });
    if(cid){
      return cid;
    }else{
      return false;
    }
  } catch (e) {
    // console.error(e);
    return false;
  }
}


Cidadao.updateBasic = async (dados,user)=>{
  var allow = [
    'forma_acesso',
    'observacao_cadastro',
    'ponto_coleta',
    'local_cadastro',
    'recebe_algum_beneficio',
    'total_beneficios',
    'telefone_celular',
    'telefone_celular_alternativo',
    'estado_civil',
    'escolaridade',
    'profissao_ocupacao'
  ];
  for(var x in dados){
    if(!allow.includes(x)){
      delete dados[x];
    }else{
      if(typeof dados[x] == 'object'){
        dados[x] = dados[x].join(';');
      }else if(dados[x].length == 0){
        delete dados[x];
      }
    }
  }
  console.log("CHECK =========> ",dados,user);
  var res = await prisma.cadastro_usuario.update({
    where:{
      hash:user
    },
    data:dados
  });
  if(res){
    return res;
  }else{
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
