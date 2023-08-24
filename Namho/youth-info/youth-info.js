$(function () {
  function handleToggle($button, $targetWrap) {
    if ($button.hasClass("active")) {
      $button.removeClass("active");
      $targetWrap.css("display", "none");
      $(".community-articles-wrap").css("display", "flex");
      $(".company-articles-wrap").css("display", "none");
      $(".ideas-articles-wrap").css("display", "none");
    } else {
      $(".card-inside-container.active").removeClass("active");
      $button.addClass("active");
      $(
        ".community-articles-wrap, .company-articles-wrap, .ideas-articles-wrap"
      ).css("display", "none");
      $targetWrap.css("display", "flex");
    }
  }

  $("#hover-green").on("click", function (e) {
    e.preventDefault();
    handleToggle($("#hover-green"), $(".company-articles-wrap"));
  });

  $("#hover-blue").on("click", function (e) {
    e.preventDefault();
    handleToggle($("#hover-blue"), $(".ideas-articles-wrap"));
  });
});
