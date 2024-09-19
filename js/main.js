
//-----Ecomerce---///

const contenidoTienda= document.getElementById("tienda");
const Carro = document.getElementById("buyitem");
const carritocont= document.getElementById("CarritoCont");
const pieDePagina = document.getElementById("footer")
//-----PIE DE PAGINA----//
 const pieFinal= document.createElement("div")
 pieFinal.className="piefinal";
 pieFinal.innerHTML=`
 <img src="img/descarga.png">
  <h3>La cocina de Ori</h3>  
 `;
 pieDePagina.append(pieFinal);

 const pieFinal2= document.createElement("div")
 pieFinal2.className="piefinal2";
 pieFinal2.innerHTML=`
 <a href="https://www.instagram.com/">Instagram</a>
 <a href="https://es-la.facebook.com/">Facebook</a>
 <a href="https://x.com/?lang=es">Twitter(X)</a>
 `;

 pieDePagina.append(pieFinal2);


let carrito= JSON.parse(localStorage.getItem("compraUsuario"))|| [];
//----AGREGAR PRODUCTOS------//
Productos.forEach((product)=>
{let contenedor = document.createElement ("div");
contenedor.innerHTML=`
    <img src="${product.img}">
    <h3>${product.nombre}</h3>
    <p> ${product.precio} $ </h3>
    
`
;

contenidoTienda.append(contenedor);

const agregar= document.createElement ("button");
agregar.innerText= "Agregar";
contenedor.append(agregar);
agregar.addEventListener("click", () => {

    const repetido=carrito.some((repeatProduct)=> repeatProduct.id === product.id)
    if(repetido === true){
        carrito.map((prod)=>{
            if(prod.id ===product.id){
                prod.cantidad++;
            }
        })
    }else{
carrito.push({
    id: product.id,
    img: product.img,
    nombre: product.nombre,
    precio: product.precio,
    cantidad: product.cantidad,
})};
LocalS()

});

} )

//-------------CARRITO----------//
const mostrarCarrito= ()=>{
    carritocont.style.display="flex";
    carritocont.innerHTML=``;
//--modal Header---//
    const modal= document.createElement("div");
    modal.className="modal"
    modal.innerHTML=
    `   <h2> Mi Compra </h2>
        <h2> X </h2>    `;
    carritocont.append(modal)
    modal.addEventListener("click", ()=>{
    carritocont.style.display="none";
   })
//---Elementos del Modal Carrrito---//
    carrito.forEach((product)=>{
        let Compras= document.createElement("div");
        Compras.className="Compras"
        Compras.innerHTML=`
        <img src="${product.img}">
        <h3>${product.nombre}</h3>
        <p> ${product.precio} $ </h3>
        <p> ${product.cantidad}</p>
        <button class="delete"> X </button>
        `;
       carritocont.append(Compras);
//--- eliminar productos--// 
       let Eliminar= Compras.querySelector(".delete");
       Eliminar.addEventListener("click",()=>{
       eliminarProducto(product.id)
       }
       )
       
    });
//---total de la Compra---//
   const gasto= carrito.reduce((acc,el)=> acc + el.precio * el.cantidad,0);

    const totalCompra= document.createElement("div");
    totalCompra.className="total"
    totalCompra.innerHTML=`
    <p>Total: ${gasto} $</p>
     <button> Iniciar Compra </button>
    `;
    carritocont.append(totalCompra);
    totalCompra.addEventListener("click",confirmarCompra);
   

};
//-----confirmar compra y pago------//

 const confirmarCompra =()=>
{
    if(confirm("¿esta seguro que no desea agregar nada mas a su compra?")){
        location.href ="https://www.mercadopago.com.ar";
    }
    else{

    }
}
Carro.addEventListener("click", mostrarCarrito);


const eliminarProducto= (id)=>{
    const hallarId = carrito.find((elemento) => elemento.id === id)
    carrito = carrito.filter((carritoId)=>{
        return carritoId !== hallarId;
    } ) 
mostrarCarrito()}
LocalS()



//---LocalStorage---//
const LocalS= ()=>{localStorage.setItem("compraUsuario", JSON.stringify(carrito));
}
