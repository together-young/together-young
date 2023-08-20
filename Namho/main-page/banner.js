$(function () {
  const banner = $(".banners");
  const buttons = $(".banner-btn");
  const bannerRightSideBoxMoving = $(".banner-right-side-box-moving");
  let count = 0,
    temp = buttons.eq(count);

  buttons.eq(count).css("backgroundColor", "#fff");

  // 자동 슬라이드 함수
  function autoSlide() {
    banner.css("transition", "transform 0.5s");

    count++;
    if (count == 4) {
      buttons.eq(count - 1).css("backgroundColor", "transparent");
      banner.css("transform", "translate(-" + 100 * (count + 1) + "vw)");
      setTimeout(function () {
        banner.css("transition", "transform 0s");
        banner.css("transform", "translate(-100vw)");
      }, 500);
      count = 0;
      setTimeout(function () {
        bannerRightSideBoxMoving.css("transform", "rotateX(180deg)");
      }, 2000);
      buttons.eq(count).css("backgroundColor", "#fff");
    } else {
      buttons.eq(count - 1).css("backgroundColor", "transparent");
      buttons.eq(count).css("backgroundColor", "#fff");
      banner.css("transform", "translate(-" + 100 * (count + 1) + "vw)");
    }
    if (count != 0) {
      bannerRightSideBoxMoving.css("transform", "rotateX(0deg)");
    }
    temp = buttons.eq(count);
  }
  // 자동슬라이드 실행 및 제어
  let inter = setInterval(autoSlide, 4000);

  if (count == 0) {
    setTimeout(function () {
      bannerRightSideBoxMoving.css("transform", "rotateX(180deg)");
    }, 2000);
  }

  // 버튼 연속클릭 제어 및 버튼 함수
  let numberButtonCheck = true;

  buttons.each(function (i) {
    $(this).on("click", function () {
      banner.css("transition", "transform 0.5s");
      if (numberButtonCheck) {
        numberButtonCheck = false;
        clearInterval(inter);
        count = i;
        temp.css("backgroundColor", "transparent");
        buttons.eq(count).css("backgroundColor", "#fff");
        banner.css("transform", "translate(-" + 100 * (count + 1) + "vw)");
        temp = buttons.eq(count);
        if (count == 0) {
          setTimeout(function () {
            bannerRightSideBoxMoving.css("transform", "rotateX(180deg)");
          }, 2000);
        } else {
          bannerRightSideBoxMoving.css("transform", "rotateX(0deg)");
        }
        inter = setInterval(autoSlide, 4000);
        setTimeout(function () {
          numberButtonCheck = true;
        }, 500);
      }
    });
  });

  // 화살표 제어
  const arrows = $(".arrows");
  let arrowBtnCheck = true;

  arrows.each(function () {
    $(this).on("click", function () {
      if (arrowBtnCheck) {
        arrowBtnCheck = false;
        clearInterval(inter);
        banner.css("transition", "transform 0.5s");
        let arrowType = $(this).hasClass("left") ? "left" : "right";

        if (arrowType === "left") {
          count--;
          if (count == -1) {
            banner.css("transform", "translate(0vw)");
            setTimeout(function () {
              banner.css("transition", "transform 0s");
              banner.css("transform", "translate(-400vw)");
            }, 500);
            count = 3;
          } else {
            banner.css("transform", "translate(-" + 100 * (count + 1) + "vw)");
          }
        } else {
          count++;
          if (count == 4) {
            banner.css("transform", "translate(-" + 100 * (count + 1) + "vw)");
            setTimeout(function () {
              banner.css("transition", "transform 0s");
              banner.css("transform", "translate(-100vw)");
            }, 500);
            count = 0;
          } else {
            banner.css("transform", "translate(-" + 100 * (count + 1) + "vw)");
          }
        }
        if (count == 0) {
          setTimeout(function () {
            bannerRightSideBoxMoving.css("transform", "rotateX(180deg)");
          }, 2000);
        } else {
          bannerRightSideBoxMoving.css("transform", "rotateX(0deg)");
        }
        temp.css("backgroundColor", "transparent");
        temp = buttons.eq(count);
        buttons.eq(count).css("backgroundColor", "#fff");
        inter = setInterval(autoSlide, 4000);
        setTimeout(function () {
          arrowBtnCheck = true;
        }, 500);
      }
    });
  });

  // 내부 배너에 마우스 올릴 시 화면 넘어감 제어
  const innerContainers = $(".inner-container");

  innerContainers.mouseover(function () {
    clearInterval(inter);
  });

  innerContainers.mouseout(function () {
    inter = setInterval(autoSlide, 4000);
  });

  // 화살표 페이드 인, 페이드 아웃
  const bannerShowContainer = $(".banner-show-container");

  arrows.fadeOut(0);
  bannerShowContainer.mouseover(function () {
    arrows.css("opacity", 1);
    arrows.fadeIn(400);
  });

  bannerShowContainer.mouseleave(function () {
    arrows.fadeOut(400);
    arrows.css("opacity", 0);
  });
});
