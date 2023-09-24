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
});