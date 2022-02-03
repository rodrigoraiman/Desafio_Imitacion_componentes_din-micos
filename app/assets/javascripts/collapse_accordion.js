$(document).on('turbolinks:load', function(){
    $('#btnTrigger').click(function(){
        $('#card-body').slideToggle('fast', function(){

        });
    });

    $('#btnTrigger2').click(function(){
        $('#card-body2').slideToggle('fast', function(){

        });
    });

    $('#btnTrigger3').click(function(){
        $('#card-body3').slideToggle('fast', function(){

        });
    });
})