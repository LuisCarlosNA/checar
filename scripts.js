function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Lógica de verificación del usuario y contraseña en la base de datos
  // Si el login es exitoso, redirigir al usuario a la página de productos
  // Guardar información de sesión o token de autenticación
  if (loginCorrecto = true) {
      alert("Login exitoso");
      // Redirigir a la página de productos
      window.location.href = "file:///C:/Users/Luisc/Desktop/p/index.html"
  } else {
      alert("Credenciales incorrectas");
  }
}

function register() {
  var regUsername = document.getElementById("regUsername").value;
  var regPassword = document.getElementById("regPassword").value;

  // Lógica de registro del nuevo usuario en la base de datos
  alert("Registro exitoso");
  window.location.href = "file:///C:/Users/Luisc/Desktop/p/index.html"
}