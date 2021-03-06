$(document).ready(function () {
  $(window).on('resize', function () {
    var winHei = $(this).height();

    //top_visual 높이 지정 : 창 한칸을 모두 차지 하기
    $('#content .main_visual').css('height', winHei); 
  });
  $(window).trigger('resize');

  $(window).on('scroll', function () {
    var scrollT = $(this).scrollTop();

    //brandStory 내부의 텍스트 marquee 효과 나타나기
    if (scrollT > $('.brandStory').offset().top - 300) {
      $('.brandStory').addClass('on');
    }
  });

  //마우스 휠
      $('#scrolldBtn').on('click', function() {
      $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
    });



  //본문3 슬라이더
  var mySwiper1 = new Swiper('.bestItem .swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
      //clickable: true, //bullet 타입일 경우 버튼 클릭시 이동 가능함
    },
    spaceBetween: 30,
    slidesPerView: 'auto',
    centeredSlides: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    a11y: {
      firstSlideMessage: '첫번째 슬라이드',
      lastSlideMessage: '마지막 슬라이드',
    }
  })

  //본문4 슬라이더
  var mySwiper2 = new Swiper('.category .swiper-container', {
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    spaceBetween: 0, 
    slidesPerView: 1.2, 
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,   
    },
    navigation: {
      prevEl: '.swiper-button-prev',
    },
    a11y: {
      firstSlideMessage: '첫번째 슬라이드',
      lastSlideMessage: '마지막 슬라이드',
    }
  })


//본문5 슬라이더
  var mySwiper3 = new Swiper('.lookbook .swiper-container', {
    pagination: {
      type: 'bullets',
      bulletElement: 'span',
      clickable: 'true',
    },
    spaceBetween: 20, 
    slidesPerView: 'auto', 
    centeredSlides: true, 
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,  
    },
    a11y: {
      firstSlideMessage: '첫번째 슬라이드',
      lastSlideMessage: '마지막 슬라이드',
    }
  });



  $('.btnWrap .lk_btn').on('click', function () {
    var tgNum = $(this).index();
    $(this).toggleClass('on').parent().next().children().eq(tgNum).stop().fadeToggle();
  })
});