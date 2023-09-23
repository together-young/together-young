$(function () {
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
