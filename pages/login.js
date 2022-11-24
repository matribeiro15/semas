import {FormDefault,InputText,ButtonDefault} from  "../components/du-objects.js"
import PrefeituraLogo from '../components/prefeitura-logo.js'
import Link from "next/link"
import Leh from '../controller/leh.js'
import Cookies from 'universal-cookie';
import Alerta from '../components/alerta.js'
import Router from 'next/router';
import {useState,useEffect} from "react"

export default function Login(){

  const cookies = new Cookies();

  if(cookies.get('auth_token') == undefined){
    cookies.set('auth_token',Leh.setToken(),{
      maxAge:(3600 * 24),
      sameSite:true,
      path:'/'
    });
  }
  // cookies.set('myCat', 'Pacman', { path: '/' });
  var success = function(msg){
    Router.push('/');
  }

  var erro = function(e){
    cookies.remove('auth_token');
  }

  return (

    <div className="w-full flex flex-row min-h-screen">
      <div className="flex-auto flex flex-col items-end justify-center p-2">
        <h1 className="text-cor_principal-600 text-4xl mb-5">Login</h1>
        <FormDefault API="users/login" onError={erro}  onSuccess={success} className="w-full flex flex-col justify-center items-end">
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
      <div className="flex-auto w-full flex flex-col items-center justify-center max-w-[500px] bg-cor_principal-700">
        <h1 className="text-slate-100 text-7xl font-bold font-[Saudagar]">SEMAS</h1>
          <h2 className="text-2xl  text-slate-100  text-center font-bold mb-[-2px]">Secretaria Municipal de </h2>
            <h3 className="text-2xl text-slate-100 text-center font-bold mb-4">Assistência Social</h3>
            <div className="flex flex-col justify-between items-center p-1 mb-4">
          </div>


      <div className=" px-2 py-1 rounded-r-lg flex  items-center flex-col">
        <PrefeituraLogo/>
         <h1 className="text-slate-100 text-sm-3">Prefeitura Municipal</h1>
          <h2 className="text-slate-100 text-center text-sm-3 ">de Vilhena</h2>
        </div>
       </div>
    </div>
  )
}
