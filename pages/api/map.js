// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {mapa} from '../../mapa.js'

export default function handler(req, res) {
  if(req.query.uf){
    if(mapa[req.query.uf]){
      res.status(200).json(mapa[req.query.uf]["Municipios"]);
    }else{
      res.status(404).json({msg:"Estado Não Existente"});
    }
  }else{
    var result = [];
    for(var x in mapa){
      result.push({uf:x,label:mapa[x].Nome});
    }
    res.status(200).json(result);
  }
}
