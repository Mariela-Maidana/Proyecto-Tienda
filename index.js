// FILTROSSSS //

const filtroBusqueda = document.querySelector("#busqueda");
const tarjetas = document.getElementsByTagName("article");
const checkboxesRating = document.getElementsByName("puntaje");
const checkboxesCategoria = document.getElementsByName("categoria");
const botonLimpiar = document.querySelector("#tacho");
const botonCuadricula = document.getElementById("boton-cuadricula")
const botonLista = document.getElementById("boton-lista")
const listaArticulos = document.getElementById("lista-articulos")
const listaDescripciones = document.querySelectorAll(".product-details-hide")


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

const hayCkeckboxSeleccionado = () => {
    for (let checkbox of checkboxesRating) {
        if (checkbox.checked) {
            return true
        }
    }
    return false
}


const coincidenCheckboxYTarjeta = tarjeta => {
    const rating = tarjeta.dataset.rating;
    for (let checkbox of checkboxesRating) {
        if (checkbox.value === rating && checkbox.checked) {
            return true;
        }

    }
    return false
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