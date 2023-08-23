$(function () {
  // 게시글 우측상단 액션버튼 작동 코드
  $(".post-action-btn").on("click", function () {
    $(".post-action-list-container").toggle();
  });

  $(document).on("click", function (event) {
    const target = $(event.target);
    if (!target.closest(".post-action").length) {
      $(".post-action-list-container").hide();
    }
  });

  let likeCount = 0;
  let liked = false;

  // 좋아요 버튼 누를시 작동 코드
  $("#post-like").on("click", function () {
    if (!liked) {
      $("#post-like-svg").css("fill", "rgb(233, 37, 37)");
      $("#post-like-count").css("color", "rgb(233, 37, 37)");
      likeCount++;
      liked = true;
    } else {
      $("#post-like-svg").css("fill", "rgb(148, 155, 160)");
      $("#post-like-count").css("color", "rgb(148, 155, 160)");
      likeCount--;
      liked = false;
    }
    $("#post-like-count").text(likeCount);
  });

  // 댓글 작성 컨테이너 숨김 및 등장 처리
  $(".fake-container").on("click", function () {
    $(this).hide();
    $("#hidden-comment-wrap").show();
  });

  // 댓글 작성창에 입력시 글자 수 파악
  const textarea = $(".comment-content");
  const typeCounter = $("#type-counter");

  textarea.on("input", function () {
    const text = textarea.val();
    const textLength = text.length;
    typeCounter.text(textLength);
  });

  // 댓글 작성창에 무언가를 입력해야만 버튼이 활성화 되도록 설정
  const summitBtn = $(".comment-summit-btn");

  function toggleButtonState(isEnabled) {
    summitBtn.prop("disabled", !isEnabled);
  }

  $(".comment-content").on("input", function () {
    const text = $(this).val();
    const textLength = text.length;

    toggleButtonState(textLength > 0);
  });

  // 페이지 로딩 시 댓글 수 표시
  updateReplyCount();

  function updateReplyCount() {
    const replyCount = $(".reply-article").length;
    $("#reply-count").text(replyCount);
  }

  // 댓글 추가 시 댓글 수 +1 추가 되도록 후일에 구현하여야 함
});
