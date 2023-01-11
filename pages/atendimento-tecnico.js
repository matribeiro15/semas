import {AlternativeForm,InputText,ButtonDefault,SelectInput,Checkbox} from  "../components/du-objects.js"
import {FaRegAddressBook,FaRegAddressCard,FaCalendarAlt,FaFileExcel}  from "react-icons/fa";
import HeadLeh from '../components/head.js'
import Menu from '../components/menu.js'
import Link from "next/link"
import Router from "next/router"
import PageDefault from '../components/pageDefault.js'
export default function Atendimentotécnico(){
return(
<PageDefault  title="Atendimento Técnico | SEMAS" checkUserLogin={true} label="Atendimento técnico " className="max-w-[1100px]">
  <div className="flex-row max-w-[1000px]">
    <div className="">
      <div className="border border-cor_principal-800 rounded m-2 p-1 px-1">
        <botton className="font-bold p-1 text-xl inline-block rounded  cursor-pointer font-semibold text-cyan-900 m-1  hover:shadow hover:border"><FaCalendarAlt className="text-3xl inline mr-1 flex-1"/>Meus agendamentos</botton>
        <botton className="font-bold p-1 text-xl inline-block rounded  cursor-pointer font-semibold text-cyan-900 m-1  hover:shadow hover:border"><FaRegAddressCard className="text-3xl inline mr-1 flex-auto"/>Meus Acompanhamentos</botton>
        <botton className="font-bold p-1 text-xl inline-block rounded  cursor-pointer font-semibold text-cyan-900 m-1  hover:shadow hover:border"><FaRegAddressCard className="text-3xl inline mr-1 flex-auto"/>Encaminhamentos</botton>
        <botton className="font-bold p-1 text-xl inline-block rounded   cursor-pointer font-semibold text-cyan-900 m-1   hover:shadow hover:border"><FaRegAddressCard className="text-3xl inline mr-1 flex-auto"/>Todos os meus usuarios</botton>
        <botton className="font-bold p-1 text-xl inline-block rounded  cursor-pointer font-semibold text-cyan-900 m-1  hover:shadow hover:border"><FaFileExcel className="text-3xl inline mr-1 flex-auto"/>Cadastros Vencidos</botton>
      </div>
    </div>
  </div>
</PageDefault>

)
}
