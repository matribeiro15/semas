import {FormDefault,InputText,ButtonDefault,SelectInput} from  "../components/du-objects.js"
import HeadLeh from  'next/head'
import LogoPrefeitura from '../components/logo-prefeitura.js'
import Link from "next/link"
export default function Ficha(){
  return (
    <div className="w-full flex flex-wrap min-h-screen">
    <HeadLeh>
      <title>Cadastrar Usuário | SEMAS</title>
    </HeadLeh>
      <div className="flex-auto flex flex-col items-center justify-center p-3">
        <h1 className="text-cor_principal-600 font-bold text-4xl  fontMaster">Cadastrar Usuário</h1>
          <h1 className="text-black text-2xl font-medium font-mono  InputText-cursive  justify-center  py-3 ">Documentação</h1>
           <FormDefault API="users/create" id="formCad" resetAfterSend={true} className="max-w-[700px] w-full flex flex-wrap gap-2 mx-auto justify-center items-stretch">
                <InputText fatherClassName="flex-auto" withLabel={true} name="nome" label="Nome" className="rounded-xl"/>
                <InputText fatherClassName="flex-auto" withLabel={true} name="rg" label="RG" className="rounded-xl"/>
                <InputText fatherClassName="flex-auto" withLabel={true} name="orgao_expedidor" label="Orgão Expeditor" className="rounded-xl"/>
                <InputText fatherClassName="flex-auto" withLabel={true} name="data_espe" mask="dd/dd/dddd" label="Expediação" className="rounded-xl"/>
                <InputText fatherClassName="flex-auto" withLabel={true} name="cpf" mask="ddd.ddd.ddd-dd" label="CPF" className="rounded-xl"/>
                <InputText fatherClassName="flex-auto" withLabel={true} name="nis" label="NIS" className=" rounded-xl "/>
                <InputText fatherClassName="flex-auto" withLabel={true} name="indentificaçao estragenira" label="Indentificação estrangeira" className=" rounded-xl" required={false}/>
                <InputText fatherClassName="flex-auto" withLabel={true} name="telefone" mask="(dd)ddddd-dddd" label="Telefone/celular" className=" rounded-xl"/>
          <h1 className="text-black text-2xl font-medium font-mono  text-condensed w-full text-center  py-3">Dados pessoais</h1>

                <SelectInput fatherClassName="flex-auto" withLabel={true} name="estado civil" label="Estado civil" className="rounded-xl ">
                    <option value="">Selecione Uma Opção</option>
                    <option value="Solteiro">Solteiro</option>
                    <option value="Casado">Casado</option>
                    <option value="Divorciado">Divorciado</option>
                    <option value="Viúvo">Viúvo</option>
                </SelectInput>

                <InputText fatherClassName="flex-auto" withLabel={true} name="nacionalidade" label="Nacionalidade" className="rounded-xl"/>
                <InputText fatherClassName="flex-auto" withLabel={true} name="data_nasc" mask="dd/dd/dddd" label="Data de nascimento" className="rounded-xl "/>

                <SelectInput fatherClassName="flex-auto" withLabel={true} name="escolaridade" label="Escolaridade" className="rounded-xl ">
                  <option value="">Selecione Uma Opção</option>
                  <option value="Ensino médio Completo">Ensino médio Completo</option>
                  <option value="Ensino Superior">Ensino Superior</option>
                  <option value="Não Possui">Não Possui</option>
                </SelectInput>

              <SelectInput fatherClassName="flex-auto" withLabel={true} name="sexo" label="Sexo" className="rounded-xl">
                <option value="">Selecione Uma Opção</option>
                <option value="Feminino">Feminino</option>
                <option value="Masculino">Masculino</option>
                <option value="Outros">Outros</option>
              </SelectInput>

                <InputText fatherClassName="flex-auto" withLabel={true} name="profissao/ocupacao" label="Profissão/Ocupação" className="rounded-xl"/>
                <InputText fatherClassName="flex-auto" withLabel={true} name="renda:individual" label="Renda Individual" className="rounded-xl"/>
                      <h1 className="text-black text-2xl font-medium font-mono  w-full text-center  py-3 ">Endereço</h1>
                <InputText fatherClassName="flex-auto" withLabel={true} name="logradouro" label="Logradouro " className="rounded-xl"/>
                <InputText fatherClassName="flex-auto" withLabel={true} name="bairro" label="Bairro" className="rounded-xl"/>
                <InputText fatherClassName="flex-auto" withLabel={true} name="cep" label="CEP" className="rounded-xl"/>
                <InputText fatherClassName="flex-auto" withLabel={true} name="número"  mask="ddddd" label="Número" className="rounded-xl"/>

              <SelectInput fatherClassName="flex-auto " withLabel={true} name="area" mb-1 label="Área"  className="rounded-xl mb-1 ">
                <option value="">Selecione Uma Opção</option>
                <option value="Rural">Rural</option>
                <option value="Urbana">Urbana</option>
              </SelectInput>

                <InputText fatherClassName="flex-auto" withLabel={true} name="complemento" label="Complemento" className="rounded-xl"/>
                      <h1 className="text-black text-2xl font-medium font-mono  w-full text-center  py-3">Tipo de Habitação</h1>

                <SelectInput fatherClassName="flex-auto" withLabel={true} name="tipo_de_imovel" label="Tipo de Imóvel" className="rounded-xl">
                  <option value="">Selecione Uma Opção</option>
                  <option value="Alugado">Alugado</option>
                  <option value="Comprado">Comprado</option>
                  <option value="Adquirido">Adquirido</option>
                </SelectInput>


                <InputText fatherClassName="flex-2" withLabel={true} name="numero_de_comodos" mask="ddd" label="Número de comodos" className="rounded-xl"/>
                <InputText  fatherClassName="flex-2" withLabel={true} name="tempo_de_moradia"   label="Tempo de moradia" className="rounded-xl"/>

                <SelectInput fatherClassName="flex-auto" withLabel={true} name="edificada_em_madeira" label="Edificada em:" className="rounded-xl">
                  <option value="">Selecione Uma Opção</option>
                  <option value="Madeira">Madeira</option>
                  <option value="alvenaria">alvenaria</option>
                </SelectInput>

                <SelectInput fatherClassName="flex-auto" withLabel={true} name="estado_de_concervacao" label="Estado de Conservação" className="rounded-xl">
                  <option value="">Selecione Uma Opção</option>
                  <option value="Bom ">Bom </option>
                  <option value="Pessimo">Pessimo</option>
                </SelectInput>

                <SelectInput fatherClassName="flex-2" withLabel={true} name="saneamentoBasico" label="Saneamento Basico" className="rounded-xl">
                  <option value="">Selecione Uma Opção</option>
                </SelectInput>



           <div className="text-center mt-8  w-full  ">
            <ButtonDefault text="Proximo"/>
          </div>
        </FormDefault>
      </div>
    </div>
  )
}
