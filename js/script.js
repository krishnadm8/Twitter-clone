//tweet function

function render(data) {
  var html = '<div class="tweets"><i class="fas fa-user-circle" style="font-size:35px; padding-right:10px; padding-bottom: 10px; "></i><span>'+ data.username+'</span> @DJ_trump <br> <p>'+data.message+'</p><i id="like" onclick="likefunction()" class="fas fa-heart" style="font-size: 25px; padding-right:20px; padding-left:20px; color:#ffffff"> </i><i onclick ="render(this)" class="fas fa-retweet" style="font-size: 25px; padding-right:20px; color:#ffffff"></i><i class="fas fa-share" style="font-size: 25px; padding-right:20px; color:#ffffff"></i> <hr class="new1"> </div>';
  $('#container').prepend(html);
}
//comment function

function render_cmnt(data) {
  var html = '<div class="comment-text"><p>@userhandle: '+data.comment+'</p></div>';
  $('#comments-sec').prepend(html);
}

function likefunction() {
  $('#like').css("color","red");
}

$(document).ready(function(){
  var Tweets = [
    {"username": "username","handle":"@userhandle","message" : "Make the world Great again!" },
  ];
  var Comments = [
    { "comment" : " "}
  ];

  for (var i = 0; i < Tweets.length; i++) {
    render(Tweets[i]);

  }
  $('#input_tweet').click(function () {

      var addtweet = {
        "username": "username",
        "message" : $('#input_tweet_box').val()
      };
      if (addtweet.message!== '' && addtweet.message.length <= 140) {
      Tweets.push(addtweet);
      render(addtweet);
      $('#input_tweet_box').val('');
    }

  });

  $('#cmnt_btn').click(function () {
    var addcmnt = {
      "comment" : $('#cmnt_input').val()
    };
    Comments.push(addcmnt);
    render_cmnt(addcmnt);
    $('#cmnt_input').val('');
  });

});
