import {FormDefault,AlternativeForm,InputText,ButtonDefault,SelectInput,Checkbox,LoaderForm} from  "../../components/du-objects.js"
import PageDefault from '../../components/pageDefault.js'
import CardFamily from '../../components/cards/cardFamily.js'
import Leh from '../../controller/leh.js'
import Link from "next/link"
import Menu from '../../components/menu.js'
import {setMask,checkUserLogin} from '../../controller/utils.js'
import {instituicoes} from '../../instituicoes.js'
import {MdOutlineFamilyRestroom}  from "react-icons/md";
import Router,{ useRouter } from 'next/router'
import {useEffect,useState} from 'react'

export default function Familiar(){
  const [client,setClient] = useState(false);
  const [beneficiosTotaisExtra,setBeneficiosTotaisExtra] = useState('');
  const [rendaFamiliar,setRendaFamiliar] = useState(0);
  const [familySize,setFamilySize] = useState(1);
  const router = useRouter();
  const { cadastro } = router.query;

  const successAdd = function(){
    notification("Sucesso!","Familiar Adicionado com Sucesso!",'good');
    getClient();
  }
  const onErrorAdd = async function(e){
    notification("Erro",e.msg,'bad');
  }

  const success = function(){
    Router.push("/");
    notification("Sucesso!","Cadastramento Realizado com Sucesso!",'good');
  }
  const error = async function(e){
    notification("Erro",e.msg,'bad');
  }

  const getClient = async function(cadastro){
    if(!cadastro){
      cadastro = window.location.pathname.split('/')[2];
    }
    var resp = await Leh.post('/api/clients/get',{
      "hash":cadastro
    });
    if(resp.status == 200){
      resp = await resp.json();
      setClient(resp);
      // setRendaFamiliar(parseFloat(resp.renda_individual));
      var rd = parseFloat(resp.renda_individual);
      for (var x = 0; x < resp.nucleo_familiar.length; x++) {
        rd = parseFloat(rd) + parseFloat(resp.nucleo_familiar[x].renda_individual);
      }
      setRendaFamiliar(rd);
      setFamilySize(parseInt(resp.nucleo_familiar.length) + 1);
    }
  }

  const rendaTotal = function(a,b){
    var rd = parseFloat(b);
    rd = rd > 0 ? rd : 0;
    return (parseFloat(a) + parseFloat(rd)).toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
  }
  const rendaPerCapita = function(a,b,c){
    var rd = parseFloat(b);
    rd = rd > 0 ? rd : 0;
    return ((parseFloat(a) + parseFloat(rd)) / c).toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
  }

  useEffect(()=>{
    getClient(cadastro);
  },[]);


  if(!client) {
    return (
      <PageDefault title="Carregando... | SEMAS" icon="MdOutlineFamilyRestroom" label="Núcleo familiar">
        <LoaderForm show={true}/>
      </PageDefault>
    );
  }



return (
<>
  <PageDefault title="Núcleo Familiar | SEMAS" icon="MdOutlineFamilyRestroom" label="Núcleo familiar">
    <div className="w-full flex gap-x-{size} pb-2">
      <div className="flex-auto  flex-col items-center  pb-3">
        <div className="flex-auto flex flex-col items-center justify-center">
          <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-cor_principal-700 to-violet-900  font-bold text-2xl fontMaster">{client.nome}</h1>
          <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-cor_principal-700 to-violet-900  font-bold text-2xl mb-3 fontMaster">CPF {setMask('ddd.ddd.ddd-dd',client.cpf)}</h1>
        </div>
        <FormDefault onSuccess={successAdd} onError={onErrorAdd} API="clients/add-child" id="formCad" resetAfterSend={true} className="max-w-[1000px] w-full flex flex-wrap gap-1 mx-auto justify-center items-stretch">
          <h1 className="text-black text-2xl font-medium font-mono py-4  w-full text-center ">Composição Familiar</h1>
          <div className="w-full mb-3">
            {
              client.nucleo_familiar.map((el,id)=>{
                return <CardFamily dados={el} key={'element--family---'+id} onDelete={()=>{ getClient(cadastro); }}/>
              })
            }
          </div>
          <InputText fatherClassName="flex-5 min-w-[230px]" withLabel={true} name="nome" label="Nome" className="rounded"/>
          <InputText fatherClassName="flex-1 min-w-[230px]" withLabel={true} name="data_nasc" type="date" label="Data de Nascimento" className="rounded"/>
          <InputText fatherClassName="flex-1 min-w-[230px]" withLabel={true} name="cpf" mask="ddd.ddd.ddd-dd" label="CPF" className="rounded"/>
          <InputText fatherClassName="flex-1 min-w-[230px]" withLabel={true} name="nis" label="NIS" className="rounded" required={false}/>
          <SelectInput fatherClassName="flex-1 min-w-[230px]" withLabel={true} name="parentesco" label="Parentesco" className="rounded">
            <option value="">Selecione Uma Opção</option>
            <option value="Cônjuge">Cônjuge</option>
            <option value="Filho(a)">Filho(a)</option>
            <option value="Tutelado">Tutelado</option>
            <option value="Pai">Pai</option>
            <option value="Mãe">Mãe</option>
            <option value="Irmão(ã)">Irmão(ã)</option>
            <option value="Avô(ó)">Avô(ó)</option>
            <option value="Neto">Neto</option>Tio(a)
            <option value="Tio(a)">Tio(a)</option>
            <option value="Sobrinho(a)">Sobrinho(a)</option>
            <option value="Cunhado(a)">Cunhado(a)</option>
            <option value="Outros">Outros</option>
          </SelectInput>
          <div className="flex-1 flex items-center">
            <div className="text-cor_principal-700 font-bold text-2xl mr-2 pt-5 pl-7">R$</div>
            <InputText fatherClassName="flex-auto" withLabel={true} name="renda_individual" typeData="Float" type="number" step="0.01" min="0" onBlur={(e)=>{ e.target.value = parseFloat(e.target.value).toFixed(2); }} label="Renda Individual" className="rounded"/>
          </div>
          <input type="hidden" name="cadastro" value={cadastro}/>
          <div className="w-full text-center text-color-white py-3 redonded-ful ">
            <ButtonDefault text="Adicionar Familiar" className="transition ease-in-out delay-120 bg-blue-400 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"/>
          </div>
        </FormDefault>
        <FormDefault onSuccess={success} onError={error} API="clients/update" noSendToken={true} noSendHash={true} resetAfterSend={false} className="max-w-[1000px] w-full flex flex-wrap gap-3 justify-center mx-auto self-center items-center justify-center">
          <h1 className="text-black text-2xl font-medium font-mono py-4  w-full text-center mb-3">Renda Familiar</h1>
          <div className="rounded border p-2 w-full flex flow-wrap">
            <div>
              <h2 className="font-bold text-sm text-cor_principal-700 mb-3">Recebe algum beneficio?</h2>
              <div className="flex gap-x-[30px] gap-y-[8px] justify-center flex-wrap">
                <Checkbox label="Não Recebe" value="Não Recebe" name="recebe_algum_beneficio" required={false}/>
                <Checkbox label="Auxilio Brasil" value="Auxilio Brasil" name="recebe_algum_beneficio" required={false}/>
                <Checkbox label="BPC(idade)" value="BPC(idade)" name="recebe_algum_beneficio" required={false}/>
                <Checkbox label="BPC(PCD)" value="BPC(PCD)" name="recebe_algum_beneficio" required={false}/>
                <Checkbox label="Mulher protegida" value="mulher protegida" name="recebe_algum_beneficio" required={false}/>
                <Checkbox label="Crescendo Bem" value="Crecendo bem" name="recebe_algum_beneficio" required={false}/>
              </div>
            </div>
            <div className="flex items-center min-w-[300px]">
              <div className="text-cor_principal-700 font-bold text-2xl mr-2 pt-5">R$</div>
              <InputText fatherClassName="flex-auto" withLabel={true} name="total_beneficios" typeData="Float" type="number" step="0.01" min="0" onBlur={(e)=>{ e.target.value = parseFloat(e.target.value).toFixed(2); }} label="Total em Benefícios Recebidos" className="rounded" onChange={(e)=>{ setBeneficiosTotaisExtra(e.target.value);}} value={beneficiosTotaisExtra} required={false}/>
            </div>
          </div>
          <div className="flex flex-col items-center min-w-[300px] border bg-cor_principal-800 border-cor_principal-800 rounded-lg shadow-lg py-1">
            <div className="font-bold text-cor_principal-100 text-sm">Renda Total Familiar</div>
            <div className="text-white font-bold text-2xl mr-2">{rendaTotal(rendaFamiliar,beneficiosTotaisExtra)}</div>
          </div>
          <div className="flex flex-col items-center min-w-[300px] border bg-cor_principal-800 border-cor_principal-800 rounded-lg shadow-lg py-1">
            <div className="font-bold text-cor_principal-100 text-sm">Renda Per Capita</div>
            <div className="text-white font-bold text-2xl mr-2">{rendaPerCapita(rendaFamiliar,beneficiosTotaisExtra,familySize)}</div>
          </div>
          <h1 className="text-black text-2xl font-medium font-mono py-4   w-full text-center mb-3 ">Outros Dados</h1>
          <SelectInput  fatherClassName="flex-3" withLabel={true} name="forma_acesso" label="Forma de Acesso" className="rounded">
            <option value="">Selecione Uma Opção</option>
            <option value="Espontânea">Espontânea</option>
            <option value="Encaminhada">Encaminhada</option>
            <option value="Busca ativa">Busca ativa</option>
            <option value="Abordagem social">Abordagem Social</option>
          </SelectInput>
            <InputText fatherClassName="flex-1" withLabel={true} name="cadunico" label="Codigo familiar CadÚnico" className="rounded"  required={false}/>
          <SelectInput fatherClassName="flex-0" withLabel={true} name="local_cadastro"  label="Local onde foi feito o cadastro" className="rounded">
            <option value="">Selecione Uma Opção</option>
            {
              instituicoes.map((el,id)=>{
                return (<option value={el} key={'opt-instituicoes--'+id}>{el}</option>)
              })
            }
          </SelectInput>
          <InputText fatherClassName="flex-1" withLabel={true} name="observacao_cadastro" label="Observação de cadastro" className="rounded"  required={false}/>
          <InputText fatherClassName="flex-1" withLabel={true} name="ponto_coleta" label="Ponto de coleta(beneficios)" className="rounded"  required={false}/>
          <div className="text-center mt-8 w-full">
           <ButtonDefault text="Salvar"/>
         </div>
        </FormDefault>
      </div>
    </div>
  </PageDefault>
</>
)
}
