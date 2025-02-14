
$(document).ready(function () {
    $('.loading').fadeOut(200)
    let colors = ['red', 'green', 'blue', '#008080', '#FFA500'];

for (let i = 0; i < colors.length; i++) {
    $('.colorChanger').eq(i).css('backgroundColor', `${colors[i]}`)
}

$('.colorChanger').on('click', function (e) {
    let myColor = $(e.target).css('backgroundColor');
    $(':root').css("--main-color", `${myColor}`)
});
$('.gearIcon').on("click", function () {
    if ($('.sideBar').css('left') == '0px') {
        let wBox = $('.sideBar').innerWidth()
        $('.sideBar').animate({
            left: `-${wBox}px`
        }, 1000)

    }
    else {
        $('.sideBar').animate({
            left: '0px'
        }, 1000)
    }
})
let aboutOffset = $('#About').offset().top;
$(window).scroll(function () {
    let wScroll = $(window).scrollTop();
    if (wScroll > aboutOffset - 80) {
        $('.navbar').css('cssText', 'background-color:rgba(0,0,0,0.4) !important')
    }
    else {
        $('.navbar').css('cssText', 'background-color:transparent !important')

    }

})
$('.nav-link[href^="#"]').on('click', function (e) {
    console.log($(e.target).attr('href'));
    let linkClicked = $(e.target).attr('href')

    let linkOffset = $(`${linkClicked}`).offset().top;
    $(window).scrollTop(`${linkOffset}`)
})


$(window).on("scroll", function () {
    let wScroll = $(window).scrollTop();
    if (wScroll >= aboutOffset - 200) {
        $(".arrowIcon").fadeIn(500);

    }
    else {
        $(".arrowIcon").fadeOut(500);


    }
})
$('.arrowIcon').on('click', function () {
    $(window).scrollTop("0")
})

})