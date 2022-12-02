import {AlternativeForm,InputText,ButtonDefault,SelectInput,Checkbox} from  "../components/du-objects.js"
import {bairros} from '../bairros.js'
import HeadLeh from '../components/head.js'
import Menu from '../components/menu.js'
import Link from "next/link"
import Router from "next/router"
import SelectMap from '../components/selectMap.js'
import {FaUserPlus} from 'react-icons/fa';
import PageDefault from '../components/pageDefault.js'
export default function Ficha(){
  var success = function(e){
    notification('Sucesso!','Usuário cadastrado com sucesso!','good');
    Router.push('/nucleo-familiar/'+e.data.hash)
  }
  var error = async function(e,a){
    notification('Erro!',e.response.data.msg,'bad');
  }
  return (
      <PageDefault checkUser={true} title="Cadastrar Usuario| SEMAS" label="Cadastrar Usuario" icon="FaUserPlus">
        <div className="flex-auto flex flex-col items-center justify-center p-3">
          <h1 className="text-black text-2xl font-medium font-mono  InputText-cursive  justify-center  py-3 ">Documentação do Responsável</h1>
           <AlternativeForm onSuccess={success} onError={error} action="/api/clients/create" id="formCad" resetAfterSend={true} className="max-w-[800px] w-full flex flex-wrap gap-1 mx-auto justify-center items-stretch">
                <InputText fatherClassName="flex-auto" withLabel={true} name="nome" label="Nome" className="rounded"/>
                <InputText fatherClassName="flex-auto" withLabel={true} name="nome_social" label="Nome Social" className="rounded" required={false}/>
                <InputText fatherClassName="flex-auto" withLabel={true} name="rg" label="RG" className="rounded"/>
                <InputText fatherClassName="flex-auto" withLabel={true} name="orgao_expedidor" label="Orgão Expeditor" className="rounded" />
                <InputText fatherClassName="flex-auto" withLabel={true} name="expedicao" type="date" label="Expediação" className="rounded"/>
                <InputText fatherClassName="flex-auto" withLabel={true} name="cpf" mask="ddd.ddd.ddd-dd" label="CPF" className="rounded"/>
                <InputText fatherClassName="flex-auto" withLabel={true} name="nis" label="NIS" className=" rounded "/>
                <InputText fatherClassName="flex-auto" withLabel={true} name="indentificacao_estrangeira" label="Indentificação estrangeira" className=" rounded"  required={false}/>
                <InputText fatherClassName="flex-auto" withLabel={true} name="telefone_celular" mask="(dd)ddddd-dddd" label="Telefone/Celular" className=" rounded"/>
                <InputText fatherClassName="flex-auto" withLabel={true} name="telefone_celular_alternativo" mask="(dd)ddddd-dddd" label="Telefone/celular Alternativo" className=" rounded" required={false}/>
            <h1 className="text-black text-2xl font-medium font-mono  text-condensed w-full text-center  py-3">Dados Pessoais</h1>
                <SelectMap name="natural_de" label="Local de Nascimento"/>

               <SelectInput fatherClassName="flex-auto" withLabel={true} name="estado_civil" label="Estado civil" className="rounded">
                    <option value="">Selecione Uma Opção</option>
                    <option value="Solteiro">Solteiro(a)</option>
                    <option value="Casado">Casado(a)</option>
                    <option value="Divorciado">Divorciado(a)</option>
                    <option value="Viúvo">Viúvo(a)</option>
                    <option value="União estavel">União estavel</option>
                    <option value="Separado">Separado/Divorciado(a)</option>
                 </SelectInput>
                <InputText fatherClassName="" withLabel={true} name="nacionalidade"  label="Nacionalidade" className="rounded" list="paises_input"/>
                  <datalist id="paises_input">
                    <option value="Brasileiro">Brasileiro</option>
                  </datalist>
                <InputText fatherClassName="flex-auto" withLabel={true} name="data_nasc" type="date" label="Data de nascimento" className="rounded "/>
                 <SelectInput fatherClassName="flex-auto" withLabel={true} name="escolaridade" label="Escolaridade" className="rounded ">
                    <option value="">Selecione Uma Opção</option>
                    <option value="Não alfabetizado">Não alfabetizado</option>
                    <option value="Fundamental incompleto">Fundamental incompleto</option>
                    <option value="Fundamental completo">Fundamental completo</option>
                    <option value="Ensino médio completo">Ensino médio completo</option>
                    <option value="Ensino médio incompleto">Ensino médio incompleto</option>
                    <option value="Ensino Superior incompleto">Ensino Superior incompleto</option>
                    <option value="Ensino Superior completo">Ensino Superior completo</option>
                 </SelectInput>
                 <SelectInput fatherClassName="flex-auto" withLabel={true} name="sexo" label="Sexo" className="rounded" >
                    <option value="">Selecione Uma Opção</option>
                    <option value="Feminino">Feminino</option>
                    <option value="Masculino">Masculino</option>
                 </SelectInput>
                <InputText fatherClassName="flex-auto" withLabel={true} name="profissao_ocupacao" label="Profissão/Ocupação" className="rounded"/>
                <InputText fatherClassName="flex-auto" withLabel={true} name="renda_individual" typeData="Float" type="number" step="0.01" min="0" onBlur={(e)=>{ e.target.value = parseFloat(e.target.value).toFixed(2); }} label="Renda Individual R$" className="rounded"/>
            <h1 className="text-black text-2xl font-medium font-mono  w-full text-center  py-3 ">Endereço</h1>
                <InputText fatherClassName="flex-auto" withLabel={true} name="logradouro" label="Logradouro " className="rounded"/>
                <SelectInput fatherClassName="flex-auto" withLabel={true} name="bairro_setor" label="Bairro/Setor" className="rounded" >
                  <option value="">Selecione Uma Opção</option>
                  {
                    bairros.map((el,id)=>{
                      return (<option value={el} key={'opt-bairros--'+id}>{el}</option>)
                    })
                  }
                </SelectInput>
                <InputText fatherClassName="flex-auto" withLabel={true} name="cep" mask="ddddd-ddd" label="CEP" className="rounded"/>
                <InputText fatherClassName="flex-auto" withLabel={true} name="numero"  label="Número" className="rounded"/>
                 <SelectInput fatherClassName="flex-auto" withLabel={true} name="area" mb-1 label="Área"  className="rounded mb-1 ">
                    <option value="">Selecione Uma Opção</option>
                    <option value="Rural">Rural</option>
                    <option value="Urbana">Urbana</option>
                    <option value="Distrito">Distrito</option>
                 </SelectInput>
                <InputText fatherClassName="flex-auto" withLabel={true} name="complemento" label="Complemento" className="rounded"  required={false}/>
             <h1 className="text-black text-2xl font-medium font-mono  w-full text-center  py-3">Tipo de Habitação</h1>
                 <SelectInput fatherClassName="flex-auto" withLabel={true} name="tipo_de_imovel" label="Tipo de Imóvel" className="rounded">
                    <option value="">Selecione Uma Opção</option>
                    <option value="Alugado">Alugado</option>
                    <option value="Próprio">Próprio</option>
                    <option value="Cedido">Cedido</option>
                    <option value="Não se Aplica">Não se aplica</option>
                  </SelectInput>
                <InputText fatherClassName="flex-2" withLabel={true} name="numero_de_comodos" mask="ddd" label="Número de comodos" className="rounded" required={false}/>
                  <SelectInput fatherClassName="flex-auto" withLabel={true} name="tempo_de_moradia"   label="Tempo de moradia" className="rounded">
                  <option value="">Selecione Uma Opção</option>
                  <option value="Menos de 1 mês">Menos de 1 mês </option>
                  <option value="Mais de 1 mês até 6 meses">Mais de 1 mês até 6 meses </option>
                  <option value="Mais de 6 meses até 1 ano">Mais de 6 meses até 1 ano</option>
                  <option value="1 ano até 3 anos">1 ano até 3 anos</option>
                  <option value="3 anos até 10 anos">3 anos até 10 anos</option>
                  <option value="10 anos até 20 anos">10 anos até 20 anos  </option>
                  <option value="20 anos ou mais">20 anos ou mais</option>
                  <option value="Desde o nascimento">Desde o nascimento</option>

                  </SelectInput>

                  <SelectInput fatherClassName="flex-auto" withLabel={true} name="edificada_em" label="Edificada em:" className="rounded" required={false}>
                    <option value="">Selecione Uma Opção</option>
                    <option value="Madeira">Madeira</option>
                    <option value="Alvenaria">Alvenaria</option>
                    <option value="Mista">Mista</option>
                    <option value="Não se Aplica">Não se aplica</option>
                  </SelectInput>
                  <SelectInput fatherClassName="flex-auto" withLabel={true} name="estado_de_conservacao" label="Estado de Conservação" className="rounded" required={false} >
                    <option value="">Selecione Uma Opção</option>
                    <option value="Bom">Bom </option>
                    <option value="Médio">Médio</option>
                    <option value="Excelente">Excelente</option>
                    <option value="Ruim">Ruim</option>
                    <option value="Péssimo">Péssimo</option>
                    <option value="Não se Aplica">Não se aplica</option>
                  </SelectInput>

                 <div className="rounded border p-2 inline ">
                   <h2 className="font-bold text-sm inline  text-cor_principal-700 mb-3">Saneamento Básico(Possui?)</h2>
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
    </PageDefault>
  )
}
