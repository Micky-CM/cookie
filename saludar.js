function obtenerNombre() {
  let nombreCookie = document.cookie.split(';').find(c => c.trim().startsWith('nombreUsuario='));
  if (nombreCookie) {
      let nombre = nombreCookie.split('=')[1];
      document.getElementById("saludo").textContent = "El usuario " + nombre + " está registrado.";
  } else {
      document.getElementById("saludo").textContent = "No se encontró ninguna cookie.";
  }
}
obtenerNombre();