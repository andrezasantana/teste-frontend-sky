$(function () {
  $(".slide").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    prevArrow: $(".carousel-control-prev"),
    nextArrow: $(".carousel-control-next"),
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  })
})
