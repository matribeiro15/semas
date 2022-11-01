import Image from "next/image"
function LogoPrefeitura(){
  return (
    <div className="flex flex-row justify-between items-center gap-[10px]">
      <Image src="/img/logo-prefeitura.png" layout="fixed" width="60px" height="60px"/>
      <div className="flex flex-col text-gray-50">
        <h2 className="text-xl text-center font-bold mb-[-5px]">Prefeitura Municipal de</h2>
        <h2 className="text-lg text-center font-bold mb-4">Vilhena</h2>
      </div>
    </div>
  )
}
export default LogoPrefeitura;
