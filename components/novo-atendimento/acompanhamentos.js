import {InputText,SelectInput} from "../du-objects.js"

export default function Acompanhamentos(props){
    return (

      <div className="rounded-md p-3 border border-cor_principal-700  flex flex-wrap rounded border p-2 inline gap-1">
        <h1 className="text-black text-2xl font-medium font-mono py-1  w-full text-center">Acompanhamentos</h1>
          <SelectInput  fatherClassName="" withLabel={true} name="acompanhamentos" label="Acompanhamentos" className="rounded flex flex-col items-last justify-center text-cor_principal-700 border p-2 rounded cursor-pointer text-center text-m w-[290px] h-[40px] hover:shadow-md transition" required={false}>
              <option value="">Selecione Uma Opção</option>
            <optgroup label="PSB">
              <option value="PAIF">PAIF</option>
              <option value="SPSB DOMICILIAR">SPSB DOMICILIAR</option>
              <option value="SCFV">SCFV</option>
            </optgroup>
            <optgroup label="PSE-Média">
              <option value="PAEFI">PAEFI</option>
              <option value="SPSAC MEDIDAS SOCIOEDUCATIVAS (LA)">SPSAC MEDIDAS SOCIOEDUCATIVAS (LA)</option>
              <option value="SPSAC MEDIDAS SOCIOEDUCATIVAS (PSC)">SPSAC MEDIDAS SOCIOEDUCATIVAS (PSC)</option>
            </optgroup>
            <optgroup label="PSE-Alta">
              <option value="ACOLHIMENTO INSTITUCIONAL">ACOLHIMENTO INSTITUCIONAL</option>
            </optgroup>
          </SelectInput>
          <InputText fatherClassName="flex-auto" withLabel={true} name="resp_tecnico" label="Responsável Nivel Técnicos" className="rounded"/>
      </div>



    )
}
