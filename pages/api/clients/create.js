import Users from "../../../controller/users.js"
import middleware from "../../../controller/middleware.js"
import nextConnect from 'next-connect';


const handler = nextConnect()
handler.use (middleware)

header.post(async (req, res)=>{

})
export const config={
  api: {
    bodyParser:false
  }
}
export default handler
