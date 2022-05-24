
const{crearArchivo}=require('./helpers/multiplicar')
const argv=require('./config/yargs')

console.clear()  //para que cuando se ejecute el programa, se limpie cualquier cosa de la consola


crearArchivo(argv.base, argv.listar, argv.hasta)
.then(nombreArchivo=>console.log(nombreArchivo, 'creado'))
.catch(err=>console.log(err))