
//-----Ecomerce---///

const contenidoTienda= document.getElementById("tienda");
const Carro = document.getElementById("buyitem");
const carritocont= document.getElementById("CarritoCont")
//----PRODUCTOS----//
const Productos=[
    {
        id: 1,
        nombre:"Huevos",
        precio:500 ,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZtmNvTLpYqbnQ-VS7cYvPB6De1S_Lcb2nrA&s",
        cantidad: 1,
    },
    {
        id: 2,
        nombre:"Azucar ",
        precio:800 ,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf0hNmzl6Gg8BIUDeY5-E1-uBpMgHqCNSKtA&s",
        cantidad: 1,
    },
    {
        id: 3,
        nombre:"Harina",
        precio:400 ,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPWv6I4TF_HmhuFO85JWSrcOhn7lDpO3uFtg&s",
        cantidad: 1,
    },
    {
        id: 4,
        nombre:"Galletas",
        precio:1500 ,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9UfaRoKp5skS13ANjLKV6jybeANL9xbDDqA&s",
        cantidad: 1,
    },
    {
        id: 5,
        nombre:"Pan",
        precio:700 ,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLpWDvNzRRIqH_NPQB8jTPBC5mnzF1E8SV2Q&s",
        cantidad: 1,
    },
    {
        id: 6,
        nombre:"Ñoquis",
        precio:3000 ,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhqVsM4ehlpors9YI3wDmpx95gTZtz2UaJ8Q&s",
        cantidad: 1,
    },
    {
        id: 7,
        nombre:"Tarta ",
        precio:4200 ,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqIz7GliBx7XxFd19a62fkmKi5cjjHk1RNxQ&s",
        cantidad: 1,
    },
    {
        id: 8,
        nombre:"Canelon",
        precio:3500 ,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmzBd7-GETMHvIppotnVgmX-zIn4XaGf1Fe-fM5LohZfmd_Yw_ZS-rXWrEC5TI4fsGzYE&usqp=CAU",
        cantidad: 1,
    },
    {
        id: 9,
        nombre:"Torta",
        precio:1900 ,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpXkj0g8lgazuRrL4NYoMuSuKTkjyEX6d0YQ&s",
        cantidad: 1,
    },
    {
        id: 10,
        nombre:"Guiso",
        precio:4500 ,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMI30mJLzfzZ3bJaMFZDLNj60jJRhymAVeLQ&s",
        cantidad: 1,
    },
    
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
        `
       carritocont.append(Compras)
//--- eliminar productos--//
       const eliminar = document.createElement("button")
       eliminar.innerText=`X`
       Compras.append(eliminar)
       eliminar.addEventListener("click",eliminarProducto);
       
    });
//---total de la Compra---//
   const gasto= carrito.reduce((acc,el)=> acc + el.precio,0);

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
