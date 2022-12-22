import {InputText,SelectInput, ButtonDefault} from "../du-objects.js"

export default function AtendimentosSimplificados(props){
    return (
            <div className="rounded-md p-3 border border-cor_principal-700  flex flex-wrap rounded border p-2 inline gap-1">
              <h1 className="text-black text-2xl font-medium font-mono py-1  w-full text-center ">Atendimento Simplificados</h1>
                <div className="" >
                  <SelectInput  fatherClassName="" withLabel={true} name="atendi-simplificado" label="Atendimento Simplificado" className="flex flex-col items-last justify-center text-cor_principal-700 border p-2 rounded cursor-pointer text-center text-m w-[320px] h-[40px] hover:shadow-md transition" required={false}>
                    <option value="">Selecione Uma Opção</option>
                    <option value="ORIENTAÇÃO SOCIAL">ORIENTAÇÃO SOCIAL</option>
                    <option value="INSCRIÇÃO EM CURSOS">INSCRIÇÃO EM CURSOS</option>
                    <option value="INSCRIÇÃO SCFV">INSCRIÇÃO SCFV</option>
                  </SelectInput>
                  <SelectInput fatherClassName="flex-auto" withLabel={true} name="local_onde_foi_feito_o_cadastro"  label="Instituição Demandada" className="rounded"required={false} >
                      <option value="">Selecione Uma Opção</option>
                        {
                          props.instituicoesList.map((el,id)=>{
                            return (<option value={el} key={'opt-instituicoes--'+id}>{el}</option>)
                          })
                        }
                    </SelectInput>
                    <InputText fatherClassName="flex-auto" withLabel={true} name="desc" label="Descrição do beneficio" className="rounded"/>
                  </div>

                  <div className="max-w-[600px] border-cor_principal-900 w-full flex flex-auto gap-10 mx-auto justify-center items-center">
                    <textarea  className="border border-cor_principal-700 w-full flex flex-auto gap-7 mx-auto justify-center items-center p-3 m-10 rounded"  placeholder="Relátorio Tecnico" name="relato"  required></textarea>
                  </div>



                <div className="text-center mt-8 w-full">
                  <ButtonDefault text="Add novo"/>
                </div>
            </div>




    )
}
