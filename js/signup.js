// cargando todo el árbol de nodos del DOM
$(document).ready(function() {
  var $nickName = $('#nick-name');
  var $password = $('#password');
  var $btnFrase = $('#btn-frase');
  var $btnRegistro = $('.button-registro');
  // CREANDO FUNCION QUE VALIDA LOS DATOS DEL IMPUT PASSWORD
  $password.on('input', function() {
    if ($password .val().length >= 6) {
      $btnFrase.attr('disabled', false);
    } else {
      $btnFrase.attr('disabled', true);
    }
  });
  // CREANDO EVENTO CLICK QUE AGREGA IMAGEN DE FRASES DE MANERA ALEATORIA
  $btnFrase.on('click', function() {
    var min = 1;
    var max = 5;
    //  CREANDO VARIALE PARA IMAGENES DE FRASES ALEATORIAS
    var aleatorio = Math.floor(Math.random() * (max - (min - 1))) + min;
    var imagePhrase = '<img src="../assets/images/frase' + aleatorio + '.png' + '">';
    var phraseContainer = $('.frase'); // div que contiene el botón de frase y almacenará el img-frase
    phraseContainer.append(imagePhrase);
    $btnFrase.off('click');
    $btnRegistro.attr('disabled', false);
  });
  // CREANDO FUNCION QUE GUARDA DATOS EN EL NAVEGADOR
  $btnFrase.on('click', function() {
    localStorage.setItem('img-frase', $imagePhrase.val());
  });
  $btnRegistro.on('click', function() {
    localStorage.setItem('nick-name', $nickName.val());
  });
  
});
