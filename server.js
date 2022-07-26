const app = require("express")()
const mysql = require('mysql');
const express = require("express");
require("dotenv").config();
const router = express.Router();
const bodyParser = require('body-parser');
const loginRouter = require('./routes/loginRoutes')
const userRouter = require('./routes/userRoutes')
// const { dbInstance } = require("./DB/dbStore");
// const db = require("./DB/dbStore");
// const queryTypes = require("./DB/queryTypes");
const p = router.get('/temp1', (req, res) => {
    return res.status(200).json({ error: "ok pp" })
})
app.use(bodyParser.json());
app.use('/v1', loginRouter)
app.use('/v1', userRouter)
app.use('', p)
app.listen(3000,() => {
    console.log("app is listening here 3000")
})