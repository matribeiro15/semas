import {FormDefault,InputText,ButtonDefault} from  "../components/du-objects.js"
import LogoPrefeitura from '../components/logo-prefeitura.js'
import Link from "next/link"
import Router from 'next/router';
import Menu from '../components/menu.js'
export default function Cadastro(){

  return (

  <div className="flex gap-[300px] text-center">
    <Menu className="flex-col-reverse text-gray-50  "/>
      <h1 className="obeject-center bg-clip-text text-transparent bg-gradient-to-r from-cor_principal-600 to-violet-400  font-bold text-6xl mb-5 fontMaster">SEMAS</h1>


       <div className="flex-auto flex flex-col items-center justify-center p-3">
        <InputText name="buscar_Usuário" label="Buscar Usuario" className="w-col text-center rounded pointer-events-none"/>
       </div>
  </div>


  )
}
