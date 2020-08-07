const highlightsImage = $('#slide-1');
const childCategoryImage = $('#slide-2');
const requestURL = 'https://sky-frontend.herokuapp.com/movies';

$(function () {
    $.get(requestURL, function (data, status) {

        const highlights = data[0];
        for (let i = 0; i < highlights.items.length; i++) {
            let urlImage = highlights.items[i].images[0].url;
            highlightsImage.append(`<img src="${urlImage}"></img>`);
        }

        const childCategory = data[2]
        for (let i = 0; i < childCategory.movies.length; i++){
            let urlImage = childCategory.movies[i].images[0].url;
            childCategoryImage.append(`<img src="${urlImage}"></img>`);
        }

        startSlide1();
        startSlide2();
    });
})

function startSlide1() {
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
}
function startSlide2() {
    $('#slide-2').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5,
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
    });
}