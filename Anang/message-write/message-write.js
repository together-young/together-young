$(function () {
  // 카테고리 함수
  $("#category").on("click", function () {
    $(this).toggleClass("active");
    $("#categoryIcon").toggleClass("rotate");
    $("#categoryDropdown").toggleClass("active");
  });

  $(".category").on("click", function () {
    const categoryName = $(this).find("div").text();
    $("#categoryInput").val(categoryName);
    $("#categoryDropdown").removeClass("active");
    $("#categoryIcon").removeClass("rotate");
  });


});
