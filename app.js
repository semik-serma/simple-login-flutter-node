import epxress from 'express'
import { connectdb } from './src/config/db.js'
import { userRouter } from './src/routes/user.route.js'

const app = epxress()

app.use(epxress.json())
app.use('/auth',userRouter)
connectdb()
app.listen(5000,()=>{
    console.log('backend is running at port 5000')
})

