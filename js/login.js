$(document).ready(function() {
  var $nickNameLocal = localStorage.getItem('nick-name');
  console.log($nickNameLocal);
  var $passwordLocal = localStorage.getItem('password');
  var $nickName = $('#nick-name');
  var $password = $('#password');
  var $btnLogin = $('.button-ir');
  // CREANDO FUNCION QUE VALIDA LOS DATOS DEL IMPUT NICK NAME DE SIGNUP
  $nickName.on('keyup', function() {
    if ($nickName .val() == $nickNameLocal) {
      console.log($nickName);
    }
  });
  // CREANDO FUNCION QUE VALIDA LOS DATOS DEL IMPUT PASSWORD DE SIGNUP
  $password.on('keyup', function() {
    if ($password .val() == $passwordLocal) {
      $btnLogin.attr('disabled', false);
    } else {
      $btnLogin.attr('disabled', true);
    }
  });
});
