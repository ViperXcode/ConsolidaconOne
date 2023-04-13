
    
var elemento=document.getElementById('Contenido');
var elemento2=document.getElementById('Contenido2');



/* -----------PRIMERA LISTA----------- */

async function getdata (){
    try{
        var promise= await fetch("https://digimon-api.vercel.app/api/digimon/");
        var resultado= await promise.json();
        console.log(resultado)
        htmlInjection(resultado)
    }catch(error){
        console.log(error)
    }
}


getdata();

/*
*/

function htmlInjection(data){
    elemento.innerHTML=""
    for(digimon of data) {
        elemento.innerHTML +=
            
            `           <div class="Tarjeta">
                                <div class="Tarjeta-body">
                                    <img class="imagensize" src="assets/img/logo.png"  alt="">
                                    <h3>D i g i m o n   C a r d s</h3>
                                    <img class="imgdig" src="${digimon.img}" alt="">
                                    <h2>${digimon.name}</h2>
                                    <p>"Nivel ${digimon.level}"</p>
                                </div>
                        </div>
            `
    }
}


/* -----------FIN PRIMERA LISTA----------- */



/* -----------SEGUNDA BUSQUEDA 2.0----------- */

async function getdata2 (){
 
    var valorInput=document.getElementById('busqueda').value;
 console.log("valorInput");
    try{
        var promise2= await fetch(`https://digimon-api.vercel.app/api/digimon/name/${valorInput}`);
        var resultado2= await promise2.json();
        console.log(resultado2);
         htmlInjection2(resultado2)
    }catch(error){
        console.log(error);
    }
}



function htmlInjection2(data){
    document.getElementById("Contenido").style.display="none";
    elemento2.innerHTML=""
    for(digimon of data) {
        elemento2.innerHTML +=

        `   <div class="Tarjeta">
                <div class="Tarjeta-body">
                    <img class="imagensize" src="assets/img/logo.png"  alt="">
                    <h3>D i g i m o n   C a r d s</h3>
                    <img class="imgdig" src="${digimon.img}" alt="">
                    <h2>${digimon.name}</h2>
                    <p>"Nivel ${digimon.level}"</p>
                </div>
            </div>  
        `
    }
}


function evento3(){
    document.getElementById("Contenido").style.display="block"; //bloquear contenido 1
    document.getElementById("Contenido2").style.display="none"; //desaparecer contenido 2
}




document.getElementById("form1").addEventListener("submit",function(event){
    event.preventDefault();
    getdata2();

})


        
            /* `   <div class="card mx-auto">
                    <h2 class="card-title">${digimon.name}</h2>
                    <img src="${digimon.img}" class="card-img-top" alt="">
                </div> 
            `
    }

/* -----------version que no resultó 1.0----------- */

    // e.preventDefault();  //evitar borrar datos del input

/*

}

*/




// devolver todos los digimons al saco





// function htmlInjection2(data){

//     document.getElementById("Contenido").style.display="none"; //desaparecer contenido (lista de digimons)
    
//      elemento2.innerHTML="" // asignar a inner valor vacio

//         elemento2.innerHTML += //inyectar información a la variable (contenedor) creada arriba

//             `   <div>
//                     <h2>${data.name}</h2>
//                     <img src="${data.img}" alt="">
//                 </div> 
//             `
    
// }

    /*const{name,img}=data;
        console.log(data.name);
        console.log(data.img);

      /* var info= 
  
elemento.innerHTML=info;*/



/* fetch(`https://digimon.api.vercel.app/api/digimon/name/${valorInput}`) */