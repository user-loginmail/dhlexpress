/*!
 * headroom.js v0.5.0 - Give your page some headroom. Hide your header until you need it
 * Copyright (c) 2014 Nick Williams - http://wicky.nillia.ms/headroom.js
 * License: MIT
 */

!function(a,b){"use strict";function c(a){this.callback=a,this.ticking=!1}function d(a){if(arguments.length<=0)throw new Error("Missing arguments in extend function");var b,c,e=a||{};for(c=1;c<arguments.length;c++){var f=arguments[c]||{};for(b in f)e[b]="object"==typeof e[b]?d(e[b],f[b]):e[b]||f[b]}return e}function e(a,b){b=d(b,e.options),this.lastKnownScrollY=0,this.elem=a,this.debouncer=new c(this.update.bind(this)),this.tolerance=b.tolerance,this.classes=b.classes,this.offset=b.offset,this.initialised=!1,this.onPin=b.onPin,this.onUnpin=b.onUnpin,this.onTop=b.onTop,this.onNotTop=b.onNotTop}var f={bind:!!function(){}.bind,classList:"classList"in b.documentElement,rAF:!!(a.requestAnimationFrame||a.webkitRequestAnimationFrame||a.mozRequestAnimationFrame)};a.requestAnimationFrame=a.requestAnimationFrame||a.webkitRequestAnimationFrame||a.mozRequestAnimationFrame,c.prototype={constructor:c,update:function(){this.callback&&this.callback(),this.ticking=!1},requestTick:function(){this.ticking||(requestAnimationFrame(this.rafCallback||(this.rafCallback=this.update.bind(this))),this.ticking=!0)},handleEvent:function(){this.requestTick()}},e.prototype={constructor:e,init:function(){return e.cutsTheMustard?(this.elem.classList.add(this.classes.initial),setTimeout(this.attachEvent.bind(this),100),this):void 0},destroy:function(){var b=this.classes;this.initialised=!1,a.removeEventListener("scroll",this.debouncer,!1),this.elem.classList.remove(b.unpinned,b.pinned,b.top,b.initial)},attachEvent:function(){this.initialised||(this.lastKnownScrollY=this.getScrollY(),this.initialised=!0,a.addEventListener("scroll",this.debouncer,!1),this.debouncer.handleEvent())},unpin:function(){var a=this.elem.classList,b=this.classes;(a.contains(b.pinned)||!a.contains(b.unpinned))&&(a.add(b.unpinned),a.remove(b.pinned),this.onUnpin&&this.onUnpin.call(this))},pin:function(){var a=this.elem.classList,b=this.classes;a.contains(b.unpinned)&&(a.remove(b.unpinned),a.add(b.pinned),this.onPin&&this.onPin.call(this))},top:function(){var a=this.elem.classList,b=this.classes;a.contains(b.top)||(a.add(b.top),a.remove(b.notTop),this.onTop&&this.onTop.call(this))},notTop:function(){var a=this.elem.classList,b=this.classes;a.contains(b.notTop)||(a.add(b.notTop),a.remove(b.top),this.onNotTop&&this.onNotTop.call(this))},getScrollY:function(){return void 0!==a.pageYOffset?a.pageYOffset:(b.documentElement||b.body.parentNode||b.body).scrollTop},getViewportHeight:function(){return a.innerHeight||b.documentElement.clientHeight||b.body.clientHeight},getDocumentHeight:function(){var a=b.body,c=b.documentElement;return Math.max(a.scrollHeight,c.scrollHeight,a.offsetHeight,c.offsetHeight,a.clientHeight,c.clientHeight)},isOutOfBounds:function(a){var b=0>a,c=a+this.getViewportHeight()>this.getDocumentHeight();return b||c},toleranceExceeded:function(a){return Math.abs(a-this.lastKnownScrollY)>=this.tolerance},shouldUnpin:function(a,b){var c=a>this.lastKnownScrollY,d=a>=this.offset;return c&&d&&b},shouldPin:function(a,b){var c=a<this.lastKnownScrollY,d=a<=this.offset;return c&&b||d},update:function(){var a=this.getScrollY(),b=this.toleranceExceeded(a);this.isOutOfBounds(a)||(a<=this.offset?this.top():this.notTop(),this.shouldUnpin(a,b)?this.unpin():this.shouldPin(a,b)&&this.pin(),this.lastKnownScrollY=a)}},e.options={tolerance:0,offset:0,classes:{pinned:"headroom--pinned",unpinned:"headroom--unpinned",top:"headroom--top",notTop:"headroom--not-top",initial:"headroom"}},e.cutsTheMustard="undefined"!=typeof f&&f.rAF&&f.bind&&f.classList,a.Headroom=e}(window,document);;
/*!
 * headroom.js v0.5.0 - Give your page some headroom. Hide your header until you need it
 * Copyright (c) 2014 Nick Williams - http://wicky.nillia.ms/headroom.js
 * License: MIT
 */

!function(a){a&&(a.fn.headroom=function(b){return this.each(function(){var c=a(this),d=c.data("headroom"),e="object"==typeof b&&b;e=a.extend(!0,{},Headroom.options,e),d||(d=new Headroom(this,e),d.init(),c.data("headroom",d)),"string"==typeof b&&d[b]()})},a("[data-headroom]").each(function(){var b=a(this);b.headroom(b.data())}))}(window.Zepto||window.jQuery);;
(function ($, sr) {
  // debouncing function from John Hann
  // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
  var debounce = function (func, threshold, execAsap) {
    var timeout;

    return function debounced() {
      var obj = this,
        args = arguments;

      function delayed() {
        if (!execAsap){
          func.apply(obj, args);
        }
        timeout = null;
      }

      if (timeout){
        clearTimeout(timeout);
      }
      else if (execAsap){
        func.apply(obj, args);
      }

      timeout = setTimeout(delayed, threshold || 100);
    };
  };
  // smartresize
  jQuery.fn[sr] = function (fn) {
    return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr);
  };

})(jQuery, 'smartresize');
;
(function ($) {
  Drupal.resizeBehaviors = {};
  /**
   * Language switcher
   */
  Drupal.behaviors.languageSwitcher = {
    attach: function (context) {
      var localeBlock = $('#block-locale-language', context);

      localeBlock.bind('touchstart', function() {
        localeBlock.children('div.block__content').slideToggle(100);
      });

      localeBlock.mouseenter(function() {
        localeBlock.children('div.block__content').slideDown(100);
      }).mouseleave(function() {
        localeBlock.children('div.block__content').slideUp(100);
      });
    }
  };

  Drupal.behaviors.searchToggle = {
    attach: function(context) {
      var header = $('#l-main-header', context);

      if (header.length) {
        var hideElements = header.find('.s-hide');
        var searchButton = header.find('#search-button');
        var searchTextarea = header.find('.form-item-search');

        searchButton.bind('click touchstart', function(e) {
          e.preventDefault();
          searchTextarea.toggleClass('s-hide-show');
          searchTextarea.fadeToggle(200);

          if (jQuery.support.leadingWhitespace){
            searchTextarea.find('input').focus();
          }

          searchButton.toggleClass('s-hide-close');

          hideElements.each(function() {
            $(this).toggleClass('s-hide-hidden');
          });
        });
      }

    }
  };

  Drupal.behaviors.menuToggle = {
    attach: function(context) {
      var mainHeader = $('#l-main-header', context);
      if (mainHeader.length) {
        var menuLink = mainHeader.find('#menu-mobile-link');
        var navigation = mainHeader.find('.l-region--navigation');
        var navigationLevel = mainHeader.find('.l-region--navigationlevel');

        menuLink.bind('click touchstart', function(e) {
          e.preventDefault();
          menuLink.toggleClass('m-open');
          navigationLevel.toggleClass('m-show');
          navigation.toggleClass('m-show');
          $('html').toggleClass('m-show');
        });
      }
    }
  };


  /**
   * Drupal resizeBehaviors are special behaviors that will do the same as the
   * normal trigger but will be triggerd once more on window resize.
   */
  Drupal.resizeBehaviors.headroom = {
    attach: function (context) {
      if (jQuery.support.leadingWhitespace){
        var headroomElement = $('#l-main-header', context);
        var offsetHeight = headroomElement.height();
        var bradingOffset = headroomElement.find('.l-branding').outerHeight();
        if (offsetHeight < bradingOffset) {
          offsetHeight = bradingOffset - 6;
        }

        headroomElement.headroom({
          'tolerance': 10,
          'offset': (offsetHeight - 20),
          'classes': {
            'initial': 'animated',
            'pinned': 'slideDown',
            'unpinned': 'slideUp',
          }
        }).addClass('header-fixed');
        $('#l-header-spacer', context).height(offsetHeight+6);
      }
    }
  };
  Drupal.resizeBehaviors.searchToggle = {
    attach: function (context) {
      // media querie must be identical
      if (jQuery.support.leadingWhitespace && window.matchMedia('(max-width: 760px)').matches) {
        $('input[name="service_point"]', context).bind('click touchstart', function() {
          var offsetScroll =  document.getElementById('edit-service-point-info').offsetTop;
          $('html,body').animate({
            scrollTop: offsetScroll,
          }, 500);
        });
      }
    }
  };

  Drupal.behaviors.resize = {
    attach: function (context) {
      var onceFlag = false;
      $(window).smartresize(function() {
        onceFlag = true;
        $.each(Drupal.resizeBehaviors, function(key, method) {
          method.attach(context);
        });
      });
      // some browsers won't fire resize event at the load of an page so this is a fallback.
      setTimeout(function(){
        if(!onceFlag) {
          $.each(Drupal.resizeBehaviors, function(key, method){
            method.attach(context);
            onceFlag = true;
          });
        }
      }, 250);
    }
  };

  /**
   * Open external links and pdf files in new window.
   */
  Drupal.behaviors.openInNewWindow = {
    attach: function(context) {
      $.expr[':'].external = function(obj) {
        return (obj.hasAttribute('href') && obj.hostname && obj.hostname != location.hostname);
      };

      $('a:external, a[href$=pdf]', context).once(function() {
        $(this).attr('target','_blank');
      });
    }
  };

})(jQuery);

;
