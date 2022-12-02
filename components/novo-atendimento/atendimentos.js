import {InputText,SelectInput} from "../du-objects.js"

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

    <div className="rounded-md p-1 border border-cor_principal-700  flex flex-wrap rounded sombra-md border p-1 inline gap-1">
      <h1 className="text-black text-2xl font-medium font-mono py-1  w-full text-center ">Atendimentos</h1>
        <InputText fatherClassName="flex-auto" withLabel={true} name="atendimentos_tecnicos" label="Atendimentos Técnicos" className=" flex flex-col items-last justify-center text-cor_principal-700 border p-2 rounded cursor-pointer text-center text-m w-[330px] h-[40px] hover:shadow-md transition" list="procedimentos_list" required={false}/>
          <datalist id="procedimentos_list">{list()}</datalist>
        <SelectInput  fatherClassName="" withLabel={true} name="grupo" label="Grupo" className="flex flex-col items-last justify-center text-cor_principal-700 border p-2 rounded cursor-pointer text-center text-m w-[320px] h-[40px] hover:shadow-md transition" required={false}>
          <option value="">Selecione Uma Opção</option>
          <option value="PSB">PSB </option>
          <option value="PSE-média">PSE-média</option>
          <option value="PSE-alta">PSE-alta</option>
        </SelectInput>
        <SelectInput  fatherClassName="" withLabel={true} name="status" label="Status" className="flex flex-col items-last justify-center text-cor_principal-700 border p-2 rounded cursor-pointer text-center text-m w-[320px] h-[40px] hover:shadow-md transition" required={false}>
          <option value="">Selecione Uma Opção</option>
          <option value="Concedido">Concedido</option>
          <option value="Indefirido">Indefirido</option>
          <option value="Em analise">Em analise</option>
        </SelectInput>
        <InputText fatherClassName="flex-auto" withLabel={true} name="Decricao_atendimento" label="Decrição do atendimento" className="rounded"/>
        <InputText fatherClassName="flex-auto" withLabel={true} name="resp_tecnico" label="Responsável Nivel Técnicos" className="rounded"/>
      </div>

  )
}
