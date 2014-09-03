var all_shows = {
  'thegoodwife'   : { hashtag: 'thegoodwife',     title: 'The Good Wife',     twitter: 'TheGoodWife_CBS', desc: 'Coming soon!' },
  'gameofthrones' : { hashtag: 'gameofthrones',   title: 'Game of Thrones',   twitter: 'GameOfThrones',   desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non sapien at neque tempor.' },
  'scandal'       : { hashtag: 'scandal',         title: 'Scandal',           twitter: 'ScandalABC',      desc: 'Nulla et eros accumsan, consectetur ante sed, malesuada ante. Mauris at neque vel mauris.' },
  'idol'          : { hashtag: 'idol',            title: 'American Idol',     twitter: 'AmericanIdol',    desc: 'Coming soon!' },
  'suits'         : { hashtag: 'suits',           title: 'Suits',             twitter: 'Suits_USA',       desc: 'Coming soon!' },
  'trueblood'     : { hashtag: 'trueblood',       title: 'True Blood',        twitter: 'TrueBloodHBO',    desc: 'Coming soon!' },
  'madmen'        : { hashtag: 'madmen',          title: 'Mad Men',           twitter: 'MadMen_AMC',      desc: 'Coming soon!' },
  'thewalkingdead': { hashtag: 'thewalkingdead',  title: 'The Walking Dead',  twitter: 'WalkingDead_AMC', desc: 'Coming soon!' },
  'thestrain'     : { hashtag: 'thestrain',       title: 'The Strain',        twitter: 'TheStrainFX',     desc: 'Coming soon!' },
  'tyrant'        : { hashtag: 'tyrant',          title: 'Tyrant',            twitter: 'TyrantFX',        desc: 'Coming soon!' },
  'thelastship'   : { hashtag: 'thelastship',     title: 'The Last Ship',     twitter: 'TheLastShipTNT',  desc: 'Coming soon!' },
  'extant'        : { hashtag: 'extant',          title: 'Extant',            twitter: 'Extant_CBS',      desc: 'Coming soon!' },
  'fallingskies'  : { hashtag: 'fallingskies',    title: 'Falling Skies',     twitter: 'FallingSkiesTNT', desc: 'Coming soon!' },
  'houseofcards'  : { hashtag: 'houseofcards',    title: 'House Of Cards',    twitter: 'HouseofCards',    desc: 'Coming soon!' }
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

// the show is loaded
$('#show').on('pageshow', function(e) {
  $(document).attr('title', current_show.title);
});