var num = 1;

function counter(num) {
  
}

$(document).ready(function() {
  $('button').click(function() {
    
    num++;
    
    /*
      Leave
    */
    
    $('.count-leave').addClass('count-leave-active');
    setTimeout(function() {
      $('.count-leave').remove();
    }, 250);
    
    /*
      Enter
    */
    
    $('.count-enter').addClass('count-enter-active');
    setTimeout(function() {
      $('.count-enter').addClass('count-leave').removeClass('count-enter count-enter-active');
      $('body').append('<h1 class="count count-enter">'+ num +'</h1>')
    }, 250);
    
  })
});