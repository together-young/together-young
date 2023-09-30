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

    function toggleCheckAllExceptIdx() {
        // idx checkbox의 상태 가져오기
        var idxCheckbox = document.getElementById('idx');
        var isChecked = idxCheckbox.checked;

        // 모든 right-box-profile-box의 체크박스 가져오기
        var checkboxes = document.querySelectorAll('.right-box-profile-box input[type="checkbox"]');

        // 모든 체크박스 상태를 idx checkbox와 동기화
        checkboxes.forEach(function (checkbox) {
            if (checkbox !== idxCheckbox) {
                checkbox.checked = isChecked;
            }
        });
    }

    function toggleCheckAllExceptIdx2() {
        // 모든 right-box-profile-box의 체크박스 가져오기
        var checkboxes = document.querySelectorAll('.right-box-profile-box input[type="checkbox"]');

        var allChecked = true;

        // 모든 체크박스 상태 확인
        checkboxes.forEach(function (checkbox) {
            if (checkbox.id !== 'idx' && !checkbox.checked) {
                allChecked = false;
            }
        });

        // 모든 체크박스가 체크되었을 경우 idx checkbox 체크
        // 하나라도 체크되지 않았을 경우 idx checkbox 해제
        var idxCheckbox = document.getElementById('idx');
        idxCheckbox.checked = allChecked;
    }

// idx checkbox에 클릭 이벤트 리스너 추가
    var idxCheckbox = document.getElementById('idx');
    idxCheckbox.addEventListener('click', toggleCheckAllExceptIdx);

    var idxCheckbox = document.getElementById('idx');
    idxCheckbox.addEventListener('click', toggleCheckAllExceptIdx2);

// 나머지 체크박스에 클릭 이벤트 리스너 추가
    var checkboxes = document.querySelectorAll('.right-box-profile-box input[type="checkbox"]');
    checkboxes.forEach(function (checkbox) {
            if (checkbox.id !== 'idx') {
                checkbox.addEventListener('click', toggleCheckAllExceptIdx2);
            }
        }
    )
});