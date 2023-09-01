$(function () {
  const secondMenu = $(".second-menu");
  let startX;
  let startTranslateX = 0;
  let isDragging = false;
  const menuWidth = secondMenu.outerWidth(); // 메뉴 전체 너비
  const containerWidth = $(".sub-header-menu").outerWidth(); // 보이는 메뉴의 위드값 측정
  const maxTranslateX = -(menuWidth - containerWidth); // 슬라이더가 넘어가지 않는 한계 위치 설정

  secondMenu.on("touchstart", function (e) {
    const touch = e.touches[0];
    startX = touch.clientX;
    startTranslateX = getTranslateX(secondMenu);
    isDragging = true;
  });

  secondMenu.on("touchmove", function (e) {
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

    transformMenu(secondMenu, newTranslateX);
  });

  secondMenu.on("touchend", function () {
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
