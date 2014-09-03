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

$("#home .shows a").on("vclick", function(e) {
  var tag = $(this).attr('data-show-tag');
  var show = all_shows[tag];

  $('#show h1').text('#' + tag);
  $('#show h2').text(show.title);
  $('#show p').text(show.desc);
  $('#show figure').html('<img src="img/media/thumb-' + tag + '.jpg">');
});