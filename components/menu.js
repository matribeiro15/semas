import {FaUserPlus} from 'react-icons/fa';
import {FcInspection,FcBullish,FcImport,FcBusinessContact} from 'react-icons/fc';
import Link from 'next/link';
export default function Menu(props)
{
  return (
      <div className="menu">
        <div className="header">
          <h3>Menu</h3>
        </div>
        <div className="corpo" >
          <ul>
            <Link href="/cadastrar-usuario"><li><FaUserPlus className="inline mr-2"/> Cadastrar Usuário</li></Link>
            <Link href=""><li><FcInspection className="inline mr-2"/> Atendimentos</li></Link>
            <Link href=""><li><FcBullish className="inline mr-2"/>Estatisticas</li></Link>
            <Link href=""><li><FcBusinessContact className="inline mr-2"/> Meu perfil</li></Link>
            <Link href=""><li><FcImport className="inline mr-2 tex-cor_principal-600"/>Sair</li></Link>
          </ul>
        </div>
      </div>
  );
}
