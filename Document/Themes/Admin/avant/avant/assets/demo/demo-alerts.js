jQuery(document).ready(function() {
	$("#pulsate1").pulsate({glow:false});
	$("#pulsate2").pulsate({color:"#09f"});
	$("#pulsate3").pulsate({reach:100});
	$("#pulsate4").pulsate({speed:2500});
	$("#pulsate5").pulsate({pause:1000});
	$("#pulsate6").pulsate({onHover:true});
});

function show_rich() {
	$.pnotify({
		title: '<span style="color: red;">Rich Content Notice</span>',
		type: 'success',
		text: '<span style="color: blue;">Look at my beautiful <strong>strong</strong>, <em>emphasized</em>, and <span style="font-size: 1.5em;">large</span> text.</span>'
	});
}

function dyn_notice() {
	var percent = 0;
	var notice = $.pnotify({
		title: "Please Wait",
		type: 'info',
		icon: 'fa fa-spin fa-refresh',
		hide: false,
		closer: false,
		sticker: false,
		opacity: 0.75,
		shadow: false,
		width: "200px"
	});

	setTimeout(function() {
		notice.pnotify({
			title: false
		});
		var interval = setInterval(function() {
			percent += 2;
			var options = {
				text: percent + "% complete."
			};
			if (percent == 80) options.title = "Almost There";
			if (percent >= 100) {
				window.clearInterval(interval);
				options.title = "Done!";
				options.type = "success";
				options.hide = true;
				options.closer = true;
				options.sticker = true;
				options.icon = 'fa fa-check';
				options.opacity = 1;
				options.shadow = true;
				options.width = $.pnotify.defaults.width;
			}
			notice.pnotify(options);
		}, 120);
	}, 2000);
}
