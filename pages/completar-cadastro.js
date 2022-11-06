import {FormDefault,InputText,ButtonDefault} from  "../components/du-objects.js"
import LogoPrefeitura from '../components/logo-prefeitura.js'
import Link from "next/link"
import Router from 'next/router';

import  MdOutlineFamilyRestroom  from "react-icons/md";
export default function Cadastro(){

  var success = function(msg){
    Router.push('/');
  }

  return (
    <div className="w-full flex flex-row min-h-screen">
      <div className="flex-auto flex flex-col items-center justify-center p-3">
        <h1 className="text-cor_principal-600 text-4xl font-bold  mb-5">Completar Cadastro</h1>
        <FormDefault API="users/complete" id="formCad" onSuccess={success} resetAfterSend={false} className="w-full flex flex-col justify-center items-stretch max-w-[500px]">
          <InputText name="cress" label="CRESS" className="w-full text-last rounded-t-xl" required={false}/>
          <InputText name="crp" label="CRP" className="w-full text-last" required={false}/>
          <InputText name="telefone" mask="(dd)ddddd-dddd" label="Telefone" className="w-full text-last"/>
          <InputText name="cpf" mask="ddd.ddd.ddd-dd" label="CPF " className="w-full text-last"/>
          <InputText name="rg" label="RG" className="w-full text-last"/>
          <InputText name="endereco" label="Endereço" className="w-full text-last"/>
          <InputText name="especialidade" label="Especialidade" className="w-full rounded-b-xl mb-3" required={false}/>
          <InputText type="date" withLabel={true} name="data_nasc" label="Data de nascimento" className="w-full text-last rounded-xl"/>
          <div className="w-full text-center mt-8 ">
            <ButtonDefault text="Completar"/>
          </div>
        </FormDefault>
      </div>
    </div>
  )
}
