$(document).ready(function() {
  // obteniendo datos para agregar al header
  var $nickName = localStorage.getItem('nick-name');
  $('div.div-img>p').append($nickName);
  // funcionalidad para el modal 'comentar'
  var $iconComment = $('.icon-comment');
  // evento para el icono 'comment'
  $iconComment.on('click', function() {
    $('.section-modal').removeAttr('hidden');
    var $input = $('div.add-comment>input');
    // evento para el input
    $input.on('keyup', function(event) {
      var $inputValue = $('div.add-comment>input').val();
      $('.button-comment').removeAttr('disabled');
      // condicion que deshabilita el button del modal
      if ($inputValue === '' || event.keyCode === 69 && $inputValue.lenght <= 1) {
        $('.button-comment').attr('disabled', 'disabled');
      }
    });
    // funcionalidad para el button y icon del modal
    $('.button-comment').on('click', function() {
      var $inputValue = $('div.add-comment>input').val();
      $('.comments').append('<span class="color-span">' + $nickName + ':' + ' </span>' + '<p class="color-p">' + $inputValue + '<br>' + moment().format('LLLL') + '</p>' + '<br>');
      $inputValue = $('div.add-comment>input').val('');
      $('.new').html('');

    });
    $('.icon-close').on('click', function() {
      $('.comments').empty();
      $('.section-modal').attr('hidden', 'hidden');
    });
  });
  // funcionalidad para el modal 'publicar'
  var $iconAdd = $('div.card-image>a');
  // evento para el icono add(+)
  $iconAdd.on('click', function() {
    $('.section-modal2').removeAttr('hidden');
    // evento para el icono 'close'
    $('.icon-close').on('click', function() {
      $('.section-modal2').attr('hidden', 'hidden');
    });
    // evento para los iconos del modal
    $('.icon-input-text').on('mouseover', function() {
      $('.input-text').removeAttr('hidden');
      $('.input-field').attr('hidden', 'hidden');
      var $inputText = $('.add-text');
      var $inputLink = $('.add-link');
      var $inputTitle = $('.add-title');
      var $inputVideo = $('.add-video');
      // evento para los inputs del modal
      $inputText.on('keyup', function(event) {
        var $inputTextValue = $inputText.val();
        $('.button-upload').removeAttr('disabled');
        if ($inputTextValue === '' || event.keyCode === 69 && $inputTextValue.lenght <= 1) {
          $('.button-upload').attr('disabled', 'disabled');
        }
      });
      $inputLink.on('click', function() {
        var $inputLinkValue = $inputLink.val();
        $('.button-upload').removeAttr('disabled');
      });
      $inputTitle.on('keyup', function(event) {
        var $inputTitleValue = $inputTitle.val();
        $('.button-upload').removeAttr('disabled');
        if ($inputTitleValue === '' || event.keyCode === 69 && $inputTitleValue.lenght <= 1) {
          $('.button-upload').attr('disabled', 'disabled');
        }
      });
      $inputVideo.on('click', function() {
        var $inputVideoValue = $inputVideo.val();
        $('.button-upload').removeAttr('disabled');
      });
      // evento del button del modal: agregando elementos al html
      $('.button-upload').on('click', function() {
        $('p>a.nick-name').empty();
        $('p>a.nick-name').append($nickName);
        // evento para el input 'add-text'
        var $inputTextValue = $inputText.val();
        $('div.card-content>p.text').empty();
        $('div.card-content>p.text').append($inputTextValue);
        $inputTextValue = $inputText.val('');
        // evento para el input 'add-link'
        var $inputLinkValue = $inputLink.val();
        $('div.card-content>a.link').removeAttr('href');
        $('div.card-content>a.link').attr('href', $inputLinkValue);
        $inputLinkValue = $inputLink.val('');
        // evento para el input 'add-title'
        var $inputTitleValue = $inputTitle.val();
        $('div.card-content>span.title').empty();
        $('div.card-content>span.title').append($inputTitleValue);
        $inputTitleValue = $inputTitle.val('');
        // evento para el input 'add-video'
        var $inputVideoValue = $inputVideo.val();
        $('div.card-content>iframe.video').removeAttr('src');
        $('div.card-conten>iframe.video').attr('src', $inputVideoValue);
        $inputVideoValue = $inputVideo.val('');
        // creando nuevos contenidos
        // var $new = $('.new');
        $('.user-post').removeClass('hide');
        // deshabilitando modal2
        $('.section-modal2').attr('hidden', 'hidden');
      });
    });
    // evento para los iconos 'input-file'
    $('.icon-input-file').on('mouseover', function() {
      $('.input-field').removeAttr('hidden');
      $('.input-text').attr('hidden', 'hidden');
      var $inputTitle = $('.add-title');
      var $inputImage = $('add-img');
      // evento para los inputs del modal
      $inputTitle.on('keyup', function(event) {
        var $inputTitleValue = $inputTitle.val();
        $('.button-upload').removeAttr('disabled');  
        if ($inputTitleValue === '' || event.keyCode === 69 && $inputTitleValue.lenght <= 1) {
          $('.button-upload').attr('disabled', 'disabled');
        }
      });
      $inputImage.on('click', function() {
        var $inputImageValue = $inputImage.val();
        $('.button-upload').removeAttr('disabled');  
      });
      // evento del button del modal: agregando elementos al html
      $('.button-upload').on('click', function() {
        $('p>a.nick-name').empty();
        $('p>a.nick-name').append($nickName);
        // evento para el input 'add-title'
        var $inputTitleValue = $inputTitle.val();
        $('div.card-content>span.title').empty();
        $('div.card-content>span.title').append($inputTitleValue);
        $inputTitleValue = $inputTitle.val('');
        // evento para el input 'add-img'
        var $inputImageValue = $inputImage.val();                
        $('div.card-content>img.img').removeAttr('src');
        $('div.card-content>img.img').attr('src', '../assets/images/' + $inputImageValue);
        $inputImageValue = $inputImage.val('');
        // creando nuevos contenidos
        var $new = $('.new');
        $($new).clone().appendTo('.row-news');
        // deshabilitando modal2
        $('.section-modal2').attr('hidden', 'hidden');
      });
    });
  });
});
