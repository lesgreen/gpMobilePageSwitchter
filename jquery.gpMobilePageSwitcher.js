/*
 * 	 gpMobilePageSwitcher 
 * 	 @author Les Green
 * 	 Copyright (C) 2013 Grasshopperpebbles.com.
 *   Version 0.5
 * 
 *   This program is free software: you can redistribute it and/or modify
 *   it under the terms of the GNU General Public License as published by
 *   the Free Software Foundation, either version 3 of the License, or
 *   (at your option) any later version.
 *
 *   This program is distributed in the hope that it will be useful,
 *   but WITHOUT ANY WARRANTY; without even the implied warranty of
 *   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *   GNU General Public License for more details.
 *
 *   You should have received a copy of the GNU General Public License
 *   along with this program.  If not, see <http://www.gnu.org/licenses/>.

 *   Demo and Documentation can be found at:   
 *   http://www.grasshopperpebbles.com
 *   
 */

;(function($) {
	$.fn.extend({
        gpMobilePageSwitcher: function(options) { 
        	opts = $.extend({}, $.gpMobileSwitcher.defaults, options);
			return this.each(function() {
				new $.gpMobileSwitcher(this, opts);
			});
        }
    });	

$.gpMobileSwitcher = function(obj, opts) {
	var $this = $(obj);
	var mobile_url = opts.mobile_domain + getCurrentPath();
	$this.append(
		$('<div></div>').addClass(opts.cntnr_class).append(
			$('<a></a>').attr('href', mobile_url).addClass(opts.icon_class),
			$('<a></a>').attr('href', mobile_url).addClass(opts.text_display_class).html(opts.display_label)
		)
	);
	
	function getCurrentPath() {
		var path = window.location.pathname;
		if (opts.url_exceptions) {
			var ar = opts.url_exceptions;
			if (ar[path]) {
				return ar[path];
			}
		}
		return path;
	};		
};

$.gpMobileSwitcher.defaults = {
	mobile_domain: '', // without ending slash
	url_exceptions: '', // associative array of url exceptions - domain name is not needed
	cntnr_class: 'gp-mobile-switcher-wrapper',
	display_label: 'Switch To Mobile View',
	icon_class: 'gp-mobile-switcher-icon gp-mobile-switcher-30 gp-mobile-switcher-white',
	text_display_class: 'gp-mobile-switcher-text-white gp-mobile-switcher-text-30'
};

})(jQuery);		   