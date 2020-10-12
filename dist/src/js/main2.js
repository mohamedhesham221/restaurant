$(function(){

    // function to prevent anchor point
    $("header nav ul li a").click(function(e){
       // e.preventDefault();
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

//function to add class selected to select img in master and change img by change attr (src) from master to thumbnails img an clone h5 before p  
    $('.thumbnails .img').on("click", function(){
        $(this).addClass('selected').siblings().removeClass("selected")
        $('.master .img img').attr('src', $('.thumbnails .selected img').attr('src'))
        $('.master h5').remove()
        $('.master p').before($('.thumbnails .selected h5').clone(true))
        $('.master').hide().fadeIn(900)
    })

//function to click on right button to change images
    $('.gallery .right').on("click", function(){

        
        if($('.thumbnails .selected').is(':last-child')){

            $('.thumbnails .img').eq(0).click()

        }else{
            $('.thumbnails .selected').next().click()
        
        }
    })
//function to click on left button to change images
    $('.gallery .left').on("click", function(){

        if($('.thumbnails .selected').is(':first-child')){

            $('.thumbnails .img:last').click()

        }else{
            $('.thumbnails .selected').prev().click()
            
        }
    })
})

