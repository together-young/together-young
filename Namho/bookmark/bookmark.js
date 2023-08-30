$(function () {
  // 서치창 placeholder 랜덤변수
  var randomTexts = [
    '"축구"를 입력해보세요.',
    '"서울"을 입력해보세요.',
    "어떤 모임을 찾으시나요?",
    "어느 지역에 살고 계신가요?",
  ];
  var randomIndex = Math.floor(Math.random() * randomTexts.length);
  $(".search-input").attr("placeholder", randomTexts[randomIndex]);

  // header의 서치창에 입력시 지우기 버튼 띄우기
  $(".search-input").on("input", function () {
    if ($(this).val().trim() !== "") {
      $(".erase-all").show();
    } else {
      $(".erase-all").hide();
    }
  });

  // 지우기 버튼 클릭시 input value 삭제
  $(".erase-all").on("click", function () {
    $(".search-input").val("").focus();
    $(this).hide();
  });

  // Header to Sub-Header jQuery
  // 게시판에 호버시 1번 서브메뉴 호버링
  $(".to-first").mouseover(function () {
    if ($(".second-menu").css("display") === "flex") {
      $(".second-menu").css("display", "none");
    }
    $(".first-menu").css("display", "flex");
  });

  // 청년 info에 호버시 2번 서브메뉴 호버링
  $(".to-second").mouseover(function () {
    if ($(".first-menu").css("display") === "flex") {
      $(".first-menu").css("display", "none");
    }
    $(".second-menu").css("display", "flex");
  });

  // 서브 헤더 박스 밖으로 마우스가 벗어날 시 호버링 제거
  $("header").mouseleave(function () {
    if ($(".first-menu").css("display") === "flex") {
      $(".first-menu").css("display", "none");
    }
    if ($(".second-menu").css("display") === "flex") {
      $(".second-menu").css("display", "none");
    }
  });

  // 메뉴 통제
  $("#general").click(function () {
    $(this).addClass("active");
    $("#meeting").removeClass("active");
  });

  $("#meeting").click(function () {
    $(this).addClass("active");
    $("#general").removeClass("active");
  });

  // 모바일 쿼리
  $(".search-input-icon").click(function () {
    if (window.matchMedia("(max-width: 1000px)").matches) {
      $(".mobile-search-bar").css("display", "flex");
      $(".backdrop").css("display", "flex");
    }
  });

  $(".mobile-search-back-con").click(function () {
    $(".mobile-search-bar").css("display", "none");
    $(".backdrop").css("display", "none");
  });
});
