import {AlternativeForm,InputText,ButtonDefault,SelectInput,Checkbox} from  "../components/du-objects.js"
import {FaFileSignature,FaFilePdf}  from "react-icons/fa";
import HeadLeh from '../components/head.js'
import Menu from '../components/menu.js'
import Link from "next/link"
import Router from "next/router"
import PageDefault from '../components/pageDefault.js'
export default function VerAtendimento(){


return(
<PageDefault  title="Atendimentos do Cadastro | SEMAS" checkUserLogin={true} label="Ver atendimento" className="max-w-[1000px]">
  <div className="flex-auto flex flex-col  max-w-[1000px] fontMaster: 50; p-1 m-2">
    <div className="flex gap-[10px]">
      <div className="border flex-auto rounded max-w-[300px] bg-white">
      <div className="px-5">
      <Link href="/ver-cadastro/21131212313">
      <h2 className="font-bold p-1 text-xl inline-block rounded  cursor-pointer font-semibold text-red-900 m-1  hover:shadow hover:border" onclick="page_modal('/ver-cadastro','?nis=121131212313')">Usuário</h2>
      </Link>
      </div>
          <div className="text-black flex-auto p-1 mb-1">
              <strong>Nome Responsável</strong>
              <div className="mb-1">Ana Paula</div>
              <strong>CPF</strong>
              <div className="mb-1">243.432.223-32</div>
              <strong>NIS</strong>
              <div className="mb-1">2321232133</div>
              <strong>Bairro</strong>
              <div className="mb-1">Jardim Social</div>
              <strong>Cidade</strong>
              <div className="mb-1">Vilhena</div>
              <strong>Renda individual</strong>
              <div className="mb-1">R$800,00</div>
              <strong>Renda Percapita</strong>
              <div className="mb-1">R$120,00</div>
              </div>
            </div>
      <div className="d-flex flex-wrap py-3 p-2">
        <h1 className="mb-3 text-cor_principal-900 text-black text-2xl font-medium font-mono text-center ">Atendimento</h1>

              <div className="col-5 border-b-2 border-l-2 px-1">
              <strong>Atendimento</strong>
              <div className="mb-2">PAIF</div></div>

              <div className="col-5 border-b-2 border-l-2 px-1">
              <strong>Instituição</strong>
              <div className="mb-2">CRAS</div></div>

              <div className="col-5 border-b-2 border-l-2 px-1">
              <strong>Descrição</strong>
              <div className="mb-2">Usuario solicitando baneficio nutri vida:leite</div></div>


              <div className="col-2 border-b-2 border-l-2 px-1">
              <strong>Responsável técnico</strong>
              <div className="mb-2">Ana lucia</div></div>

              <div className="col-2 border-b-2 border-l-2 px-1">
              <strong>Data de solicitação</strong>
              <div className="mb-2">09/03/2020</div></div>

              <div className="py-2 col-12 text-center bg-cor_principal-700 text-white bold font-13">Status</div>

          </div>
        </div>
            <div className="col-12  py-3">
            <Link href="/adicionar-relatorio/21131212313 col-12 d-flex flex-wrap py-3">
            <h2 className="cursor-pointer  items-center justify-center  hover:text-neutral-200 transition mr-3 items-center  text-cor_principal-800"><FaFileSignature className="text-4xl inline mr-2 flex flex-col"/>Adicionar Relátorio</h2>
            </Link>
            <span className="cursor-pointer hover:text-neutral-200 transition mr-3 text-cor_principal-800"><FaFilePdf className="text-4xl ml-2 flex flex-col"/>PDF</span>
          </div>
            <h1 className="mb-3 text-cor_principal-900 text-3xl font-medium text-center">Relátorios</h1>
            <div className="flex-auto bg-cor_principal-700 font-13 text-white text-center py-2">Nenhum Relátorio até o momento</div>
    </div>
</PageDefault>

)
}
