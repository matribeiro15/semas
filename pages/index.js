import Head from 'next/head'
import Image from 'next/image'
import {checkUserLogin} from '../controller/utils.js';
import {useEffect,useState} from 'react';

export default function Home() {
  
  const [user,setUser] = useState(false);
  useEffect(()=>{
      checkUserLogin(setUser);
  },[])



  return (
    <>
      {
        user ? 'Logado como '+user.email : 'Deslogado'
      }
    </>
  )
}
