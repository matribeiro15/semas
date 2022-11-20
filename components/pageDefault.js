import Leh from '../controller/leh.js'
import Menu from './menu.js'
import HeadLeh from  './head.js'
import {useEffect,useState} from 'react';
import * as icons from 'react-icons/fa';
import {getMyData,checkUserLogin,ucwords,setMask} from '../controller/utils.js'

export default function PageDefault(props){
  const [user,setUser] = useState(false);
  useEffect(()=>{
      if(props.checkUser){
        checkUserLogin(setUser);
      }
  },[])

  if(props.icon){
    var Icon = icons[props.icon];
  }else{
    var Icon = function(){ return <></>;};
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
