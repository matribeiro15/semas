import {FaUserPlus,FaRegUserCircle,FaChartPie,FaPaste,FaSignInAlt,FaFileImport,FaFileInvoiceDollar} from 'react-icons/fa';
import Link from 'next/link';
export default function Menu(props)
{
  return (
    <div className="p-5 ">
      <div className="menu">
        <div className="header">
          <h3>Menu</h3>
        </div>
        <div className="corpo">
          <ul>
            <Link href="/novo-atendimento"><li><FaFileImport className="inline mr-2"/>Novo atendimento </li></Link>
            <Link href="/cadastrar-usuario"><li><FaUserPlus className="inline mr-2"/> Cadastrar Usuário</li></Link>
            <Link href=""><li><FaPaste className="inline mr-2"/> Atendimento técnico</li></Link>
            <Link href="/meu-perfil"><li><FaRegUserCircle className="inline mr-2"/>Meu perfil</li></Link>
            <Link href=""><li><FaSignInAlt className="inline mr-2 tex-cor_principal-600"/>Sair</li></Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
