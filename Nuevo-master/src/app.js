const express = require('express'); // referencia a framework express
const app = express(); //se crea la aplicación de express
const log = require('morgan'); // para saber los clientes conectados
const bodyParser = require('body-parser');
const path = require('path');

const IndexRoutes = require('./routers/index.js');
const { default: mongoose } = require('mongoose');

app.set('port', process.env.PORT || 3000 ); //asigno puerto 3000

//Middleware utiliza morgan
app.use(log('dev'));
app.use(bodyParser.urlencoded({extended: false}));
//Rutas
app.use('/',IndexRoutes);

app.listen(app.get('port'), () =>{
    console.log('El servidor esta funcionando en el puerto', app.get('port'));
}
);
//conectar a BD
mongoose.connect("mongodb+srv://vendedor2:iy68n9ks0lrH2PbF@cluster0.ei9dnbi.mongodb.net/Concesonaria?retryWrites=true&w=majority")
.then(bd=>console.log('BD conectada!'))
.catch(err=>console.log(err));




//establecer sistema de vistas
app.set('views', path.join(__dirname,'views'));
app.set('view engine','ejs');
 



//desplegar mensaje de conectado