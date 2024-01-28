let bontonBusqueda = document.getElementById("bonton-Busqueda");
let paisBuscado = document.getElementById("pais-Buscado");
bontonBusqueda.addEventListener("click", () => {
    let nobrePais = paisBuscado.value;
    let urlBase = `https://restcountries.com/v3.1/translation/${nobrePais}`;
    console.log(urlBase);
    fetch(urlBase)
        .then((response) => response.json())
        .then((data) => {
            console.log(data[0]);
            console.log(data[0].capital[0]);
            console.log(data[0].flags.svg);
            console.log(data[0].name.common);
            console.log(data[0].continents[0]);
            console.log(Object.keys(data[0].currencies)[0]);
            console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
            console.log(
                Object.values(data[0].languages).toString().split(",").join(", ")
            );
   
            datosPais.innerHTML = `
        <img src="${data[0].flags.svg}" class="flag-img">
        <h2>${data[0].name.common}</h2>
        <div class="Contenedor">
            <div class="data">
                <h4>Capital:</h4>
                <span>${data[0].capital[0]}</span>
            </div>
        </div>
        <div class="Contenedor">
            <div class="data">
                <h4>Continente:</h4>
                <span>${data[0].continents[0]}</span>
            </div>
        </div>
         <div class="Contenedor">
            <div class="data">
                <h4>Población:</h4>
                <span>${data[0].population} millones de personas</span>
            </div>
        </div>
        <div class="Contenedor">
            <div class="data">
                <h4>Moneda:</h4>
                <span>${data[0].currencies[Object.keys(data[0].currencies)].name
        } - ${Object.keys(data[0].currencies)[0]}</span>
            </div>
        </div>
         <div class="Contenedor">
            <div class="data">
                <h4>Idiomas oficiales:</h4>
                <span>${Object.values(data[0].languages)
            .toString()
            .split(",")
            .join(", ")}</span>
            </div>
        </div>
      `;
})

    .catch(() => {
        if (nobrePais.length == 0) {
            datosPais.innerHTML = `<h3 class="errorBusqueda">Por favor ingrese un pais</h3>`;
        } else {
            datosPais.innerHTML = `<h3 class="errorBusqueda">Pais no regitrado!.</h3>`;
        }
    });
    
});    

