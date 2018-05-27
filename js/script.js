$(function () {


    var mainCarousel = $("#mainCarousel");
    var hairCarousel = $("#hairCarousel");
    
    
    function runCarousel(carouselID) {

    var carouselList = carouselID;
  

    var left = $(".carousel__button__left");
    var right = $(".carousel__button__right");   

    var inter = setInterval(changeSlide, 4500);

    function changeSlide() {
        carouselList.animate({
            'margin-left':'-100vw'
        }, 1000, moveFirstSlide);

    };
    
    function changeSlideLeft(){
         carouselList.css({
                'margin-left': '-100vw'
            })
            var firstItem = carouselList.find("li:first");
            var lastItem = carouselList.find("li:last");
            firstItem.before(lastItem);
            carouselList.animate({
                'margin-left': 0
            }, 1000);
    }

    function moveFirstSlide() {
        var firstItem = carouselList.find("li:first");
        var lastItem = carouselList.find("li:last");
        lastItem.after(firstItem);
        carouselList.css({
            'margin-left': 0
        });
   }

    right.click(function () {
        if (!carouselList.is(':animated')) {
            changeSlide()
        }
    })

    
    left.click(function () {
        if (!carouselList.is(':animated')) {
            changeSlideLeft()
        }
    })

     };
    
    runCarousel(mainCarousel);
     runCarousel(hairCarousel);
    
    
    //burger //
    
     $(".nav__burger").on("click", function() {
            $(".nav__menu").toggleClass("nav__menu--active");
            $(".nav__burger").toggleClass("active");
        })
 
})