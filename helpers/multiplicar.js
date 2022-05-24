const fs=require('fs')  //paquete de node

const crearArchivo=async(base=5, listar=false, h=10)=>{
try{
    if(listar){
        console.log('===============')
        console.log('Tabla del:', base       )
        console.log('===============')
    }
   
let salida=''

for(let i=1;i<=h;i++){

   salida+= `${base}*${i} = ${base*i}\n`
}

if(listar){
    console.log(salida)
}



fs.writeFileSync(`./out/tabla- ${base}.txt`,salida)

return (`tabla-${base}.txt creado`)

   
       
    }catch (error){
        throw err
    }
}

      
    
    // fs.writeFile('tabla-5.txt',salida, (err)=>{
    //     if(err)throw err
    //     console.log('tabla-5.txt creado')
    // })
    //esto es para guardar un archivo, por ejemplo en este caso creo un archivo txt de la tabla del 5 y lo guardo en el directorio de donde esta mi proyecto


//con writeFileSync sería así




module.exports={
    crearArchivo: crearArchivo
}