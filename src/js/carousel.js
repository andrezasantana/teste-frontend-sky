$(function () {
  $("#slide-1").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    prevArrow: $("#control-prev-1"),
    nextArrow: $("#control-next-1"),
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
