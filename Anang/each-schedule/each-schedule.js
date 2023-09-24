$(function () {
  // 액션버튼(글) 코드
  $(".post-action-btn").on("click", function () {
    $(".post-action-list-container").toggle();
  });

  $(document).on("click", function (event) {
    const target = $(event.target);
    if (!target.closest(".post-action").length) {
      $(".post-action-list-container").hide();
    }
  });

  // 좋아요 버튼 누를시 작동 코드
  let liked = false;
  $("#post-like").on("click", function () {
    if (!liked) {
      $("#post-like-svg").css("fill", "rgb(233, 37, 37)");
      $("#post-like-count").css("color", "rgb(233, 37, 37)");
      liked = true;
    } else {
      $("#post-like-svg").css("fill", "rgb(148, 155, 160)");
      $("#post-like-count").css("color", "rgb(148, 155, 160)");
      liked = false;
    }
  });

  // 북마크
  let marked = false;
  $("#post-bookmark").on("click", function () {
    if (!marked) {
      $("#post-bookmark-svg").css("fill", "rgb(0, 160, 0)");
      $("#post-bookmark-count").css("color", "rgb(0, 160, 0)");
      marked = true;
    } else {
      $("#post-bookmark-svg").css("fill", "rgb(148, 155, 160)");
      $("#post-bookmark-count").css("color", "rgb(148, 155, 160)");
      marked = false;
    }
  });

  // 맵 팝업
  let isMapOn = false;

  $("#map").on("click", function () {
    if (!isMapOn) {
      $(".map-wrap").css({
        visibility: "visible",
        opacity: "1",
      });
      isMapOn = true;
    } else {
      $(".map-wrap").css({
        visibility: "hidden",
        opacity: "0",
      });
      isMapOn = false;
    }
  });

  // 모임 날짜 팝업
  let isDateOn = false;

  $("#date").on("click", function () {
    if (!isDateOn) {
      $(".date-wrap").css({
        visibility: "visible",
        opacity: "1",
      });
      isDateOn = true;
    } else {
      $(".date-wrap").css({
        visibility: "hidden",
        opacity: "0",
      });
      isDateOn = false;
    }
  });

  // 모임 인원 팝업
  let participant = false;

  $("#post-participant").on("click", function () {
    if (!participant) {
      $("#post-participant-svg").css("fill", "#2A7DE1");
      $("#post-participant-count").css("color", "#2A7DE1");
      $(".participants-view-wrap").css({
        visibility: "visible",
        opacity: "1",
      });
      participant = true;
    } else {
      $("#post-participant-svg").css("fill", "rgb(148, 155, 160)");
      $("#post-participant-count").css("color", "rgb(148, 155, 160)");
      $(".participants-view-wrap").css({
        visibility: "hidden",
        opacity: "0",
      });
      participant = false;
    }
  });
});
