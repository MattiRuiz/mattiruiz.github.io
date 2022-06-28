/* Local storage */
const miStorage = window.localStorage;
const weatherKey = "7c2c556ef01426170713753a48bb7e52"

/* Widgets */
let botonConsulta = document.getElementById("botonConsulta")
let selectorDeCiudades = document.getElementById("selectorCiudad")
let mensajeWarning = document.getElementById("warning")
let cardDatos = document.getElementById("carta")
let presentacion = document.getElementById("presentacion")

/* Clicker boton agregar */
botonConsulta.addEventListener("click", fetchCiudad)

/* Función devolver ciudad */
function devolverListaDeCiudades(){
    ciudadesStringify = miStorage.getItem("Ciudades")
    listaCiudades = JSON.parse(ciudadesStringify)
    return listaCiudades
}

/* Constructor del select con carga onload */
function agregarCiudadAlSelector(){
    limpiarMensajes()
    listaCiudades = devolverListaDeCiudades()

    for (const ciudad in listaCiudades){
        const unOption = document.createElement("option")
        unOption.value = `${listaCiudades[ciudad]}`
        unOption.textContent = `${listaCiudades[ciudad]}`
        selectorDeCiudades.appendChild(unOption)
    }    
}
window.onload = agregarCiudadAlSelector()

/* Función devolver ciudad */
function devolverCiudad(){
    limpiarMensajes()
    ciudadSeleccionada = selectorDeCiudades.value

    if (ciudadSeleccionada){
        return ciudadSeleccionada
    } else {
        mensajeWarning.style.display = "block";
    }
}

/* Limpiar Mensaje */
function limpiarMensajes(){
    mensajeWarning.style.display = "none";
}

function fetchCiudad(){
    ciudad = devolverCiudad()
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${weatherKey}&units=metric&lang=es`)
        .then(response => response.json())
        .then(data => agregarInformacion(data));
}

/* Widgets card */
let ciudadTitulo = document.getElementById("ciudadTitulo")
let ciudadIcono = document.getElementById("ciudadIcono")
let ciudadTemp = document.getElementById("ciudadTemp")
let ciudadTermica = document.getElementById("ciudadTermica")
let ciudadHumedad = document.getElementById("ciudadHumedad")
let ciudadViento = document.getElementById("ciudadViento")
let ciudadPresion = document.getElementById("ciudadPresion")


function agregarInformacion(data) {
    console.log(data)
    cardDatos.style.display = "block"
    presentacion.style.display = "none"
    ciudadTitulo.innerHTML = data.name
    ciudadIcono.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    ciudadTemp.innerHTML = `Temperatura: ${data.main.temp}°`
    ciudadTermica.innerHTML = `Sensación térmica: ${data.main.feels_like}°`
    ciudadHumedad.innerHTML = `Humedad: ${data.main.humidity}%`
    ciudadViento.innerHTML = `Velocidad del viento: ${data.wind.speed}km/h`
    ciudadPresion.innerHTML = `Presión: ${data.main.pressure} P`
}

