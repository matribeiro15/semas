import {setMask} from '../controller/utils.js';
import {useEffect,useState} from 'react';
import FrameClientResult from '../components/FrameClientResult.js'
import {FormDefault,InputText,SelectInput,ButtonDefault,LoaderForm} from  "../components/du-objects.js"
import Link from "next/link"
import Router from 'next/router';
import PageDefault from '../components/pageDefault.js'
export default function Home() {
  const [results,setResults] = useState([]);
  const [nm,setNm] = useState('nome');
  const success = async function(e){
    var dt = await e.json();
    console.log(dt);
    setResults(dt);
  }
  const err = function(e){
    console.log(e);
    nootification("Erro", e.msg,'bad');
  }
  useEffect(()=>{

  },[])

  return (
    <PageDefault title="SEMAS" checkUser={true} label="Pesquisar Usuário" icon="FaSearch">
      <FormDefault API="clients/search" noSendToken={true} noSendHash={true} onSuccess={success} onError={err} className="">
        <div className="flex gap-[18px]">
          <SelectInput fatherClassName="flex-[1]" onChange={(e)=>{setNm(e.target.value)}} className="rounded-md" label="Pesquisar Por" withLabel={true}>
            <option value="nome">Nome</option>
            <option value="rg">RG</option>
            <option value="cpf">CPF</option>
            <option value="nis">NIS</option>
          </SelectInput>
          <InputText fatherClassName="flex-[3]" name={nm} type="search" className="rounded-md" label="Pesquisar" withLabel={true}/>
        </div>
        <div className="flex items-end justify-start mt-4">
          <ButtonDefault text="Buscar"/>
        </div>
      </FormDefault>
      <FrameClientResult results={results}/>
    </PageDefault>
  )
}
