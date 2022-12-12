const express = require('express');
const app = express();
app.use(express.json())



const PORT = process.env.PORT || 3000;


//MongoDB connection
require("./ddbb/mongo");


//MYSQL conection   
require("./ddbb/mysql");


//middlewares
app.use(express.urlencoded({extended: false}));
app.use(express.json());


//Rutas
app.use("/login", loginRouter);
app.use("/user", userRouter);
app.use("/register", registerRouter);


/*
// index page
app.get('/', function(req, res) {
    res.render('../views/index');
});
*/


//Start listening
app.listen(PORT, () => {
    console.log(`Server started at http://127.0.0.1:${PORT}`);
});