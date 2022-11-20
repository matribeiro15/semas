import {FormDefault,InputText,ButtonDefault,SelectInput,Checkbox} from  "../../components/du-objects.js"
import HeadLeh from '../../components/head.js'
import Leh from '../../controller/leh.js'
import LogoPrefeitura from '../../components/logo-prefeitura.js'
import Link from "next/link"
import Menu from '../../components/menu.js'
import {setMask,checkUserLogin} from '../../controller/utils.js'
import {instituicoes} from '../../instituicoes.js'
import {MdOutlineFamilyRestroom}  from "react-icons/md";
import Router,{ useRouter } from 'next/router'
import {useEffect,useState} from 'react'

export default function Familiar(){
  const [client,setClient] = useState(false);
  const [user,setUser] = useState(false);
  const router = useRouter()
  const { cadastro } = router.query;

  const getClient = async function(){
    var resp = await Leh.post('/api/clients/get',{hash:cadastro});
    if(resp.status == 200){
      resp = await resp.json();
      setClient(resp);
    }
  }

  useEffect(()=>{
    checkUserLogin(setUser);
    getClient();
  },[]);


  if(!client) { return <>Carregando...</> }

return (
<>

<div className="w-full flex gap-x-{size} p-2">
  <HeadLeh>
  <title>Núcleo Familiar | SEMAS</title>
  </HeadLeh>

  <Menu/>
<div className="flex-auto  flex-col items-center  p-3">
  <div className="flex-auto flex flex-col items-center justify-center p-3">
   <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-cor_principal-600 to-violet-500  font-bold text-4xl mb-5 fontMaster"><MdOutlineFamilyRestroom className="inline align-bottom text-cor_principal-800"/> Núcleo familiar</h1>
   <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-cor_principal-700 to-violet-900  font-bold text-2xl fontMaster">{client.nome}</h1>
   <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-cor_principal-700 to-violet-900  font-bold text-2xl mb-5 fontMaster">CPF {setMask('ddd.ddd.ddd-dd',client.cpf)}</h1>
  </div>

    <FormDefault API="users/create" id="formCad" resetAfterSend={true} className="max-w-[1000px] w-full flex flex-wrap gap-3 justify-center mx-auto self-center items-center justify-center">

    <h1 className="text-black text-2xl font-medium font-mono py-4  w-full text-center mb-3 ">Composição Familiar</h1>
    <InputText fatherClassName="flex-5" withLabel={true} name="nome" label="Nome" className="rounded-xl"/>
    <InputText fatherClassName="flex-1" withLabel={true} name="data_nasc" type="date" label="Data de Nascimento" className="rounded-xl"/>
    <InputText fatherClassName="flex-1" withLabel={true} name="cpf" mask="ddd.ddd.ddd-dd" label="CPF" className="rounded-xl"/>
    <InputText fatherClassName="flex-1" withLabel={true} name="nis" label="NIS" className="rounded-xl"/>
    <SelectInput fatherClassName="flex-1" withLabel={true} name="parentesco" label="Parentesco" className="rounded-xl">
    <option value="">Selecione Uma Opção</option>
    <option value="Cônjuge">Cônjuge</option>
    <option value="Filho(a) ou Tutelado">Filho(a)</option>
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
    <InputText fatherClassName="flex-1" withLabel={true} name="renda_individual" mask="R$dddd,dd" label="Renda Individual" className="rounded-xl"/>

    <div className="rounded-xl borde ">
    <h2 className="font-bold text-sm text-cor_principal-700 mb-1">É o beneficiario?</h2>
    <div className="flex gap-[3px] justify-center">
    <Checkbox label="Não" value="Não" name="e_beneficiario[]" required={false}/>
    <Checkbox label="Sim" value="Sim" name="e_beneficiario[]" required={false}/>

    </div>
    </div>
    <div className="w-full text-center text-color-white py-3 redonded-ful ">
    <ButtonDefault text="adicionar familiar" className="transition ease-in-out delay-120 bg-blue-400 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"/>
    </div>

      <h1 className="text-black text-2xl font-medium font-mono py-4  w-full text-center mb-3">Renda Familiar</h1>

       <div className="rounded-xl border p-2 w-full">
        <h2 className="font-bold text-sm text-cor_principal-700 mb-3">Recebe algum beneficio?</h2>
          <div className="flex gap-[8px] justify-center">
             <Checkbox label="Não Recebe" value="Não Recebe" name="recebe_beneficio[]" required={false}/>
             <Checkbox label="Auxilio Brasil" value="Auxilio Brasil" name="recebe_beneficio[]" required={false}/>
             <Checkbox label="BPC(idade)" value="BPC(idade)" name="recebe_beneficio[]" required={false}/>
             <Checkbox label="BPC(PCD)" value="BPC(PCD)" name="recebe_beneficio[]" required={false}/>
             <Checkbox label="Mulher protegida" value="mulher protegida" name="recebe_beneficio[]" required={false}/>
             <Checkbox label="Crescendo Bem" value="Crecendo bem" name="recebe_beneficio[]" required={false}/>
          </div>
       </div>
           <InputText fatherClassName="flex-auto" withLabel={true} name="benefícios_total" mask="R$dddd,dd" label="Benefícios recebidos valor total" className="rounded-xl"  required={false}/>
           <InputText fatherClassName="flex-auto" withLabel={true} name="renda_total" mask="R$dddd,dd"  label="Renda: Familiar total" className="rounded-xl"/>
           <InputText fatherClassName="flex-auto" withLabel={true} name="responsavel"  label="Responsável" className="rounded-xl"/>


      <h1 className="text-black text-2xl font-medium font-mono py-4   w-full text-center mb-3 ">Dados Do cadastro</h1>
          <SelectInput  fatherClassName="flex-3" withLabel={true} name="forma_acesso" label="Forma de Acesso" className="rounded-xl">
            <option value="">Selecione Uma Opção</option>
            <option value="Espontanea">Espontânea</option>
            <option value="encaminhada">Encaminhada</option>
            <option value="Busca ativa">Busca ativa</option>
            <option value="abordagem social">Abordagem Social</option>
          </SelectInput>
           <InputText fatherClassName="flex-1" withLabel={true} name="observacao" label="Observação de cadastro" className="rounded-xl"  required={false}/>
           <InputText fatherClassName="flex-1" withLabel={true} name="ponto_coleta" label="Ponto de coleta(beneficios)" className="rounded-xl"  required={false}/>
           <SelectInput fatherClassName="flex-0" withLabel={true} name="onde_cadastro"  label="Local onde foi feito o cadastro" className="rounded-xl">
           <option value="">Selecione Uma Opção</option>
           {
             instituicoes.map((el,id)=>{
               return (<option value={el} key={'opt-instituicoes--'+id}>{el}</option>)
             })
           }
          </SelectInput>
          <div className="w-full text-center text-last object-left-top mt-8  ">
          <ButtonDefault text="Cadastrar Familia"/>
          </div>
        </FormDefault>
  </div>
</div>
</>
)
}
