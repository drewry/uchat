var all_shows = {
  'thegoodwife'   : { hashtag: 'thegoodwife',     title: 'The Good Wife',     twitter: 'TheGoodWife_CBS', desc: 'Coming soon!', rating: 8 },
  'gameofthrones' : { hashtag: 'gameofthrones',   title: 'Game of Thrones',   twitter: 'GameOfThrones',   desc: 'Seven noble families fight for control of the mythical land of Westeros.', rating: 9 },
  'scandal'       : { hashtag: 'scandal',         title: 'Scandal',           twitter: 'ScandalABC',      desc: 'A White House Communications Director leaves to start her own crisis management firm ...', rating: 8 },
  'idol'          : { hashtag: 'idol',            title: 'American Idol',     twitter: 'AmericanIdol',    desc: 'Coming soon!', rating: 4 },
  'suits'         : { hashtag: 'suits',           title: 'Suits',             twitter: 'Suits_USA',       desc: 'Coming soon!', rating: 9},
  'trueblood'     : { hashtag: 'trueblood',       title: 'True Blood',        twitter: 'TrueBloodHBO',    desc: 'Coming soon!', rating: 8},
  'madmen'        : { hashtag: 'madmen',          title: 'Mad Men',           twitter: 'MadMen_AMC',      desc: 'Coming soon!', rating: 9 },
  'thewalkingdead': { hashtag: 'thewalkingdead',  title: 'The Walking Dead',  twitter: 'WalkingDead_AMC', desc: 'Coming soon!', rating: 7 },
  'thestrain'     : { hashtag: 'thestrain',       title: 'The Strain',        twitter: 'TheStrainFX',     desc: 'Coming soon!', rating: 8 },
  'tyrant'        : { hashtag: 'tyrant',          title: 'Tyrant',            twitter: 'TyrantFX',        desc: 'Coming soon!', rating: 8 },
  'thelastship'   : { hashtag: 'thelastship',     title: 'The Last Ship',     twitter: 'TheLastShipTNT',  desc: 'Coming soon!', rating: 7 },
  'extant'        : { hashtag: 'extant',          title: 'Extant',            twitter: 'Extant_CBS',      desc: 'Coming soon!', rating: 7 },
  'fallingskies'  : { hashtag: 'fallingskies',    title: 'Falling Skies',     twitter: 'FallingSkiesTNT', desc: 'Coming soon!', rating: 7 },
  'houseofcards'  : { hashtag: 'houseofcards',    title: 'House Of Cards',    twitter: 'HouseofCards',    desc: 'Coming soon!', rating: 9 }
};
var current_show = '';
var api_host = 'http://localhost:8081';

function renderTweet(tweet) {
  var time = moment(tweet.created_at).fromNow();
  var html = '';
  html = '<div class="tweet ui-grid-d">';
    html += '<div class="ui-block-a"><figure><a href="http://twitter.com/' + tweet.user.screen_name + '" target="_blank"><img src="' + tweet.user.profile_image_url + '"></a></figure></div>';
    html += '<div class="ui-block-b"><span class="time">' + time + '</span><h3><a href="http://twitter.com/' + tweet.user.screen_name + '" target="_blank">@' + tweet.user.screen_name + '</a></h3>' + tweet.text + '</div>';
  html += '</div>';

  return html;
}

// clicking to change a show
$('#home .shows a').on('vclick', function(e) {
  var tag = $(this).attr('data-show-tag');
  var show = all_shows[tag];

  current_show = show;

  $('#show h1').text('#' + tag);
  $('#show h2').text(show.title);
  $('#show p').text(show.desc);
  $('#show figure').html('<img src="img/media/thumb-' + tag + '.jpg">');
  $('#show .tweets').html('');

  $.get(api_host + '/tvshow/tweetsByHashtag/' + tag, function(tweets) {
    for(var i = 0; i < tweets.length; i++) {
      var tweet = tweets[i];

      $('#show .tweets').append(renderTweet(tweet));
    }
  });
});

// close the popup
$('#tweet').on('vclick', function(e) {
  var $textarea = $(this).parent().children('textarea');
  var tweet = {
    user: {
      created_at: moment().format(),
      screen_name: 'ATT',
      profile_image_url: 'https://pbs.twimg.com/profile_images/459417596433932288/lwjFsLn8_400x400.png'
    },
    text: $textarea.val()
  };

  $('#show .tweets').prepend(renderTweet(tweet));

  $textarea.val('');
  $("#popupTweet").popup("close");
})
