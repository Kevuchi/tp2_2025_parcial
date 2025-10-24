const validateUser = async (req, res, next) => {
    if (!req.body || !req.body.name || !req.body.age || !req.body.email) return res.send("faltan campos obligatorios.")
    next()
}

export default {
    validateUser
}