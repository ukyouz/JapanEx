var data = {};

(function () {

var areas = {
"富山": {level:0,},"神奈川":{level:0,},"茨城":{level:0,},"千葉":{level:0,},"東京":{level:0,},"静岡":{level:0,},"京都":{level:0,},"和歌山":{level:0,},"鳥取":{level:0,},"山口":{level:0,},"広島":{level:0,},"島根":{level:0,},"愛知":{level:0,},"三重":{level:0,},"兵庫":{level:0,},"石川":{level:0,},"山梨":{level:0,},"大阪":{level:0,},"愛媛":{level:0,},"高知":{level:0,},"徳島":{level:0,},"埼玉":{level:0,},"栃木":{level:0,},"岡山":{level:0,},"大分":{level:0,},"福岡":{level:0,},"長崎":{level:0,},"香川":{level:0,},"福井":{level:0,},"沖縄":{level:0,},"宮崎":{level:0,},"熊本":{level:0,},"佐賀":{level:0,},"鹿児島":{level:0,},"奈良":{level:0,},"滋賀":{level:0,},"群馬":{level:0,},"長野":{level:0,},"岐阜":{level:0,},"福島":{level:0,},"新潟":{level:0,},"宮城":{level:0,},"山形":{level:0,},"岩手":{level:0,},"秋田":{level:0,},"青森":{level:0,},"北海道":{level:0,}};
var colors = {'red':'#e84c3d', 'orange':'#d58337', 'green':'#30cc70', 'yellow':'#f3c218', 'blue':'#3598db', 'white':'#ffffff'};

//////////////
/// vue.js
//////////////

data = {
	"lang": "zh",
	"langs": [
		{"code": "jp", "name": "日本語"},
		{"code": "zh", "name": "繁體中文"},
		{"code": "en", "name": "English"},
	],
	"locale": {
		"jp": {
			"ui": {
				"site_title": "制県レベル",
				"level": "レベル：",
				"search": "検索：",
				"search_google": "日本 %s スポット",
				"description": "JapanEx 制県レベル、日本全国制覇を目指せ！",
			},
			"areas": {"富山":"富山","神奈川":"神奈川","茨城":"茨城","千葉":"千葉","東京":"東京","静岡":"静岡","京都":"京都","和歌山":"和歌山","鳥取":"鳥取","山口":"山口","広島":"広島","島根":"島根","愛知":"愛知","三重":"三重","兵庫":"兵庫","石川":"石川","山梨":"山梨","大阪":"大阪","愛媛":"愛媛","高知":"高知","徳島":"徳島","埼玉":"埼玉","栃木":"栃木","岡山":"岡山","大分":"大分","福岡":"福岡","長崎":"長崎","香川":"香川","福井":"福井","沖縄":"沖縄","宮崎":"宮崎","熊本":"熊本","佐賀":"佐賀","鹿児島":"鹿児島","奈良":"奈良","滋賀":"滋賀","群馬":"群馬","長野":"長野","岐阜":"岐阜","福島":"福島","新潟":"新潟","宮城":"宮城","山形":"山形","岩手":"岩手","秋田":"秋田","青森":"青森","北海道":"北海道"},
			"form": [
				{"level": "5", "color": "red", "description": "住居（住んだ）"},
				{"level": "4", "color": "orange", "description": "宿泊（泊まった）"},
				{"level": "3", "color": "yellow", "description": "訪問（歩いた）"},
				{"level": "2", "color": "green", "description": "接地（降り立った）"},
				{"level": "1", "color": "blue", "description": "通過（通過した）"},
				{"level": "0", "color": "white", "description": "未踏（未訪問）"},
			],
			"button": {
				"input_name": "名前を入力してください。",
				"set_name": "名前を設定",
				"download": "画面を保存",
				"share_fb": "FBにシェア",
			},
			"fb_ui": {
				"location_having_been_to": "ここは行ったことある：",
				"location_zero": "これからどんどん日本へ旅するつもりだ",
				"japan_level": "日本の制県レベル：",
				"and": "と",
				"comma": "、",
				"period": "。",
			}
		},
		"zh": {
			"ui": {
				"site_title": "制縣等級",
				"level": "等級：",
				"search": "搜尋：",
				"search_google": "日本 %s 景點",
				"description": "JapanEx 制縣等級，查看與分享您的遊日等級！",
			},
			"areas": {"富山":"富山","神奈川":"神奈川","茨城":"茨城","千葉":"千葉","東京":"東京","静岡":"静岡","京都":"京都","和歌山":"和歌山","鳥取":"鳥取","山口":"山口","広島":"廣島","島根":"島根","愛知":"愛知","三重":"三重","兵庫":"兵庫","石川":"石川","山梨":"山梨","大阪":"大阪","愛媛":"愛媛","高知":"高知","徳島":"德島","埼玉":"埼玉","栃木":"栃木","岡山":"岡山","大分":"大分","福岡":"福岡","長崎":"長崎","香川":"香川","福井":"福井","沖縄":"沖繩","宮崎":"宮崎","熊本":"熊本","佐賀":"佐賀","鹿児島":"鹿兒島","奈良":"奈良","滋賀":"滋賀","群馬":"群馬","長野":"長野","岐阜":"岐阜","福島":"福島","新潟":"新潟","宮城":"宮城","山形":"山形","岩手":"岩手","秋田":"秋田","青森":"青森","北海道":"北海道"},
			"form": [
				{"level": "5", "color": "red", "description": "住居（居住過）"},
				{"level": "4", "color": "orange", "description": "宿泊（住宿過）"},
				{"level": "3", "color": "yellow", "description": "訪問（遊玩過）"},
				{"level": "2", "color": "green", "description": "接地（休息、換車等）"},
				{"level": "1", "color": "blue", "description": "通過（路過）"},
				{"level": "0", "color": "white", "description": "沒去過"},
			],
			"button": {
				"input_name": "請輸入您想要顯示的名字：",
				"set_name": "設定名字",
				"download": "儲存圖片",
				"share_fb": "FB 分享",
			},
			"fb_ui": {
				"location_having_been_to": "去過日本的",
				"location_zero": "正要開始全新的日本探險",
				"japan_level": "日本制縣等級：",
				"and": "和",
				"comma": "、",
				"period": "。",
			}
		},
		"en": {
			"ui": {
				"site_title": "JP Level",
				"level": "Level：",
				"search": "Search：",
				"search_google": "japan %s spot",
				"description": "Japan Experience Level: Have you been visited, stayed, and even lived in!?",
			},
			"areas": {"富山":"Toyama","神奈川":"Kanagawa","茨城":"Ibaraki","千葉":"Chiba","東京":"Tokyo","静岡":"Shizuoka","京都":"Kyoto","和歌山":"Wakayama","鳥取":"Tottori","山口":"Yamaguchi","広島":"Hiroshima","島根":"Shimane","愛知":"Aichi","三重":"Mie","兵庫":"Hyogo","石川":"Ishikawa","山梨":"Yamanashi","大阪":"Osaka","愛媛":"Ehime","高知":"Kouchi","徳島":"Tokushima","埼玉":"Saitama","栃木":"Tochigi","岡山":"Okayama","大分":"Oita","福岡":"Fukuoka","長崎":"Nagasaki","香川":"Kagawa","福井":"Fukui","沖縄":"Okinawa","宮崎":"Miyazaki","熊本":"Kumamoto","佐賀":"Saga","鹿児島":"Kagoshima","奈良":"Nara","滋賀":"Shiga","群馬":"Gunma","長野":"Nagano","岐阜":"Gihu","福島":"Fukushima","新潟":"Niigata","宮城":"Miyagi","山形":"Yamagata","岩手":"Iwate","秋田":"Akita","青森":"Aomori","北海道":"Hokkaido"},
			"form": [
				{"level": "5", "color": "red", "description": "Lived there"},
				{"level": "4", "color": "orange", "description": "Stayed there"},
				{"level": "3", "color": "yellow", "description": "Visited there"},
				{"level": "2", "color": "green", "description": "Alighted there"},
				{"level": "1", "color": "blue", "description": "Passed there"},
				{"level": "0", "color": "white", "description": "Never been there"},
			],
			"button": {
				"input_name": "Please enter the name you want to show：",
				"set_name": "Add Name",
				"download": "Save IMG",
				"share_fb": "Share FB",
			},
			"fb_ui": {
				"location_having_been_to": "Have been to ",
				"location_zero": "Start exploring Japan.",
				"japan_level": "Japan Level：",
				"and": "and",
				"comma": ",",
				"period": ".",
			}
		}
	}
}

var site_title = document.title;
var apps;

window.onload = function() {
	init(areas, data);
};

function init(japan, data) {
	var language_set = window.navigator.language.split('-')[0];

	data.lang = 'en';
	if ( ['jp', 'zh', 'en'].indexOf(language_set) >= 0 )
		data.lang = language_set;

	document.body.lang = data.lang;
	// console.log(data.lang);

	Vue.component('simple-text', {
		props: ['data'],
		template: `{{data}}`,
	})

	apps = {
		svg: new Vue({
			el: '#svg',
			data: {
				d: data.locale[data.lang]
			},
		}),
		app: new Vue({
			el: '#app',
			data: {
				d: data.locale[data.lang],
				langs: data.langs,
				lang: data.lang,
				current_city: '',
			},
			watch: {
				lang: function(val, oldVal) {
					data.lang = val;
					document.body.lang = val;
					for(var c in apps){
						apps[c].d = data.locale[data.lang];
					}
				}
			},
		}),
	};


	/////////////////
	// main
	/////////////////

	if(window.location.hash) {
		var hash = window.location.hash.substring(1);
		var j = 0;
		for(var i in japan) {
			japan[i].level = parseInt(hash[j++]);
			setLevel($('#svg #'+i)[0], japan[i].level);
		}
		calculate();
	}

	if(window.location.search) {
		params = parseQuery();
		// set input name
		$('#svg #author').html(params.t);
	}

	for(var i in colors) {
		$('#svg .'+i).attr('fill', colors[i]);
	}

	var clickedState = '';
	$(document).on("click", function(e){
		var target = e.target;
		closeForm();
		if($(target).parents('#area').length) {
			if (target.id == '') target = target.parentNode;
			clickedState = target;
			setForm(target);
		} else
		if($(target).parents('#label').length) {
			target = $('#svg #'+$(target).parent().data('place'))[0];
			clickedState = target;
			setForm(target);
		}

		switch($(target).attr('id')){
			case 'author':
				setAuthor();
				break;
			case 'close':
				closeForm();
				break;
			case 'saveAsImage':
				// updateDB();
				saveAsImage(target);
				break;
			case 'shareFB':
			case 'shareTW':
				share(target);
				break;
			case 'shareBtn':
				shareFB();
				break;
		}

		if(target.tagName.toLowerCase()=='label') {
			setLevel(clickedState, target.dataset.value);
			closeForm();
			calculate();
			// updateDB();
		}
	});
}

function saveAsImage(elem) {	
	var width = ($('#svg').width()>1000)? $('#svg').width() : 1000;
	width = (width>1500)? 1500 : width;
	var png = toDataURL(width);
	// png.replace(/^data:image\/png/, 'data:application/octet-stream');
	$(elem).attr({'href': png});
	// window.open(png, 'japanex.png');
};

function share(e) {
	var url = window.location.href;
	var content = "", type = "";
	t = e.dataset.type;
	level = calculate();
	params = parseQuery();
	places = [];
	for(var key in areas){
		if(areas[key].level>0)
			places.push(key);
	}
	ui = data.locale[data.lang].fb_ui;
	name = (params.t!=undefined)?params.t:"";
	if(places.length==0){
		places_text = ui.location_zero;
	} else {
		places_last = places.pop();
		places_text = (places.length) ? places.join(ui.comma)+ui.and+places_last : places_last;
		places_text = ui.location_having_been_to+places_text;
	}
	switch(t) {
		case 'twitter':
			content = "http://twitter.com/share?url="+url+"&text=Tweet This Post";
			type = "twitterShare";
			break;
		case 'fb':
			ui = data.locale[data.lang].fb_ui;
			content = "http://www.facebook.com/sharer.php?u="+url+"&amp;t="+name+places_text+ui.period;
			type = "facebookShare";
			break;
	}

	window.open(content, type, 'width=626,height=436'); return false;
}

function shareFB() {
	$('head meta[name="og:image"]').attr('content', 'aa');
	level = calculate();
	params = parseQuery();
	places = [];
	for(var key in areas){
		if(areas[key].level>0)
			places.push(key);
	}
	ui = data.locale[data.lang].fb_ui;
	name = (params.t!=undefined)?params.t:"";
	if(places.length==0){
		places_text = ui.location_zero;
	} else {
		places_last = places.pop();
		places_text = (places.length) ? places.join(ui.comma)+ui.and+places_last : places_last;
		places_text = ui.location_having_been_to+places_text;
	}
	FB.ui({
	    method: 'feed',
	    display: 'popup',
	    mobile_iframe: true,
	    name: site_title+' - Level '+level,
	    description: name+places_text+ui.period,
	    caption: ui.japan_level+level,
	    // picture: toDataURL(),
	    link: window.location.href,
	}, function(response){});
}

function setLevel(elem, level) {
	var color = getColor(level);
	var $elem = $(elem);
	$elem.attr({'level': level.toString(), 'fill':colors[getColor(level)]});
	$elem.children().attr({'fill':colors[getColor(level)]});
	areas[elem.id].level = level;
	return $elem;
}
function setForm(elem) {
	var left = $(elem).offset().left;
	var top = $(elem).offset().top;
	var leftBorder = $('#svg').offset().left + $('#svg').width();
	var bottomBorder = $(document).height();
	var $form = $('#form').css({top:0, left:0});
	var width = $form.outerWidth();
	var height= $form.outerHeight();
	
	var d = data.locale[data.lang];
	var title = d.areas[$(elem).attr('id')];
	var q = d.ui.search_google;
	var q_search = d.ui.search;
	q = q.replace("%s", title);
	
	if(leftBorder - left < width)
		left = leftBorder - width;
	if(bottomBorder - top < height)
		top = bottomBorder - height;
	
	apps.app.current_city = $(elem).attr('id');
	$form.addClass('show').css({
		top: top,
		left: left,
	}).find('.title .lang').html(title);
	$form.find('.title .search').attr({'href': 'https://google.com/search?q='+q, 'title': q_search+q});
	// console.log(elem);
	if($(elem).attr('level'))
		$form.find('.label.'+getColor($(elem).attr('level'))).addClass('selected');
}

function closeForm() {
	$('#form').removeClass('show').find('.level').removeClass('selected');
}

function calculate() {
	var level = 0;
	var hash = "";
	for(var i in areas) {
		level += parseInt(areas[i].level);
		hash += areas[i].level;
	}
	// console.log();
	// window.location.hash = hash;
	var text = (level) ? site_title+" - Level "+level : site_title;
	history.replaceState(undefined, text, "#" + hash);
	// $('html og:title').html(text);
	$('#svg #level').html(level);

	return level;
}

function getColor(level) {
	switch (parseInt(level)) {
		case 5:
			color = 'red'; break;
		case 4:
			color = 'orange'; break;
		case 3:
			color = 'yellow'; break;
		case 2:
			color = 'green'; break;
		case 1:
			color = 'blue'; break;
		default:
			color = 'white';
	}
	return color;
}
function toDataURL (width) {
	var svgString = new XMLSerializer().serializeToString(document.querySelector('svg'));
	var canvas = document.createElement('canvas');
	var ctx = canvas.getContext("2d");
	canvas.width = width;
	// canvas.width = ($('#svg').width()>1000)? $('#svg').width() : 1000;
	// canvas.width = (canvas.width>1500)? 1500 : canvas.width;
	canvas.height = canvas.width;
	canvg(canvas, svgString);
	return canvas.toDataURL("image/png");
}

})();

function parseQuery(){
	params = {};
	search = window.location.search.substring(1).split("&");
	search.forEach(function(val){
		query = val.split("=");
		if(query.length==2)
			params[query[0]] = decodeURI(query[1]);
	});

	return params;
}

function setAuthor(){
	p = parseQuery();
	answer = prompt(data.locale[data.lang].button.input_name, p.t);
	console.log(answer);
	if(answer!=null){
		window.location.search = "t="+encodeURI(answer);
	}
}
