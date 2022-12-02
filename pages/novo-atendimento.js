import {FormDefault,InputText,ButtonDefault,SelectInput} from  "../components/du-objects.js"
import Router,{useRouter} from 'next/router';
import {useEffect,useState} from 'react';
import {setMask} from '../controller/utils.js'
import {instituicoes} from '../instituicoes.js'
import {atendimentos} from '../atendimentos.js'
import Leh from '../controller/leh.js'
import PageDefault from '../components/pageDefault.js'
import Atendimento from "../components/novo-atendimento/atendimentos.js"
import Acompanhamentos from "../components/novo-atendimento/acompanhamentos.js"
import Beneficios from "../components/novo-atendimento/beneficios.js"
import Encaminhamentos from "../components/novo-atendimento/encaminhamentos.js"
export default function Cadastro(){
  var success = function(e){
    notification('Sucesso!','Atendimento Adicionado com sucesso!','good');
    Router.push('/novo atendimento/'+e.data.hash)
  }
  var error = async function(e,a){
    notification('Erro!',e.response.data.msg,'bad');
  }
  const [client,setClient] = useState(false);
  const [activeScreen,setActiveScreen] = useState('atendimento')

  const router = useRouter()
  const buscaClient = async ()=>{
    if(router.query.client){
      var resp = await Leh.post('/api/clients/get',{hash:router.query.client});
      if(resp.status == 200){
        resp = await resp.json();
        if(resp.hash){
          setClient(resp);
        }else{
          Router.push("/");
        }
      }else{
        Router.push("/");
      }
    }else{
      Router.push("/");
    }
  }

  useEffect(()=>{
    buscaClient();
  },[])


  const labelsATD = Object.keys(atendimentos);
  var success = function(msg){
    Router.push('/');
  }

  const list = function(){
    return labelsATD.map((el,i)=>{
      return (
        <optionGroup label={el} key={'byudgeyf--'+i}>
        {
          atendimentos[el].map((x,o)=>{
            return <option label={el} key={'erwgfewfwerfghk7yuh--'+o}>{x}</option>
          })
        }
        </optionGroup>
      )
    });
  }

  const telaAtiva = function(){
    if(activeScreen == 'atendimento'){
      return <Atendimento atendimentos={atendimentos}/>
    }else if(activeScreen == 'acompanhamento'){
      return <Acompanhamentos/>
    }else if(activeScreen == 'encaminhamento'){
      return <Encaminhamentos instituicoesList={instituicoes}/>
    }else if(activeScreen == 'beneficio'){
      return <Beneficios/>
    }
  }

  return (
<PageDefault title="Novo Atendimento | SEMAS" checkUser={true} label="Novo Atendimento" icon="FaFileImport">
  <FormDefault API="users/complete" id="formCad" onSuccess={success} resetAfterSend={false} className="w-full flex flex-col justify-center items-stretch max-w-[900px]">
    <h1 className="text-2xl text-cor_principal-900 font-bold px-4 mb-0">{client ? client.nome : ''}</h1>
    <h1 className="text-md text-cor_principal-900 font-bold px-4 mb-7">{client ? 'CPF '+setMask('ddd.ddd.ddd-dd',client.cpf) : ''} {client ? ' |  NIS '+client.nis : ''}</h1>
    <div>
    <button className="m-1 px-3 bg-cor_principal-700 text-white" onClick={(e)=>{e.preventDefault(); setActiveScreen('atendimento')}}>Atendimento</button>
    <button className="m-1 px-3 bg-cor_principal-700 text-white" onClick={(e)=>{e.preventDefault(); setActiveScreen('acompanhamento')}}>Acompanhamento</button>
    <button className="m-1 px-3 bg-cor_principal-700 text-white" onClick={(e)=>{e.preventDefault(); setActiveScreen('encaminhamento')}}>Encaminhamento</button>
    <button className="m-1 px-3 bg-cor_principal-700 text-white" onClick={(e)=>{e.preventDefault(); setActiveScreen('beneficio')}}>Beneficio</button>
    </div>

    {telaAtiva()}
  </FormDefault>
</PageDefault>

  )
}
