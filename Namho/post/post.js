$(function () {
  // 게시글 우측상단 액션버튼 작동 코드
  $(function () {
    $(".post-action-btn").on("click", function () {
      $(".post-action-list-container").toggle();
    });

    $(document).on("click", function (event) {
      const target = $(event.target);
      if (!target.closest(".post-action").length) {
        $(".post-action-list-container").hide();
      }
    });
  });
});
