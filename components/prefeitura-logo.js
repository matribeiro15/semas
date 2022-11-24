import Image from "next/image"
function PrefeituraLogo(){
  return (
    <div className="flex flex-row justify-between items-center gap-[8px]">
      <Image src="/img/logo-prefeitura.png" layout="fixed" width="70px" height="70px" className="inline mr-2"/>
    </div>

  )
}
export default PrefeituraLogo;
