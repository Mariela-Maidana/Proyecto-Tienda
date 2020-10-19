// FILTROSSSS //

const filtroBusqueda = document.querySelector("#busqueda");
const tarjetas = document.getElementsByTagName("article");
const checkboxesRating = document.getElementsByName("puntaje");
const checkboxesCategoria = document.getElementsByName("categoria");
const botonLimpiar = document.querySelector("#tacho");
const botonCuadricula = document.getElementById("boton-cuadricula")
const botonLista = document.getElementById("boton-lista")

const listaArticulos = document.getElementById("lista-articulos")
const listaDescripciones = document.querySelectorAll(".product-details-hide");
//Carrito
const subtotal = document.getElementById('subtotal');
const productoUnoCarrito = document.getElementsByTagName("article").item(1);
const productoDosCarrito = document.getElementsByTagName("article").item(2);
const botonAbrirCarrito = document.getElementById("boton-carrito");
const botonCerrarCarrito = document.getElementById("cerrar");
const overlay = document.querySelector('.overlay');
const cartaCarrito = document.getElementById('carta-carrito');
const contenedorArticulosCarrito = document.querySelector("#contenedor-articulos-carrito");
const botonComprar = document.getElementById('boton-comprar');
//Vaciar carrito
const botonVaciarCarrito = document.getElementById("boton-vaciar");
const overlayVaciar = document.querySelector('.overlay-vaciar');
const vaciarCarritoVentana = document.getElementById('contenedor-vaciar-carrito');
const ocultarVaciarCarrito = document.getElementsByName("ocultar-vaciar-carrito");

//Cobrar 
const radioPago = document.getElementsByName("pago");
const checkboxesCobrar = document.querySelectorAll(".checkbox-cobrar");
const totalCobrar = document.getElementById('total');
let totalCobrarCalculo = 0;
const ocultarCheckout = document.getElementById("boton-checkout-seguir");
botonAbrirCarrito.onclick = () => {
    overlay.classList.remove('hidden');
    cartaCarrito.classList.add('mostrar-menu');
    document.body.classList.add("no-scroll");

    if (contenedorArticulosCarrito.querySelectorAll(".contenedor-producto-carrito").length == 0) {
        contenedorArticulosCarrito.innerHTML += crearTarjetaProducto(productoUnoCarrito);
        contenedorArticulosCarrito.innerHTML += crearTarjetaProducto(productoDosCarrito);
        subtotal.innerHTML = (parseInt(productoUnoCarrito.dataset.precio) + parseInt(productoDosCarrito.dataset.precio));
    }
}

botonCerrarCarrito.onclick = () => {
    overlay.classList.add('hidden');
    cartaCarrito.classList.remove('mostrar-menu');
}

botonVaciarCarrito.onclick = () => {
    vaciarCarritoVentana.classList.remove('hidden');
    overlayVaciar.classList.remove('hidden');
}

const crearTarjetaProducto = (tarjeta) => {
    const productoHTML = `<article class="contenedor-producto-carrito">
                <img src="${tarjeta.dataset.image}" alt="" class="producto-imagen-carrito">
                <div class="contenedor-detalle-carrito">
                  <div class="producto-informacion-carrito">
                    <h3 class="product-name">${tarjeta.dataset.nombre}</h3>
                    <button type="button" class="remove-from-cart-btn" tabindex="0"><i class="far fa-trash-alt"></i></button>
                  </div>
                  <div class="precio-producto-carrito">
                    <label>
                      <input type="number" min="0"  max="9" value="1" class="cantidad-producto-carrito" tabindex="0">
                      unidades
                    </label>
                    <p class="producto-precio">$ ${tarjeta.dataset.precio}</p>
                  </div>
                </div>
              </article>`;

    return productoHTML;
};

filtroBusqueda.oninput = () => {
    filtrarTarjetas();
}

for (let checkboxR of checkboxesRating) {
    checkboxR.onclick = () => {
        filtrarTarjetas();
    };
}

for (let checkboxC of checkboxesCategoria) {
    checkboxC.onclick = () => {
        filtrarTarjetas();
    };
}

//CONFIRMAR / VACIAR - BOTONES
ocultarVaciarCarrito.forEach((ocultar) => {
    ocultar.onclick = () => {
        vaciarCarritoVentana.classList.add('hidden');
        overlayVaciar.classList.add('hidden');
    }
});


//CHECKOUT
ocultarCheckout.onclick = () => {
    document.querySelector(".confirm-compra").classList.add('hidden');
};

radioPago.forEach((radiobutton) => {
    radiobutton.onclick = () => {
        if (radiobutton.value == "tarjeta") {
            totalCobrarCalculo = totalCobrarCalculo + (parseInt(subtotal.innerText) * 0.1);
            document.getElementById('recargo').classList.remove('hidden');
        } else {
            document.getElementById('recargo').classList.add('hidden');
            totalCobrarCalculo = totalCobrarCalculo - (parseInt(subtotal.innerText) * 0.1);
        }

        totalCobrar.innerHTML = totalCobrarCalculo;
    }
});

checkboxesCobrar.forEach((checkbox => {
    checkbox.onclick = () => {
        if (checkbox.checked) {
            if (checkbox.name == "envio") totalCobrarCalculo = totalCobrarCalculo + 50;
            if (checkbox.name == "descuento") totalCobrarCalculo = totalCobrarCalculo - (parseInt(subtotal.innerText) * 0.1);
            document.getElementById(checkbox.name).classList.remove('hidden');
        } else {
            if (checkbox.name == "envio") totalCobrarCalculo = totalCobrarCalculo - 50;
            if (checkbox.name == "descuento") totalCobrarCalculo = totalCobrarCalculo + (parseInt(subtotal.innerText) * 0.1);
            document.getElementById(checkbox.name).classList.add('hidden');
        }

        totalCobrar.innerHTML = totalCobrarCalculo;
    }
}));

botonComprar.onclick = () => {
    document.querySelector(".confirm-compra").classList.remove('hidden');
    document.getElementById("subtotal-compra").innerHTML = subtotal.innerText;
    totalCobrar.innerHTML = subtotal.innerText;
    totalCobrarCalculo = parseInt(subtotal.innerText);
}


const filtrarTarjetas = () => {
    for (let tarjeta of tarjetas) {
        tarjeta.classList.add('hidden')
        if (allFilters(tarjeta)) {
            tarjeta.classList.remove('hidden')
        } else {
            tarjeta.classList.add('hidden')
        }
    }
    tarjetasVisibles();
}

const allFilters = (tarjeta) => {
    let categoriaCheked = document.querySelectorAll('input[name="categoria"]:checked');
    let ratingCheked = document.querySelectorAll('input[name="puntaje"]:checked');
    return (
        (pasaFiltroCategoria(tarjeta) || categoriaCheked.length <= 0) &&
        (pasaFiltroRating(tarjeta) || ratingCheked.length <= 0) &&
        (pasaFiltroBusqueda(tarjeta) || filtroBusqueda.length <= 0)
    );
}

const pasaFiltroCategoria = (tarjeta) => {
    const categoria = tarjeta.dataset.categoria;
    const filtroCategoria = document.querySelector(`.categoria[value="${categoria}"]`)
    if (filtroCategoria === null) {
        return false
    } else {
        return filtroCategoria.checked
    }
}

const pasaFiltroRating = (tarjeta) => {
    const rating = tarjeta.dataset.rating;
    const filtroRating = document.querySelector(`.rating[value="${rating}"]`)
    if (filtroRating === null) {
        return false
    } else {
        return filtroRating.checked
    }
}

const pasaFiltroBusqueda = (tarjeta) => {
    const texto = tarjeta.dataset.nombre.toLowerCase();
    const busqueda = filtroBusqueda.value.toLowerCase()
    return texto.includes(busqueda)
}



//   FIN DE FILTROSSSS   //


// PARA LIMPIAR FILTROS//

botonLimpiar.onclick = () => {
    filtroBusqueda.value = "";

    for (let checkboxR of checkboxesRating) {
        checkboxR.checked = false;
    }
    for (let checkboxC of checkboxesCategoria) {
        checkboxC.checked = false;
    }
    for (let tarjeta of tarjetas) {
        tarjeta.classList.remove('hidden');
    }
    tarjetasVisibles();
}

botonCuadricula.onclick = () => {
    listaArticulos.classList.remove('tipo-vertical')
    listaArticulos.classList.add('tipo-cuadricula')

    for (let tarjeta of tarjetas) {
        tarjeta.classList.remove('tarjeta-linea')
    }
    for (details of listaDescripciones) {
        details.classList.add('product-details-hide')
    }
}


botonLista.onclick = () => {
    listaArticulos.classList.remove('tipo-cuadricula')
    listaArticulos.classList.add('tipo-vertical')

    for (let tarjeta of tarjetas) {
        tarjeta.classList.add('tarjeta-linea')
    }
    for (details of listaDescripciones) {
        details.classList.remove('product-details-hide')
    }
}


//   MOSTRANDO PRODUCTOS   //

const tarjetasVisibles = () => {
    let tarjetasVisibles = 0;
    for (let tarjeta of tarjetas) {
        if (!tarjeta.className.includes('hidden')) tarjetasVisibles++;
    }
    document.getElementById("mostrando").innerHTML = `Mostrando ${tarjetasVisibles} producto(s) de ${tarjetas.length}`;
}