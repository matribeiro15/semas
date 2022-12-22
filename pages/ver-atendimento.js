import {AlternativeForm,InputText,ButtonDefault,SelectInput,Checkbox} from  "../components/du-objects.js"
import HeadLeh from '../components/head.js'
import Menu from '../components/menu.js'
import Link from "next/link"
import Router from "next/router"
import PageDefault from '../components/pageDefault.js'
export default function VerAtendimento(){


return(
<PageDefault  title="Atendimentos do Cadastro | SEMAS" checkUserLogin={true} label="Usuário" className="">
    <div className="flex-auto flex flex-col p-2 border max-w-[1000px] font-size: 50; rounded p-1 m-2 transition rounded-md hover:shadow-lg hover:border-cor_principal">
      <div className="flex gap-[10px]">

        <div className="border flex-auto rounded ">
          <h1 className="mb-2 text-cor_principal-900 text-black text-2xl font-medium " onclick="page_modal('/nis','?ID=121131212313')">Usuário</h1>
        </div>

        <div className="border flex-auto rounded">
          <h1 className="mb-5 text-cor_principal-900 text-black text-2xl font-medium " onclick="page_modal('/nis','?ID=121131212313')">Atendimento</h1>

            <div className="flex-auto rounded gap-[10px] border">
          </div>
        </div>

      </div>
    </div>
</PageDefault>



)
}
