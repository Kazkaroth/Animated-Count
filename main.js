let count = 1;

$(document).ready(function () {

    $("button").click(function () {

        count++;

        /*LEAVE*/

       $(".count-leave").addClass('count-leave-active');
       setTimeout(function () {
           $(".count-leave").remove();
       }, 500);

       /*ENTER*/

        $(".count-enter").addClass('count-enter-active');
        setTimeout(function () {
            $(".count-enter").addClass("count-leave").removeClass("count-enter count-enter-active");
            $("body").append('<h1 class="count count-enter">'+ count +'</h1>')
        }, 500);
    });






});