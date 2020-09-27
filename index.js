const filtroBusqueda = document.querySelector("#busqueda");
const tarjetas = document.getElementsByTagName("article");
const filtroRating = document.getElementsByClassName("stars-input");

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


for (let checkbox of filtroRating) {
    checkbox.onclick = () => {
        for (let tarjeta of tarjetas) {
            if (checkbox.checked) {
                const rating = tarjeta.dataset.rating;
                if (checkbox.value === rating) {
                    tarjeta.classList.remove('hidden');
                } else {
                    tarjeta.classList.add('hidden');
                }
            } else {
                tarjeta.classList.remove('hidden');
            }
        }
    }
}