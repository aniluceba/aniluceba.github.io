$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggerClass('fa-times');
        $('header').toggleClass('toggle');
    });

    $(window).on('scroll load', function(){

        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');

    });

