const { error } = require("../utils/responseWrapper")


const signupController = async (req, res) => {
    try {
        res.send('OK from Signup')
    } catch (e) {
        return res.send(error(500, e.message))
    }
}

const loginController = async (req, res) => {
    try {
        res.send('OK from Login');
    } catch (error) {
        return res.send(error(500, e.message));
    }
}

module.exports = {
    signupController,
    loginController
}