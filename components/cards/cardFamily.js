import {getMyData,checkUserLogin,ucwords,setMask} from '../../controller/utils.js'
import {MdDelete} from 'react-icons/md'
export default function CardFamily(props){
  const Cell = function(p){
    return (
      <div className={"flex flex-col flex-1 px-2 "+p.className}>
        <strong>{p.label}</strong>
        <font>{p.content}</font>
      </div>
    )
  }
  return (
    <div className="rounded-2xl flex flex-wrap bg-cor_principal-900 text-white text-sm mb-1 px-1">
      <Cell label="Nome" className="flex-[2]" content={props.dados.nome_social ? props.dados.nome_social : props.dados.nome}/>
      <Cell label="CPF" content={props.dados.cpf ? setMask('ddd.ddd.ddd-dd',props.dados.cpf) : '-----'} className="border-x"/>
      <Cell label="Data de Nascimento" content={(new Date(props.dados.data_nasc)).toLocaleDateString('pt-BR')} className="border-x"/>
      <Cell label="Parentesco" content={props.dados.parentesco}/>
      <Cell label="Renda Individual" content={props.dados.renda_individual.toLocaleString('pt-BR',{style:"currency",currency:"BRL"})}/>
      <div className="flex items-center pr-2">
        <span className="cursor-pointer hover:text-neutral-200 transition"><MdDelete className="text-2xl"/></span>
      </div>
    </div>
  )
}
