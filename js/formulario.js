
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const email = document.getElementById("email");
const botonenviar = document.getElementById("enviar");
botonenviar.addEventListener("click",(e) =>{
e.preventDefault(
)
let formName = nombre.value;
let formlastName = apellido.value;
let formEmail = email.value;

let datos={
    nombre:formName,
    apellido: formlastName,
    email: formEmail,
}

  Swal.fire({
    title: datos.nombre + " " + datos.apellido + " Gracias por su compra.",
    text: "La informacion sobre su envio le llegara a " + datos.email,
    icon: "success",
    confirmButtonText: "Aceptar",
    
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
        localStorage.setItem("compraUsuario", JSON.stringify([] ))
      location.href ="../index.html"
    } 
  });
//   location.href ="../index.html"
} )

