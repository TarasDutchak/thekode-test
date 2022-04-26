$(document).ready(function () {
    // lang
    $('.header__topline-lang span').click(function () {
        $(this).toggleClass('rotate');
        $(this).next('ul').slideToggle();
    });

    // currency
    $('.header__topline-currency span').click(function () {
        $(this).toggleClass('rotate');
        $(this).next('ul').slideToggle();
    });

    // close dropdowns
    $(document).click(function (event) {
        let $target = $(event.target);
        if (!$target.closest('.header__topline-lang').length) {
            $('.header__topline-lang span').removeClass('rotate');
            $('.header__topline-lang ul').slideUp();
        }

        if (!$target.closest('.header__topline-currency').length) {
            $('.header__topline-currency span').removeClass('rotate');
            $('.header__topline-currency ul').slideUp();
        }
    });

    // product slider
    var swiper = new Swiper(".mySwiper", {
        // slidesPerView: 4,
        // spaceBetween: 20,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {

            575: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            991: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
        },
    });

    // favorite btn in slider
    $('.favbtn').click(function () {
        $(this).toggleClass('active');
    });

    // TIMER

    var timer;

    var compareDate = new Date();
    compareDate.setDate(compareDate.getDate() + 2); //just for this demo today + 7 days

    timer = setInterval(function () {
        timeBetweenDates(compareDate);
    }, 1000);

    function timeBetweenDates(toDate) {
        var dateEntered = toDate;
        var now = new Date();
        var difference = dateEntered.getTime() - now.getTime();

        if (difference <= 0) {

            // Timer done
            clearInterval(timer);

        } else {

            var seconds = Math.floor(difference / 1000);
            var minutes = Math.floor(seconds / 60);
            var hours = Math.floor(minutes / 60);
            var days = Math.floor(hours / 24);

            hours %= 24;
            minutes %= 60;
            seconds %= 60;

            $("#days").text(days);
            $("#hours").text(hours);
            $("#minutes").text(minutes);
            $("#seconds").text(seconds);
        }
    }

    // search

    $('.header__searchfield input').keyup(function () {
        if ($(this).val() !== '') {
            $('.header__searchresult').show();
        } else {
            $('.header__searchresult').hide();
        }
    });


    $(document).click(function (event) {
        let $target = $(event.target);
        if (!$target.closest('.header__searchfield').length) {
            $('.header__searchresult').hide();
        }
    });

    // mobile - search
    $('.mobilesearchbtn').click(function () {
        $('.header__searchcol').slideToggle();
    });

    // mobile - menu
    $('.mobilemenu .mobilemenu__nav ul:not(.submenu) li a i').click(function () {
        $(this).toggleClass('rotate');
        $(this).parents('a').next('.sublist').slideToggle();
    });

    $('.burger').click(function () {
        $('.mobilemenu').addClass('show');
    });

    $('.closemenu').click(function () {
        $('.mobilemenu').removeClass('show');
    });

    // mask
    $('.telinp').inputmask({
        "mask": "+ 99 /999/ 999-9999",
        showMaskOnHover: false,
        showMaskOnFocus: false,
    });


    // login - reg modal
    $('.header__topline-sign').click(function (e) {
        e.preventDefault();
        $('.enter').show();
        $('.reg').hide();
        $('.forgonpass').hide();
    });
    $('.header__topline-reg').click(function (e) {
        e.preventDefault();
        $('.enter').hide();
        $('.reg').show();
        $('.forgonpass').hide();
    });

    $('.enter .infotext a').click(function (e) {
        e.preventDefault();
        $('.enter').hide();
        $('.reg').show();
    });
    $('.enter .rememberme a').click(function (e) {
        e.preventDefault();
        $('.enter').hide();
        $('.forgonpass').show();
    });
    $('.reg .infotext a').click(function (e) {
        e.preventDefault();
        $('.reg').hide();
        $('.enter').show();
    });






});