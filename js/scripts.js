$(() => {


  // Ширина окна для ресайза
  WW = window.innerWidth || document.clientWidth || document.getElementsByTagName('body')[0].clientWidth
  WH = window.innerHeight || document.clientHeight || document.getElementsByTagName('body')[0].clientHeight
  BODY = document.getElementsByTagName('body')[0]
  OVERLAY = document.querySelector('.overlay')




  window.addEventListener('resize', function () {
    WH = window.innerHeight || document.clientHeight || document.getElementsByTagName('body')[0].clientHeight

    let windowW = window.outerWidth

    if (typeof WW !== 'undefined' && WW != windowW) {


      // Перезапись ширины окна
      WW = window.innerWidth || document.clientWidth || document.getElementsByTagName('body')[0].clientWidth


      // Моб. версия
      if (!fakeResize) {
        fakeResize = true
        fakeResize2 = false

        document.getElementsByTagName('meta')['viewport'].content = 'width=device-width, initial-scale=1, maximum-scale=1'
      }

      if (!fakeResize2) {
        fakeResize2 = true

        if (windowW < 375) document.getElementsByTagName('meta')['viewport'].content = 'width=375, user-scalable=no'
      } else {
        fakeResize = false
        fakeResize2 = true
      }
    }
  })


  	// Моб. меню
	$('header .mob_menu_btn').click((e) => {
		e.preventDefault()

		$('header .mob_menu_btn').addClass('active')
		$('body').addClass('menu_open')
		$('header .menu').addClass('show')
		$('.overlay').fadeIn(300)
	})

	$('header .close_btn, header .menu .item a, .overlay').click((e) => {
		e.preventDefault()

		$('header .mob_menu_btn').removeClass('active')
		$('body').removeClass('menu_open')
		$('header .menu').removeClass('show')
		$('.overlay').fadeOut(300)
	})



  // Скрол
  $(".scroll").on("click", function (e) {
    e.preventDefault();
    let id = $(this).attr("href");

    $("html, body").animate({
      scrollTop: $(id).offset().top + "px"
    }, {
      duration: 1500,
      easing: "swing"
    });
  });




})