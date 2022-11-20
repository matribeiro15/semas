import CardClient from './cards/CardClient.js';
export default function FrameClientResult(props){
  return (
    <div className="py-5">
    {
      props.results.map((el,id)=>{
        return <CardClient key={'huugduyufvxdtyfcdxsw--'+id} client={el}/>
      })
    }
    </div>
  );
}
