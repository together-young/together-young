$(function () {

  // 댓글 작성 컨테이너 숨김 및 등장 처리
  $(".fake-container").on("click", function () {
    $(this).hide();
    $("#hidden-comment-wrap").show();
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
