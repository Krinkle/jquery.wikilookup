( function ( $ ) {
	/**
	 * Footer widget
	 *
	 * @class $.wikilookup.FooterWidget
	 *
	 * @constructor
	 * @param {Object} config Configuration options
	 */
	var FooterWidget = function ( config ) {
		config = $.extend( {}, config );

		this.$element = config.$element || $( '<div>' );
		this.messages = $.extend( {}, {
			articleHistory: 'Article history',
			articleLink: 'Go to the original article',
			wikimediaIntro: 'Help us improve Wikipedia',
			wikimediaParticipate: 'Participate',
			wikimediaSupport: 'Support'
		}, config.messages );

		this.$articleHistory = $( '<a>' )
			.addClass( 'wl-footerWidget-articleHistory-link' )
			.attr( 'target', '_blank' )
			.html( $.parseHTML( this.messages.articleHistory ) );
		this.$articleLink = $( '<a>' )
			.addClass( 'wl-footerWidget-articleLink-link' )
			.attr( 'target', '_blank' )
			.html( $.parseHTML( this.messages.articleLink ) );

		// Initialize
		this.$element
			.addClass( 'wl-footerWidget' )
			.append(
				$( '<div>' )
					.addClass( 'wl-footerWidget-articleHistory' )
					.append( this.$articleHistory ),
				$( '<div>' )
					.addClass( 'wl-footerWidget-articleLink' )
					.append( this.$articleLink ),
				$( '<div>' )
					.addClass( 'wl-footerWidget-wikimedia' )
					.append(
						$( '<div>' )
							.addClass( 'wl-footerWidget-wikimedia-intro' )
							.text( this.messages.wikimediaIntro ),
						$( '<div>' )
							.addClass( 'wl-footerWidget-wikimedia-participate' )
							.append(
								$( '<a>' )
									.attr( 'target', '_blank' )
									.attr( 'href', 'https://wikimediafoundation.org/participate/' )
									.text( this.messages.wikimediaParticipate )
							),
						$( '<div>' )
							.addClass( 'wl-footerWidget-wikimedia-support' )
							.append(
								$( '<a>' )
									.attr( 'target', '_blank' )
									.attr( 'href', 'https://wikimediafoundation.org/support/' )
									.text( this.messages.wikimediaSupport )
							)
					)
			);
	};

	FooterWidget.prototype.updateHistoryLink = function ( link ) {
		this.$articleHistory.attr( 'href', link );
	};

	FooterWidget.prototype.updateArticleLink = function ( link ) {
		this.$articleLink.attr( 'href', link );
	};

	// Export to namespace
	$.wikilookup.FooterWidget = FooterWidget;
}( jQuery ) );