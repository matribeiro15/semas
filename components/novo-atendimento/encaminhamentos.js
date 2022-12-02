import {InputText,SelectInput} from "../du-objects.js"

export default function Encaminhamentos(props){
    return (
            <div className="rounded-md p-3 border border-cor_principal-700  flex flex-wrap rounded border p-2 inline gap-1">
              <h1 className="text-black text-2xl font-medium font-mono py-1  w-full text-center ">Encaminhamentos</h1>
                <SelectInput  fatherClassName="" withLabel={true} name="status" label="Status" className="flex flex-col items-last justify-center text-cor_principal-700 border p-2 rounded cursor-pointer text-center text-m w-[320px] h-[40px] hover:shadow-md transition" required={false}>
                  <option value="">Selecione Uma Opção</option>
                  <option value="Encaminhado">Encaminhado</option>
                  <option value="Respondido">Respondido</option>
                </SelectInput>
                <InputText fatherClassName="flex-auto" withLabel={true} name="resp_tecnico" label="Responsável Nivel Técnicos" className="rounded"/>
                <SelectInput fatherClassName="" withLabel={true} name="local_onde_foi_feito_o_cadastro"  label="Instituições" className="rounded flex flex-col items-last justify-center text-cor_principal-700 border p-2 rounded cursor-pointer text-center text-m w-[180px] h-[40px] hover:shadow-md transition"required={false} >
                  <option value="">Selecione Uma Opção</option>
                    {
                      props.instituicoesList.map((el,id)=>{
                        return (<option value={el} key={'opt-instituicoes--'+id}>{el}</option>)
                      })
                    }
                </SelectInput>
            </div>




    )
}
