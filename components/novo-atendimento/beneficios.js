import {InputText,SelectInput} from "../du-objects.js"

export default function Beneficios(props){
    return (

      <div className="rounded-md p-3 border border-cor_principal-700  flex flex-wrap p-2">
        <h1 className="text-black text-2xl font-medium font-mono py-1  w-full text-center ">Beneficios</h1>
          <SelectInput  fatherClassName="" withLabel={true} name="Beneficios" label="Benefícios" className="flex flex-col items-last justify-center text-cor_principal-700 border p-2 rounded cursor-pointer text-center text-m w-[320px] h-[40px] hover:shadow-md transition" required={false}>
            <option value="">Selecione Uma Opção</option>
            <option value="BENEFÍCIO EVENTUAL: AUXÍLIO NATALIDADE">BENEFÍCIO EVENTUAL: AUXÍLIO NATALIDADE</option>
            <option value="BENEFÍCIO EVENTUAL: AUXÍLIO FUNERAL">BENEFÍCIO EVENTUAL: AUXÍLIO FUNERAL</option>
            <option value="BENEFÍCIO EVENTUAL: PASSGAGEM">BENEFÍCIO EVENTUAL: PASSGAGEM</option>
            <option value="MARMITEX">MARMITEX</option>
            <option value="NUTRI VIDA:LEITE">NUTRI VIDA: LEITE</option>
            <option value="MAMÃE CHEGUEI:AUXÍLIO NATALIDADE">MAMÃE CHEGUEI:AUXÍLIO NATALIDADE</option>
          </SelectInput>
          <SelectInput  fatherClassName="" withLabel={true} name="status" label="Status" className="flex flex-col items-last justify-center text-cor_principal-700 border p-2 rounded cursor-pointer text-center text-m w-[320px] h-[40px] hover:shadow-md transition" required={false}>
            <option value="">Selecione Uma Opção</option>
            <option value="Em analise">Em analise</option>
            <option value="Concedido">Concedido</option>
            <option value="Indefirido">Indefirido</option>
            <option value="Cancelado/Suspenso">Cancelado/Suspenso</option>
          </SelectInput>
      </div>






    )
}
