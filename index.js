// FILTROSSSS //

const filtroBusqueda = document.querySelector("#busqueda");
const tarjetas = document.getElementsByTagName("article");
const checkboxes = document.querySelectorAll("input[type='checkbox']");
const BotonLimpiar = document.querySelector("#tacho");



filtroBusqueda.oninput = () => {
    for (let tarjeta of tarjetas) {
        const titulo = tarjeta.dataset.nombre;
        const busqueda = filtroBusqueda.value;

        if (titulo.includes(busqueda)) {
            tarjeta.classList.remove('hidden');
        } else {
            tarjeta.classList.add('hidden');
        }
    }
}



for (let checkbox of checkboxes) {
    checkbox.onclick = () => {
        filtrarTarjetas();
    };
}


const hayCkeckboxSeleccionado = () => {
    for (let checkbox of checkboxes) {
        if (checkbox.checked) {
            return true
        }
    }
    return false
}


const coincidenCheckboxYTarjeta = tarjeta => {
    const rating = tarjeta.dataset.rating;
    for (let checkbox of checkboxes) {
        if (checkbox.value === rating && checkbox.checked) {
            return true;
        }

    }
    return false
}

const filtrarTarjetas = () => {
    for (let tarjeta of tarjetas) {
        tarjeta.classList.add('hidden');
        if (hayCkeckboxSeleccionado()) {
            if (coincidenCheckboxYTarjeta(tarjeta)) {
                tarjeta.classList.remove('hidden');
            }
        } else {
            tarjeta.classList.remove('hidden')
        }
    }
}

//   FIN DE FILTROSSSS   //



// PARA LIMPIAR FILTROS//

BotonLimpiar.onclick = () => {
    filtroBusqueda.value = ""

    for (let checkbox of checkboxes) {
        checkbox.checked = false
    }

}