ScrollReveal({
  distance: '60px',
  duration: 1500,
  delay: 400
});
ScrollReveal().reveal('#testimonials', { delay: 200, origin:'top',interval: 200 });
ScrollReveal().reveal('#pages', { delay: 100, origin:'left'});
ScrollReveal().reveal('#title', { delay: 100, origin:'right'});

var sound = new Audio();
sound.src = "audio/mouse_over_sound.mp3";

$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100)
            $('.tothetop').fadeIn();
        else
            $('.tothetop').fadeOut();
    });
    $('.tothetop').click(function(){
        sound.play();
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });
    $('.changemode').fadeIn();
    $('.changemode').click(function() {
        sound.play();
         if( $('body').hasClass('dark')) {
            $('body').removeClass('dark');
            $('nav').removeClass('navbar-dark');
            $('nav').removeClass('bg-dark');
            $('nav').addClass('navbar-light');
            $('nav').addClass('bg-light');
        } else {
            $('body').addClass('dark');
            $('nav').removeClass('navbar-light');
            $('nav').addClass('navbar-dark');
            $('nav').removeClass('bg-light');
            $('nav').addClass('bg-dark');
        }
    });
}); 