$(function () {
  //친구메모 팝업
  let isMapOn = false;

  $("#map").on("click", function () {
    if (!isMapOn) {
      $(".post-action-list-container").css({
        visibility: "visible",
        opacity: "1",
      });
      isMapOn = true;
    } else {
      $(".post-action-list-container").css({
        visibility: "hidden",
        opacity: "0",
      });
      isMapOn = false;
    }
  });


  $(".search-input").on("input", function () {
    if ($(this).val().trim() !== "") {
      $(".erase-all-second").show();
    } else {
      $(".erase-all-second").hide();
    }
  });

  // 지우기 버튼 클릭시 input value 삭제
  $(".erase-all-second").on("click", function () {
    $(".search-input").val("").focus();
    $(this).hide();
  });
});
