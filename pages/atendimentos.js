import {FormDefault,InputText,ButtonDefault,} from  "../components/du-objects.js"
import LogoPrefeitura from '../components/logo-prefeitura.js'
import Link from "next/link"
import  MdOutlineFamilyRestroom  from "react-icons/md";
export default function Buscar(){
  return (
    <HeadLeh>
      <title>Atendimentos | SEMAS</title>
    </HeadLeh>
    <div className="w-full flex flex-row min-h-screen">
      <div className="flex-auto flex flex-col items-center justify-center p-3">
        <h1 className="text-cor_principal-600 text-4xl mb-5 font-bold text-center">Buscar Usuario</h1>
        <FormDefault API="users/create" id="formCad" resetAfterSend={true} className="w-full flex flex-col justify-center items-center">
          <InputText fatherClassName="w-full flex flex-col items-center" name="digite" label="Digite Nome, CPF, RG ou NIS" className="max-w-[500px] w-full text-last rounded-xl" />



        </FormDefault>
      </div>
    </div>
  )
}
