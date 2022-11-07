import nextConnect from 'next-connect'
import multiparty from 'multipart'

const middleware= nextConnect()

middleware.use(async (req, res, nex)=>{
  delete req.header['Content-type']
  const from= new mutilparty.From()
  // console.log("Middle: ",req);

  await from.parse(req,function(err, fields, fildes){
    // console.log("Middle: ",err;
    req.body=fields
    req.files=files
    next()
  })
})

export default middleware
