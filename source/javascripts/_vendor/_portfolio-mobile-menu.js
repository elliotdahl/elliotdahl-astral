$(document).ready(function() {
    console.log("mobile nav ready");

    $("#menu-open").on('click', function() {
      $(".splash-nav").removeClass("hide");
    });
    $("#menu-close").on('click', function() {
      $(".splash-nav").addClass("hide");
    });
    $("#mobile-menu a").on('click', function() {
      $(".splash-nav").addClass("hide");
    });


});
