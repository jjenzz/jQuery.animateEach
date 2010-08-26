/*
* jQuery animateEach Plugin
* Example at: http://jsfiddle.net/JJenZz/5dEfs/
* Copyright (c) 2010 J. Smith (@jjenzz)
* Dual licensed under the MIT and GPL licenses:
* http://www.opensource.org/licenses/mit-license.php
* http://www.gnu.org/licenses/gpl.html
*
* --------------------------------------------------------------------------
* .animateEach(properties, [ duration ], [ callback ])
* --------------------------------------------------------------------------
* properties: A map of CSS properties that the animation will move toward.
* duration: A string or number determining how long the animation will run.
* callback: A function to call once the animation is complete.
*
* Example:-
* --------------------------------------------------------
* $('#demo li').animateEach({'font-size': '22px'}, function() {
*    $(this).css('background-color', '#f00');
* });
*
*/

(function($) {
	$.fn.animateEach = function(properties, duration, callback) {
		var i = 0, el = this;
		
		callback = $.proxy(callback || (typeof duration === 'function' ? duration : $.noop), this);
		duration = typeof duration !== 'function' ? duration : 300;

		(function() {
			el.eq(i++).animate(properties, duration, el.length > i ? arguments.callee : callback);
		})();

		return this;
	};
})(jQuery);