import {AlternativeForm,InputText,ButtonDefault,SelectInput,Checkbox} from  "../components/du-objects.js"
import {bairros} from '../bairros.js'
import HeadLeh from '../components/head.js'
import Menu from '../components/menu.js'
import Link from "next/link"
import Router from "next/router"
import {FaUserPlus} from 'react-icons/fa';
export default function Ficha(){
  var success = function(e){
    notification('Sucesso!','Usuárioo cadastrado com sucesso!','good');
    Router.push('/nucleo-familiar/'+e.data.hash)
  }
  var error = async function(e,a){
    notification('Erro!',e.response.data.msg,'bad');
  }
  return (
    <div className="w-full flex flex-wrap min-h-screen p-2">
    <HeadLeh>
      <title>Cadastrar Usuário | SEMAS</title>
    </HeadLeh>

        <Menu/>

      <div className="flex-auto flex flex-col items-center justify-center p-3">
          <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-cor_principal-600 to-violet-500  font-bold text-4xl mb-5 fontMaster"><FaUserPlus className="inline align-bottom text-cor_principal-800 w-col mr-2"/>Cadastrar Usuário</h1>
          <h1 className="text-black text-2xl font-medium font-mono  InputText-cursive  justify-center  py-3 ">Documentação do Responsável</h1>
           <AlternativeForm onSuccess={success} onError={error} action="/api/clients/create" id="formCad" resetAfterSend={true} className="max-w-[800px] w-full flex flex-wrap gap-2 mx-auto justify-center items-stretch">
                <InputText fatherClassName="flex-auto" withLabel={true} name="nome" label="Nome" className="rounded-xl"/>
                <InputText fatherClassName="flex-auto" withLabel={true} name="nome_social" label="Nome Social" className="rounded-xl" required={false}/>
                <InputText fatherClassName="flex-auto" withLabel={true} name="rg" label="RG" className="rounded-xl"/>
                <InputText fatherClassName="flex-auto" withLabel={true} name="orgao_expedidor" label="Orgão Expeditor" className="rounded-xl" />
                <InputText fatherClassName="flex-auto" withLabel={true} name="expedicao" type="date" label="Expediação" className="rounded-xl"/>
                <InputText fatherClassName="flex-auto" withLabel={true} name="cpf" mask="ddd.ddd.ddd-dd" label="CPF" className="rounded-xl"/>
                <InputText fatherClassName="flex-auto" withLabel={true} name="nis" label="NIS" className=" rounded-xl "/>
                <InputText fatherClassName="flex-auto" withLabel={true} name="indentificacao_estrangeira" label="Indentificação estrangeira" className=" rounded-xl"  required={false}/>
                <InputText fatherClassName="flex-auto" withLabel={true} name="telefone_celular" mask="(dd)ddddd-dddd" label="Telefone/Celular" className=" rounded-xl"/>
                <InputText fatherClassName="flex-auto" withLabel={true} name="telefone_celular_alternativo" mask="(dd)ddddd-dddd" label="Telefone/celular Alternativo" className=" rounded-xl" required={false}/>
          <h1 className="text-black text-2xl font-medium font-mono  text-condensed w-full text-center  py-3">Dados Pessoais</h1>
          <InputText fatherClassName="flex-auto" withLabel={true} name="natural_de" label="Natural de:" className="rounded-xl"/>
                 <SelectInput fatherClassName="flex-auto" withLabel={true} name="estado_civil" label="Estado civil" className="rounded-xl">
                    <option value="">Selecione Uma Opção</option>
                    <option value="Solteiro">Solteiro(a)</option>
                    <option value="Casado">Casado(a)</option>
                    <option value="Divorciado">Divorciado(a)</option>
                    <option value="Viúvo">Viúvo(a)</option>
                    <option value="União estavel">União estavel</option>
                    <option value="Separado">Separado/Divorciado(a)</option>
                 </SelectInput>
                <InputText fatherClassName="flex-auto" withLabel={true} name="nacionalidade"  label="Nacionalidade" className="rounded-xl"/>
                <InputText fatherClassName="flex-auto" withLabel={true} name="data_nasc" type="date" label="Data de nascimento" className="rounded-xl "/>
                 <SelectInput fatherClassName="flex-auto" withLabel={true} name="escolaridade" label="Escolaridade" className="rounded-xl ">
                    <option value="">Selecione Uma Opção</option>
                    <option value="Ensino médio Completo">Ensino médio Completo</option>
                    <option value="Ensino médio incompleto">Ensino médio incompleto</option>
                    <option value="Não alfabetizado">Não alfabetizado</option>
                    <option value="Fundamental completo">Fundamental completo</option>
                    <option value="Ensino Superior incompleto">Ensino Superior incompleto</option>
                    <option value="Ensino Superior completo">Ensino Superior completo</option>
                 </SelectInput>
                 <SelectInput fatherClassName="flex-auto" withLabel={true} name="sexo" label="Sexo" className="rounded-xl" >
                    <option value="">Selecione Uma Opção</option>
                    <option value="Feminino">Feminino</option>
                    <option value="Masculino">Masculino</option>
                 </SelectInput>
                <InputText fatherClassName="flex-auto" withLabel={true} name="profissao_ocupacao" label="Profissão/Ocupação" className="rounded-xl"/>
                <InputText fatherClassName="flex-auto" withLabel={true} name="renda_individual" mask="R$dddd,dd"label="Renda Individual" className="rounded-xl" />
            <h1 className="text-black text-2xl font-medium font-mono  w-full text-center  py-3 ">Endereço</h1>
                <InputText fatherClassName="flex-auto" withLabel={true} name="logradouro" label="Logradouro " className="rounded-xl"/>
                <SelectInput fatherClassName="flex-auto" withLabel={true} name="bairro_setor" label="Bairro/Setor" className="rounded-xl" >
                  <option value="">Selecione Uma Opção</option>
                  {
                    bairros.map((el,id)=>{
                      return (<option value={el} key={'opt-bairros--'+id}>{el}</option>)
                    })
                  }
                </SelectInput>
                <InputText fatherClassName="flex-auto" withLabel={true} name="cep" mask="ddddd-ddd" label="CEP" className="rounded-xl"/>
                <InputText fatherClassName="flex-auto" withLabel={true} name="numero"  label="Número" className="rounded-xl"/>
                 <SelectInput fatherClassName="flex-auto" withLabel={true} name="area" mb-1 label="Área"  className="rounded-xl mb-1 ">
                    <option value="">Selecione Uma Opção</option>
                    <option value="Rural">Rural</option>
                    <option value="Urbana">Urbana</option>
                    <option value="Distrito">Distrito</option>
                 </SelectInput>
                <InputText fatherClassName="flex-auto" withLabel={true} name="complemento" label="Complemento" className="rounded-xl"  required={false}/>
             <h1 className="text-black text-2xl font-medium font-mono  w-full text-center  py-3">Tipo de Habitação</h1>
                 <SelectInput fatherClassName="flex-auto" withLabel={true} name="tipo_de_imovel" label="Tipo de Imóvel" className="rounded-xl">
                    <option value="">Selecione Uma Opção</option>
                    <option value="Alugado">Alugado</option>
                    <option value="Próprio">Próprio</option>
                    <option value="Cedido">Cedido</option>
                    <option value="Não se Aplica">Não se aplica</option>
                  </SelectInput>
                <InputText fatherClassName="flex-2" withLabel={true} name="numero_de_comodos" mask="ddd" label="Número de comodos" className="rounded-xl"/>
                <InputText  fatherClassName="flex-2" withLabel={true} name="tempo_de_moradia"   label="Tempo de moradia" className="rounded-xl"/>
                  <SelectInput fatherClassName="flex-auto" withLabel={true} name="edificada_em" label="Edificada em:" className="rounded-xl" >
                    <option value="">Selecione Uma Opção</option>
                    <option value="Madeira">Madeira</option>
                    <option value="Alvenaria">Alvenaria</option>
                    <option value="Mista">Mista</option>
                    <option value="Não se Aplica">Não se aplica</option>
                  </SelectInput>
                  <SelectInput fatherClassName="flex-auto" withLabel={true} name="estado_de_conservacao" label="Estado de Conservação" className="rounded-xl " >
                    <option value="">Selecione Uma Opção</option>
                    <option value="Bom">Bom </option>
                    <option value="Péssimo">Péssimo</option>
                    <option value="Excelente">Excelente</option>
                    <option value="Médio">Médio</option>
                    <option value="Ruim">Ruim</option>
                    <option value="Não se Aplica">Não se aplica</option>
                  </SelectInput>

                 <div className="rounded-xl border p-2 inline ">
                   <h2 className="font-bold text-sm inline  text-cor_principal-700 mb-3">Saneamento Básico</h2>
                    <div className="flex gap-[8px] justify-center text-center" required={false}>
                       <Checkbox label="Distribuição de água potável" value="Distribuição de água potável" name="saneamento_basico" required={false}/>
                       <Checkbox label="Coleta e Tratamento de Esgoto" value="Coleta e Tratamento de Esgoto" name="saneamento_basico" required={false}/>
                       <Checkbox label="Coleta de Lixo" value="Coleta de Lixo " name="saneamento_basico" required={false}/>
                       <Checkbox label="Drenagem Urbana" value="Drenagem Urbana" name="saneamento_basico" required={false}/>
                   </div>
                 </div>


           <div className="text-center mt-8 w-full">
            <ButtonDefault text="Proximo"/>
          </div>
        </AlternativeForm>
      </div>
    </div>
  )
}
