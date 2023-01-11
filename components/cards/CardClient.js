import {getMyData,checkUserLogin,ucwords,setMask} from '../../controller/utils.js'
import Leh from '../../controller/leh.js'
import Link from 'next/link';
import * as icons from 'react-icons/fa'

export default function CardClient(props){

  const LinkItem = function(props_c){
    if(props_c.icon){
      var Ic = icons[props_c.icon];
    }else{
      var Ic = ()=>{ return <></>}
    }
    const content = (
      <span className="text-lg flex items-center gap-[7px] bg-cor_principal-800 px-3 border border-transparent rounded-full cursor-pointer hover:bg-cor_principal-600 transition duration-300 hover:border-white">
        <Ic className=""/>
        <font>{props_c.text}</font>
      </span>
    )
    if(props_c.onClick){
      return (
        <div onClick={props_c.onClick}>
          {content}
        </div>
      );
    }
    return (
      <Link href={props_c.link}>
        {content}
      </Link>
    );

  }
  const addFila = async function(){
    var resp = await Leh.post('/api/add-fila',{
      hash:props.client.hash
    });
    if(resp.status == 200){
      notification("Sucesso!","Cliente Adicionado à Fila Com Sucesso",'good');
    }else if(resp.status !== 500){
      resp = await resp.json();
      notification("Erro!",resp.msg,'bad');
    }else{
      notification("Erro!","Erro ao tentar adicionar à Fila, tente novamente mais tarde.",'bad');
    }
  }

  return (
    <div className="flex-col flex bg-cor_principal-700 text-white text-md rounded-md mb-2 p-2">
    <div className="flex">
      <div className="flex-[5] border border-cor_principal-500 rounded px-2">
        <strong>Nome</strong>
        <div>{props.client.nome}</div>
        </div>
        <div className="flex-1 w-64 items-center border rounded px-2">
        <strong>Status</strong>
        <div>{props.client.status}</div>
      </div>
    </div>

      <div className="flex-row flex">
        <div className="flex-col flex flex-[1] pl-2">
          <strong>CPF</strong>
          <div>{setMask('ddd.ddd.ddd-dd',props.client.cpf)}</div>
        </div>
        <div className="flex-col flex flex-[1]  pl-2 border-l border-cor_principal-500">
          <strong>Data de Nascimento</strong>
          <div>{(new Date(props.client.data_nasc)).toLocaleDateString('pt-BR')}</div>
        </div>
        <div className="flex-col flex flex-[1]  pl-2 border-l border-cor_principal-500">
          <strong>RG</strong>
          <div>{props.client.rg}</div>
        </div>
        <div className="flex-col flex flex-[1]  pl-2 border-l border-cor_principal-500">
          <strong>NIS</strong>
          <div>{props.client.nis}</div>
        </div>
      </div>
      <div className="flex gap-[12px] mt-2">
        <LinkItem link={'/ver-cadastro/'+props.client.nis} text="Ver Cadastro" icon="FaRegEye"/>
        <LinkItem link={'/editar-usuario?client='+props.client.hash} text="Editar Cadastro" icon="FaUserEdit"/>
        <LinkItem link={'/novo-atendimento?client='+props.client.hash} text="Novo Atendimento" icon="FaFileImport"/>
        <LinkItem link={'/ver-atendimento?client='+props.client.nis} text="Ver Atedimentos" icon="FaFileSignature"/>
        <LinkItem onClick={addFila} text="Adicionar à Fila" icon="FaPlus"/>
      </div>
  </div>
  );
}
