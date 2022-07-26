const { isEmptyCheck } = require("../checks/checks")
const db = require("../DB/dbStore")
const queryTypes = require("../DB/queryTypes")

exports.login = async (req, res) => {
  try {
    const { phone_number, password } = req.body
    const data = await db.dbInstance.query(`select user_table.user_phone_number, password_table.user_password from user_table inner join password_table on user_table.user_id = password_table.user_id and user_table.user_phone_number = '${phone_number}';`)
   if (data[0][0].user_password !== undefined) {
    if (data[0][0].user_password === password) {
      return res.status(200).json({ stats: "200", message: "user verified" })
    }
    return res.status(400).json({ status: "400", message: "password is wrong"})
   }
   return res.status(400).json({ status: "400", message: "user does not exist"})
  } catch (err) {
    console.log("chec ere", err)
    return res.status(400).json({ status: "400", message: err})

  }
}

exports.signup = async (req, res) => {
    try {
        console.log(req.body)
    const { user_name, user_phone_number, user_dob, user_email, password } = req.body
    const user_data = await db.dbInstance.query(`SELECT * from user_table WHERE user_phone_number=${user_phone_number}`, {
        type: queryTypes.SELECT,
    })
    if (!isEmptyCheck(user_data)) {
      return res.status(401).json({ error: "user is already exist !!!"}) 
    }
    await db.dbInstance.query(`INSERT into user_table (user_name, user_email, user_phone_number) value('${user_name}', '${user_email}', '${user_phone_number}')`, { type: queryTypes.UPDATE })
    const user_exist = await db.dbInstance.query(`SELECT user_id from user_table WHERE user_phone_number = ${user_phone_number}`)
    await db.dbInstance.query(`INSERT into password_table (user_password, user_id) value ('${password}', '${user_exist[0][0].user_id}')`)
    return res.status(200).json({
        status: '200',
        value: 'user profile created'
    })
  }
  catch (err) {
    console.log("print ertror", err)
    return res.status(400).json({ error: err})
  }
}