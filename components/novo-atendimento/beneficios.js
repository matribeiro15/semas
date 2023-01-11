import {InputText,SelectInput,ButtonDefault} from "../du-objects.js"
import {FaRegCalendarAlt}  from "react-icons/fa";
import Link from 'next/link'

export default function Beneficios(props){
    return (

      <div className="rounded  border-col_principal-700  flex flex-wrap sombra-md border border-cor_principal-700 p-1 inline">
        <h1 className="text-black text-2xl font-medium font-mono py-1  w-full text-center">Beneficios</h1>
          <div className="">
            <SelectInput  fatherClassName="" withLabel={true} name="Beneficios" label="Benefícios" className="flex flex-col items-last justify-center text-cor_principal-700 border p-2 rounded cursor-pointer text-center text-m w-[330px] h-[40px] hover:shadow-md transition" required={false}>
              <option value="">Selecione Uma Opção</option>
              <option value="BENEFÍCIO EVENTUAL: AUXÍLIO NATALIDADE">BENEFÍCIO EVENTUAL: AUXÍLIO NATALIDADE</option>
              <option value="BENEFÍCIO EVENTUAL: AUXÍLIO FUNERAL">BENEFÍCIO EVENTUAL: AUXÍLIO FUNERAL</option>
              <option value="BENEFÍCIO EVENTUAL: PASSGAGEM">BENEFÍCIO EVENTUAL: PASSGAGEM</option>
              <option value="MARMITEX">MARMITEX</option>
              <option value="NUTRI VIDA:LEITE">NUTRI VIDA: LEITE</option>
              <option value="MAMÃE CHEGUEI:AUXÍLIO NATALIDADE">MAMÃE CHEGUEI:AUXÍLIO NATALIDADE</option>
            </SelectInput>
            <InputText fatherClassName="flex-auto" withLabel={true} name="desc" label="Descrição Prévia" className="rounded"/>
            <SelectInput fatherClassName="flex-1 " withLabel={true} name="status" label="Status" className="rounded ">
              <option value="">Selecione Uma Opção</option>
              <option value="Em Analise">Em Analise</option>
              <option  value="Concedido">Concedido</option>
              <option value="Indefirido">Indefirido</option>
              <option  value="Encaminhado">Encaminhado</option>
              <option value="Cancelado/Suspenso">Cancelado/Suspenso</option>
            </SelectInput>
            <div className="px-5">
            <Link href="/agenda0">
            <h2 className="text-md inline-block rounded  cursor-pointer font-semibold text-cor_principal-900 m-1  hover:shadow hover:border"><FaRegCalendarAlt className="text-3xl m-2 font-13 text-center inline"/>Agendar</h2>
            </Link>
            </div>

            </div>
            <div className="max-w-[600px] border-cor_principal-900 w-full flex flex-auto gap-10 mx-auto justify-center items-center">
              <textarea  className="border border-cor_principal-700 resize w-full flex flex-auto gap-7 mx-auto justify-center items-center p-3 m-10 rounded"  placeholder="Relátorio Tecnico" name="relato"  required></textarea>
            </div>

          <div className="text-center mt-8 w-full">
           <ButtonDefault text="Adicionar ao cadastro"/>
         </div>
      </div>






    )
}
