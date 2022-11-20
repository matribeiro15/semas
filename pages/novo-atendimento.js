import {FormDefault,InputText,ButtonDefault,SelectInput} from  "../components/du-objects.js"
import Router,{useRouter} from 'next/router';
import {useEffect,useState} from 'react';
import {setMask} from '../controller/utils.js'
import {instituicoes} from '../instituicoes.js'
import {atendimentos} from '../atendimentos.js'
import Leh from '../controller/leh.js'
import PageDefault from '../components/pageDefault.js'


export default function Cadastro(){
  const [client,setClient] = useState(false);

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

  return (
<PageDefault title="Novo Atendimento | SEMAS" checkUser={true} label="Novo Atendimento" icon="FaFileImport">
  <FormDefault API="users/complete" id="formCad" onSuccess={success} resetAfterSend={false} className="w-full flex flex-col justify-center items-stretch max-w-[1200px]">
    <h1 className="text-2xl text-cor_principal-900 font-bold px-4 mb-0">{client ? client.nome : ''}</h1>
    <h1 className="text-md text-cor_principal-900 font-bold px-4 mb-7">{client ? 'CPF '+setMask('ddd.ddd.ddd-dd',client.cpf) : ''} {client ? ' |  NIS '+client.nis : ''}</h1>
    <div className="rounded-xl flex-2 flex-col border pb-3">
      <div className="w-full flex flex-wrap gap-2 mx-auto justify-center items-stretch bg_color_2 text-white">
        <SelectInput  fatherClassName="" withLabel={true} name="atendimentos_simplificados" label="Atendimentos Simplificados" className="rounded-xl min-w-[300px] flex flex-col items-last justify-center text-cor_principal-700 border p-2  cursor-pointer text-center text-m w-[150px] h-[40px] hover:shadow-md transition ">
          <option value="">Selecione Uma Opção</option>
          <optgroup label="PSB">
            <option value="Orientação Social">Orientação Social</option>
            <option value="Inscrição em Curso">Inscrição em Curso</option>
            <option value="Inscrição SCFV">Inscrição SCFV</option>
          </optgroup>
          <optgroup label="PSE-Média">
            <option value="Oreintação Social">Orientação Social</option>
          </optgroup>
        </SelectInput>
        <InputText fatherClassName="" withLabel={true} name="atendimentos_tecnicos" label="Atendimentos Técnicos" className=" flex flex-col items-last justify-center text-cor_principal-700 border p-2 rounded-xl cursor-pointer text-center text-m w-[330px] h-[40px] hover:shadow-md transition" list="procedimentos_list"/>
        <datalist id="procedimentos_list">{list()}</datalist>

        <SelectInput  fatherClassName="" withLabel={true} name="Beneficios" label="Benefícios" className="flex flex-col items-last justify-center text-cor_principal-700 border p-2 rounded-xl cursor-pointer text-center text-m w-[320px] h-[40px] hover:shadow-md transition">
          <option value="">Selecione Uma Opção</option>
          <option value="BENEFÍCIO EVENTUAL: AUXÍLIO NATALIDADE">BENEFÍCIO EVENTUAL: AUXÍLIO NATALIDADE</option>
          <option value="BENEFÍCIO EVENTUAL: AUXÍLIO FUNERAL">BENEFÍCIO EVENTUAL: AUXÍLIO FUNERAL</option>
          <option value="BENEFÍCIO EVENTUAL: PASSGAGEM">BENEFÍCIO EVENTUAL: PASSGAGEM</option>
          <option value="MARMITEX">MARMITEX</option>
          <option value="NUTRI VIDA:LEITE">NUTRI VIDA: LEITE</option>
          <option value="MAMÃE CHEGUEI:AUXÍLIO NATALIDADE">MAMÃE CHEGUEI:AUXÍLIO NATALIDADE</option>
        </SelectInput>
        <SelectInput  fatherClassName="" withLabel={true} name="acompanhamentos" label="Acompanhamentos" className="rounded-xl flex flex-col items-last justify-center text-cor_principal-700 border p-2 rounded-xl cursor-pointer text-center text-m w-[290px] h-[40px] hover:shadow-md transition">
          <option value="">Selecione Uma Opção</option>
          <optgroup label="PSB">
            <option value="PAIF">PAIF</option>
            <option value="SPSB DOMICILIAR">SPSB DOMICILIAR</option>
            <option value="SCFV">SCFV</option>
          </optgroup>
          <optgroup label="PSE-Média">
            <option value="PAEFI">PAEFI</option>
            <option value="SPSAC MEDIDAS SOCIOEDUCATIVAS (LA)">SPSAC MEDIDAS SOCIOEDUCATIVAS (LA)</option>
            <option value="SPSAC MEDIDAS SOCIOEDUCATIVAS (PSC)">SPSAC MEDIDAS SOCIOEDUCATIVAS (PSC)</option>
          </optgroup>
          <optgroup label="PSE-Alta">
            <option value="ACOLHIMENTO INSTITUCIONAL">ACOLHIMENTO INSTITUCIONAL</option>
          </optgroup>
        </SelectInput>
        <SelectInput fatherClassName="" withLabel={true} name="local_onde_foi_feito_o_cadastro"  label="Onde foi feito o cadastro?" className="rounded-xl flex flex-col items-last justify-center text-cor_principal-700 border p-2 rounded-xl cursor-pointer text-center text-m w-[180px] h-[40px] hover:shadow-md transition">
          <option value="">Selecione Uma Opção</option>
          {
            instituicoes.map((el,id)=>{
              return (<option value={el} key={'opt-instituicoes--'+id}>{el}</option>)
            })
          }
        </SelectInput>
      </div>
    </div>
    <div className="w-full text-center mt-8 ">
      <ButtonDefault text="Mandar para Técnico"/>
    </div>
  </FormDefault>
</PageDefault>

  )
}
