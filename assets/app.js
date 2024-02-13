$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })



  $(document).ready(function () {
    // Double-click event for INGREDIENTES
    $(".ingredients h3").on("dblclick", function () {
      $(this).css("color", "red");
    });

    // Double-click event for PREPARACIÓN
    $(".preparation h3").on("dblclick", function () {
      $(this).css("color", "red");
    });
  });


  
  $(document).ready(function () {
    // Toggle event for card titles in Recetas Relacionadas section
    $(".card-title").on("click", function () {
      $(this).siblings(".card-text").toggle();
    });
  });
