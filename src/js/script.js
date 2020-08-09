$(document).ready(function() {

  $('[data-model=consult]').on('click', function() {
    $('.overlay, #consult').fadeIn('slow');
  });

  $('.model__close').on('click', function() {
    $('.overlay, #consult, #thanks').fadeOut('slow');
  });

  $('.button_catalog').on('click', function() {
    $('.overlay').fadeIn('slow');
  });

  $('.button_catalog').each(function(i) {
    $(this).on('click', function() {
      $('.model__descr').text($('.catalog-item__subtitle').eq(i).text());

    });
  });

  $('input[name="phone"]').mask("+38 (999) 999-9999");
  
  $('form').submit(function(e) {
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
    }).done(function() {
        $(this).find("input").val("");
        $('#consult').fadeOut();
        $('.overlay, #thanks').fadeIn('slow');

        $('form').trigger('reset');
    });
    return false;
});
$ (window).scroll(function() {
  if ($(this).scrollTop() > 600) {
    $('.pageup').fadeIn();
  } else {
    $('.pageup').fadeOut();
  }
});

$("[href^='#']").click(function() {
  var _href = $(this).attr("href");
  $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
  return false;
});

  });
  
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
function opener(imgId){
  var img = document.getElementById(imgId);
  img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
  
}
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
  modal.style.display = "none";
}



window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.menu'),
  menuItem = document.querySelectorAll('.menu__item'),
  hamburger = document.querySelector('.hamburger');

  hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('hamburger__active');
      menu.classList.toggle('menu__active');
  });

  menuItem.forEach(item => {
      item.addEventListener('click', () => {
          hamburger.classList.toggle('hamburger__active');
          menu.classList.toggle('menu__active');
      })
  })
})