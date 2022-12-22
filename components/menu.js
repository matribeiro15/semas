import {FaUserPlus,FaRegUserCircle,FaChartPie,FaPaste,FaSignInAlt,FaFileInvoiceDollar,FaHome,FaListUl} from 'react-icons/fa';
import Link from 'next/link';
import PrefeituraLogo from '../components/prefeitura-logo.js'
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
    <div className="p-5">
    <div className="flex flex-col justify-between items-center p-1 mb-4">
      <div className="flex gap-[5px] items-end mt-1">
        <PrefeituraLogo/>
        <h1 className="text-cor_principal-700 text-6xl font-bold font-[Saudagar]">SEMAS</h1>
      </div>
      <h1 className="text-cor_principal-600 text-1xl">Secretaria Municipal de Assistência Social</h1>
    </div>
      <div className="menu">
        <div className="header">
          <h3>Menu</h3>
        </div>
        <div className="corpo">
          <ul>
            <Link href="/"><li><FaHome className="inline mr-2"/>Pesquisar usuário</li></Link>
            <Link href="/cadastrar-usuario"><li><FaUserPlus className="inline mr-2"/>Cadastrar usuário</li></Link>
            <Link href="/fila-de-atendimento"><li><FaListUl className="inline mr-2"/>Fila de atendimento</li></Link>
            <Link href="/"><li><FaPaste className="inline mr-2"/> Atendimento técnico</li></Link>
            <Link href="/meu-perfil"><li><FaRegUserCircle className="inline mr-2"/>Meu perfil</li></Link>
            <li><FaSignInAlt className="inline mr-2 tex-cor_principal-600"/>Sair</li>
          </ul>


        </div>
      </div>
      </div>

  );
}
