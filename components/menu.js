import {FaUserPlus} from 'react-icons/fa';
import {FcInspection} from 'react-icons/fc';
import {FcBullish} from 'react-icons/fc';
import {FcImport} from 'react-icons/fc';
import {FcBusinessContact} from 'react-icons/fc';
export default function Menu(props)



{
  return (
  <div className="menu  ">
    <div className="bg-origin-border ml-5  scale-100 skew-y-5 skew-y-15">
          <div className="header">
          <h3>Painel</h3>
          </div>
          <div className="corpo" >
               <ul>
               <li><FaUserPlus className="inline mr-2"/> Cadastrar Usuário</li>
               <li><FcInspection className="inline mr-2"/> Atendimentos</li>
               <li><FcBullish className="inline mr-2"/>Estasticas</li>
               <li><FcBusinessContact className="inline mr-2"/> Meu perfil</li>
               <li><FcImport className="inline mr-2 tex-cor_principal-600"/>Sair</li>
               </ul>
         </div>
      </div>
  </div>
  );
}
