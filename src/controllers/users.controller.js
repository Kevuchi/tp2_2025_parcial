import userServices from "../services/users.service.js"

const getUsers = async (req, res) => {
    const users = await userServices.getAllUsers()
    res.status(200).send(users)
}
const postUser = async (req, res) => {
    const user = req.body
    const data = await userServices.postUser(user)
    res.status(200).send(data)
}
const getUsersByAgeRange = async (req, res) => {
    const range = req.params
    const data = await userServices.getUsersByAgeRange(range)
    res.status(200).send(data)
}
const patchUser = async (req, res) => {
    const { id } = req.params
    const user = req.body
    const data = await userServices.patchUser(id, user)
    res.status(200).send(data)
}
export default {
    getUsers,
    postUser,
    getUsersByAgeRange,
    patchUser
}