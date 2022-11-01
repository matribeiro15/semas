import {FormDefault,InputText,ButtonDefault,} from  "../components/du-objects.js"
import HeadLeh from '../components/head.js'
import LogoPrefeitura from '../components/logo-prefeitura.js'
import Link from "next/link"
import  MdOutlineFamilyRestroom  from "react-icons/md";
export default function Familiar(){
  return (
    <>
    <HeadLeh>
      <title>Núcleo Familiar | SEMAS</title>
    </HeadLeh>
    <div className="w-full flex-col gap-x-{size}">
      <div className="flex-auto  flex-col items-center  p-10">
        <div className="flex-auto flex flex-col items-center justify-center p-3">
        <h1 className="text-cor_principal-600 font-bold text-4xl mb-5 ">Núcleo familiar</h1>
        </div>
      <FormDefault API="users/create" id="formCad" resetAfterSend={true} className="max-w-[1000px] w-full flex flex-wrap gap-2 mx-auto justify-center items-stretch">
        <h1 className="text-black text-2xl font-medium font-mono py-4  w-full text-center mb-3">Renda Familiar</h1>
           <InputText fatherClassName="flex-auto" withLabel={true} name="renda:familiar_total" mask="R$dddd,dd"  label="Renda: Familiar total" className="rounded-xl"/>
           <InputText fatherClassName="flex-auto" withLabel={true} name="benefícios_valor_total"  label="Benefícios recebido valor total" className="rounded-xl"/>
           <InputText fatherClassName="flex-auto" withLabel={true} name="responsavel"  label="Responsável" className="rounded-xl"/>
           <InputText fatherClassName="flex-auto" withLabel={true} name="observação"  label="Observação" className="rounded-xl"/>
        </FormDefault>

        <FormDefault API="users/create" id="formCad" resetAfterSend={true} className="max-w-[1000px] w-full flex flex-wrap gap-3 justify-center mx-auto self-center items-center justify-center">
        <h1 className="text-black text-2xl font-medium font-mono py-4  w-full text-center mb-3 ">Componentes</h1>
        <InputText fatherClassName="flex-3" withLabel={true} name="nome" label="Nome" className="rounded-xl"/>
        <InputText fatherClassName="flex-1" withLabel={true} name="data_nasc" type="date" label="Data de Nascimento" className="rounded-xl"/>
        <InputText fatherClassName="flex-1" withLabel={true} name="cpf" mask="ddd.ddd.ddd-dd" label="CPF" className="rounded-xl"/>
        <InputText fatherClassName="flex-2" withLabel={true} name="parentesco" label="Parentesco" className="rounded-xl"/>
        <InputText fatherClassName="flex-1" withLabel={true} name="Renda" mask="R$dddd,dd" label="Renda Individual" className="rounded-xl"/>
        <InputText fatherClassName="flex-1" withLabel={true} name="nis" label="NIS" className="rounded-xl"/>
        </FormDefault>

        <div className="w-full text-center text-center py-3  ">
        <ButtonDefault text="Adicionar Membro"/>
        </div>

      </div>
    </div>
    </>
  )
}
