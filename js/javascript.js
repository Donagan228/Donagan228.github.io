

jQuery(document).ready(function( $ ) {
    // subscribe:
    $("#buttonSubscribe").click(function(){
        var vemail = $("#email").val();
        if(vemail=='')
        {
            alert("Please fill out the form");
        }
        else if(vemail==''){alert('Email field is required')}
        else{
            $.get("php/email.html", { email:vemail },
                function(response, status){
                    $("#email").val('');
                    alert(response+"\n\nStatus : " + status);
                });
        }
    });


    $("#buttonContact").click(function(){
        var vname = $("#InputName").val();
        var vemail = $("#InputEmail").val();
        var vmessage = $("#InputMessage").val();
        if(vname=='' || vemail=='' || vmessage=='')
        {
            alert("Please fill out the form");
        }
        else{
            $.get("php/contact.html", { name:vname,email:vemail,message:vmessage },
                function(response, status){
                    $("#InputName").val('');
                    $("#InputEmail").val('');
                    $("#InputMessage").val('');
                    alert(response+"\n\nStatus : " + status);
                });
        }
    });



    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
    $('body').delay(350).css({'overflow':'visible'});

    // counterUp
    $('span').counterUp({
        delay: 10,
        time: 1000
    });


    window.sr = new scrollReveal();


    $window = $(window);

    $('section[data-type="background"]').each(function(){

        var $scroll = $(this);

        $(window).scroll(function() {

            var yPos = -($window.scrollTop() / $scroll.data('speed'));


            var coords = '50% '+ yPos + 'px';


            $scroll.css({ backgroundPosition: coords });
        });
    });  
});
