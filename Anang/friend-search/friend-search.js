$(function () {

  // 댓글 작성 컨테이너 숨김 및 등장 처리
  $(".fake-container").on("click", function () {
    $(this).hide();
    $("#hidden-comment-wrap").show();
  });
});
