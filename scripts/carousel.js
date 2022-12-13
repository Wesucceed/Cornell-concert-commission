$("#next").click(function() {
  nextSlide();
});

$("#prev").click(function() {
  prevSlide();
});


const DOTS = $(".dots");

/* TODO: Replace TODO_SLIDES_CSS_SELECTOR with a CSS selector that selects _all_ slides. (See "hint" above in access element snippet.) */
const SLIDES = $(".casarole");

/* See "show next slide snippet" to use */
function nextSlide() {
  /* TODO: Replace TODO_CSS_HIDDEN_CLASS with the name of the class you will use to hide the non-active slides (i.e. `hidden`). */
  let nextNum = SLIDES.index($(".casarole:not(.hidden)")) + 1 + 1; /* +1 for 0-index array */
  if (nextNum > SLIDES.length) {
    nextNum = 1;
  }
  showSlide(nextNum);
}

/* See "show previous slide snippet" to use */
function prevSlide() {
  /* TODO: Replace TODO_CSS_HIDDEN_CLASS with the name of the class you will use to hide the non-active slides (i.e. `hidden`). */
  let prevNum = SLIDES.index($(".casarole:not(.hidden)")) - 1 + 1; /* +1 for 0-index array */
  if (prevNum <= 0) {
    prevNum = SLIDES.length;
  }
  showSlide(prevNum);
}

/* See "show slide X snippet" to use */
function showSlide(num) {
  let index = num - 1;
  let currentSlide = SLIDES.eq(index);
  let currentDot = DOTS.eq(index);
  /* TODO: snippets to hide SLIDES and then show currentSlide
     Use `SLIDES` or `currentSlide` as the "Access Element Snippet"
     (e.g. `SLIDES.addClass()` or `currentSlide.removeClass()`) */
  SLIDES.addClass("hidden");
  currentSlide.removeClass("hidden");
  DOTS.removeClass("indicator")
  currentDot.addClass("indicator");
}

// when dot(index-1) is clicked:
//     show slide at index

$("#dot1").click(function() {
  showSlide(1)
});

$("#dot2").click(function() {
  showSlide(2)
});

$("#dot3").click(function() {
  showSlide(3)
});

$("#dot4").click(function() {
  showSlide(4)
});

$("#dot5").click(function() {
  showSlide(5)
});

$("#dot6").click(function() {
  showSlide(6)
});
