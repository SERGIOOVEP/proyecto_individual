const loginRouter = require('express').Router();
const userController = require("../controllers/user.controller")


loginRouter.get("/user", userController.getUser)// TRAE LOS DATOS DEL USUARIO

loginRouter.put("/user/update", userController.updateUser)//GUARDA LOS DATOS ACTUALIZADOS QUE EL USUARIO HA MODIFICADO

loginRouter.put("/user/updatePass", userController.updatePass)//GUARDA LA CONTRASEÑA NUEVA QUE INTRODUCE EL USUARIO

loginRouter.get("user/unsubscribe", userController.unsubscribeForm)//TRAE LOS DATOS DEL FORMULARIO PARA DARSE DE BAJA

loginRouter.delete("/user/deleteUser", userController.deleteUser)//ELIMINA USUARIO

module.exports = loginRouter