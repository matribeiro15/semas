import {FormDefault,InputText,ButtonDefault,SelectInput} from  "../components/du-objects.js"
import Link from "next/link"
import Router from 'next/router';
import Menu from '../components/menu.js'
import {instituicoes} from '../instituicoes.js'
import {FaFileImport} from 'react-icons/fa';
import {atendimentos} from '../atendimentos.js'
export default function Cadastro(){
  const labelsATD = Object.keys(atendimentos);
  var success = function(msg){
    Router.push('/');
  }

  return (
  <div className="flex gap-x-{size}">
    <div className="w-full flex flex-row min-h-screen">
       <Menu/>
    <FormDefault API="users/complete" id="formCad" onSuccess={success} resetAfterSend={false} className="w-full flex flex-col justify-center items-stretch max-w-[1200px]">
       <div className="w-full text-center items-center justify-center p-3">
       <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-cor_principal-600 to-violet-500  font-bold text-3xl mb-4 fontMaster"><FaFileImport className="inline mr-1 align-bottom text-cor_principal-800"/>Novo atendimento</h1>
       </div>



       <div className="max-w-[1000px] w-full flex flex-wrap gap-5 mx-auto justify-center items-stretch">
          <SelectInput  fatherClassName="flex-3" withLabel={true} name="atendimentos_simplificados" label="Atendimentos Simplificados" className="rounded-xl flex flex-col items-last justify-center text-cor_principal-700 border p-2  cursor-pointer text-center text-m w-[150px] h-[40px] hover:shadow-md transition">
             <option value="">Selecione Uma Opção</option>
            <optgroup label="PSB">
              <option value="Orientação Social">Orientação Social</option>
              <option value="Inscrição em Curso">Inscrição em Curso</option>
              <option value="Inscrição SCFV">Inscrição SCFV</option>
            </optgroup>
            <optgroup label="PSE-Média">
             <option value="Oreintação Social">Oreintação Social</option>
            </optgroup>
          </SelectInput>


          <InputText fatherClassName="flex-3" withLabel={true} name="atendimentos_tecnicos" label="Atendimentos Técnicos" className=" flex flex-col items-last justify-center text-cor_principal-700 border p-2 rounded-xl cursor-pointer text-center text-m w-[330px] h-[40px] hover:shadow-md transition" list="procedimentos_list"/>
          <datalist id="procedimentos_list">
          {
            labelsATD.map((el,i)=>{
              return (
                <optionGroup label={el} key={'byudgeyf--'+i}>
                {
                  atendimentos[el].map((x,o)=>{
                    return <option label={el} key={'erwgfewfwerfghk7yuh--'+o}>{x}</option>
                  })
                }
                </optionGroup>
              )

            })
          }
          </datalist>

            <SelectInput  fatherClassName="flex-3" withLabel={true} name="Beneficios" label="Benefícios" className="flex flex-col items-last justify-center text-cor_principal-700 border p-2 rounded-xl cursor-pointer text-center text-m w-[320px] h-[40px] hover:shadow-md transition">
            <option value="">Selecione Uma Opção</option>
            <option value="BENEFÍCIO EVENTUAL: AUXÍLIO NATALIDADE">BENEFÍCIO EVENTUAL: AUXÍLIO NATALIDADE</option>
            <option value="BENEFÍCIO EVENTUAL: AUXÍLIO FUNERAL">BENEFÍCIO EVENTUAL: AUXÍLIO FUNERAL</option>
            <option value="BENEFÍCIO EVENTUAL: PASSGAGEM">BENEFÍCIO EVENTUAL: PASSGAGEM</option>
            <option value="MARMITEX">MARMITEX</option>
            <option value="NUTRI VIDA:LEITE">NUTRI VIDA: LEITE</option>
            <option value="MAMÃE CHEGUEI:AUXÍLIO NATALIDADE">MAMÃE CHEGUEI:AUXÍLIO NATALIDADE</option>
            </SelectInput>

            <SelectInput  fatherClassName="flex-3" withLabel={true} name="acompanhamentos" label="Acompanhamentos" className="rounded-xl flex flex-col items-last justify-center text-cor_principal-700 border p-2 rounded-xl cursor-pointer text-center text-m w-[290px] h-[40px] hover:shadow-md transition">
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


        <SelectInput fatherClassName="flex-1" withLabel={true} name="local_onde_foi_feito_o_cadastro"  label="Onde foi feito o cadastro?" className="rounded-xl flex flex-col items-last justify-center text-cor_principal-700 border p-2 rounded-xl cursor-pointer text-center text-m w-[180px] h-[40px] hover:shadow-md transition">
        <option value="">Selecione Uma Opção</option>
        {
          instituicoes.map((el,id)=>{
            return (<option value={el} key={'opt-instituicoes--'+id}>{el}</option>)
          })
        }
        </SelectInput>
        </div>



            <div className="w-full text-center mt-8 ">
            <ButtonDefault text="Mandar para Técnico"/>
            </div>


        </FormDefault>
      </div>
    </div>
  )
}
