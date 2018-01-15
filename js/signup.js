// cargando todo el árbol de nodos del DOM
$(document).ready(function() {
  var $nickName = $('#nick-name');
  var $password = $('#password');
  var $btnFrase = $('#btn-frase');
  var $btnRegistro = $('.button-registro');
  // CREANDO FUNCION QUE VALIDA LOS DATOS DEL IMPUT NICKNAME
  $nickName.on('blur', function() {
    if ($nickName.val().length <= 0) {
      $('.comment-nickname').show();
      $btnFrase.attr('disabled', true);
      $btnRegistro.attr('disabled', true);
    } else {
      $('.comment-nickname').hide();
    }
  });
  $nickName.on('click', function() {
    if ($nickName.val().length <= 0) {
      $('.comment-nickname').show();
      $btnFrase.attr('disabled', true);
      $btnRegistro.attr('disabled', true);
    } else {
      $('.comment-nickname').hide();
    }
  });
  $nickName.on('keydown', function(event) {
    console.log(event.keyCode);
    console.log($nickName.val().length);
    if ($nickName.val().length < 0) {
      $('.comment-nickname').show();
    } else if ($nickName.val().length > 0) {
      $('.comment-nickname').hide();
    }
    if ($nickName.val().length > 1 && $password.val().length > 6) {
      $btnFrase.attr('disabled', false);
      $btnRegistro.attr('disabled', false);
    }
    if (event.keyCode === 69) {
      if ($password.val().length <= 6 || $nickName.val().length <= 1) {
        $('.comment-password').show();
        $btnFrase.attr('disabled', true); 
        $btnRegistro.attr('disabled', true);
      }
      if ($password.val().length > 6 && $nickName.val().length <= 1) {
        $btnFrase.attr('disabled', true); 
        $btnRegistro.attr('disabled', true);
      }
    }
    if (event.keyCode === 32) {
      alert('NO ESTA PERMITIDO ESPACIOS EN BLANCO')
      $nickName.val('');
      console.log($nickName.val().length);
    }
  });
  // CREANDO FUNCION QUE VALIDA LOS DATOS DEL IMPUT PASSWORD

  $password.on('keyup', function(event) {

    console.log("NickNmae==>"+$nickName.val().length);

    if ($password.val().length <= 6) {
      $('.comment-password').show();
    } else if ($password.val().length > 6) {
      $('.comment-password').hide();
    }
  
    if ($password.val().length > 6 && $nickName.val().length > 1) {
      $btnFrase.attr('disabled', false); 
    } else if ($password.val().length <= 6 || $nickName.val().length <= 1) {
      $btnFrase.attr('disabled', true); 
      $btnRegistro.attr('disabled', true);
    } 

    if (event.keyCode === 69) {
      if ($password.val().length <= 6 || $nickName.val().length <= 1) {
        $('.comment-password').show();
        $btnFrase.attr('disabled', true); 
        $btnRegistro.attr('disabled', true);
      }
      if ($password.val().length > 6 && $nickName.val().length <= 1) {
        $btnFrase.attr('disabled', true); 
        $btnRegistro.attr('disabled', true);
      }
    }
  });
  // CREANDO EVENTO CLICK QUE AGREGA IMAGEN DE FRASES DE MANERA ALEATORIA
  $btnFrase.on('click', function() {
    $btnRegistro.attr('disabled', false);
    var min = 1;
    var max = 5;
    //  CREANDO VARIALE PARA IMAGENES DE FRASES ALEATORIAS
    var aleatorio = Math.floor(Math.random() * (max - (min - 1))) + min;
    var imagePhrase = '<img src="../assets/images/frase' + aleatorio + '.png' + '">';
    
    var phraseContainer = $('.frase'); // div que contiene el botón de frase y almacenará el img-frase
    phraseContainer.empty();
    phraseContainer.append(imagePhrase);
  });
  // CREANDO FUNCION QUE GUARDA DATOS EN EL NAVEGADOR
<<<<<<< HEAD
=======
  $btnFrase.on('click', function() {
    localStorage.setItem('img-frase', $imagePhrase.val());
  });
>>>>>>> aurora
  $btnRegistro.on('click', function() {
    localStorage.setItem('nick-name', $nickName.val());
  });
  
});
