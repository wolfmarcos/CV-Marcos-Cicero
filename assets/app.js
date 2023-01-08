


const boton= document.querySelector(".pdf");



boton.addEventListener("click",(e)=>{  alert("hola")

var doc = new jsPDF();
doc.text("Olimpo geek", 10, 10);

doc.line(10,10,180,10);
doc.addPage("a4","paaa")
doc.save("a4.pdf");



})

// console.log("Funciona");

// function cal(){
//     return Math.round( Math.random()*(10-0)+0);
// }
// var alumnos = ["Juan","pedro","matias"];







// alumnos.forEach(alumno => {
//     doc.addPage("a4","p");
    
//     var calificacion =cal();

//     doc.text(alumno+" Calificación: "+calificacion.toString(),10,10)
//     var imgData 
// }

