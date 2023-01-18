import {InputText,SelectInput, ButtonDefault} from "../du-objects.js"
import {FaRegCalendarAlt}  from "react-icons/fa";
import Link from 'next/link'

export default function Encaminhamentos(props){
    return (
            <div className="rounded-md p-3 border border-cor_principal-700  flex flex-wrap rounded border p-2 inline gap-1">
              <h1 className="text-black text-2xl font-medium font-mono py-1  w-full text-center ">Encaminhamentos</h1>
                <div className="">
                  <SelectInput fatherClassName="" withLabel={true} name="local_onde_foi_feito_o_cadastro"  label="Instituição Demandada" className="rounded"required={false} >

                    <option value="">Selecione Uma Opção</option>
                      {
                        props.instituicoesList.map((el,id)=>{
                          return (<option value={el} key={'opt-instituicoes--'+id}>{el}</option>)
                        })
                      }
                  </SelectInput>
                  <InputText fatherClassName="flex-auto" withLabel={true} name="funcionario" label="Funcionario a receber" className="rounded"/>
                  <InputText fatherClassName="flex-auto" withLabel={true} name="desc" label="Descrição Prévia" className="rounded"/>
                  <SelectInput  fatherClassName="" withLabel={true} name="status" label="Status" className="flex flex-col items-last justify-center text-cor_principal-700 border p-2 rounded cursor-pointer text-center text-m w-[320px] h-[40px] hover:shadow-md transition" required={false}>
                    <option value="">Selecione Uma Opção</option>
                    <option value="Encaminhado">Encaminhado</option>
                    <option value="Respondido">Respondido</option>
                  </SelectInput>
                  <div className="px-5">
                  <Link href="/agenda0">
                  <h2 className="text-md inline-block rounded  cursor-pointer font-semibold text-cor_principal-900 m-1  hover:shadow hover:border"><FaRegCalendarAlt className="text-3xl m-1 font-13 text-center inline"/>Agendar</h2>
                  </Link>
                  </div>
                </div>

                <div className="max-w-[600px] border-cor_principal-900 w-full flex flex-auto gap-10 mx-auto justify-center items-center">
                  <textarea  className="border border-cor_principal-700 w-full flex flex-auto gap-7 mx-auto justify-center items-center p-3 m-10 rounded" name="relato"  placeholder="Relátorio Tecnico"   required></textarea>
                </div>



                  <div className="text-center mt-8 w-full">
                  <ButtonDefault text="Encaminhar"/>
                </div>
            </div>

    )
}
