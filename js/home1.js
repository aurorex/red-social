$(document).ready(function() {
  // obteniendo datos del localStorage para agregar al header
  var $nickName = localStorage.getItem('nick-name');
  $('.nick-name').append($nickName);
  var $phrase = localStorage.getItem('img-frase');
  $('.phrase').append($phrase);
  // funcionalidad para los buttons de la seccion 'portada'
  $('.button-text').on('click', function() {
    $('.section-modal-text').toggle('show');
  });
  $('.button-image').on('click', function() {
    $('.section-modal-image').toggle('show');
  });
  $('.button-video').on('click', function() {
    $('.section-modal-video').toggle('show');
  });
  $('.button-link').on('click', function() {
    $('.section-modal-link').toggle('show');
  });
  // funcionalidad para el icono 'close' de la seccion de modales
  $('.icon-close-text').on('click', function() {
    $('.section-modal-text').toggle('hide');
  });
  $('.icon-close-image').on('click', function() {
    $('.section-modal-image').toggle('hide');
  });
  $('.icon-close-video').on('click', function() {
    $('.section-modal-video').toggle('hide');
  });
  $('.icon-close-comment').on('click', function() {
    $('.section-modal-comment').toggle('hide');
  });
  $('.icon-close-link').on('click', function() {
    $('.section-modal-link').toggle('hide');
  });
  // funcionalidad para validar el 'input-text'
  var $inputText = $('.input-text');
  $inputText.on('keyup', function(event) {
    var $inputTextValue = $inputText.val();
    $('.button-modal-text').removeAttr('disabled');
    $('.button-modal-text').addClass('skyblue', 'skyblue');
    if ($inputTextValue === '' || event.keyCode === 69 && $inputTextValue.length < 1 || event.keyCode === 32 && $inputTextValue.length <= 4) {
      $('.button-modal-text').attr('disabled', 'disabled');
      $('.button-modal-text').removeClass('skyblue');
      alert('NO PUEDES INGRESAR TEXTO VACÍO');
    }
  });
  // funcion para validar el 'input-image'
  var $inputImage = $('.input-image');
  $inputImage.on('input', function() {
    var $inputImageValue = $inputImage.val();
    console.log($inputImageValue);
    if ($inputImageValue.length === null) {
      $('.button-modal-image').attr('disabled', 'disabled');
      $('.button-modal-image').removeClass('skyblue');
    } else {
      $('.button-modal-image').removeAttr('disabled');
      $('.button-modal-image').addClass('skyblue', 'skyblue');
    }
  });
  
  // funcion para validar el 'input-video'
  var $inputVideo = $('.input-video');
  $inputVideo.on('input', function() {
    var $inputVideoValue = $inputVideo.val();
    if ($inputVideoValue.length === null) {
      $('.button-modal-video').attr('disabled', 'disabled');
      $('.button-modal-video').removeClass('skyblue');
    } else {
      $('.button-modal-video').removeAttr('disabled');
      $('.button-modal-video').addClass('skyblue', 'skyblue');
    }
  });
  // funcion para validar el 'input-link'
  var $inputLink = $('.input-link');
  $inputLink.on('input', function() {
    var $inputVideoValue = $inputVideo.val();
    if ($inputVideoValue.length === null) {
      $('.button-modal-link').attr('disabled', 'disabled');
      $('.button-modal-link').removeClass('skyblue');
    } else {
      $('.button-modal-link').removeAttr('disabled');
      $('.button-modal-link').addClass('skyblue', 'skyblue');
    }
  });
  // funcionalidad para el boton del modal de texto
  $('.button-modal-text').on('click', function() {
    var $inputTextValue = $inputText.val();
    var publications = '<div class="col s6 prototype-text">' + 
    '<p class="user-publish">Publicado por: <a class="anchor-nickname">' + $nickName + '</a></p>' +
    '<p class="description"></p>' +
    '<p class="text-container">' + $inputTextValue + '</p>' +
    '<div class="div-icons ">' +
      '<a class="btn-floating  waves-effect waves-light red "><i class="material-icons ">favorite_border</i></a>' +
      '<a class="btn-floating  waves-effect waves-light green icon-comment"><i class="material-icons">comment</i></a>' +
      '<a class="btn-floating  waves-effect waves-light yellow "><i class="material-icons">star_border</i></a>' +
    '</div>' +
    '<div class="add-comments"></div>' +
    '</div>';
    // guardar publicaciones
    localStorage.setItem('publications-text', publications);
    var $publications = localStorage.getItem('publications-text');
    $('.add-publications').append($publications);
    // evento del icon-comment
    var $iconComment = $('.icon-comment');
    console.log($iconComment.length);
    console.log($('.add-comments'));
    $($iconComment).each(function(index, element) {
      console.log(index);
      console.log($('.add-comments')[index]);
      $(element).on('click', function() {
        $('.section-modal-comment').toggle('show');
        // funcion para validar el 'input-comment'
        var $inputComment = $('.input-comment');
        $inputComment.on('keyup', function() {
          var $inputCommentValue = $(this).val();
          $('.button-modal-comment').removeAttr('disabled');
          $('.button-modal-comment').addClass('skyblue', 'skyblue');
          if ($inputCommentValue === '' || event.keyCode === 69 && $inputCommentValue.length < 1 || event.keyCode === 32 && $inputCommentValue.length <= 4) {
            $('.button-modal-comment').attr('disabled', 'disabled');
            $('.button-modal-comment').removeClass('skyblue');
            alert('NO PUEDES INGRESAR TEXTO VACÍO'); 
          }
        });
        // evento para el button de modal de 'comment'
        $('.button-modal-comment').on('click', function() {
          var $inputCommentValue = $inputComment.val();
          // guardar data de comentarios
          var comments = '<span class="color-span">' + $nickName + ':' + ' </span>' + '<p class="color-p">' + $inputCommentValue + '<br>' + moment().format('LLLL') + '</p>' + '<br>';
          localStorage.setItem('comments', comments);
          var $comments = localStorage.getItem('comments');
          $($('.add-comments')[index]).append($comments);
          // ejecucuion del button
          $inputCommentValue = $inputComment.val('');
          $('.button-modal-comment').attr('disabled', 'disabled');
          $('.button-modal-comment').removeClass('skyblue');
          $('.section-modal-comment').toggle('hide'); 
        });   
      });
    }); 
    // ejecucion del button
    $('.description').append($('.description-text').val());
    $('.description-text').val('');
    $inputTextValue = $inputText.val('');
    $('.button-modal-text').attr('disabled', 'disabled');
    $('.button-modal-text').removeClass('skyblue');
    $('.section-modal-text').toggle('hide');
  });
  // evento para el button del 'image'
  $('.button-modal-image').on('click', function() {
    var $inputImageValue = $inputImage.val();
    var publicationsImage = '<div class="col s6 prototype-image">' + 
    '<p class="user-publish">Publicado por: <a class="anchor-nickname">' + $nickName + '</a></p>' +
    '<p class="description"></p>' +
    '<div class="image-container">' + '<img class="responsive-img" src="' + $inputImageValue + '">' + '</div>' +
    '<div class="div-icons ">' +
      '<a class="btn-floating  waves-effect waves-light red "><i class="material-icons ">favorite_border</i></a>' +
      '<a class="btn-floating  waves-effect waves-light green icon-comment"><i class="material-icons">comment</i></a>' +
      '<a class="btn-floating  waves-effect waves-light yellow "><i class="material-icons">star_border</i></a>' +
    '</div>' +
    '<div class="add-comments"></div>' +
    '</div>';             
    // guardar publicaciones
    localStorage.setItem('publications-image', publicationsImage);
    var $publicationsImage = localStorage.getItem('publications-image');
    $('.add-publications').append($publicationsImage);
    // evento para el icon
    var $iconComment = $('.icon-comment');
    console.log($iconComment.length);
    console.log($('.add-comments'));
    $($iconComment).each(function(index, element) {
      console.log(index);
      console.log($('.add-comments')[index]);
      $(element).on('click', function() {
        $('.section-modal-comment').toggle('show');
        // funcion para validar el 'input-comment'
        var $inputComment = $('.input-comment');
        $inputComment.on('keyup', function() {
          var $inputCommentValue = $(this).val();
          $('.button-modal-comment').removeAttr('disabled');
          $('.button-modal-comment').addClass('skyblue', 'skyblue');
          if ($inputCommentValue === '' || event.keyCode === 69 && $inputCommentValue.length < 1 || event.keyCode === 32 && $inputCommentValue.length <= 4) {
            $('.button-modal-comment').attr('disabled', 'disabled');
            $('.button-modal-comment').removeClass('skyblue');
            alert('NO PUEDES INGRESAR TEXTO VACÍO'); 
          }
        });
        // evento para el button de modal de 'comment'
        $('.button-modal-comment').on('click', function() {
          var $inputCommentValue = $inputComment.val();
          // guardar data de comentarios
          var comments = '<span class="color-span">' + $nickName + ':' + ' </span>' + '<p class="color-p">' + $inputCommentValue + '<br>' + moment().format('LLLL') + '</p>' + '<br>';
          localStorage.setItem('comments', comments);
          var $comments = localStorage.getItem('comments');
          $($('.add-comments')[index]).append($comments);
          // ejecucuion del button
          $inputCommentValue = $inputComment.val('');
          $('.button-modal-comment').attr('disabled', 'disabled');
          $('.button-modal-comment').removeClass('skyblue');
          $('.section-modal-comment').toggle('hide');
        });   
      });
    });
    // ejecucion del button
    $('.description').append($('.description-image').val());
    $('.description-image').val(''); 
    $inputImageValue = $inputImage.val('');
    $('.button-modal-image').attr('disabled', 'disabled');
    $('.button-modal-image').removeClass('skyblue');
    $('.section-modal-image').toggle('hide');   
  }); 
  // evento para el button de modal de 'link' 
  $('.button-modal-link').on('click', function() {
    var $inputLinkValue = $inputLink.val();
    var publicationsLink = '<div class="col s6 prototype-video">' + 
    '<p class="user-publish">Publicado por: <a class="anchor-nickname">' + $nickName + '</a></p>' +
    '<p class="description"></p>' +
    '<a href="' + $inputLinkValue + '" target="_blank" class="btn">' + $inputLinkValue + '</a>' +
    '<div class="div-icons ">' +
      '<a class="btn-floating  waves-effect waves-light red "><i class="material-icons ">favorite_border</i></a>' +
      '<a class="btn-floating  waves-effect waves-light green icon-comment"><i class="material-icons">comment</i></a>' +
      '<a class="btn-floating  waves-effect waves-light yellow "><i class="material-icons">star_border</i></a>' +
    '</div>' +
    '<div class="add-comments"></div>' +
    '</div>';
    // guardar publicaciones
    localStorage.setItem('publications-link', publicationsLink);
    var $publicationsLink = localStorage.getItem('publications-link');
    $('.add-publications').append($publicationsLink);
    // evento para el icon
    var $iconComment = $('.icon-comment');
    console.log($iconComment.length);
    console.log($('.add-comments'));
    $($iconComment).each(function(index, element) {
      console.log(index);
      console.log($('.add-comments')[index]);
      $(element).on('click', function() {
        $('.section-modal-comment').toggle('show');
        // funcion para validar el 'input-comment'
        var $inputComment = $('.input-comment');
        $inputComment.on('keyup', function() {
          var $inputCommentValue = $(this).val();
          $('.button-modal-comment').removeAttr('disabled');
          $('.button-modal-comment').addClass('skyblue', 'skyblue');
          if ($inputCommentValue === '' || event.keyCode === 69 && $inputCommentValue.length < 1 || event.keyCode === 32 && $inputCommentValue.length <= 4) {
            $('.button-modal-comment').attr('disabled', 'disabled');
            $('.button-modal-comment').removeClass('skyblue');
            alert('NO PUEDES INGRESAR TEXTO VACÍO'); 
          }
        });
        // evento para el button de modal de 'comment'
        $('.button-modal-comment').on('click', function() {
          var $inputCommentValue = $inputComment.val();
          // guardar data de comentarios
          var comments = '<span class="color-span">' + $nickName + ':' + ' </span>' + '<p class="color-p">' + $inputCommentValue + '<br>' + moment().format('LLLL') + '</p>' + '<br>';
          localStorage.setItem('comments', comments);
          var $comments = localStorage.getItem('comments');
          $($('.add-comments')[index]).append($comments);
          // ejecucuion del button
          $inputCommentValue = $inputComment.val('');
          $('.button-modal-comment').attr('disabled', 'disabled');
          $('.button-modal-comment').removeClass('skyblue');
          $('.section-modal-comment').toggle('hide');
        });   
      });
    });
    // ejecucuion del button
    $('.description').append($('.description-link').val());
    $('.description-link').val('');
    $inputLinkValue = $inputLink.val('');
    $('.button-modal-link').attr('disabled', 'disabled');
    $('.button-modal-link').removeClass('skyblue');
    $('.section-modal-link').toggle('hide');
  });
  // evento para el button de modal de video 
  $('.button-modal-video').on('click', function() {
    var $inputVideoValue = $inputVideo.val();
    var publicationsVideo = '<div class="col s6 prototype-video">' + 
    '<p class="user-publish">Publicado por: <a class="anchor-nickname">' + $nickName + '</a></p>' +
    '<p class="description"></p>' +
    '<div class="video-container">' + '<iframe width="560" height="315" src="https://www.youtube.com/embed/' + $inputVideoValue + '" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>' + '</div>' +
    '<div class="div-icons ">' +
      '<a class="btn-floating  waves-effect waves-light red "><i class="material-icons ">favorite_border</i></a>' +
      '<a class="btn-floating  waves-effect waves-light green icon-comment"><i class="material-icons">comment</i></a>' +
      '<a class="btn-floating  waves-effect waves-light yellow "><i class="material-icons">star_border</i></a>' +
    '</div>' +
    '<div class="add-comments"></div>' +
    '</div>';
    // guardar publicaciones
    localStorage.setItem('publications-video', publicationsVideo);
    var $publicationsVideo = localStorage.getItem('publications-video');
    $('.add-publications').append($publicationsVideo);
    // evento para el icon
    var $iconComment = $('.icon-comment');
    console.log($iconComment.length);
    console.log($('.add-comments'));
    $($iconComment).each(function(index, element) {
      console.log(index);
      console.log($('.add-comments')[index]);
      $(element).on('click', function() {
        $('.section-modal-comment').toggle('show');
        // funcion para validar el 'input-comment'
        var $inputComment = $('.input-comment');
        $inputComment.on('keyup', function() {
          var $inputCommentValue = $(this).val();
          $('.button-modal-comment').removeAttr('disabled');
          $('.button-modal-comment').addClass('skyblue', 'skyblue');
          if ($inputCommentValue === '' || event.keyCode === 69 && $inputCommentValue.length < 1 || event.keyCode === 32 && $inputCommentValue.length <= 4) {
            $('.button-modal-comment').attr('disabled', 'disabled');
            $('.button-modal-comment').removeClass('skyblue');
            alert('NO PUEDES INGRESAR TEXTO VACÍO'); 
          }
        });
        // evento para el button de modal de 'comment'
        $('.button-modal-comment').on('click', function() {
          var $inputCommentValue = $inputComment.val();
          // guardar data de comentarios
          var comments = '<span class="color-span">' + $nickName + ':' + ' </span>' + '<p class="color-p">' + $inputCommentValue + '<br>' + moment().format('LLLL') + '</p>' + '<br>';
          localStorage.setItem('comments', comments);
          var $comments = localStorage.getItem('comments');
          $($('.add-comments')[index]).append($comments);
          // ejecucuion del button
          $inputCommentValue = $inputComment.val('');
          $('.button-modal-comment').attr('disabled', 'disabled');
          $('.button-modal-comment').removeClass('skyblue');
          $('.section-modal-comment').toggle('hide');
        });   
      });
    });
    // ejecucion del button
    $('.description').append($('.description-video').val());
    $('.description-video').val('');
    $inputVideoValue = $inputVideo.val('');
    $('.button-modal-video').attr('disabled', 'disabled');
    $('.button-modal-video').removeClass('skyblue');
    $('.section-modal-video').toggle('hide');
  });
  // guardar data al cargar la pagina 
  var $publications = localStorage.getItem('publications-text');
  $('.add-publications').append($publications);
  var $publicationsImage = localStorage.getItem('publications-image');
  $('.add-publications').append($publicationsImage);
  var $publicationsLink = localStorage.getItem('publications-link');
  $('.add-publications').append($publicationsLink);
  var $publicationsVideo = localStorage.getItem('publications-video');
  $('.add-publications').append($publicationsVideo);
  // guardar data de los comentarios al cargar la pagina
  var $comments = localStorage.getItem('comments');
  $('.add-comments').append($comments);
  var $iconComment = $('.icon-comment');
});

