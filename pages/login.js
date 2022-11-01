import {FormDefault,InputText,ButtonDefault} from  "../components/du-objects.js"
import LogoPrefeitura from '../components/logo-prefeitura.js'
import Link from "next/link"
import Alerta from '../components/alerta.js'
import {useState,useEffect} from "react"

export default function Login(){
  // const [_alert,setAlert]=useState(<></>);
  //
  // const erro= async function(err){
  //   var resp= await err.json();
  //   setAlert(<Alerta type="erro" text={resp.msg}/>)
  // }
  var erro = function(e){ }

  return (
    <div className="w-full flex flex-row min-h-screen">
      <div className="flex-auto flex flex-col items-end justify-center p-3">
        <h1 className="text-cor_principal-600 text-4xl mb-5">Login</h1>
        <FormDefault API="users/login" onError={erro} className="w-full flex flex-col justify-center items-end">
          <InputText fatherClassName="w-full flex flex-col items-end" name="email" label="Email" className="max-w-[500px] w-full text-right rounded-t-xl"/>
          <InputText fatherClassName="w-full flex  flex-col items-end" type="password" name="senha" label="Senha" className="max-w-[500px] w-full text-right rounded-b-xl"/>
          <div className="w-full text-right mt-1">
            <Link href="/esqueci-minha-senha">
              <a className="text-cor_principal-600 hover:text-cor_principal-400 duration-300 text-sm font-bold">Esqueci Minha Senha</a>
            </Link>
          </div>
          <div className="w-full text-right mt-8">
            <ButtonDefault text="Entrar"/>
          </div>
        </FormDefault>

        <div className="w-full text-right mt-8">
          <p className="text-sm text-zinc-900">Não Possui uma conta?</p>
          <Link href="/cadastro">
            <a className="text-cor_principal-600 hover:text-cor_principal-700 duration-200 text-2xl font-bold">Cadastre-se</a>
          </Link>
        </div>
      </div>
      <div className="flex-auto w-full flex flex-col items-center justify-center max-w-[500px] bg-cor_principal-600">
        <h1 className="text-slate-100 text-7xl font-bold">SEMAS</h1>
        <LogoPrefeitura/>
      </div>
    </div>
  )
}
