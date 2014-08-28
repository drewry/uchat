var mongoose = require('mongoose');

var TvShowTwitterSchema = mongoose.Schema({
	twitter_handle: {type:String},
    twitter_hashtag: {type:String}
});
var TvShowTwitter = mongoose.model('TvShowTwitter', TvShowTwitterSchema);

function createDefaultTvShowTwitter() {
    TvShowTwitter.find({}).exec(function(err, collection) {
		if(collection.length === 0) {
            TvShowTwitter.create({"twitter_hashtag":"OnceUponATime","twitter_handle":"OnceABC"});
            TvShowTwitter.create({"twitter_hashtag":"NashvilleABC","twitter_handle":"Nashville_ABC"});
            TvShowTwitter.create({"twitter_hashtag":"LastResort","twitter_handle":"LastResort_ABC"});
            TvShowTwitter.create({"twitter_hashtag":"Revenge","twitter_handle":"Revenge"});
            TvShowTwitter.create({"twitter_hashtag":"666ParkAve","twitter_handle":"666ParkAve_ABC"});
            TvShowTwitter.create({"twitter_hashtag":"MalibuCountry","twitter_handle":"Malibu_Country"});
            TvShowTwitter.create({"twitter_hashtag":"SharkTank","twitter_handle":"ABCSharkTank"});
            TvShowTwitter.create({"twitter_hashtag":"DWTS","twitter_handle":"DancingABC"});
            TvShowTwitter.create({"twitter_hashtag":"HappyEndings","twitter_handle":"HappyEndingsABC"});
            TvShowTwitter.create({"twitter_hashtag":"Castle","twitter_handle":"Castle_ABC"});
            TvShowTwitter.create({"twitter_hashtag":"Apt23","twitter_handle":"Apt23"});
            TvShowTwitter.create({"twitter_hashtag":"PrivatePractice","twitter_handle":"PrivatePractice"});
            TvShowTwitter.create({"twitter_hashtag":"GreysAnatomy","twitter_handle":"ABCGreysAnatomy"});
            TvShowTwitter.create({"twitter_hashtag":"Scandal","twitter_handle":"ScandalABC"});
            TvShowTwitter.create({"twitter_hashtag":"TheMiddle","twitter_handle":"TheMiddle_ABC"});
            TvShowTwitter.create({"twitter_hashtag":"Suburgatory","twitter_handle":"SuburgatoryABC"});
            TvShowTwitter.create({"twitter_hashtag":"LastManStanding","twitter_handle":"LastManABC"});
            TvShowTwitter.create({"twitter_hashtag":"Elementary","twitter_handle":"Elementary_CBS"});
            TvShowTwitter.create({"twitter_hashtag":"MadeInJersey","twitter_handle":"MadeInJerseyCBS"});
            TvShowTwitter.create({"twitter_hashtag":"partners","twitter_handle":"Partners_CBS"});
            TvShowTwitter.create({"twitter_hashtag":"Vegas","twitter_handle":"Vegas_CBS"});
            TvShowTwitter.create({"twitter_hashtag":"BlueBloods","twitter_handle":"BlueBloods_CBS"});
            TvShowTwitter.create({"twitter_hashtag":"CSINY","twitter_handle":"CSINY_CBS"});
            TvShowTwitter.create({"twitter_hashtag":"H50","twitter_handle":"HawaiiFive0CBS"});
            TvShowTwitter.create({"twitter_hashtag":"MikeandMolly","twitter_handle":"MikeMolly_CBS"});
            TvShowTwitter.create({"twitter_hashtag":"2BrokeGirls","twitter_handle":"2BrokeGirls_CBS"});
            TvShowTwitter.create({"twitter_hashtag":"BigBangTheory","twitter_handle":"BigBang_CBS"});
            TvShowTwitter.create({"twitter_hashtag":"HIMYM","twitter_handle":"HIMYM_CBS"});
            TvShowTwitter.create({"twitter_hashtag":"PersonOfInterest","twitter_handle":"PersonInterest"});
            TvShowTwitter.create({"twitter_hashtag":"NCIS","twitter_handle":"NCIS_CBS"});
            TvShowTwitter.create({"twitter_hashtag":"NCISLA","twitter_handle":"NCISLA_CBS"});
            TvShowTwitter.create({"twitter_hashtag":"TheMentalist","twitter_handle":"Mentalist_CBS"});
            TvShowTwitter.create({"twitter_hashtag":"AmazingRace","twitter_handle":"AmazingRace_CBS"});
            TvShowTwitter.create({"twitter_hashtag":"Survivor","twitter_handle":"Survivor_Tweet"});
            TvShowTwitter.create({"twitter_hashtag":"CriminalMinds","twitter_handle":"CrimMinds_CBS"});
            TvShowTwitter.create({"twitter_hashtag":"CSI","twitter_handle":"CSI_CBS"});
            TvShowTwitter.create({"twitter_hashtag":"TwoAndAHalfMen","twitter_handle":"TwoHalfMen_CBS"});
            TvShowTwitter.create({"twitter_hashtag":"TheGoodWife","twitter_handle":"TheGoodWife_CBS"});
            TvShowTwitter.create({"twitter_hashtag":"Arrow","twitter_handle":"CW_network"});
            TvShowTwitter.create({"twitter_hashtag":"90210","twitter_handle":"CW_network"});
            TvShowTwitter.create({"twitter_hashtag":"emilyowensmd","twitter_handle":"CW_network"});
            TvShowTwitter.create({"twitter_hashtag":"gossipgirl","twitter_handle":"CW_network"});
            TvShowTwitter.create({"twitter_hashtag":"batb","twitter_handle":"CW_network"});
            TvShowTwitter.create({"twitter_hashtag":"tvd","twitter_handle":"CW_network"});
            TvShowTwitter.create({"twitter_hashtag":"hartofdixie","twitter_handle":"CW_network"});
            TvShowTwitter.create({"twitter_hashtag":"Supernatural","twitter_handle":"CW_network"});
            TvShowTwitter.create({"twitter_hashtag":"ANTM","twitter_handle":"CW_ANTM"});
            TvShowTwitter.create({"twitter_hashtag":"Nikita","twitter_handle":"CW_network"});
            TvShowTwitter.create({"twitter_hashtag":"fringe","twitter_handle":"FRINGEonFOX"});
            TvShowTwitter.create({"twitter_hashtag":"xfactor","twitter_handle":"TheXFactorUSA"});
            TvShowTwitter.create({"twitter_hashtag":"benandkate","twitter_handle":"BenandKateFOX"});
            TvShowTwitter.create({"twitter_hashtag":"themindyproject","twitter_handle":"MindyProjectFOX"});
            TvShowTwitter.create({"twitter_hashtag":"themobdoctor","twitter_handle":"TheMobDoctorFOX"});
            TvShowTwitter.create({"twitter_hashtag":"FamilyGuy","twitter_handle":"FamilyGuyonFOX"});
            TvShowTwitter.create({"twitter_hashtag":"americandad","twitter_handle":"AmericanDadFOX"});
            TvShowTwitter.create({"twitter_hashtag":"bobsburgers","twitter_handle":"BobsBurgersFOX"});
            TvShowTwitter.create({"twitter_hashtag":"thesimpsons","twitter_handle":"HomerJSimpson"});
            TvShowTwitter.create({"twitter_hashtag":"touch","twitter_handle":"TouchOnTv"});
            TvShowTwitter.create({"twitter_hashtag":"bones","twitter_handle":"BONESonFOX"});
            TvShowTwitter.create({"twitter_hashtag":"Glee","twitter_handle":"GLEEonFOX"});
            TvShowTwitter.create({"twitter_hashtag":"NewGirl","twitter_handle":"NewGirlonFOX"});
            TvShowTwitter.create({"twitter_hashtag":"Parenthood","twitter_handle":"nbcparenthood"});
            TvShowTwitter.create({"twitter_hashtag":"AnimalPractice","twitter_handle":"AnimalPractice"});
            TvShowTwitter.create({"twitter_hashtag":"ChicagoFire","twitter_handle":"NBCChicagoFire"});
            TvShowTwitter.create({"twitter_hashtag":"GoOn","twitter_handle":"NBCGo_On"});
            TvShowTwitter.create({"twitter_hashtag":"GuyswithKids","twitter_handle":"NBCGuyswithKids"});
            TvShowTwitter.create({"twitter_hashtag":"NewNormal","twitter_handle":"NBCTheNewNormal"});
            TvShowTwitter.create({"twitter_hashtag":"Revolution","twitter_handle":"NBCRevolution"});
            TvShowTwitter.create({"twitter_hashtag":"ParksandRec","twitter_handle":"parksandrecnbc"});
            TvShowTwitter.create({"twitter_hashtag":"TheOffice","twitter_handle":"theofficenbc"});
            TvShowTwitter.create({"twitter_hashtag":"30Rock","twitter_handle":"nbc30roc"});
            TvShowTwitter.create({"twitter_hashtag":"UpAllNight","twitter_handle":"NBCUpAllNight"});
            TvShowTwitter.create({"twitter_hashtag":"TheVoice","twitter_handle":"NBCTheVoice"});
            TvShowTwitter.create({"twitter_hashtag":"Grimm","twitter_handle":"NBCGrimm"});
            TvShowTwitter.create({"twitter_hashtag":"SVU","twitter_handle":"nbcsvu"});
            TvShowTwitter.create({"twitter_hashtag":"Whitney","twitter_handle":"NBCWhitney"});
            TvShowTwitter.create({"twitter_hashtag":"Community","twitter_handle":"nbccommunity"});
            TvShowTwitter.create({"twitter_hashtag":"Dexter","twitter_handle":"SHO_Dexter"});
            TvShowTwitter.create({"twitter_hashtag":"Homeland","twitter_handle":"SHO_Homeland"});
            TvShowTwitter.create({"twitter_hashtag":"TheWalkingDead","twitter_handle":"WalkingDead_AMC"});
            TvShowTwitter.create({"twitter_hashtag":"BoardwalkEmpire","twitter_handle":"HBO"});
            TvShowTwitter.create({"twitter_hashtag":"SOAFX","twitter_handle":"SonsOfAnarchy"});
		}
	})
}

exports.createDefaultTvShowTwitter = createDefaultTvShowTwitter;