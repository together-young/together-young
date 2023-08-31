document.addEventListener("DOMContentLoaded", function () {
  // 2. onclick시 나의 일정, 나의 게시물 링크 걸기
  // 재원님 작업 완료되면 링크만 걸어주면 됌
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

  // 3. 닉네임 중복확인 버튼 누를시 중복확인 버튼 css에 background-color: #d4e5f9; 저장 버튼 css에 background-color: #2a7de1; 주기

  verifyNickname.addEventListener("click", () => {
    verifyNickname.style.backgroundColor = "#d4e5f9";
    saveNickname.style.backgroundColor = "#2a7de1";
  });

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

  // 4. 저장 버튼 누를시 저장 버튼 css에 background-color: #1b5192; 주기
  saveNickname.addEventListener("click", () => {
    saveNickname.style.backgroundColor = "#1b5192";
    verifyNickname.style.backgroundColor = "#fff";
  });

  // 5. 서비스 알림 동의, 광고 알림 동의 버튼 누를 시 label 태그에 checked 추가하기, 이미 checked되 있는 상태에서 다시 한번 누르면 checked 삭제하기
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

  //6. 회원탈퇴 링크버튼 누를 시 profileContentsContainer 에서 profileContentsHeader, membershipWithdrawalWrapper만  display: block 설정하고 나머지 요소들에 display: none 설정하기
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

  document.addEventListener("click", (e) => {
    console.log(e.target);
  });
});
