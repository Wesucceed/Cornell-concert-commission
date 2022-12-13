// when #hamburger is clicked:
//     remove .hidden from #x
//     add .hidden to #hamburger
//     remove .hidden from #nav-narrow

// when #x is clicked:
//     remove .hidden from #hamburger
//     add .hidden to #x
//     add .hidden to #nav-narrow
$(window).resize(function() {
  if ($(window).width() < 678.1) {
    $("#nav-expand").addClass("hidden");
    $("#x").addClass("hidden");
    $("#hamburger").removeClass("hidden");
  } else {
    $("#nav-expand").removeClass("hidden");
    $("#hamburger").addClass("hidden");
    $("#x").addClass("hidden");
  }
});

$(document).ready(function() {
  if ($(window).width() < 678.1) {
    $("#nav-expand").addClass("hidden");
  } else {
    $("#nav-expand").removeClass("hidden");
    $("#hamburger").addClass("hidden");
  }
});

$("#hamburger").click(function() {
    $("#x").removeClass("hidden");

    $("#hamburger").addClass("hidden");

    $("#nav-expand").removeClass("hidden");
  });

  $("#x").click(function() {
    $("#hamburger").removeClass("hidden");

    $("#x").addClass("hidden");

    $("#nav-expand").addClass("hidden");
  });
