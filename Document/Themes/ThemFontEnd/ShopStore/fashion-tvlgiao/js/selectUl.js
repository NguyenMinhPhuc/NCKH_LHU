(function($) {
	$.fn.selectUl = function() {
		var config = {
			over: function() {
				if ($(this).parent().children().length > 1) {
					$(this).parent().children('.toolbar-dropdown').children('ul').addClass('over');
				} else {
					$(this).addClass('over');
				}
				$(this).parent().children('.toolbar-dropdown').children('ul').animate({
					opacity: 1,
					height: 'toggle'
				}, 100);
			},
			timeout: 0,
			out: function() {
				var that = this;
				$(this).parent().children('.toolbar-dropdown').children('ul').animate({
					opacity: 0,
					height: 'toggle'
				}, 100, function() {
					if ($(this).parent().children().length > 1) {
						$(that).parent().children('.toolbar-dropdown').children('ul').removeClass('over');
					} else {
						$(that).removeClass('over');
					}
				});
			}
		};
		$('.toolbar-title select').css('display', 'none');
		$('.toolbar-switch .toolbar-dropdown .current, .toolbar-switch .toolbar-dropdown').hoverIntent(config);
	};
	$.fn.insertUl = function() {
		var numOptions = $(this).children().length;
		$('<div class="toolbar-dropdown"><span class="current"/><ul style="display:none" /></div>').insertAfter($(this).toggleClass('.toolbar-switch').parent());
		var divSpan = $(this).toggleClass('toolbar-switch').parent().parent().find('span');
		divSpan.append($(this).parent().children('select').find('option:selected').text());
		var divUl = $(this).toggleClass('toolbar-switch').parent().parent().find('ul');
		for (var i = 0; i < numOptions; i++) {
			var text = '<li><a href ="' + $(this).find('option').eq(i).val() + '">' + $(this).find('option').eq(i).text() + '</a></li>';			
			divUl.append(text);
		}
	};
	$.fn.insertUlLanguage = function() {
		var numOptions = $(this).children().length;
		$('<div class="toolbar-dropdown"><span class="current"/><ul style="display:none" /></div>').insertAfter($(this).toggleClass('.toolbar-switch').parent());
		var divSpan = $(this).toggleClass('toolbar-switch').parent().parent().find('span');
		divSpan.append($(this).parent().children('select').find('option:selected').text());
		imageUrl = language + ($(this).find('option').eq(i).text()).toLowerCase() + '.png';
		divSpan.css('background-image', 'url(' + language + ($(this).parent().children('select').find('option:selected').text()).toLowerCase() + '.png)');
		divSpan.css('background-repeat', 'no-repeat');
		var divUl = $(this).toggleClass('toolbar-switch').parent().parent().find('ul');
		for (var i = 0; i < numOptions; i++) {
			var text = '<li><a style="background-image:url(' + language + ($(this).find('option').eq(i).text()).toLowerCase() + '.png); background-repeat: no-repeat;" href ="' + $(this).find('option').eq(i).val() + '">' + $(this).find('option').eq(i).text() + '</a></li>';
			divUl.append(text);
		}
	};
	$.fn.selectUlCategorySearch = function() {
		$('.input_cat .catsearch-dropdown').hover(

		function() {
			if ($(this).siblings().length > 1) {
				$(this).parent().find('.catsearch-dropdown > ul').addClass('over');
			} else {
				$(this).addClass('over');
				// $('.toolbar-dropdown', this).css({width: $(this).width()+50});
			}
			$(this).parent().children('.catsearch-dropdown').children('ul').fadeIn(100).slideDown(100);
		}, function() {
			var that = this;
			$(this).parent().children('.catsearch-dropdown').children('ul').fadeOut(100).slideUp(100, function() {
				if ($(this).parent().children().length > 1) {
					$(that).parent().children('.catsearch-dropdown').children('ul').removeClass('over');
				} else {
					$(that).removeClass('over');
				}
			});
		});
		$('.input_cat select').css('display', 'none');
	};
	$.fn.insertUlCategorySearch = function() {
		var $origSelect = $(this);
		var newId = $(this).attr('name') + '-ul';
		var numOptions = $(this).children().length;
		$('<div class="catsearch-dropdown"><span class="current"/><ul style="display:none" /></div>').insertAfter($(this).toggleClass('toggle_cate'));
		var divSpan = $(this).toggleClass('toggle_cate').parent().parent().find('span.current');
		divSpan.append($(this).parent().children('select').find('option:selected').text());
		var divUl = $(this).toggleClass('toggle_cate').parent().parent().find('ul');
		for (var i = 0; i < numOptions; i++) {
			var text = $(this).find('option').eq(i).text();
			$('<li />').text(text).appendTo(divUl);
		}
		$(this).parent().find('li').click(function() {
			var newSelect = $(this).index();
			var valSelect = $(this).text();
			$(this).parent().find('.unselected').removeClass('unselected');
			$(this).parent().find('li').not(this).addClass('unselected');
			$($origSelect).find('option:selected').removeAttr('selected');
			$($origSelect).find('option:eq(' + newSelect + ')').attr('selected', true);
			$(this).parent().parent().find('.current').text(valSelect);
			$(this).parent().removeClass('over');
			$(this).parent().fadeOut(100).slideUp(100);
		});
		return $(this);
	};
})(jQuery);