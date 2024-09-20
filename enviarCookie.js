function crearCookie() {
  let nombre = document.getElementById("nombre").value;
  let fechaExpiracion = new Date();
  fechaExpiracion.setDate(fechaExpiracion.getDate() + 7);

  document.cookie = "nombreUsuario=" + nombre + "; expires=" + fechaExpiracion.toUTCString();

  window.location.href = "pagina2.html";
}