import Leh from '../controller/leh.js'
import Cookies from 'universal-cookie'
import {useState,useEffect} from 'react';

function FormDefault(props){
  const [isLoading,setLoading] = useState(false);
  const API = '/api/'+props.API;
  async function submitForm(e){
    e.preventDefault();
    setLoading(true);
    const reqHash = Leh.setToken();
    const cookies = new Cookies();
    let list = e.target;
    var req = {};
    var inputFiles = {};
    for(var name in list){
      if(typeof list[name] == 'object'){
        if(list[name] !== null && list[name]["name"] !== undefined && list[name]["value"] !== undefined){
          if(list[name]["name"].length == 0){
            continue;
          }
          if(list[name].validity.valid){
            if(list[name]["type"] !== undefined && (list[name]["type"] == "checkbox" || list[name]["type"] == "radio")){
              if(list[name].checked){
                if(list[name].dataset.type == "Int"){
                  req[list[name]["name"]] = parseInt(list[name]["value"]);
                }else if(list[name].dataset.type == "Float"){
                  req[list[name]["name"]] = parseFloat(list[name]["value"]);
                }else{
                  req[list[name]["name"]] = list[name]["value"];
                }
              }
            }else{
              if(list[name].dataset.type == "Int"){
                req[list[name]["name"]] = parseInt(list[name]["value"]);
              }else if(list[name].dataset.type == "Float"){
                req[list[name]["name"]] = parseFloat(list[name]["value"]);
              }else{
                req[list[name]["name"]] = list[name]["value"];
              }
            }
          }
        }
      }
    }
    if(cookies.get('auth_token') == undefined){
      cookies.set('auth_token',Leh.setToken(),{
        maxAge: 60 * 60 * 24 * 90,
        sameSite: true
      });
    }
    req.token = cookies.get('auth_token');
    req.hash = reqHash;
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(req)
    };
    var status_response;
    var response = await fetch(API, requestOptions)
    setLoading(false);
    if(response.status == 200){
      if(props.onSuccess !== undefined){
        props.onSuccess(response);
      }
    }else{
      if(props.onError !== undefined){
        props.onError(response);
      }
    }
    if(props.resetAfterSend === true){
      e.target.reset();
    }
  }



  if(props.onSubmit !== undefined){
    submitForm = props.onSubmit;
  }
  return (
    <>
    <LoaderForm show={isLoading}/>
    <form className={props.className} action="" method="POST" id={props.id} onSubmit={submitForm}>
    {props.children}
    </form>
    </>
  )
}



function AlternativeForm(props){
  // console.log("MyProps",props);
  const [isLoading,setLoading] = useState(false);

  const API = (props.action);

  const submitForm = async function(e){
    e.preventDefault();
    setLoading(true);
    const axios = require('axios');
    var data = new FormData(e.nativeEvent.target);

    axios.post(API, data,{
      header:{
        "content-type":"multipart/form-data"
      }
    })
    .then(response => {
      setLoading(false);
      if(props.onSuccess !== undefined){
        props.onSuccess(response,e);
      }
    })
    .catch(error => {
      setLoading(false);
      console.log(error.msg)
      if(props.onError !== undefined){
        props.onError(error,e);
      }
    });
  }

  return (
    <>
    <LoaderForm show={isLoading}/>
    <form className={props.className} encType="multipart/form-data" action={props.action} method="POST" id={props.id} onSubmit={submitForm}>
    {props.children}
    </form>
    </>
  )
}


function LoaderForm(props){
  if(props.show === true){
    var classes = "fixed inset-0 flex flex-row justify-center items-center bg-white z-50";
  }else{
    var classes = "fixed inset-0 flex flex-row justify-center items-center bg-white z-50 hidden";
  }
  return (
    <div className={classes}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="animate-spin h-20 w-20">
      <path className="fill-cor_principal-700" d="M288 39.056v16.659c0 10.804 7.281 20.159 17.686 23.066C383.204 100.434 440 171.518 440 256c0 101.689-82.295 184-184 184-101.689 0-184-82.295-184-184 0-84.47 56.786-155.564 134.312-177.219C216.719 75.874 224 66.517 224 55.712V39.064c0-15.709-14.834-27.153-30.046-23.234C86.603 43.482 7.394 141.206 8.003 257.332c.72 137.052 111.477 246.956 248.531 246.667C393.255 503.711 504 392.788 504 256c0-115.633-79.14-212.779-186.211-240.236C302.678 11.889 288 23.456 288 39.056z"/>
      </svg>
    </div>
  );
}



function InputText(props){

  var number_format = function($elem){
    if($elem.value.length > 0){
      var cont = 0;
      var assimSera = '';
      var format = props.mask;
      var numb = $elem.value;
      var leg = numb.length;
      var arr_f = format.match(/[\d\W\w\s]/g);
      var arr_n = numb.match(/\d/g);
      if(arr_n == null){
        $elem.value = "";
        return;
      }
      arr_f.forEach(function( i, k){
        if(i == 'd' && cont <= leg){
          if(arr_n[cont]){
            assimSera += arr_n[cont];
            cont = cont+1;
          }
        }else{
          if(arr_n[cont]){
            assimSera += i;
          }
        }
        $elem.value = assimSera;
      });
    }
  }

  var maskInput;
  if(props.mask !== undefined){
    maskInput = function (e){
      number_format(e.target);
      if(props.onChange !== undefined){
        props.onChange(e);
      }
    }
  }else{
    maskInput=props.onChange;
  }



  var padrao = {
    autoComplete: (props.autoComplete == undefined ? 'off' : props.autoComplete),
    required: (props.required == undefined ? true : props.required),
    type: (props.type == undefined ? 'text' : props.type),
    placeholder: (props.placeholder == undefined ? props.label : props.placeholder)
  }

  var classLB = props.withLabel === true ? 'text-sm text-cor_principal-700 font-bold' : 'sr-only';
  return (
  <div className={props.fatherClassName}>
    <label htmlFor={props.id} className={classLB}>
    {props.label}
    </label>
    <input
    id={props.id}
    data-type={props.typeData}
    name={props.name}
    onKeyPress={props.onKeyPress}
    onKeyDown={props.onKeyDown}
    onKeyUp={props.onKeyDown}
    onChange={maskInput}
    onBlur={props.onBlur}
    onInput={props.onInput}
    step={props.step}
    max={props.max}
    min={props.min}
    value={props.value}
    defaultValue={props.defaultValue}
    title={props.title}
    type={padrao.type}
    autoComplete={padrao.autoComplete}
    required={padrao.required}
    className={'appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-1 focus:ring-cor_principal-700 focus:border-cor_principal-700 focus:z-10 sm:text-sm transition duration-300 '+props.className}
    placeholder={padrao.placeholder}
    />
  </div>
  )
}
function TextAreaI(props){

  var classLB = props.withLabel === true ? 'text-sm text-cor_principal-700 font-bold' : 'sr-only';
  var padrao = {
    autoComplete: (props.autoComplete == undefined ? 'off' : props.autoComplete),
    required: (props.required == undefined ? true : props.required),
    rows:(props.rows == undefined ? 3 : props.rows),
  }
  return (
  <div className={props.fatherClassName}>
    <label htmlFor={props.id} className={classLB}>
    {props.label}
    </label>
    <textarea
    id={props.id}
    data-type={props.typeData}
    name={props.name}
    onKeyUp={props.onKeyUp}
    onKeyDown={props.onKeyDown}
    onKeyPress={props.onKeyPress}
    onChange={props.onChange}
    onBlur={props.onBlur}
    onInput={props.onInput}
    step={props.step}
    max={props.max}
    min={props.min}
    rows={padrao.rows}
    value={props.value}
    defaultValue={props.defaultValue}
    title={props.title}
    type={padrao.type}
    autoComplete={padrao.autoComplete}
    required={padrao.required}
    className={'appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-1 focus:ring-cor_principal-700 focus:border-cor_principal-700 focus:z-10 sm:text-sm transition duration-300 '+props.className}
    placeholder={props.label}
    />

  </div>
  )
}
function InputPassword(props){
  var padrao = {
    required: (props.required == undefined ? true : props.required),
    type: (props.type == undefined ? 'password' : props.type)
  }
  return (
  <div>
    <label htmlFor={props.id} className="sr-only">
    {props.label}
    </label>
    <input
    id={props.id}
    name={props.name}
    type={padrao.type}
    required={padrao.required}
    className={'appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-1 focus:ring-cor_principal-700 focus:border-cor_principal-700 focus:z-10 sm:text-sm transition duration-300 '+props.className}
    placeholder={props.label}
    />
  </div>
  )
}
function ButtonOrange(props){
  return (
    <button onClick={props.onClick} disabled={props.disabled} className={'rounded shadow text-white font-bold inline-block bg-amber-600 shadow-lg hover:shadow-md border-2 border-amber-600 hover:border-2 hover:scale-[0.98] hover:shadow-amber-600/50 shadow-amber-600/50 px-4 py-1 transition-all duration-200 '+props.className}>
    {props.text}
    </button>
  )
}
function ButtonDefault(props){
  return (
    <button onClick={props.onClick} disabled={props.disabled} className={'disabledButton rounded shadow text-white font-bold inline-block bg-cor_principal-700 shadow-lg hover:shadow-md border-2 border-cor_principal-700 hover:border-2 hover:scale-[0.98] hover:shadow-cor_principal-600/50 text-lg shadow-cor_principal-600/50 px-4 py-2 transition-all duration-200 '+props.className}>
    {props.text}
    </button>
  )
}

function InputFile(props){
  var defaultProps = {};
  for(var y in props){
    defaultProps[y] = props[y];
  }

  if(defaultProps.required == undefined){ defaultProps.required = true; }
  if(defaultProps.name == undefined){ defaultProps.name = ""; }

  const [text,setText] = useState("Selecione Um Arquivo");


  var change = function(e){
    var files = e.target.files;
    if(files.length > 0){
      setText(files[0].name);
    }
    if(props.change !== undefined){
      props.change(e);
    }
  }

  return (
    <div className="rounded-md border-2 px-2 pt-2 py-4 mb-3">
      <p className="text-blue-700 text-sm mb-4">{props.label}</p>
      <input type="file" accept={defaultProps.accept} className="fileInput" onChange={change} name={defaultProps.name} id={props.id} required={defaultProps.required}/>
      <label htmlFor={props.id} className="InputFileForm">{text}</label>
    </div>
  );
}
function SelectInput(props){
  var padrao = {
    required: (props.required == undefined ? true : props.required)
  }
  var classLB = props.withLabel === true ? 'text-sm text-teal-700 font-bold' : 'sr-only';
  return (
  <div className={props.fatherClassName}>
    <label htmlFor={props.id} className={classLB}>
    {props.label}
    </label>
    <select
    id={props.id}
    name={props.name}
    value={props.value}
    defaultValue={props.defaultValue}
    required={padrao.required}
    onChange={props.onChange}
    className={'appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-1 focus:ring-cor_principal-700 focus:border-cor_principal-700 focus:z-10 sm:text-sm transition duration-300 '+props.className}>
    {props.children}
    </select>
  </div>
  )
}
export{FormDefault, InputText,InputPassword,ButtonDefault, SelectInput,AlternativeForm,LoaderForm}
