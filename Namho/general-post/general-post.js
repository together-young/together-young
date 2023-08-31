$(function () {
  // 게시글 우측상단 액션버튼 작동 코드
  $(".post-action-btn").on("click", function () {
    if (!window.matchMedia("(max-width: 1000px)").matches) {
      $(".post-action-list-container").toggle();
    } else {
      $(".backdrop").css("display", "flex");
      $(".post-action-modal").css("transform", "translateY(0)");
    }
  });

  $(".backdrop").on("click", function () {
    $(".backdrop").css("display", "none");
    $(".post-action-modal").css("transform", "translateY(100%)");
  });

  $(".back").on("click", function () {
    $(".backdrop").css("display", "none");
    $(".post-action-modal").css("transform", "translateY(100%)");
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
  $(".comment-content").on("input", function () {
    const text = $(this).val();
    const textLength = text.length;
    const commentContainer = $(this).closest(".comment-container");
    const summitBtn = commentContainer.find(".comment-summit-btn");

    toggleButtonState(summitBtn, textLength > 0);
  });

  function toggleButtonState(button, isEnabled) {
    button.prop("disabled", !isEnabled);
  }

  // 댓글 수정 버튼 누를시 textarea로 전환
  $(".reply-edit-btn").on("click", function () {
    let replyContainer = $(this).closest(".reply-article");
    let replyView = replyContainer.find(".reply-view");
    let replyEdit = replyContainer.find(".reply-edit");

    replyView.hide();
    replyEdit.show();
  });

  // textarea인풋 감지시 지속적 글자 수 업데이트
  $(".reply-edit-textarea").on("input", function () {
    updateCharCount($(this));
  });

  // 글자수 업데이트 함수
  function updateCharCount($textarea) {
    const text = $textarea.val();
    const textLength = text.length;

    $textarea
      .closest(".reply-edit")
      .find(".reply-type-counter")
      .text(textLength);
  }

  // 취소 버튼 누를 시 원상 복귀
  $(".reply-edit-back").on("click", function () {
    let replyContainer = $(this).closest(".reply-article");
    let replyView = replyContainer.find(".reply-view");
    let replyEdit = replyContainer.find(".reply-edit");

    replyEdit.hide();
    replyView.show();
  });

  // 댓글 작성버튼 활성화/비활성화 여부
  $(".reply-article").each(function () {
    const replyTextarea = $(this).find(".reply-edit-textarea");
    const replySubmitBtn = $(this).find(".reply-summit-btn");

    replyTextarea.on("input", function () {
      const textLength = $(this).val().length;
      toggleButtonState(replySubmitBtn, textLength > 0);
    });
  });

  function toggleButtonState(button, isEnabled) {
    button.prop("disabled", !isEnabled);
  }
});
