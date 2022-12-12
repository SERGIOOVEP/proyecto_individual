const Sequelize = require('sequelize')




const Usuarios = sequelize.define('usuarios', {
    id: { type: Sequelize.INTEGER, primaryKey: true },
    nombre: Sequelize.STRING,
    correo: Sequelize.STRING,
    contraseña: Sequelize.STRING,
    año_de_nacimiento: Sequelize.NUMBER
});

const Peliculas = sequelize.define('peliculas', {
    id: { type: Sequelize.INTEGER, primaryKey: true },
    nombre: Sequelize.STRING,
    genero: Sequelize.STRING,
    año_de_estreno: Sequelize.NUMBER
});


const Peliculas_Favoritas = Sequelize.define('peliculas_favoritas', {
    id: { type: Sequelize.INTEGER, primaryKey: true },
    id_usuario: {type:Sequelize.STRING, foreignKey: true},
    id_pelicula: {type:Sequelize.STRING, foreignKey: true}
});





Usuarios.findAll({ attributes: ['id', 'nombre', 'correo'] })
    .then(usuarios => {
        console.log(usuarios[0].dataValues)
    })
    .catch(err => {
        console.log(err)
    });