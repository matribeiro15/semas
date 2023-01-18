import {InputText,SelectInput,ButtonDefault} from "../du-objects.js"
import {FaRegCalendarAlt}  from "react-icons/fa";
import Link from 'next/link'


export default function Atendimento(props){
  const labelsATD = Object.keys(props.atendimentos);
  const list = function(){
    return labelsATD.map((el,i)=>{
      return (
        <optionGroup label={el} key={'byudgeyf--'+i}>
        {
          props.atendimentos[el].map((x,o)=>{
            return <option label={el} key={'erwgfewfwerfghk7yuh--'+o}>{x}</option>
          })
        }
        </optionGroup>
      )
    });
  }
  return (

    <div className="rounded    flex flex-wrap sombra-md border border-cor_principal-700 p-1 inline">
      <h1 className="text-black text-2xl font-medium font-mono py-1  w-full text-center ">Atendimentos</h1>
       <div className="">
        <InputText fatherClassName="flex-1" withLabel={true} name="atendimentos_tecnicos" label="Atendimentos Técnicos" className=" flex flex-col items-last justify-center text-cor_principal-700 border p-2 rounded cursor-pointer text-center text-m w-[330px] h-[40px] hover:shadow-md transition" list="procedimentos_list" required={false}/>
          <datalist id="procedimentos_list">{list()}</datalist>
        <InputText fatherClassName="flex-auto" withLabel={true} name="desc" label="Descrição Prévia" className="rounded"/>
        <SelectInput fatherClassName="flex-1" withLabel={true} name="status" label="Status" className="rounded">
          <option value="">Selecione Uma Opção</option>
          <option value="Concedido">Concedido</option>
          <option value="indefirido">indefirido</option>
          <option value="Em Analise">Em Analise</option>
       </SelectInput>
       <div className="px-5">
       <Link href="/agenda0">
       <h2 className="text-md inline-block rounded  cursor-pointer font-semibold text-cor_principal-900 m-1  hover:shadow hover:border"><FaRegCalendarAlt className="text-3xl m-1 font-13 text-center inline"/>Agendar</h2>
       </Link>

       </div>
       </div>

        <div className="max-w-[600px] border-cor_principal-900 w-full flex flex-auto gap-7 mx-auto justify-center items-center">
          <textarea  className="border border-cor_principal-700 w-full flex flex-auto gap-7 mx-auto justify-center items-center p-3 m-10 rounded resize"  placeholder="Relátorio Tecnico" name="relato"  required></textarea>
        </div>
          <div className="text-center mt-8 w-full ">
            <ButtonDefault text="Adicionar ao cadastro"/>
          </div>
        </div>
  )
}
