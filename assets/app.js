
// import html2canvas from '/html2canva';

const boton= document.querySelector(".pdf");
const ContenedorPDF= document.querySelector(".wrapper");


boton.addEventListener("click",(e)=>{ 
    //  alert("hola")
    e.preventDefault()
     Swal.fire({
      position: 'top',
      icon: 'success',
      title: 'Puede contactarme cuando guste.gracias!',
      showConfirmButton: false,
      timer: 1500
    })
  
    //  document.body
        html2canvas(ContenedorPDF).then(function
            (canvas) {

                let constanteURL=canvas.toDataURL("image/png")
   



            let doc = new jsPDF('p','pt','a4');
            
                let width =doc.internal.pageSize.getWidth();
                let height =canvas.height * width/ canvas.width;
             
                doc.addImage(constanteURL, 'PNG',15,3, width-50, height-400)
                doc.save("ouput.pdf")
                
            
                

            })
          
          
       
          })