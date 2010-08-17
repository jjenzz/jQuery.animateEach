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
    $.fn.animateEach = function() {
        var i = -1, el = this, arg = arguments,
            opts = { p: arg[0], d: 300, c: false };

        if(typeof opts.p === 'object' && !$.isEmptyObject(opts.p) && el.length) {
            if(typeof arg[arg.length-1] === 'function') {
                opts.c = arg[arg.length-1];
            }

            if(arg[1] && typeof arg[1] === 'number') {
                opts.d = arg[1];
            }

            (function() {
                el.eq(++i).animate(opts.p, opts.d, arguments.callee);
                if(el.length == i && opts.c) opts.c.call(el);
            })();
        }

        return el;
    };
}(jQuery));