const express = require('express')
const app = express()


/*set  - configuraciones */
//mostrar variable->template
app.set('template','este es valor lo agregue')
/*set - view engine*/
app.set('view engine','ejs')
/*set - directorio */
//console.log(__dirname)
app.set('views', __dirname + '/views')
/*set -static directorio img-js-css*/
app.use(express.static('public'))
/*midleware*/
app.use(
    function(req,res,next){
        console.log("request url : " + req.url)
        next()
    }

);

app.use((req,res,next)=>{
    console.log("ha pasado");
    next();
});

/* rutas -routes */
//app.get('/', (req, res) => res.send('Hello World!'))
app.get('/', (req, res) => res.render('index.ejs'))
app.get('/login', (req, res) => res.send('login'))



app.listen(3000, function(){
    console.log('Example app listening on port 3000!')
    //llamar
    console.log('el valor',app.get('template'))
})
