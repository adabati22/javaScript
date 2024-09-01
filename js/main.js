
//-----Ecomerce---///

const contenidoTienda= document.getElementById("tienda");
const Carro = document.getElementById("buyitem");
const carritocont= document.getElementById("CarritoCont")
//----PRODUCTOS----//
const Productos=[
    {
        id: 1,
        nombre:"Huevos(x6)",
        precio:500 ,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZtmNvTLpYqbnQ-VS7cYvPB6De1S_Lcb2nrA&s",
    },
    {
        id: 2,
        nombre:"Azucar ",
        precio:800 ,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf0hNmzl6Gg8BIUDeY5-E1-uBpMgHqCNSKtA&s",
    },
    {
        id: 3,
        nombre:"Harina",
        precio:400 ,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPWv6I4TF_HmhuFO85JWSrcOhn7lDpO3uFtg&s",
    },
    {
        id: 4,
        nombre:"Galletas",
        precio:1500 ,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9UfaRoKp5skS13ANjLKV6jybeANL9xbDDqA&s",
    },
    {
        id: 5,
        nombre:"Pan",
        precio:700 ,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLpWDvNzRRIqH_NPQB8jTPBC5mnzF1E8SV2Q&s",
    }
    
];

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
carrito.push({
    id: product.id,
    img: product.img,
    nombre: product.nombre,
    precio: product.precio,
});
console.log(carrito)
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
    modal.innerHTML=`
        <h2> Mi Compra </h2>
        <h2> X </h2>`;
    carritocont.append(modal)
    modal.addEventListener("click", ()=>{
    carritocont.style.display="none";
   })
   
    carrito.forEach((product)=>{
        let Compras= document.createElement("div");
        Compras.className="Compras"
        Compras.innerHTML=`
        <img src="${product.img}">
        <h3>${product.nombre}</h3>
        <p> ${product.precio} $ </h3>
        `
       carritocont.append(Compras)
//--- eliminar productos--//
       const eliminar = document.createElement("button")
       eliminar.innerText=`X`
       Compras.append(eliminar)
       eliminar.addEventListener("click",eliminarProducto);
       
    });

   const gasto= carrito.reduce((acc,el)=> acc + el.precio,0);

    const totalCompra= document.createElement("div");
    totalCompra.className="total"
    totalCompra.innerHTML=`
    <p>Total: ${gasto} $</p>
     <button> Iniciar Compra </button>
    `;
    carritocont.append(totalCompra);
  

};
Carro.addEventListener("click", mostrarCarrito);

const eliminarProducto= ()=>{
    const hallarId = carrito.find((elemento) => elemento.id)
    carrito = carrito.filter((carritoId)=>{
        return carritoId !== hallarId;
    } ) 
mostrarCarrito()
LocalS()
}

//---LocalStorage---//
const LocalS= ()=>{localStorage.setItem("compraUsuario", JSON.stringify(carrito));
}
