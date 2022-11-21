import {FormDefault,InputText,ButtonDefault,} from  "../components/du-objects.js"
import HeadLeh from  '../components/head.js'
import LogoPrefeitura from '../components/logo-prefeitura.js'
import Link from "next/link"
import  MdOutlineFamilyRestroom  from "react-icons/md";
export default function Esquecisen(){
  return (
    <>
    <HeadLeh>
      <title>Esqueci senha | SEMAS</title>
    </HeadLeh>
    <div className="w-full flex flex-row min-h-screen">
      <div className="flex-auto flex flex-col items-center justify-center p-3">
        <h1 className="text-cor_principal-600 text-4xl mb-5 font-bold ">Esqueci Minha Senha</h1>
        <FormDefault API="users/create" id="formCad" resetAfterSend={true} className="max-w-[400px] w-full flex flex-wrap gap-x-14 justify-center items-stretch">
          <InputText fatherClassName="w-full flex flex-col items-center" name="digite" label="Digite CPF" className="max-w-[500px] w-full text-last rounded-xl" />
          <div className="w-full text-center mt-8 shine">
            <ButtonDefault text="Recuperar"/>
          </div>
        </FormDefault>


      </div>
    </div>
    </>
  )
}
