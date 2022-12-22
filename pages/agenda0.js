import {AlternativeForm,InputText,ButtonDefault,SelectInput,Checkbox} from  "../components/du-objects.js"
import HeadLeh from '../components/head.js'
import Menu from '../components/menu.js'
import Link from "next/link"
import Router from "next/router"
import PageDefault from '../components/pageDefault.js'
export default function Agenda(){







return(
  <PageDefault  title="Agenda| SEMAS" checkUserLogin={true} label="Agendar Visita" className="border max-w-[400px]">
      <div className="flex-auto flex flex-col items-center justify-last p-2 border max-w-[400px] rounded p-5 m-5 transition rounded-md hover:shadow-lg hover:border-cor_principal">
       <div className=" flex-auto ">
           <InputText fatherClassName="flex-col" withLabel={true} name="tarefa" label="Tarefa" className="rounded"/>
           <InputText fatherClassName="flex-col" withLabel={true} name="data" type="date" datalist label="Data" className="rounded"/>
           <InputText fatherClassName="flex-col" withLabel={true} name="hora" type="hora" datalist label="Hora" className="rounded"/>
           <SelectInput fatherClassName="flex-col" withLabel={true} name="visualização" label="Visualização" className="rounded" >
            <option value="">Selecione Uma Opção</option>
            <option value="Público">Público</option>
            <option value="Privado">Privado</option>
           </SelectInput>
           <div className=" border-cor_principal-900 ">
             <textarea className="border border-cor_principal-700  p-3 m-6 rounded"  placeholder="Observação" name="obs" required></textarea>
           </div>



           <div className="text-center mt-1 w-full">
            <ButtonDefault text="Agendar"/>
           </div>
         </div>
      </div>


</PageDefault>



)
}
