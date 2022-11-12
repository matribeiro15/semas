import Head from 'next/head'
import Menu from '../components/menu'
import LoadingBottom from '../components/loading-bottom.js'
import HeadLeh from '../components/head.js';
import {AlternativeForm,InputText,TextAreaI,ButtonDefault,InputFile,SelectInput} from '../components/du-objects.js';
import Router from 'next/router'
import {useState,useEffect} from 'react';

export default function MeuPerfil(props){

  const [user,setUser] = useState(false);
  const [init,setInit] = useState(false);
  const [showLoading,setShowLoading] = useState(true);
  const [selectedInputProfile,setSelectedInputProfile] = useState("");
  const [defaultData,setDefaultData] = useState({});
  useEffect(()=>{
    if(!init){
      setInit(true);
      fetch('/api/users/mydata')
      .then(function(res){
        return res.json();
      })
      .then(function(data){
        if(data.user){
          var dd = {};
          dd.name = data.user.name;
          dd.email = data.user.email;
          setDefaultData(dd);
          setUser(data.user);
          setShowLoading(false);
        }else{
          Router.push('/login');
        }
      })
    }
  },[]);


  var menu = (
    <div className="flex-1 md:max-w-[320px]">
      <Menu/>
    </div>
  );

  var changeProfile = function(e){
    setSelectedInputProfile(e.target.value);
  }

  var changeEl = function(e){
    var nm = e.target.name;
    var newDt = {...defaultData};
    newDt[nm] = e.target.value;
    setDefaultData(newDt);
  }

  var success = function(res,e){
    // e.target.reset();
    var us = res.data.user;
    us.dados = us.dados[0];
    setUser(us);
    console.log(res.data);
    notification('Sucesso!',"Informações alteradas com sucesso!",'good');
  }
  var onError = async function(err,e){
    console.log(Object.keys(err));
    /*
    if(err.response.data.msg == undefined){
      notification('Erro!',"Ops! Algo Deu Errado.<br/>Verifique os campos e tente novamente!",'bad');
    }else{
      notification('Erro!',err.response.data.msg,'bad');
    }
    */
    // notification('Erro!',err.response.data.msg,'bad');
    console.log(err);
  }

  return (
    <div className="w-max mx-auto md:mx-0 md:w-full flex flex-col md:flex-row md:py-[2.5em] px-[1em] md:px-[1em] xl:px-[5em] md:gap-2">
      <LoadingBottom show={showLoading}/>
      <HeadLeh>
        <title>Meu Perfil | SEMAS</title>
        <link rel="icon" href="/img/fav.png" />
      </HeadLeh>
      {menu}
      <div className="flex-auto w-max md:w-screen pt-[70px] md:pt-0">
        <AlternativeForm onSuccess={success} onError={onError} action="/api/users/myaccount" id="formCadMyData" className="flex flex-col">

          <h2 className="w-full text-left text-md font-bold text-white bg-gradient-1 border rounded-full py-3 px-5 mt-8 mb-4">DADOS DE ACESSO</h2>
          <div className="flex flex-col md:flex-row mb-5">
            <div className="flex-1">
              <InputText onChange={changeEl} value={defaultData.email !== undefined ? defaultData.email : ''} withLabel={true} type="email" label="Email" name="email" className="min-w-[200px] rounded-md md:rounded-r-none"/>
            </div>
            <div className="flex-1 md:max-w-[320px]">
              <InputText placeholder="(sem alterações)" required={false} withLabel={true} type="password" label="Senha" name="senha" className="min-w-[200px] rounded-md md:rounded-none"/>
            </div>
            <div className="flex-1 md:max-w-[320px]">
              <InputText placeholder="(sem alterações)" required={false} withLabel={true} type="password" label="Confirmar Senha" name="csenha" className="min-w-[200px] rounded-md md:rounded-l-none"/>
            </div>
          </div>



          <div className="w-full text-center md:text-right mb-8 md:mb-1 mt-8">
            <ButtonDefault text="SALVAR"/>
          </div>

        </AlternativeForm>
      </div>
    </div>
  );
}
