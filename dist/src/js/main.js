$(function(){

    // function to prevent anchor point
    $("header nav ul li a").click(function(e){
        //e.preventDefault();
    })

    //function to make background color changes when going down 
    $(window).scroll(function(){

        if($(this).scrollTop() >= 200 ){

            $("header").css({
                backgroundColor: "#aca99b9f"
            })

        }else{
            $("header").css({
                backgroundColor: "transparent"
            })
        }
    })

//functions to make hover effect on El  
    $('.item1').hover(function(){
        $('.item1 img').css('opacity','.2')
        $('.item1 span').slideDown(1000)
    } , 
    function(){
        $('.item1 img').css('opacity','1')
        $('.item1 span').slideUp()

    } )

    $('.item2').hover(function(){
        $('.item2 img').css('opacity','.2')
        $('.item2 span').slideDown(1000)
    } , 
    function(){
        $('.item2 img').css('opacity','1')
        $('.item2 span').slideUp()

    } )

    $('.item3').hover(function(){
        $('.item3 img').css('opacity','.2')
        $('.item3 span').slideDown(1000)
    } , 
    function(){
        $('.item3 img').css('opacity','1')
        $('.item3 span').slideUp()

    } )

    $('.item4').hover(function(){
        $('.item4 img').css('opacity','.2')
        $('.item4 span').slideDown(1000)
    } , 
    function(){
        $('.item4 img').css('opacity','1')
        $('.item4 span').slideUp()

    } )

    $('.item5').hover(function(){
        $('.item5 img').css('opacity','.2')
        $('.item5 span').slideDown(1000)
    } , 
    function(){
        $('.item5 img').css('opacity','1')
        $('.item5 span').slideUp()

    } )

    $('.item6').hover(function(){
        $('.item6 img').css('opacity','.2')
        $('.item6 span').slideDown(1000)
    } , 
    function(){
        $('.item6 img').css('opacity','1')
        $('.item6 span').slideUp()

    } )

    $('.item7').hover(function(){
        $('.item7 img').css('opacity','.2')
        $('.item7 span').slideDown(1000)
    } , 
    function(){
        $('.item7 img').css('opacity','1')
        $('.item7 span').slideUp()

    } )

//function to make fade out/in 
    $('.heading-video img').on("click", function(){
        $('.heading-video').fadeOut(800)
        $('.video-contain video').fadeIn(2100)
        $('.video .fa-times-circle').fadeIn(2000)
    })

    $('.fa-times-circle').on('click', function(){
        $('.heading-video').fadeIn(2000)
        $('.video video').fadeOut(800).prop('muted', true)
        $(this).fadeOut(800)

    })

//function to add class to change background color for nav-item
    $(".nav-item").on("click", function(){

        $(this).addClass("active").siblings().removeClass("active")
    })
})