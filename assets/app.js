
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
             
                doc.addImage(constanteURL, 'PNG',-31,3, width+33, height+230)
                doc.save("ouput.pdf")
                
                doc.addPage('p','pt','a4');
                doc.addImage(constanteURL, 'PNG', -31, -height+443, width+33, height+238)
               
                doc.save("a4.pdf");
                

            })
          
          
       
          })