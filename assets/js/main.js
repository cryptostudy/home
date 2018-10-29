/*
	Prologue by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$nav = $('#nav');

	// Breakpoints.
		breakpoints({
			wide:      [ '961px',  '1880px' ],
			normal:    [ '961px',  '1620px' ],
			narrow:    [ '961px',  '1320px' ],
			narrower:  [ '737px',  '960px'  ],
			mobile:    [ null,     '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

		$('#old_news_0823').on({
		    'click': function(){
		        $('#pdf_view').attr('src','0823/0823_뉴스브리핑.pdf');
		    }
		});
		$('#old_news_0824').on({
				'click': function(){
						$('#pdf_view').attr('src','0824/0824_뉴스브리핑.pdf');
				}
		});
		$('#old_news_0827').on({
				'click': function(){
						$('#pdf_view').attr('src','0827/0827_뉴스브리핑.pdf');
				}
		});
		$('#old_news_0828').on({
				'click': function(){
						$('#pdf_view').attr('src','0828/0828_뉴스브리핑.pdf');
				}
		});
		$('#old_news_0830').on({
				'click': function(){
						$('#pdf_view').attr('src','0830/0830_뉴스브리핑.pdf');
				}
		});
		$('#old_news_0903').on({
				'click': function(){
						$('#pdf_view').attr('src','0903/0903_뉴스브리핑.pdf');
				}
		});
		$('#old_news_0904').on({
				'click': function(){
						$('#pdf_view').attr('src','0904/0904_뉴스브리핑.pdf');
				}
		});
		$('#old_news_0905').on({
				'click': function(){
						$('#pdf_view').attr('src','0905/0905_뉴스브리핑.pdf');
				}
		});
		$('#old_news_0906').on({
				'click': function(){
						$('#pdf_view').attr('src','0906/0906_뉴스브리핑.pdf');
				}
		});
		$('#old_news_0907').on({
				'click': function(){
						$('#pdf_view').attr('src','0907/0907_뉴스브리핑.pdf');
				}
		});
		$('#old_news_0910').on({
				'click': function(){
						$('#pdf_view').attr('src','0910/0910_뉴스브리핑.pdf');
				}
		});
		$('#old_news_0911').on({
				'click': function(){
						$('#pdf_view').attr('src','0911/0911_뉴스브리핑.pdf');
				}
		});
		$('#old_news_0912').on({
				'click': function(){
						$('#pdf_view').attr('src','0912/0912_뉴스브리핑.pdf');
				}
		});s
		$('#old_news_1022').on({
				'click': function(){
						$('#pdf_view').attr('src','1022/1022_뉴스브리핑.pdf');
				}
		});
		$('#old_news_1024').on({
				'click': function(){
						$('#pdf_view').attr('src','1024/1024_뉴스브리핑.pdf');
				}
		});
		$('#old_news_1026').on({
				'click': function(){
						$('#pdf_view').attr('src','1026/1026_뉴스브리핑.pdf');
				}
		});
		$('#old_news_1029').on({
				'click': function(){
						$('#pdf_view').attr('src','1029/1029_뉴스브리핑.pdf');
				}
		});
	// Nav.
		var $nav_a = $nav.find('a');

		$nav_a
			.addClass('scrolly')
			.on('click', function(e) {

				var $this = $(this);

				// External link? Bail.
					if ($this.attr('href').charAt(0) != '#')
						return;

				// Prevent default.
					e.preventDefault();

				// Deactivate all links.
					$nav_a.removeClass('active');

				// Activate link *and* lock it (so Scrollex doesn't try to activate other links as we're scrolling to this one's section).
					$this
						.addClass('active')
						.addClass('active-locked');

			})
			.each(function() {

				var	$this = $(this),
					id = $this.attr('href'),
					$section = $(id);

				// No section for this link? Bail.
					if ($section.length < 1)
						return;

				// Scrollex.
					$section.scrollex({
						mode: 'middle',
						top: '-10vh',
						bottom: '-10vh',
						initialize: function() {

							// Deactivate section.
								$section.addClass('inactive');

						},
						enter: function() {

							// Activate section.
								$section.removeClass('inactive');

							// No locked links? Deactivate all links and activate this section's one.
								if ($nav_a.filter('.active-locked').length == 0) {

									$nav_a.removeClass('active');
									$this.addClass('active');

								}

							// Otherwise, if this section's link is the one that's locked, unlock it.
								else if ($this.hasClass('active-locked'))
									$this.removeClass('active-locked');

						}
					});

			});

	// Scrolly.
		$('.scrolly').scrolly();

	// Header (narrower + mobile).

		// Toggle.
			$(
				'<div id="headerToggle">' +
					'<a href="#header" class="toggle"></a>' +
				'</div>'
			)
				.appendTo($body);

		// Header.
			$('#header')
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'header-visible'
				});

})(jQuery);
