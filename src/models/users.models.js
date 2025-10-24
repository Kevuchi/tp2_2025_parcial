let users = [
    { id: 1, name: "Juan Pérez", email: "juanperez@example.com", age: 28 }
]
const getUsers = async () => {
    return await users;
}
const postUser = async user => {
    user.id = users[users.length - 1].id + 1
    users.push(user)
    return await user
}
const getUsersByAgeRange = async range => {
    let rangeAge = []
    switch (range.range) {
        case "young":
            rangeAge = [0, 17]
            break
        case "adult":
            rangeAge = [18, 60]
            break
        case "senior":
            rangeAge = [61, 100]
            break
    }
    const usersByrange = users.filter(user => user.age >= rangeAge[0] && user.age <= rangeAge[1])
    const total = usersByrange.length
    return await {
        total: total,
        data: usersByrange
    }
}
const patchUser = async (id, user) => {
    if (id < 1) { error: "id inválido" }
    const index = users.findIndex((e) => e.id == id)
    if (index == -1) {
        return "Error. No se encontró el id."
    } else {
        const patchedUser = { ...users[index], ...user }
        users.splice(index, 1, patchedUser)
        return patchedUser
    }
}

export default {
    getUsers,
    postUser,
    getUsersByAgeRange,
    patchUser
}