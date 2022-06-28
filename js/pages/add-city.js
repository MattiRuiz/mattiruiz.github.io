/* Local storage */
const miStorage = window.localStorage;

/* Widgets */
let botonAgregar = document.getElementById("botonAgregar")
let mensajeError = document.getElementById("error")
let mensajeSuccess = document.getElementById("success")
let mensajeWarning = document.getElementById("warning")

/* Clicker boton agregar */
botonAgregar.addEventListener("click", agregarCiudad)

/* Función agregar ciudad */
function agregarCiudadAlStorage(ciudadNueva){
    let ciudades = obtenerCiudadDelStorage();
    ciudades.push(ciudadNueva);
    miStorage.setItem("Ciudades", JSON.stringify(ciudades))
}

/* Función verificar ciudad y mensajes */
function agregarCiudad(){
    limpiarMensajes()
    let ciudadNueva = document.getElementById("ingresoCiudad").value;
    
    try{
        if(ciudadNueva){
            let listaCiudades = obtenerCiudadDelStorage()

            if (listaCiudades.includes(ciudadNueva)){
                mensajeWarning.style.display = "inline";
            } else {
                agregarCiudadAlStorage(ciudadNueva);
                mensajeSuccess.style.display = "inline"
            }

        } else {
            mensajeError.style.display = "inline";
        }
    } catch {
        mensajeError.style.display = "inline";
        alert("Hubo un error con la conexion al localStorage")
    }
}

/* Función obtener ciudad */
function obtenerCiudadDelStorage(){
    let ciudades = miStorage.getItem("Ciudades");

    if(ciudades) {
        ciudades = JSON.parse(ciudades)
    } else {
        ciudades = [];
    }

    return ciudades;
}

/* Limpiar Mensaje */
function limpiarMensajes(){
    mensajeError.style.display = "none";
    mensajeSuccess.style.display = "none";
    mensajeWarning.style.display = "none";
}
