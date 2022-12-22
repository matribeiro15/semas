import {AlternativeForm,InputText,ButtonDefault,SelectInput,Checkbox,LoaderForm,FormDefault} from  "../components/du-objects.js"
import HeadLeh from '../components/head.js'
import FrameClientResult from '../components/FrameClientResult.js'
import Menu from '../components/menu.js'
import Link from "next/link"
import Router from "next/router"
import PageDefault from '../components/pageDefault.js'
  export default function FiltroBuca() {


    return (
      <PageDefault title="Buscar dados| SEMAS"   label="Buscar dados" icon="FaSearch">
        <div className="flex gap-[5px]">
        <SelectInput fatherClassName="flex-[1]" className="rounded"  label="Pesquisar Por" withLabel={true}>
          <opition value=""> Selecione uma opção</opition>
          <option value="Instituição">Instituição</option>
          <option value="Tipo de Atendimento">Tipo de Atendimento</option>
          <option value="Técnico">Técnico</option>
        </SelectInput>
        <InputText fatherClassName="flex-[2]"  type="search" className="rounded" label="Pesquisar" withLabel={true}/>
        <SelectInput fatherClassName="flex-[1]" className="rounded"  label="Status" withLabel={true}>
          <opition value=""> Selecione uma opção</opition>
          <option value="Todos">Todos</option>
          <option value="Indefirido">Indefirido</option>
          <option value="Concedido">Concedido</option>
          <option value="Em analise">Em analise</option>
          <option value="Encaminhado">Encaminhado</option>
          <option value="Respondido">Respondido</option>
          <option value="Ativo">Ativo</option>
          <option value="Inativo">Inativo</option>
          <option value="Desligado:Alta">Desligado:Alta</option>
          <option value="Desligado:Encaminhado">Desligado:Encaminhado</option>

        </SelectInput>

        </div>
          <div className="flex m-3  gap-[20px] ">
          <ButtonDefault text="Buscar"/>
          <InputText fatherClassName="flex-1"  type="search" className="rounded " label="Total" withLabel={true}/>
        </div>
      </PageDefault>
    )
  }
