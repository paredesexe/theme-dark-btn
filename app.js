
const darckbtn = document.getElementById('darkTheme');
const luztheme = document.getElementById('luztheme');

darckbtn.addEventListener('click', () => {
    document.querySelector(".contenido").classList.add("contenido-dark");
    document.querySelector(".contenido").classList.remove("contenido");

    document.querySelector(".card1").classList.add("card1-dark");
    document.querySelector(".card1").classList.remove("card1");

    document.querySelector(".membresias").classList.add("membresias-dark");
    document.querySelector(".membresias").classList.remove("membresias");

    document.querySelector("body").classList.add("body-dark");
    document.querySelector("body").classList.remove("body");

    document.querySelector(".encabezado").classList.add("encabezado-dark");
    document.querySelector(".encabezado").classList.remove("encabezado");

    document.querySelector("head").classList.add("head-dark");
    document.querySelector("head").classList.remove("head");


    document.querySelector(".card2").classList.add("card2-dark");
    document.querySelector(".card2").classList.remove("card2");

    document.querySelector(".titulo").classList.add("titulo-dark");
    document.querySelector(".titulo").classList.remove("titulo");

    document.querySelector(".subenc").classList.add("subenc-dark");
    document.querySelector(".subenc").classList.remove("subenc");


    const elementobtn = document.querySelectorAll(".btnM");
    elementobtn.forEach((elementob) => {
      elementob.classList.add("btnM-dark");
       elementob.classList.remove("btnM");
     });


    document.querySelector(".btnM").classList.add("btnM-dark");
    document.querySelector(".btnM").classList.remove("btnM");
    
      const elementosCirculo = document.querySelectorAll(".circulo");
       elementosCirculo.forEach((elemento) => {
         elemento.classList.add("circulo-dark");
          elemento.classList.remove("circulo");
        });

});



luztheme.addEventListener('click', () => {
    document.querySelector(".contenido-dark").classList.add("contenido");
    document.querySelector(".contenido-dark").classList.remove("contenido-dark");

    document.querySelector(".card1-dark").classList.add("card1");
    document.querySelector(".card1-dark").classList.remove("card1-dark");

    document.querySelector(".membresias-dark").classList.add("membresias");
    document.querySelector(".membresias-dark").classList.remove("membresias-dark");

     document.querySelector(".body-dark").classList.add("body");
     document.querySelector(".body-dark").classList.remove("body-dark");


    document.querySelector(".encabezado-dark").classList.add("encabezado");
    document.querySelector(".encabezado-dark").classList.remove("encabezado-dark");

    document.querySelector(".head-dark").classList.add("head");
    document.querySelector(".head-dark").classList.remove("head-dark");

    document.querySelector(".card2-dark").classList.add("card2");
    document.querySelector(".card2-dark").classList.remove("card2-dark");

    document.querySelector(".titulo-dark").classList.add("titulo");
    document.querySelector(".titulo-dark").classList.remove("titulo-dark");

    document.querySelector(".subenc-dark").classList.add("subenc");
    document.querySelector(".subenc-dark").classList.remove("subenc-dark");

    const elementosCirculo = document.querySelectorAll(".circulo-dark");
    elementosCirculo.forEach((elemento) => {
      elemento.classList.add("circulo");
       elemento.classList.remove("circulo-dark");
     });


     const elementobtn = document.querySelectorAll(".btnM-dark");
     elementobtn.forEach((elementob) => {
       elementob.classList.add("btnM");
        elementob.classList.remove("btnM-dark");
      });
 
     

    });
























