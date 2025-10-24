import express from "express"
import usersRoute from "./src/routes/user.routes.js"
const app = express()
const PORT = 8080

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use("/api", usersRoute)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))