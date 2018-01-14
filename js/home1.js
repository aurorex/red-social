$(document).ready(function() {
  // obteniendo datos del localStorage para agregar al header
  var $nickName = localStorage.getItem('nick-name');
  $('.nick-name').append($nickName);
  var $phrase = localStorage.getItem('phrase');
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
  $inputImage.on('', function() {
    var $inputImageValue = $inputImage.val();
    if ($inputImageValue === '') {
      $('.button-modal-image').attr('disabled', 'disabled');
      $('.button-modal-image').removeClass('skyblue');
      alert('NO PUEDES INGRESAR TEXTO VACÍO');
    } else {
      $('.button-modal-image').removeAttr('disabled');
      $('.button-modal-image').addClass('skyblue', 'skyblue');
    }
  });
  // funcion para validar el 'input-file'
  var $inputFile = $('.input-file');
  $inputFile.on('', function() {
    var $inputFileValue = $inputFile.val();
    if ($inputFileValue === '') {
      $('.button-modal-image').attr('disabled', 'disabled');
      $('.button-modal-image').removeClass('skyblue');
      alert('NO PUEDES INGRESAR TEXTO VACÍO');
    } else {
      $('.button-modal-image').removeAttr('disabled');
      $('.button-modal-image').addClass('skyblue', 'skyblue');
    }
  });
  // funcion para validar el 'input-video'
  var $inputVideo = $('.input-video');
  $inputVideo.on('click', function() {
    var $inputVideoValue = $inputVideo.val();
    if ($inputVideoValue === '') {
      $('.button-modal-video').attr('disabled', 'disabled');
      $('.button-modal-video').removeClass('skyblue');
      alert('NO PUEDES INGRESAR TEXTO VACÍO');
    } else {
      $('.button-modal-video').removeAttr('disabled');
      $('.button-modal-video').addClass('skyblue', 'skyblue');
    }
  });
  // funcionalidad para el boton del modal de texto
  $('.button-modal-text').on('click', function() {
    var $inputTextValue = $inputText.val();
    $('.add-publications').append('<div class="col s6 prototype-text">' + 
                                    '<p class="user-publish">Publicado por: <a class="anchor-nickname">' + $nickName + '</a></p>' +
                                    '<p class="text-container">' + $inputTextValue + '</p>' +
                                    '<div class="div-icons ">' +
                                      '<a class="btn-floating  waves-effect waves-light red "><i class="material-icons ">favorite_border</i></a>' +
                                      '<a class="btn-floating  waves-effect waves-light green icon-comment"><i class="material-icons">comment</i></a>' +
                                      '<a class="btn-floating  waves-effect waves-light yellow "><i class="material-icons">star_border</i></a>' +
                                    '</div>' +
                                    '<div class="add-comments"></div>' +
                                  '</div>');
    var $iconComment = $('.icon-comment');
    $iconComment.on('click', function() {
      $('.section-modal-comment').toggle('show');
      // funcion para validar el 'input-comment'
      var $inputComment = $('.input-comment');
      $inputComment.on('keyup', function() {
        console.log('asd');
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
        $('.add-comments').empty();
        $('.add-comments').append('<span class="color-span">' + $nickName + ':' + ' </span>' + '<p class="color-p">' + $inputCommentValue + '<br>' + moment().format('LLLL') + '</p>' + '<br>');
        $inputCommentValue = $inputComment.val('');
        $('.button-modal-comment').attr('disabled', 'disabled');
        $('.button-modal-comment').removeClass('skyblue');
        $('.section-modal-comment').toggle('hide');
      });   
    });              
    $inputTextValue = $inputText.val('');
    $('.button-modal-text').attr('disabled', 'disabled');
    $('.button-modal-text').removeClass('skyblue');
    $('.section-modal-text').toggle('hide');
  });
  // evento para el button del 'image'
  $('.button-modal-image').on('click', function() {
    var $inputImageValue = $inputImage.val();
    var $inputFileValue = $inputFile.val();
    if ($inputImageValue.length > 1 && $inputFileValue.length < 1) {
      $('.add-publications').append('<div class="col s6 prototype-image">' + 
                                    '<p class="user-publish">Publicado por: <a class="anchor-nickname">' + $nickName + '</a></p>' +
                                    '<div class="image-container">' + $inputImageValue + '</div>' +
                                    '<div class="div-icons ">' +
                                      '<a class="btn-floating  waves-effect waves-light red "><i class="material-icons ">favorite_border</i></a>' +
                                      '<a class="btn-floating  waves-effect waves-light green icon-comment"><i class="material-icons">comment</i></a>' +
                                      '<a class="btn-floating  waves-effect waves-light yellow "><i class="material-icons">star_border</i></a>' +
                                    '</div>' +
                                    '<div class="add-comments"></div>' +
                                  '</div>');
    }
    if ($inputFileValue.length > 1 && $inputImageValue.length < 1) {
      $('.add-publications').append('<div class="col s6 prototype-image">' + 
                                    '<p class="user-publish">Publicado por: <a class="anchor-nickname">' + $nickName + '</a></p>' +
                                    '<div class="image-container">' + '<img src=" ../assets/images/' + $inputFileValue + '">' + '</div>' +
                                    '<div class="div-icons ">' +
                                      '<a class="btn-floating  waves-effect waves-light red "><i class="material-icons ">favorite_border</i></a>' +
                                      '<a class="btn-floating  waves-effect waves-light green icon-comment"><i class="material-icons">comment</i></a>' +
                                      '<a class="btn-floating  waves-effect waves-light yellow "><i class="material-icons">star_border</i></a>' +
                                    '</div>' +
                                    '<div class="add-comments"></div>' +
                                  '</div>');  
    }
    $inputImageValue = $inputImage.val('');
    $inputFileValue = $inputFile.val('');
    $('.button-modal-image').attr('disabled', 'disabled');
    $('.button-modal-image').removeClass('skyblue');
    $('.section-modal-image').toggle('hide');   
  }); 
  // evento para el button de modal de 'video' 
  $('.button-modal-video').on('click', function() {
    var $inputVideoValue = $inputVideo.val();
    $('.add-publications').append('<div class="col s6 prototype-video">' + 
                                    '<p class="user-publish">Publicado por: <a class="anchor-nickname">' + $nickName + '</a></p>' +
                                    '<div class="video-container">' + '<iframe width="560" height="315" src="' + $inputVideoValue + '" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>' + '</div>' +
                                    '<div class="div-icons ">' +
                                      '<a class="btn-floating  waves-effect waves-light red "><i class="material-icons ">favorite_border</i></a>' +
                                      '<a class="btn-floating  waves-effect waves-light green icon-comment"><i class="material-icons">comment</i></a>' +
                                      '<a class="btn-floating  waves-effect waves-light yellow "><i class="material-icons">star_border</i></a>' +
                                    '</div>' +
                                    '<div class="add-comments"></div>' +
                                  '</div>');
    $inputVideoValue = $inputVideo.val('');
    $inputFileValue = $inputFile.val('');
    $('.button-modal-video').attr('disabled', 'disabled');
    $('.button-modal-video').removeClass('skyblue');
    $('.section-modal-video').toggle('hide');
  });  
});