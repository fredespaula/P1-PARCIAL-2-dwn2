'use strict';
// const d=document;

/*
 *  XXXXXX
 */

let $productos = [
    {
        id: 1,
        nombre: 'TRAJE DE BAÑO PSYCHEDELIC MOOD 500',
        descripcion: 'Si buscás ser discreto, mejor volvé otro dia :-). El nuevo traje de baño arena ONE Psychedelic Mood impacta por su colorido diseño de tonos brillantes. La espiral psicodélica comienza desde el pecho y se expande a través de toda la pieza. El gran logo estampado arena en blanco brillante se destaca en el frente de cuello alto.',
        precio: 1000,
        imagen: 'producto-de-ejemplo.jpg',
        categoría: 'Traje de Baño',
    },
    {
        id: 2,
        nombre: 'TRAJE DE BAÑO NETTUNO 580',
        descripcion: 'En 1989, la sonda espacial Voyager sobrevoló Neptuno y envió sus primeras imágenes del gigante helado. Ese mismo año nacieron todos los fundadores de Dolly Nore, la reconocida marca con origen en Milan (Italia) de streetwar.',
        precio: 2000,
        imagen: 'producto-de-ejemplo.jpg',
        categoría: 'Traje de Baño',
    },
    {
        id: 3,
        nombre: 'JAMMER SWIM ALLOVER 750',
        descripcion: 'El jammer arena Swim Allover se destaca por el estampado sublimado en ambos laterales con patrón esfumado. Es perfecto para largas e intensivas sesiones de entrenamiento. Cuenta con forro frontal para mayor soporte y cordón ajustable.',
        precio: 3000,
        imagen: 'producto-de-ejemplo.jpg',
        categoría: 'Jammers',
    },
    {
        id: 4,
        nombre: 'JAMMER KIKKO 770',
        descripcion: 'El jammer arena Kikko se destaca por su estampado sublimado delantero con un patrón de figuras geométricas basados en la clásica armadura nipona. Es perfecto para largas e intensivas sesiones de entrenamiento. Cuenta con forro frontal para mayor soporte y cordón ajustable.',
        precio: 4000,
        imagen: 'producto-de-ejemplo.jpg',
        categoría: 'Jammers',
    },
    {
        id: 5,
        nombre: 'GORRA CLASSIC SILICONE NEGRO',
        descripcion: 'Las gorras de natación de silicona arena Classic son un clásico que no pasa de moda y está disponible en un gran variedad de colores para combinar con tu outfit para el natatorio.',
        precio: 500,
        imagen: 'producto-de-ejemplo.jpg',
        categoría: 'Equipamiento',
    },
    {
        id: 6,
        nombre: 'ANTIPARRAS THE ONE WOMAN 103',
        descripcion: 'arena revolucionó todo lo conocido hasta el momento en desarrollo de antiparras con The One, el nacimiento de un nuevo concepto, basado en datos recopilados sobre las similitudes estructurales de los rostros.',
        precio: 2000,
        imagen: 'producto-de-ejemplo.jpg',
        categoría: 'Equipamiento',
    },
];
const d=document,
 $div=d.createElement("div"),
$pro=d.querySelector("#productos"),
$contenedorCarrito=d.getElementById('modalCarrito');
let carrito=[];
const $btnVaciar=d.getElementById('vaciarCarrito');
const $contadorCarrito=d.getElementById('contadorCarrito');
const $precioTotal=d.getElementById('precioTotal1');
let $cantidad=0,
contador =[];
const $modalProducto=d.getElementById('modalProducto');

// $modalProducto.addEventListener('click',()=>{
//     console.log('ininin');
// })
d.addEventListener('DOMContentLoaded',()=>{
    if(localStorage.getItem('carrito')){
        carrito=JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
    }
})

//   console.log($precioTotal);
    
    $productos.forEach((el)=>{
        
    let $div2=d.createElement("div"), 
    $h3=d.createElement("h3"),
    $img=d.createElement("img"),
    $div3=d.createElement("div"),
    $Desc=d.createElement("p"),
    $pre=d.createElement("p"),
    $cat=d.createElement("p"),
    $btn=d.createElement("button");

    $img.src="malla.png";
    $Desc.textContent=el.descripcion;
    $h3.textContent =el.nombre;
    $pre.textContent=`Precio: $${el.precio}`;
    $cat.textContent=el.categoría;
    $btn.textContent="Agregar";
    $btn.id=`agregar${el.id}`;
    // $modalProducto.appendChild($img);
    $div3.appendChild($img);
    $div3.appendChild($h3);
    $div3.appendChild($Desc);
    $div3.appendChild($pre);
    $div3.appendChild($cat);
    $div3.appendChild($btn);
    $div2.appendChild($img);
    $div2.appendChild($div3);
    $pro.appendChild($div2);
    
const boton=d.getElementById(`agregar${el.id}`);

boton.addEventListener('click',()=>{
    agregarAlCarrito(el.id)
})
$img.addEventListener('click',()=>{
    $('#modalProducto').modal();
    $div3.appendChild($img);
    $modalProducto.appendChild($div3);
    // $modalProducto.appendChild();
    // console.log("okokoko");
})
    
}
);
const agregarAlCarrito=(prodId)=>{
    const $existe=carrito.some(prod=> prod.id===prodId)
    if($existe){
        
        console.log($existe);
        const prod=carrito.map(prod=>{
            if(prod.id===prod.id){
                
                
            }
        })
    }else{
        console.log($existe);
        const item=$productos.find((prod)=>prod.id===prodId)
        carrito.push(item)
    }
    actualizarCarrito();
    
}
const eliminarDelCarrito=(prodId)=>{
    const item =carrito.find((prod)=>prod.id===prodId)
    const indice=carrito.indexOf(item);
    carrito.splice(indice,1);
    actualizarCarrito();
}

// $btnVaciar.addEventListener('click',()=>{
//     carrito.length=0;
//     actualizarCarrito();
// })
const vaciarCarrito=()=>{
    carrito.length=0;
    $cantidad=0;
    actualizarCarrito();

}
const actualizarCarrito=()=>{
    $contenedorCarrito.innerHTML="";
    const $btnVaciar2=d.createElement("button"),
    $sprecioTotal=d.createElement("span");
    
    $btnVaciar2.textContent='Vaciar';
    $btnVaciar2.setAttribute("onClick",'vaciarCarrito();');
    $contenedorCarrito.appendChild($btnVaciar2);
    $contenedorCarrito.appendChild($sprecioTotal);

    let n=1;    
    carrito.forEach((el)=>{
        // console.log(el.nombre);
        const $div4=d.createElement("ul"),
         $nombre=d.createElement("li"),
         $precio=d.createElement("span"),
         $cantidad=d.createElement("span"),
        $btnEliminar=d.createElement("button");
        // $btnVaciar=d.createElement("button");
        //$btnCheckout=d.createElement("button");
         $nombre.textContent=`${el.nombre} -- $${el.precio} -- ${n}`;
        //  $precio.textContent=el.precio;
        //  $cantidad.textContent=el.$cantidad; 
        $btnEliminar.setAttribute("onClick",`eliminarDelCarrito(${el.id});`);
        $btnEliminar.textContent="Eliminar";
        // $btnVaciar.id="vaciarCarrito";
        // $btnVaciar.textContent="Vaciar";
        //$btnCheckout.textContent="checkout";


        //  $nombre.appendChild($precio);
        //  $nombre.appendChild($cantidad);
        $div4.appendChild($nombre);
        // $div4.appendChild($precio);
        // $div4.appendChild($cantidad);
        $nombre.appendChild($btnEliminar);
        // $div4.appendChild($btnVaciar);
        //$div4.appendChild($btnCheckout);
         $contenedorCarrito.appendChild($div4);
         localStorage.setItem('carrito',JSON.stringify(carrito))  
    })
    $contadorCarrito.innerText=carrito.length;
    $precioTotal.innerText=carrito.reduce((acc,el)=>acc+el.precio,0)
    // console.log($precioTotal.textContent);
    $sprecioTotal.textContent=$precioTotal.textContent
}
const closeModal=()=>{
    $('#modalProducto').modal('hide');
}
const closeModalp=()=>{
    $('#modalCarrito').modal('hide');
}
// const detalleProducto =d.querySelector();
// btnVaciar.addEventListener('click',()=>{
//     console.log("vaciado");
// })
// (
//     function(){
//         $('#btnCarrito').onclick('click',function(){
//             $('#modalCarrito').modal();
//         })
//     }
// )

