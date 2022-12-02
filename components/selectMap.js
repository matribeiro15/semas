import {useState,useEffect} from 'react'
import {SelectInput} from './du-objects.js'
export default function SelectMap(props){
  const [value,setValue] = useState('');
  const [uf,setUF] = useState('');
  const [city,setCity] = useState('');
  const [ufs,setUFs] = useState([]);
  const [cities,setCities] = useState([]);

  const getUFs = async function(){
    var resp = await fetch('/api/map');
    if(resp.status == 200){
      resp = await resp.json();
      setUFs(resp);
    }
  }

  const getCities = async function(uf){
    if(uf.length){
      var resp = await fetch('/api/map?uf='+uf);
      if(resp.status == 200){
        resp = await resp.json();
        console.log(resp);
        setCities(resp);
      }
    }
  }
  const changeUF = function(e){
    setUF(e.target.value);
    setValue('');
    setCity('');
    getCities(e.target.value);
  }
  const changeCity = function(e){
    setCity(e.target.value);
    if(e.target.value.length > 0){
      setValue(e.target.value+'/'+uf);
    }else{
      setValue('');
    }
  }

  useEffect(()=>{
    getUFs()
  },[])


  return (
    <div className="rounded-md p-3 border flex flex-wrap rounded border p-2 inline">
      <div className="text-cor_principal-700 w-full font-bold text-md">{props.label}</div>
      <SelectInput onChange={changeUF} value={uf} withLabel={true} label="Estado" className="min-w-[280px]">
        <option value="">Selecione o Estado</option>
        {
          ufs.map((el,id)=>{
            return <option key={"uf--item-"+id} value={el.uf}>{el.label}</option>
          })
        }
      </SelectInput>
      <SelectInput onChange={changeCity} value={city} withLabel={true} label="Cidade" className="min-w-[280px]">
        <option value="">Selecione a Cidade</option>
        {
          cities.map((el,id)=>{
            return <option key={"city--item-"+id}>{el}</option>
          })
        }
      </SelectInput>
      <input type="hidden" name={props.name} value={value}/>
    </div>
  )
}
