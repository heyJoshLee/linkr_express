$(".loader, .loader-bg").hide();

$("#new_post").on("click", function(e) {
  e.preventDefault();
  post_view.render();
});