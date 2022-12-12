const registerRouter = require("express").Router()
const registerController = require("../controllers/register.controller")

registerRouter.get("/register", registerController.start);//RENDERIZA LA PAGINA DE REGISTRO DE USUARIO.

registerRouter.post("/register/user", registerController.insertUser)//GUARDA LOS DATOS DEL USUARIO AL DARSE DE ALTA

registerRouter.get("/register/confirmed", registerController.confirmed)//RENDERIZA LA PAGINA DE CONFIRMACIÓN DE ALTA DE USUARIO.


module.exports = registerRouter
