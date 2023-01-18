import {InputText,SelectInput,ButtonDefault} from "../du-objects.js"
import {FaRegCalendarAlt}  from "react-icons/fa";
import Link from 'next/link'
export default function Acompanhamentos(props){
    return (

      <div className="rounded-md p-3 border border-cor_principal-700  flex flex-wrap rounded border p-2 inline gap-1">
        <h1 className="text-black text-2xl font-medium font-mono py-1  w-full text-center">Acompanhamento</h1>
          <div className="">
            <SelectInput  fatherClassName="" withLabel={true} name="acompanhamentos" label="Acompanhamentos" className="rounded flex flex-col items-last justify-center text-cor_principal-700 border p-2 rounded cursor-pointer text-center text-m w-[290px] h-[40px] hover:shadow-md transition" required={false}>
                <option value="">Selecione Uma Opção</option>
              <optgroup label="PSB">
                <option value="PAIF">PAIF</option>
                <option value="SPSB DOMICILIAR">SPSB DOMICILIAR</option>
                <option value="SCFV">SCFV</option>
              </optgroup>
              <optgroup label="PSE-Média">
                <option value="PAEFI">PAEFI</option>
                <option value="SPSAC MEDIDAS SOCIOEDUCATIVAS (LA)">SPSAC MEDIDAS SOCIOEDUCATIVAS (LA)</option>
                <option value="SPSAC MEDIDAS SOCIOEDUCATIVAS (PSC)">SPSAC MEDIDAS SOCIOEDUCATIVAS (PSC)</option>
              </optgroup>
              <optgroup label="PSE-Alta">
                <option value="ACOLHIMENTO INSTITUCIONAL">ACOLHIMENTO INSTITUCIONAL</option>
              </optgroup>
            </SelectInput>
            <InputText fatherClassName="flex-auto" withLabel={true} name="desc" label="Descrição Prévia" className="rounded"/>
            <SelectInput fatherClassName="flex-1 min-w-[230px]" withLabel={true} name="status" label="Status" className="rounded">
              <option value="">Selecione Uma Opção</option>
              <option value="Ativo">Ativo</option>
              <option value="Inativo">Inativo</option>
              <option value="Desligado:Alta">Desligado:Alta</option>
              <option value="Desligado:Encaminhado">Desligado:Encaminhado</option>
            </SelectInput>
            <Link href="/agenda0">
            <h2 className="text-md inline-block rounded  cursor-pointer font-semibold text-cor_principal-900 m-1  hover:shadow hover:border"><FaRegCalendarAlt className="text-3xl m-1 font-13 text-center inline"/>Agendar</h2>
            </Link>
          </div>
          <div className="max-w-[600px] border-cor_principal-900 w-full flex flex-auto gap-10 mx-auto justify-center items-center">
          <textarea  className="border border-cor_principal-700 w-full flex flex-auto gap-7 mx-auto justify-center items-center p-3 m-10 rounded"  placeholder="Relátorio Tecnico" name="relato" required></textarea>
          </div>
          <div className="px-5">

          </div>

          <div className="rounded-full text-center mt-8 w-full">
           <ButtonDefault text="Adicionar ao cadastro"/>
         </div>

      </div>



    )
}
