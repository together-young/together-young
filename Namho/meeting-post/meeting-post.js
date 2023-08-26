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

  // 게시글의 높이에 따라 팝업창 위치 조정
  const postHeight = $(".post-content").height();
  $(".participants-view-wrap").css({
    transform: `translate3d(260px, ${175 + postHeight + 54}px, 0px)`,
  });
  $(".map-wrap").css({
    transform: `translate3d(220px, ${180 + postHeight + 16}px, 0px)`,
  });
  $(".date-wrap").css({
    transform: `translate3d(760px, ${180 + postHeight + 16}px, 0px)`,
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
