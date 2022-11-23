import {FaUserPlus,FaRegUserCircle,FaChartPie,FaPaste,FaSignInAlt,FaFileImport,FaFileInvoiceDollar,FaHome} from 'react-icons/fa';
import Link from 'next/link';
export default function Menu(props)
{

  if(props.loader){
    return (
      <div className="p-5">
        <div className="menu loader">
          <div className="header">
            <h3>&nbsp;</h3>
          </div>
          <div className="corpo">
            <ul>
              <li>&nbsp;</li>
              <li>&nbsp;</li>
              <li>&nbsp;</li>
              <li>&nbsp;</li>
              <li>&nbsp;</li>
              <li>&nbsp;</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="p-5 ">
      <div className="menu">
        <div className="header">
          <h3>Menu</h3>
        </div>
        <div className="corpo">
          <ul>
            <Link href="/"><li><FaHome className="inline mr-2"/>Inicio</li></Link>
            <Link href="/novo-atendimento"><li><FaFileImport className="inline mr-2"/>Novo atendimento </li></Link>
            <Link href="/cadastrar-usuario"><li><FaUserPlus className="inline mr-2"/> Cadastrar Usuário</li></Link>
            <Link href="/"><li><FaPaste className="inline mr-2"/> Atendimento técnico</li></Link>
            <Link href="/meu-perfil"><li><FaRegUserCircle className="inline mr-2"/>Meu perfil</li></Link>
            <li><FaSignInAlt className="inline mr-2 tex-cor_principal-600"/>Sair</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col justify-between items-center ">
        <h1 className="text-cor_principal-500 text-6xl font-bold ">SEMAS</h1>
        <h1 className="text-cor_principal-400 text-base">Secretaria Municipal de Assistência Social</h1>
      </div>
    </div>
  );
}
