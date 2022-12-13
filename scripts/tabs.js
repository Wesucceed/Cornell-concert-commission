$("#upcoming-button").click(function() {
    $("#past-concerts").addClass("hidden");
    $("#upcoming-concerts").removeClass("hidden");
});

$("#past-button").click(function() {
    $("#upcoming-concerts").addClass("hidden");
    $("#past-concerts").removeClass("hidden");
});

/* $("20-present-button").click(function() {
    $("#2010-2019").addClass("hidden");
    $("#2000-2009").addClass("hidden");
    $("#1990-1999").addClass("hidden");
    $("#1980-1989").addClass("hidden");
    $("#1970-1979").addClass("hidden");
    $("#20-present").removeClass("hidden");
}); */

/* $("20-present-button").click(function() {
    console.log("button clicked");
    $(".past").addClass("hidden");
});
 */
