var joshheadnet = {};

joshheadnet.load_tweet = (function() {
  var show_tweet = function(data) {
    $("#tweet_text").append(data.text);
    $("#tweet_time").append(data.time);
    $("#tweet_loading").html("");
    $('#message_box').fadeIn("fast");
  };

  return function() {
    $.ajax({
      url: "ajax/tweet",
      dataType: "json",
      success: show_tweet
    });
  };
}());

joshheadnet.show_image_when_loaded = function(image) {
  image.load(function() {
    $(this).fadeIn("fast");
  });
};

$(document).ready(function() {
  $('#message_box').hide();
  $('#thoughtful').hide();
  joshheadnet.load_tweet();
  joshheadnet.show_image_when_loaded($('#thoughtful'));
});
