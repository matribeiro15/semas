import Leh from '../controller/leh.js'
import Menu from './menu.js'
import HeadLeh from  './head.js'
import {useEffect,useState} from 'react';
import * as iconFA from 'react-icons/fa';
import * as iconMD from 'react-icons/md';
import {getMyData,checkUserLogin,ucwords,setMask} from '../controller/utils.js'

export default function PageDefault(props){
  const icons = {
    ...iconFA,
    ...iconMD,
  }
  const [user,setUser] = useState(false);
  useEffect(()=>{
      if(props.checkUser){
        checkUserLogin((user)=>{
          if(props.callbackUser){
            props.callbackUser(user);
          }
          setUser(user);
        })
      }
  },[])

  if(props.icon){
    var Icon = icons[props.icon];
  }else{
    var Icon = function(){ return <></>;};
  }

  const loading = (
    <>
      <HeadLeh>
        <title>Carregando...</title>
      </HeadLeh>
      <div className="flex gap-x-{size}">
        <Menu loader={true}/>
        <div className="flex flex-col flex-auto pr-7">
          <h2 className="loadingBG w-full text-left text-xl font-bold text-white bg-gradient-1 border rounded-full py-3 px-5 mt-8 mb-4 flex items-center">&nbsp;</h2>
          <div className="rounded-2xl loadingBG min-h-[400px]">
          </div>
        </div>
      </div>
    </>
  )

  if(props.checkUser && !user){
    return loading;
  }
  return (
    <>
    <HeadLeh>
      <title>{props.title}</title>
    </HeadLeh>
    <div className="flex gap-x-{size}">
      <Menu/>

      <div className="flex flex-col flex-auto pr-7">
        <h2 className="w-full text-left text-xl font-bold text-white bg-gradient-1 border rounded-full py-3 px-5 mt-8 mb-4 flex items-center"><Icon className="mr-3 text-white"/> {props.label}</h2>
        {props.children}
      </div>
    </div>
    </>
  )
}
