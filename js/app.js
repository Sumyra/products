$(function(){

 $("#banner").slick({
  arrows: false,
  dots: true,

 });
  $(".product_slider").slick({
    slidesToShow:4,
    arrows: true ,
    prevArrow:'#New_Product .arrows .leftArrows',
    nextArrow:"#New_Product .arrows .rightArrows",


 responsive: [
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 3,
        infinite: true,
      }
    },
    {
        breakpoint: 600,
        settings: {
          arrows: false,
          slidesToShow: 2,
          infinite: true,
        }
    }
    
  ]
});
})