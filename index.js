var image = ["img1", "img2", "img3", "img4", "img5", "img6"];

$(".list-group li").hover(function () {
  var value = $(this).index();
  hoverContent(value);
});
function hoverContent(value) {
  $("#list-content li").removeClass("show");
  $("#list-content li:nth-child(" + value + ")").addClass("show");
  $("#bg").removeClass();
  $("#bg").addClass(image[value]);
}
