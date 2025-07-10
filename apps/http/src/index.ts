import express from "express"
import morgan from "morgan"

const app = express()
const port = 3002

app.use(express.json())
app.use(morgan('dev'))


app.get('/',async(req:any,res:any)=>{
    res.status(200).json({
        message:"Hello world"
    })
})

app.listen(port,()=>{
    console.log(`Express server running on http://localhost:${port}`)
})