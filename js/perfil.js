$(document).ready(function() {
  var $textarea = $('.materialize-textarea');
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
    $divContainerPosts .append('<div class="container-posts col s12">' + $textarea.val() + '</div>');
    $divContainerPosts .append('<div class="time">' + moment().format('LLLL') + '</div>');
  });
  //  agregando funcion Seguir (al botón seguir)
  $btnFollow.on('click', function() {
    $(this).addClass('following');

    $divContainerFollowers .append('');
  });
  //  agregando nickName de registro
  var $nickName = localStorage.getItem('nick-name');
  $('h4').append($nickName);
});
