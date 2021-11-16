jQuery(document).ready(function ($) {
  $(".level-bar-inner").css("width", "0");

  $(window).on("load", function () {
    $(".level-bar-inner").each(function () {
      var itemWidth = $(this).data("level");

      $(this).animate(
        {
          width: itemWidth,
        },
        800
      );
    });
  });
});

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
});