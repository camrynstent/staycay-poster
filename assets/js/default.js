$(function() {
  var laughAudio = document.getElementById('cjs-laugh-audio');

  // toggle card 1
  $('body').on('click', '#cjs-toggle-card-ace', function(e) {
    e.preventDefault();
    $(".cjs-card-container--ace").toggleClass("cjs-card-container--flipped");
    $(".cjs-body").toggleClass("cjs-body--smoke");
    $(".cjs-card-container--joker").removeClass("cjs-card-container--flipped");
    $(".cjs-card-container--seven").removeClass("cjs-card-container--flipped-infinite");
    laughAudio.pause();
  });

  // toggle card 2
  $('body').on('click', '#cjs-toggle-card-seven', function(e) {
    e.preventDefault();
    $(".cjs-card-container--seven").toggleClass("cjs-card-container--flipped-infinite");
    $(".cjs-card-container--joker").removeClass("cjs-card-container--flipped");
    $(".cjs-card-container--ace").removeClass("cjs-card-container--flipped");
    $(".cjs-body").removeClass("cjs-body--smoke");
    laughAudio.pause();
  });

  // toggle card 2
  $('body').on('click', '#cjs-toggle-card-joker', function(e) {
    e.preventDefault();
    $(".cjs-card-container--joker").toggleClass("cjs-card-container--flipped");
    $(".cjs-card-container--seven").removeClass("cjs-card-container--flipped-infinite");
    $(".cjs-card-container--ace").removeClass("cjs-card-container--flipped");
    $(".cjs-body").removeClass("cjs-body--smoke");

    laughAudio.play();
  });
});
