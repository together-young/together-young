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
      $(".second-menu").css("display", "flex");
    }
  });

  // 모바일 footer 터치슬라이드 기능 추가
  const footer = $(".footer-container");
  let startX;
  let startTranslateX = 0;
  let isDragging = false;
  const menuWidth = footer.outerWidth(); // 메뉴 전체 너비
  const containerWidth = $(".footer-view-container").outerWidth(); // 보이는 메뉴의 위드값 측정
  const maxTranslateX = -(menuWidth - containerWidth); // 슬라이더가 넘어가지 않는 한계 위치 설정

  footer.on("touchstart", function (e) {
    const touch = e.touches[0];
    startX = touch.clientX;
    startTranslateX = getTranslateX(footer);
    isDragging = true;
  });

  footer.on("touchmove", function (e) {
    if (!isDragging) return;

    const touch = e.touches[0];
    const diffX = touch.clientX - startX;
    let newTranslateX = startTranslateX + diffX;

    // 왼쪽으로 슬라이드할 때 제한
    if (newTranslateX > 0) {
      newTranslateX = 0;
    }

    // 오른쪽으로 슬라이드할 때 제한
    if (newTranslateX < maxTranslateX) {
      newTranslateX = maxTranslateX;
    }

    transformMenu(footer, newTranslateX);
  });

  footer.on("touchend", function () {
    isDragging = false;
  });

  function getTranslateX(element) {
    const transform = element.css("transform");
    if (transform === "none") {
      return 0;
    } else {
      return parseInt(transform.split(",")[4]);
    }
  }

  function transformMenu(element, translateX) {
    element.css("transform", `translateX(${translateX}px)`);
  }
});
