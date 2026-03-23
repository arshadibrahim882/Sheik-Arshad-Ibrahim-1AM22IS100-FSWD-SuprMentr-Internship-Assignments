let users = [
    { id: 1, name: "Arshad" },
    { id: 2, name: "Sheik" },
    { id: 3, name: "Ibrahim" }
]

//GET all users.
const getUsers = (req, res) => {
    res.status(200).json(users)
}

//GET user by ID.
const getUserById = (req, res, next) => {
    const id = parseInt(req.params.id)
    const user = users.find(u => u.id === id)
    if (!user) {
        return next(new Error("User not found"))
    }
    res.status(200).json(user)
}

module.exports = {
    getUsers,
    getUserById
}