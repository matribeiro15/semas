import HeadLeh from  'next/head'
import Image from 'next/image'
import {checkUserLogin} from '../controller/utils.js';
import {useEffect,useState} from 'react';
import {FormDefault,InputText,ButtonDefault} from  "../components/du-objects.js"
import LogoPrefeitura from '../components/logo-prefeitura.js'
import Link from "next/link"
import { FaSistrix } from "react-icons/fa";
import Router from 'next/router';
import Menu from '../components/menu.js'
import { FaSearch } from "react-icons/fa";
export default function Home() {

  const [user,setUser] = useState(false);
  useEffect(()=>{
      checkUserLogin(setUser);
      <HeadLeh>
      <title>Menu principal | SEMAS</title>
      </HeadLeh>
  },[])


  return (
<div className="rounded-xl p-2 w-full flex">
  <Menu/>
  <div  className="w-full gap-[300px] text-center">
    <h1 className="text-cor_principal-600 font-bold text-6xl fontMaster">SEMAS</h1>
    <h2 className="justify-top  text-cor_principal-600  text-1xl mb-1 fontMaster">Secretaria municipal de assistência social</h2>
  </div>
</div>

  )
}
