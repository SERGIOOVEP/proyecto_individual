const getConnection = require("../ddbb/mysql")
//var bcrypt = require("bcryptjs");
//const { json } = require("express");

const registerController = {


    //NOS ENVÍA A LA PAGINA DE INICO DE REGISTRO DE USUARIO
    start: async (req, res) => {
        res.render("../views/userRegister.ejs", { message: "" });//MODIFICAR DATOS EN LA NUEVA APLICACION
    },


    //NOS ENVÍA A LA PANTALLA DE CONFIRMACIÓN DE USUARIO SI TODO ES CORRECTO
    confirmed: async (req, res) => {
        res.render("../views/login.ejs");//MODIFICAR DATOS EN LA NUEVA APLICACION

    },


    //COMPROBAMOS PARÁMETROS E INSERTAMOS USUARIOS SI ES CORRECTO O DAMOS EL ERROR EN SU DEFECTO.
    insertUser: async (req, res) => {
        //await getConnection()
        const { name_user, email, pass, year_user } = req.body

        try {

            const datesConfirmedUser = await addUser(name_user, email, pass, year_user)

            if (datesConfirmedUser) {

                res.render("registerConfirmed", { user_name });
                // res.render("login");
            }

        } catch (error) {

            if (name_user == "" || email == "" || pass == "" || year_user == "") {
                res.render("userRegister", { message: "Todos los campos son obligatorios" });

            } else if (error == "ER_DUP_ENTRY") { //ES EL MENSAJE QUE NOS DA LA CONSOLA CUANDO EL REGISTRO DEL CORREO ESTÁ DUPLICADO EN LA BASE DE DATOS.
                res.render("userRegister", { message: "El correo introducido ya existe.Por favor introduzca uno válido" });

                // res.status(400).json({ message: "El correo electrónico introducido ya existe.Por favor introduzca uno válido" })
            }
        }
    },


    /*
        //CONSULTAMOS TODOS LOS DATOS DE LA TABLA USUARIOS
        findAll: async (req, res) => {
            const connection = await getConnection()
            connection.query('SELECT * FROM users', function (err, filas) {
                if (err) {
                    throw err;
                } else {
                    filas.forEach(fila => {
                        console.log(fila)
                    });
                }
            })
    
        }
    */
}




//CREAMOS UNA FUNCIÓN PARA ENCRIPTAR LA CONTRASEÑA.
// const encryptUserPass = async (textPlain) => {
//     const hash = await bcrypt.hash(textPlain, 10)
//     return hash
// }


//CREAMOS FUNCION PARA AÑADIR USUARIO EN LA BASE DE DATOS.
const addUser = async ( name_user, email, pass, year_user ) => {

    const connection = await getConnection()
    // const passwordEncrypted = await encryptUserPass(user_pass)

    const datesUser = { name_user, email, pass, year_user }
    //HACEMOS PROMESA "MANUAL".SI LO INSERTA SALE POR RESOLVE Y LO ENVÍA A "INSERTEUSER" ,Y SI FALLA SALE POR REJECT.

    return new Promise((resolve, reject) => {
        connection.query("INSERT INTO users SET ?", datesUser, (error, results) => {
            if (error) {
                return reject(error.code)
            }
            const response = JSON.parse(JSON.stringify(results))
            resolve(response.insertId)
        })
    })

}



module.exports = registerController
