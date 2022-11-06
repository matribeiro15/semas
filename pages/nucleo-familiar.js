import {FormDefault,InputText,ButtonDefault,SelectInput} from  "../components/du-objects.js"
import HeadLeh from '../components/head.js'
import LogoPrefeitura from '../components/logo-prefeitura.js'
import Link from "next/link"
import {MdOutlineFamilyRestroom}  from "react-icons/md";
export default function Familiar(){
return (
<>
<HeadLeh>
<title>Núcleo Familiar | SEMAS</title>
</HeadLeh>
<div className="w-full flex-col gap-x-{size}">
<div className="flex-auto  flex-col items-center  p-3S">
  <div className="flex-auto flex flex-col items-center justify-center p-3">
  <h1 className="text-cor_principal-600 font-bold text-4xl mb-5 fontMaster"><MdOutlineFamilyRestroom className="inline align-bottom text-cor_principal-800"/> Núcleo familiar</h1>
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
          <SelectInput fatherClassName="flex-2" withLabel={true} name="parentesco" label="Parentesco" className="rounded-xl">
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
          <InputText fatherClassName="flex-1" withLabel={true} name="Renda" mask="R$dddd,dd" label="Renda Individual" className="rounded-xl"/>
          <InputText fatherClassName="flex-1" withLabel={true} name="nis" label="NIS" className="rounded-xl"/>
                <div className="w-full text-center text-center py-3 redonded-ful">
                <ButtonDefault text="Adicionar Membro"/>
                </div>
    </FormDefault>
    <FormDefault API="users/create" id="formCad" resetAfterSend={true} className="max-w-[1000px] w-full flex flex-wrap gap-2 mx-auto justify-center items-stretch">
      <h1 className="text-black text-2xl font-medium font-mono py-4   w-full text-center mb-3 ">Dados Do cadastro</h1>
          <SelectInput  fatherClassName="flex-3" withLabel={true} name="forma_de_acesso" label="Forma de Acesso" className="rounded-xl">
            <option value="">Selecione Uma Opção</option>
            <option value="Espontanea">Espontânea</option>
            <option value="encaminhada">Encaminhada</option>
            <option value="Busca ativa">Busca ativa</option>
            <option value="abordagem social">Abordagem Social</option>
          </SelectInput>
          <InputText fatherClassName="flex-1" withLabel={true} name="" label="Observação de cadastro" className="rounded-xl"/>
          <InputText fatherClassName="flex-1" withLabel={true} name="data_local" label="data e hora" className="rounded-xl"/>

          <div className="w-full text-center text-center py-3  ">
          <ButtonDefault text="Cadastrar Familia"/>
          </div>
        </FormDefault>
  </div>
</div>
</>
)
}
