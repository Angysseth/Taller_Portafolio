const main = () =>{
    let titulo = document.querySelectorAll('.content .titulo');

    for(let i=0; i<titulo.length; i++){
        titulo[i].addEventListener("click", function(e){
    
            let btn = e.target;
    
            if(btn.className=="titulo active"){
                btn.classList.remove("active")
            }else{
                btn.classList.add("active")
            }
    
        })
    }

    let tituloportafolio = document.querySelectorAll('.contentportafolio .tituloportafolio');

    for(let i=0; i<tituloportafolio.length; i++){
        tituloportafolio[i].addEventListener("click", function(e){
    
            let btn = e.target;
    
            if(btn.className=="tituloportafolio active"){
                btn.classList.remove("active")
            }else{
                btn.classList.add("active")
            }
    
        })
    }
    
}

const cambiarColor1 = () =>{
    let body = document.getElementById('color');
    body.classList.add("estilo1"); 
}

const cambiarColor2 = () =>{
    let body = document.getElementById('color');
    body.classList.add("estilo2");
}

const cambiarColor3 = () =>{
    let body = document.getElementById('color');
    body.classList.add("estilo3");
}

const removerEstilo = () =>{
    let body = document.getElementById('color');
    body.classList.remove("estilo1");
    body.classList.remove("estilo2");
    body.classList.remove("estilo3");
}





