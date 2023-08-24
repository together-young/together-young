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

  // 댓글 추가 시 댓글 수 +1 추가 되도록 후일에 구현하여야 함 혹은 댓글 작성시 페이지 새로고침 필요 //

  // 댓글 수정 버튼을 누를시 textarea로 화면 전환 및 댓글 내용이 수정창으로 복사(서버 접속 최소화를 위함)
  $(".reply-edit-btn").on("click", function () {
    var replyContainer = $(this).closest(".reply-article");
    var replyView = replyContainer.find(".reply-view");
    var replyEdit = replyContainer.find(".reply-edit");

    var replyContent = replyView.find(".reply-content")[0].innerText;
    var replyTextarea = replyEdit.find(".reply-edit-textarea");

    replyTextarea.val(replyContent);

    replyView.hide();
    replyEdit.show();

    // textarea 높이 조절(제일 중요)
    replyTextarea[0].style.height = "auto";
    replyTextarea[0].style.height = replyTextarea[0].scrollHeight + "px";
  });

  // 취소 버튼 누를 시 원상 복귀
  $(".reply-edit-back").on("click", function () {
    var replyContainer = $(this).closest(".reply-article");
    var replyView = replyContainer.find(".reply-view");
    var replyEdit = replyContainer.find(".reply-edit");

    replyEdit.hide();
    replyView.show();
  });

  // 댓글 작성버튼 활성화/비활성화 여부
  const replyBtn = $(".reply-summit-btn");

  function toggleButtonState(isEnabled) {
    replyBtn.prop("disabled", !isEnabled);
  }

  $(".reply-edit-textarea").on("input", function () {
    const text = $(this).val();
    const textLength = text.length;

    toggleButtonState(textLength > 0);
  });

  const $textareas = document.querySelectorAll(".reply-edit-textarea");

  $textareas.forEach(($textarea) => {
    $textarea.addEventListener("input", (event) => {
      const $target = event.target;

      $target.style.height = "auto"; // 높이 초기화
      $target.style.height = $target.scrollHeight + "px"; // 스크롤 높이 계산
    });
  });
});
