import {FormDefault,InputText,ButtonDefault,SelectInput} from  "../components/du-objects.js"
import Router,{useRouter} from 'next/router';
import {useEffect,useState} from 'react';
import Leh from '../controller/leh.js'
import Menu from '../components/menu.js'
import HeadLeh from '../components/head.js'
import PageDefault from '../components/pageDefault.js'
export default function VerAtendimentos(){

  const Cell = function(props){
    return (<div className="text-1xl  text-cor_principal-900 flex-1 flex flex-col px-2 mb-2 from-cor_principal-900  fontMaster"><strong className="text-sm">{props.label}</strong><font>{props.text}</font></div>)
  }

  const user = {
  atendimento_simplificado:"Inscrição SCFV",
  atendimento_tecnico:"INCLUSÃO: SPSB DOMICILIAR",
  beneficios:"Nutri-vida:Leite",
  acompanhamento:"Acolhimento institucional",
  onde_foi_feito_o_cadastro:"SEMAS",
  descricao:"Precisa de terapia",
  responsavel_medio:"Luciana",
  data_solicitacao:"08/07/2020",
  status:"Em analise",
  }

return(

<PageDefault title="Ver atendimentos| SEMAS"  label="Atendimentos">
   <div className="rounded border p-2  overscroll-none inline">
     <h1 className="text-black text-2xl font-medium font-mono  InputText-cursive  flex-auto flex flex-col items-center justify-center p-3  py-5">Atendimento solicitado</h1>
        <div className="max-w-[900px]  bg-white border w-full flex flex gap-2 mx-auto items-stretch">
          <Cell label="Atendimento Simplificado" text={user.atendimento_simplificado}/>
          <Cell label="Atendimentos Técnicos" text={user.atendimento_tecnico}/>
          <Cell label="Beneficios" text={user.beneficios}/>
          <Cell label="Acompanhamentos" text={user.acompanhamento}/>
          <Cell label="Onde foi feito o cadastro?" text={user.onde_foi_feito_o_cadastro}/>
        </div>

    <h1 className="text-black text-2xl font-medium font-mono  InputText-cursive  flex-auto flex flex-col items-center justify-center p-3  py-5"></h1>
      <div className="max-w-[900px]  bg-white border w-full flex flex gap-2 mx-auto items-stretch">
       <Cell label="Descrição" text={user.descricao}/>
       <Cell label="Responsvel nivel médio " text={user.responsavel_medio}/>
       <Cell label="Data de solicitação " text={(new Date(user.data_solicitacao)).toLocaleDateString("pt-BR")}/>
       <Cell label="Status" text={user.status}/>
     </div>
  </div>






</PageDefault>

)
}
