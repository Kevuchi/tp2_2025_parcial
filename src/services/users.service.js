import userModels from "../models/users.models.js"

const getAllUsers = async () => {
    const users = await userModels.getUsers()
    return users
}
const postUser = async (user) => {
    const users = await userModels.postUser(user)
    return users
}
const getUsersByAgeRange = async (range) => {
    const usersByrange = await userModels.getUsersByAgeRange(range)
    return usersByrange
}
const patchUser = async (id, user) => {
    const patchedUser = await userModels.patchUser(id, user)
    return patchedUser
}
export default {
    getAllUsers,
    postUser,
    getUsersByAgeRange,
    patchUser
}