const app = require("express")()
require("dotenv").config();
const bodyParser = require('body-parser');
const loginRouter = require('./routes/loginRoutes')
const userRouter = require('./routes/userRoutes')
// const { dbInstance } = require("./DB/dbStore");
// const db = require("./DB/dbStore");
// const queryTypes = require("./DB/queryTypes");
app.use(bodyParser.json());
app.use('/v1', loginRouter)
app.use('/v1', userRouter)
app.listen(3000,() => {
    console.log("app is listening here 3000")
})