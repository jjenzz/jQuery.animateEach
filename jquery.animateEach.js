/*!------------------------------------------------------
 * jQuery animateEach v1.0.0
 * http://github.com/jjenzz/jQuery.animateEach
 * ------------------------------------------------------
 * Copyright (c) 2012 J. Smith (@jjenzz)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * --------------------------------------------------------------------------
 * .animateEach(properties [, options ] [, callback ])
 * --------------------------------------------------------------------------
 * properties: A map of CSS properties that each animation will move toward.
 * options: An object containing options to merge with the defaults.
 * callback: A function to call once all animations are complete.
 */
(function($) {
  $.fn.animateEach = function(properties, options, callback) {
    var i = 0, el = this, len = el.length, item, opts, cb;

    opts = $.extend({}, $.fn.animateEach.defaults, options);
    callback = callback || (typeof options === 'function' ? options : $.noop);

    (function go() {
      item = el.eq(i);
      opts.before.call(item);
      item.animate(properties, opts.duration, function() {
        cb = (i < len) ? go : callback;
        opts.after.call(item);
        cb.call(el);
      });
      i++;
    })();

    return this;
  };

  $.fn.animateEach.defaults = {
    duration: 300,  // A string or number determining how long each animation will run
    before: $.noop, // A function that will be called before each animation is run.
    after: $.noop   // A function that will be called after each animation is run.
  };
}(jQuery));