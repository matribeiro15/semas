import {FormDefault,InputText,ButtonDefault,SelectInput} from  "../../components/du-objects.js"
import Router,{useRouter} from 'next/router';
import {useEffect,useState} from 'react';
import Leh from '../../controller/leh.js'
import LoadingBottom from '../../components/loading-bottom.js'
import Menu from '../../components/menu.js'
import HeadLeh from '../../components/head.js'
import PageDefault from '../../components/pageDefault.js'
import {setMask,moneyBRL} from '../../controller/utils.js'
export default function VerCadastro(){
  const [user,setUser] = useState(false);
  const [client,setClient] = useState(false);
  const router = useRouter()
  const { nis } = router.query;


  const Nucleo = function(props){
    return (
      <div className="flex-auto w-full flex mx-auto items-stretch rounded max-w-[900px] col-3 edit flex-auto w-full flex col-3 edit p-1  mx-auto items-stretch transition hover:scale-110 rounded-md hover:shadow-lg hover:border border-cor_principal-700 hover:bg-neutral-100">
         <Cell label="Nome" className="flex-auto"  text={props.dados.nome}/>
         <Cell label="CPF" text={props.dados.cpf}/>
         <Cell label="Data de Nascimento " text={(new Date(props.dados.data_nasc)).toLocaleDateString('pt-BR')}/>
         <Cell label="NIS" text={props.dados.nis}/>
         <Cell label="Parentesco"  text={props.dados.parentesco}/>
         <Cell label="Renda Individual"text={moneyBRL(props.dados.renda_individual)}/>
      </div>
    );
  }

  const Cell = function(props){
    return (
      <div className={"text-lg text-cor_principal-900  flex-auto flex flex-col p-1 mb-1 from-cor_principal-800 fontMaster "+props.className}>
        <strong className="text-sm">{props.label}</strong>
        <font>{props.text ? props.text : '--------'}</font>
      </div>
    );
  }

  const EditableCell = function(props){
    return (
      <div className={"text-lg text-cor_principal-900  flex-auto flex flex-col p-1 mb-1 from-cor_principal-800 fontMaster "+props.className}>
        <strong className="text-sm">{props.label}</strong>
        <input type="text" className="outline-none bg-transparent" defaultValue={props.text ? props.text : '-------------'}/>
      </div>
    );
  }

  const getUser = function(us){
    setUser(us);
  }
  const getClient = async function(){
    var resp = await Leh.post('/api/clients/get',{
      "nis":nis
    });
    if(resp.status == 200){
      resp = await resp.json();
      if(resp.nome){
        setClient(resp);
      }else{
        Router.push("/");
      }
    }else{
      Router.push("/");
    }
  }
  useEffect(()=>{
    getClient();
  },[])

/*
const client = {
  nome:"Leticia Victoria",
  cpf:"563.321.589-98",
  nis:"12132234124",
  rg: "5039203033",
  orgao_expedidor:"Cartório Civil",
  expedicao:"09/03/2016",
  indentificacao_estrangeira:"",
  telefone_celular:"12988123-2122",
  telefone_celular_alternativo:"12988203-2321",
  natural_de:"São jose dos campos-SP",
  estado_civil:"solteira",
  nacionalidade:"Barasileira",
  data_nasc:"08/09/2001",
  escolaridade:"Ensinoo medio compelto",
  sexo:"Feminino",
  profissao_ocupacao:"Diarista",
  logradouro:"rua 2503",
  bairro:"jardim Social",
  cep:"12232-2121",
  numero:"32",
  area:"rural",
  complemento:"casa 1",
  renda_individual:"200,00",
  tipo_de_imovel:"alugado",
  numero_de_comodos:"2",
  tempo_de_moradia:"menos de 1 mês",
  edificada_em:"alvenaria",
  estado_de_conservacao:"bom",
  saneamento_basico:"Possui",
  nome:"Ana luiza Silva",
  cpf:"213.312.132-32",
  data_nasc:"09/05/2015",
  nis:"231.312.323-231",
  parentesco:"filha",
  renda_individual:"200,00",
  total_beneficios:"600,00",
  forma_acesso:"encaminhada",
  ponto_coleta:"centro",
}
*/

return(

<PageDefault title="Ver cadastro | SEMAS" checkUserLogin={true} loading={!client} callbackUser={getUser} label="Cadastro de triagem Social" className="max-w-[900px]">
  <div className="w-100 bg-white shadow py-2 px-5 header-new position-relative protege rounded-xl shadow-cor_principal-600/50 max-w-[1000px]">
    <h1 className="text-black text-2xl font-medium font-mono py-2  w-full text-center">Indentificação</h1>
      <div className="max-w-[900px] col-3 edit flex-auto w-full flex col-3 edit p-1  mx-auto items-stretch transition hover:scale-110 rounded-md hover:shadow-lg hover:border border-cor_principal-700 hover:bg-neutral-100">
        <Cell label="Nome Responsável"  text={client.nome}/>
        <Cell label="CPF" text={setMask('ddd.ddd.ddd-dd',client.cpf)}/>
        <Cell label="NIS" text={client.nis}/>
        <Cell label="RG" text={client.rg}/>
        <Cell label="Orgão Expedidor" text={client.orgao_expedidor}/>
      </div>
      <div className="max-w-[900px] flex-auto w-full   p-1 gap-auto mx-auto items-stretch transition hover:scale-110 rounded-md hover:shadow-lg hover:border border-cor_principal-700 hover:bg-neutral-100">
        <div className="max-w-[900px] flex-auto  w-full flex  p-1 gap-auto mx-auto items-stretch">
          <Cell label="Expediação"  text={(new Date(client.expedicao)).toLocaleDateString("pt-BR")}/>
          <Cell label="Indentificação estrangeira" text={client.indentificacao_estrangeira}/>
          <Cell label="Telefone/Celular" text={client.telefone_celular}/>
          <Cell label="Telefone/Celular Alternativo" text={setMask('(dd)ddddd-dddd',client.telefone_celular_alternativo)}/>
        </div>
        <div className="max-w-[900px] flex-auto  w-full flex  p-1 gap-auto mx-auto items-stretch">
          <Cell label="Local de nacimento" text={client.natural_de }/>
          <Cell label="Estado Civil" text={client.estado_civil}/>
          <Cell label="Nacionalidade" text={client.nacionalidade}/>
          <Cell label="Data de nascimento" text={(new Date (client.data_nasc)).toLocaleDateString("pt-BR")}/>
        </div>
        <div className="max-w-[900px] flex-auto  w-full flex  p-1 gap-auto mx-auto items-stretch">
          <Cell label="Escolaridade" text={client.escolaridade}/>
          <Cell label="Sexo" text={client.sexo}/>
          <Cell label="Profissão Ocupação" text={client.profissao_ocupacao}/>
          <Cell label="Renda Individual" text={moneyBRL(client.renda_individual)}/>
        </div>
      </div>
    <div className="flex-auto  flex-col items-center justify-center  p-3 ">
      <h1 className="text-black text-2xl font-medium font-mono py-2 w-full text-center">Endereço</h1>
        <div className="max-w-[900px] flex-auto w-full flex  p-1 gap-auto mx-auto items-stretch transition hover:scale-110 rounded-md hover:shadow-lg hover:border border-cor_principal-700 hover:bg-neutral-100">
          <Cell label="Logradouro" text={client.logradouro}/>
          <Cell label="Número" text={client.numero}/>
          <Cell label="Bairro/Setor" text={client.bairro_setor}/>
          <Cell label="CEP" text={client.cep}/>
          <Cell label="Área" text={client.area}/>
          <Cell label="Complemento" text={client.complemento}/>
        </div>
      </div>
    <div className="flex-auto flex flex-col items-center justify-center  p-3 ">
      <h1 className=" text-black text-2xl font-medium font-mono py-2 w-full text-center">Tipo de Habitação</h1>
        <div className="max-w-[900px] flex-auto  w-full flex  p-1 gap-auto mx-auto items-stretch transition hover:scale-110 rounded-md hover:shadow-lg hover:border border-cor_principal-700 hover:bg-neutral-100">
          <Cell label="Tipo de imovel" text={client.tipo_de_imovel}/>
          <Cell label="Número de comodos" text={client.numero_de_comodos}/>
          <Cell label="Tempo de moradia " text={client.tempo_de_moradia}/>
          <Cell label="Edificada em" text={client.edificada_em}/>
          <Cell label="Estado de Conservação" text={client.estado_de_conservacao}/>
        </div>
          <div className="max-w-[900px] flex-auto  w-full flex  p-1 gap-auto mx-auto items-stretch transition hover:scale-110 rounded-md hover:shadow-lg hover:border border-cor_principal-700 hover:bg-neutral-100">
            <Cell label="Saneamento basico(Possui?)" text={client.saneamento_basico}/>
          </div>
        </div>
    <h1 className="text-black text-2xl font-medium font-mono py-2 w-full text-center" >Composição Familiar</h1>
      {
        client.nucleo_familiar ?
        client.nucleo_familiar.map((el,id)=>{
        return (<Nucleo dados={el} key={'nucleo---'+id}/>)
        })
        :
          <div className="border rounded-4xl p-3 text-center text-2xl ">Não Possui</div>
      }
    <div className="flex-auto flex flex-col items-center justify-center  p-3   ">

    <h1 className="text-black text-2xl font-medium font-mono py-2 w-full text-center" >Renda</h1>
      <div className="max-w-[300px] flex-auto  w-full flex  p-1 gap-auto mx-auto items-stretch transition hover:scale-110 rounded-md hover:shadow-lg hover:border border-black  hover:bg-neutral-100 ">
        <Cell label="Renda total Familiar" text={moneyBRL(client.renda_familiar)}/>
        <Cell label="Renda Per Capita" text={moneyBRL(client.renda_percapita)}/>
      </div>
      <h1 className="text-black text-2xl font-medium font-mono py-2 w-full text-center">Outros dados</h1>
        <div className="max-w-[900px] flex-auto w-full flex  p-1 gap-auto mx-auto items-stretch transition hover:scale-110 rounded-md hover:shadow-lg hover:border border-cor_principal-700 hover:bg-neutral-100">
          <Cell label="Recebe algum beneficio" text={client.recebe_algum_beneficio}/>
          <Cell label="Total em beneficios" text={moneyBRL(client.total_beneficios)}/>
          <Cell label="Forma de acesso " text={client.forma_acesso}/>
        </div>
        <div className="max-w-[900px]  flex-auto  w-full flex  p-1 gap-auto mx-auto items-stretch transition hover:scale-110 rounded-md hover:shadow-lg hover:border border-cor_principal-700 hover:bg-neutral-100" >
          <Cell label="Ponto de Coleta(beneficios)" text={client.ponto_coleta}/>
          <Cell label="Observação de cadastro" text={client.observacao_cadastro}/>
          <Cell label="Local onde foi feito o cadastro"text={client.local_cadastro}/>
        </div>
      </div>
    </div>
</PageDefault>



)
}
