$(function () {
  // 액션버튼(글) 코드
  $(".post-action-btn").on("click", function () {
    $(this).closest(".post-action").find(".post-action-list-container").toggle();
  });

  $(document).on("click", function (event) {
    const target = $(event.target);
    if (!target.closest(".post-action").length) {
      $(".post-action-list-container").hide();
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