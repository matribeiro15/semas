import {FormDefault,InputText,ButtonDefault} from  "../components/du-objects.js"
import LogoPrefeitura from '../components/logo-prefeitura.js'
import Link from "next/link"
import Router from 'next/router';
import  MdOutlineFamilyRestroom  from "react-icons/md";
export default function Cadastro(){
  var success = function(msg){
    Router.push('/login');
  }
  return (
    <div className ="w-full flex flex-row min-h-screen">
      <div className="flex-auto flex flex-col items-end justify-center p-3">
        <h1 className="text-cor_principal-600 font-bold text-4xl mb-5">Cadastre-se</h1>
        <FormDefault API="users/create" id="formCad"  onSuccess={success} resetAfterSend={true} className="w-full flex flex-col justify-center items-end">
          <InputText fatherClassName="w-full flex flex-col items-end" name="nome" label="Nome Completo" className="max-w-[500px] w-full text-right rounded-t-xl"/>
          <InputText fatherClassName="w-full flex flex-col items-end" type="email" name="email" label="Email" className="max-w-[500px] w-full text-right"/>
          <InputText fatherClassName="w-full flex  flex-col items-end"  type="password" name="senha" label="Senha" className="max-w-[500px] w-full text-right"/>
          <InputText fatherClassName="w-full flex flex-col items-end" type="password" name="csenha" label="Confirme sua Senha" className="max-w-[500px] w-full text-right rounded-b-xl"/>
          <div className="w-full text-right mt-8">
            <ButtonDefault text="Cadastrar"/>
          </div>
        </FormDefault>
        <div className="w-full text-right mt-8">
          <p className="text-sm text-zinc-900">Já Possui uma conta?</p>
          <Link href="/login">
            <a className="text-cor_principal-600 hover:text-cor_principal-400 duration-300 text-2xl font-bold">Fazer Login</a>
          </Link>
        </div>
      </div>
      <div className="flex-auto w-full flex flex-col items-center justify-center max-w-[500px] bg-cor_principal-600 ">
        <h1 className="text-slate-100 text-7xl font-bold ">SEMAS</h1>
        <LogoPrefeitura/>
      </div>
    </div>

  )
}
