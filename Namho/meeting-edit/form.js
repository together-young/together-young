$(function () {
  // 카테고리 함수
  $("#category").on("click", function () {
    if ($("#regionDropdown").hasClass("active")) {
      $("#regionDropdown").removeClass("active");
      $("#regionIcon").removeClass("rotate");
    }
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
  // 지역 함수
  $("#region").on("click", function () {
    if ($("#categoryDropdown").hasClass("active")) {
      $("#categoryDropdown").removeClass("active");
      $("#categoryIcon").removeClass("rotate");
    }
    $(this).toggleClass("active");
    $("#regionIcon").toggleClass("rotate");
    $("#regionDropdown").toggleClass("active");
  });

  $(".region").on("click", function () {
    const regionName = $(this).find("div").text();
    $("#regionInput").val(regionName);
    $("#regionDropdown").removeClass("active");
    $("#regionIcon").removeClass("rotate");
  });
});
