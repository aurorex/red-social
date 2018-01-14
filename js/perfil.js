$(document).ready(function() {
  var $textarea = $('#insert-text');
  var $btnPosting = $('.btn-posting');
  var $divContainerPosts = $('#div-posts');
  var $btnFollow = $('.btn-follow');
  var $divContainerFollowers = $('#followers');
  //  agregando funcion para realizar una publicación
  $textarea.on('input', function() {
    if ($textarea.val() === '') {
      $btnPosting.attr('disabled', true);
    } else {
      $btnPosting.attr('disabled', false);
    }
  });
  //  agregando evento al boton para guardar las publicaciones en un contenedor
  $btnPosting.on('click', function() {
    //  agregando hora de publicación
    $divContainerPosts .append('<div class="container-posts">' + $textarea.val() + '</div>');
    $divContainerPosts .append('<div class="time">' + moment().format('LLLL') + '</div>');
  });
  //  agregando funcion Seguir (al botón seguir)
  $btnFollow.on('click', function() {
    $(this).addClass('following');
    //  agregando hora de publicación
    $divContainerFollowers .append('');
  });
  //  agregando nombre se usuario registrado
  var $nickname = localStorage.getItem('nick-name');
  $('h6>strong').append($nickname);
  //  agregando frase
  var $divFrase = $('.frase');
  var min = 1;
  var max = 5;
  //  CREANDO VARIALE PARA IMAGENES DE FRASES ALEATORIAS
  var aleatorio = Math.floor(Math.random() * (max - (min - 1))) + min;
  var imagePhrase = '<img src="../assets/images/frase' + aleatorio + '.png' + '">';
  $divFrase.append(imagePhrase);
});
