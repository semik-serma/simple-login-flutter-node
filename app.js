import epxress from 'express'
import { connectdb } from './src/config/db.js'
import { userRouter } from './src/routes/user.route.js'
import noteRoute from './src/routes/note.route.js'

const app = epxress()

app.use(epxress.json())
app.use('/auth',userRouter)
app.use('/note',noteRoute)
connectdb()
app.listen(5000,()=>{
    console.log('backend is running at port 5000')
})

