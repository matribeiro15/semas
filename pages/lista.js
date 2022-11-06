import {FormDefault,InputText,ButtonDefault} from  "../components/du-objects.js"
import Link from "next/link"
export default function Buscar(){
  return (
  <div className="flex-auto w-full  flex flex-col items-center justify-center max-l-[1100px] ">
       <div class="fundo-page-modal force-hide">
          <div class="frme-page modal body-full"></div>
       </div>
         <div class="topbar protege">
          <spam class="nome"></spam>
          <spam class="funtion"></spam>
          <spam class="exit"></spam>
         </div>
    <h1 className="text-cor_principal-100 text-7xl font-bold gap-5 ">SEMAS</h1>
    <h1 className="text-cor_principal-200 text-center sub-title-master text-5x1 gap-4">Prefeitura Municipal de Vilhena</h1>

<div class="container mb-3">
 <div class="row w-100"></div>
    <div class="from___.row w-100 p-2">
      <div className="flex-auto  flex-col items-center  p-10 col-12 font-18 text-cor_principal-700 text-2xl font-medium font-mono py-5  ">
        <label>Buscar Usuario</label>
        <div class= "buscar-usuario" onkeyup="buscar_usuario" type="text" placeholder="Digite o CPF, Nome ou NIS"></div>

        <FormDefault API="users/create" id="formCad" resetAfterSend={true} className="max-w-[1000px] w-full flex flex-wrap gap-3 justify-center mx-auto self-center items-center">
        <InputText fatherClassName="w-full flex flex-col items-center" name="digite" label="Digite Nome, CPF, RG ou NIS" className="max-w-[500px] w-full text-last rounded-xl " />
        </FormDefault>
         <div class="row w-100 mt-3">...
         <h2 class="col-12 font-18 text-cor_principal-700 text-2xl font-medium font-mono py-5  ">Lista para Atendimento </h2>
         <strong class="color_2 font-10 w-100 d-block text-cor_principal-600 ">Usuarios aguardando </strong>
         <div class="row w-100 bg_color_2 text-white border-radius-4 px">...</div>
</div>


</div>

       </div>
    </div>
</div>
  )
}
