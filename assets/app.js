
// import html2canvas from '/html2canva';

const boton= document.querySelector(".pdf");
const ContenedorPDF= document.querySelector(".wrapper");


boton.addEventListener("click",(e)=>{ 
    //  alert("hola")
    // e.preventDefault()
    // Swal.fire({
    //   imageUrl: '/assets/images/CV_Marcos_Cicero.pdf',
    //   imageHeight: 1500,
    //   imageAlt: 'A tall image'
    
    
    
    // })

    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500
    })

    

       
          })