import nextConnect from 'next-connect'
import multiparty from 'multiparty'

const middleware = nextConnect()

middleware.use(async (req, res, next) => {
  delete req.headers['Content-Type']
  const form = new multiparty.Form()
  // console.log("Middle: ",req);

  await form.parse(req, function (err, fields, files) {
    // console.log("Middle: ",err);
    req.body = fields
    req.files = files
    next()
  })
})

export default middleware
