$(document).on('turbolinks:load', function(){
    $('#fadeOut').click(function(){
        $('#target_par').fadeOut ();
    });

    $('#fadeIn').click(function(){
        $('#target_par').fadeIn ('slow', function (){
        
        })
    });
})