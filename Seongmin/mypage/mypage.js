document.addEventListener("DOMContentLoaded", function () {
  // 재원님 작업 완료 되면 onclick시 나의 일정, 게시물, 댓글 링크 걸기
  const editProfile = document.querySelector(".editProfile");
  const asideMenuContainer = document.querySelector(".asideMenuContainer");
  const profileContentsContainer = document.querySelector(
    ".profileContentsContainer"
  );
  const backwardButton = document.querySelector(".backwardButton");

  const myProfileContainer = document.querySelector(".myProfileContainer");
  const myProfile = document.querySelector(".myProfile");
  const myProfileButton = document.querySelector(".myProfileButton");

  const membershipWithdrawalContainer = document.querySelector(
    ".membershipWithdrawalContainer"
  );
  const membershipWithdrawal = document.querySelector(".membershipWithdrawal");
  const membershipWithdrawalLinkButton = document.querySelector(
    ".membershipWithdrawalLinkButton"
  );

  const verifyNickname = document.querySelector(".verifyNickname");
  const saveNickname = document.querySelector(".saveNickname");

  const serviceNotificationAgreementContainer = document.querySelector(
    ".serviceNotificationAgreementContainer"
  );
  const serviceNotificationLabel = document.querySelector(
    "#serviceNotificationLabel"
  );

  const commercialNotificationAgreementContainer = document.querySelector(
    ".commercialNotificationAgreementContainer"
  );
  const commercialNotificationLabel = document.querySelector(
    "#commercialNotificationLabel"
  );

  const profileContents = document.querySelector(".profileContents");
  const membershipWithdrawalWrapper = document.querySelector(
    ".membershipWithdrawalWrapper"
  );
  const mainBorderDividingLine = document.querySelector(
    ".mainBorderDividingLine"
  );
  const notificationSettingTitle = document.querySelector(
    ".notificationSettingTitle"
  );
  const notificationSettingContainer = document.querySelector(
    ".notificationSettingContainer"
  );

  const phoneNumberBox = document.querySelector(".phoneNumberBox");
  const saveContactInfo = document.querySelector(".saveContactInfo");
  const phoneNumberErrorMessage = document.querySelector(".phoneNumberErrorMessage");

  // 1. myProfileContainer나 membershipWithdrawalContainer onclick시 선택된 컨텐츠 class에 active 추가하고 다른 컨테이너 html에서 class 속성 중에 active 빼기
  myProfileContainer.addEventListener("click", (e) => {
    changeActive(e);
  });
  membershipWithdrawalContainer.addEventListener("click", (e) => {
    changeActive(e);
  });

  function changeActive(event) {
    if (event.target === myProfile || event.target === myProfileButton) {
      myProfileContainer.classList.add("active");
      membershipWithdrawalContainer.classList.remove("active");
      myProfile.style.color = "#040505";
      membershipWithdrawal.style.color = "#adb3b8";
    } else if (
      event.target === membershipWithdrawal ||
      event.target === membershipWithdrawalLinkButton
    ) {
      membershipWithdrawalContainer.classList.add("active");
      myProfileContainer.classList.remove("active");
      myProfile.style.color = "#adb3b8";
      membershipWithdrawal.style.color = "#040505";
    }
  }

  /* 
  닉네임 에러시
  .nicknameBox {
    border-color: #e92525;
    color: #e92525;
  }

  .nicknameUpdateMessageContainer {
    color: rgb(233, 37, 37);
  }

  .nicknameUpdateMessageContainer > svg {
    fill: rgb(233, 37, 37) !important;
  }
  */

  document.addEventListener("click", (e) => {
    // 2. 닉네임 중복확인 버튼 누를시 중복확인 버튼 css에 background-color: #d4e5f9; 저장 버튼 css에 background-color: #2a7de1; 주기
    if (e.target === verifyNickname) {
      verifyNickname.style.backgroundColor = "#d4e5f9";
      saveNickname.style.backgroundColor = "#2a7de1";
    }

    // 3. 저장 버튼 누를시 저장 버튼 css에 background-color: #1b5192; 주기
    if (e.target === saveNickname) {
      verifyNickname.style.backgroundColor = "#fff";
      saveNickname.style.backgroundColor = "#1b5192";
    }

    // 4. 중복확인이나 저장버튼 밖을 누르면 색깔 다시 돌아오기
    if (e.target !== (verifyNickname && saveNickname)) {
      if (verifyNickname.style.backgroundColor === "#d4e5f9") {
        verifyNickname.style.backgroundColor = "#fff";
        saveNickname.style.backgroundColor = "#2a7de1";
      }
      if (saveNickname.style.backgroundColor === "#1b5192") {
        verifyNickname.style.backgroundColor = "#fff";
        saveNickname.style.backgroundColor = "#2a7de1";
      }
    }
    // 5. 큰 옵션 선택하면 초기화되는 기능
    if (
      e.target === editProfile ||
      e.target === backwardButton ||
      e.target === myProfile ||
      e.target === membershipWithdrawal
    ) {
      verifyNickname.style.backgroundColor = "#fff";
      saveNickname.style.backgroundColor = "#d4e5f9";
    }
  });

  // 6. 서비스 알림 동의, 광고 알림 동의 버튼 누를 시 label 태그에 checked 추가하기, 이미 checked되 있는 상태에서 다시 한번 누르면 checked 삭제하기
  serviceNotificationAgreementContainer.addEventListener("click", (e) => {
    changeChecked(e);
  });
  commercialNotificationAgreementContainer.addEventListener("click", (e) => {
    changeChecked(e);
  });

  function changeChecked(event) {
    if (event.target === serviceNotificationAgreementContainer) {
      if (serviceNotificationLabel.classList.contains("checked")) {
        serviceNotificationLabel.classList.remove("checked");
      } else {
        serviceNotificationLabel.classList.add("checked");
      }
    } else if (event.target === commercialNotificationAgreementContainer) {
      if (commercialNotificationLabel.classList.contains("checked")) {
        commercialNotificationLabel.classList.remove("checked");
      } else {
        commercialNotificationLabel.classList.add("checked");
      }
    }
  }

  //7. 회원탈퇴 링크버튼 누를 시 profileContentsContainer 에서 profileContentsHeader, membershipWithdrawalWrapper만  display: block 설정하고 나머지 요소들에 display: none 설정하기
  membershipWithdrawalLinkButton.addEventListener("click", () => {
    profileContents.style.display = "none";
    mainBorderDividingLine.style.display = "none";
    notificationSettingTitle.style.display = "none";
    notificationSettingContainer.style.display = "none";
    membershipWithdrawalWrapper.style.display = "block";
  });
  myProfile.addEventListener("click", () => {
    profileContents.style.display = "block";
    mainBorderDividingLine.style.display = "block";
    notificationSettingTitle.style.display = "block";
    notificationSettingContainer.style.display = "block";
    membershipWithdrawalWrapper.style.display = "none";
  });

  // 8. 개인정보 설정 누르면 asideMenuContainer 숨기고 profileContentsContainer 보이기, backwardButton 누르면 반대로 적용
  window.addEventListener("resize", () => {
    asideMenuContainer.style.display = "block";
    profileContentsContainer.style.display = "block";
  });
  if (window.innerWidth < 1001) {
    editProfile.addEventListener("click", () => {
      asideMenuContainer.style.display = "none";
      profileContentsContainer.style.display = "block";
    });
    backwardButton.addEventListener("click", () => {
      asideMenuContainer.style.display = "block";
      profileContentsContainer.style.display = "none";
    });
  }

  // 9. 휴대폰 번호 유효성 검사
  saveContactInfo.addEventListener("click", (e) => {
    console.log(phoneNumberBox.value);
    if(phoneNumberBox.value.length < 11){
      phoneNumberErrorMessage.style.display = "block";
      saveContactInfo.style.backgroundColor = "#d4e5f9";
    } else {
      phoneNumberErrorMessage.style.display = "none";
      saveContactInfo.style.backgroundColor = "#2a7de1";
    }
  });

  document.addEventListener("click", (e) => {
    console.log(e.target);
  });
});
