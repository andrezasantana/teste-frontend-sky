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

$('#slide-2').slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  prevArrow: $("#control-prev-2"),
  nextArrow: $("#control-next-2"),
  responsive: [
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
  ]
})
