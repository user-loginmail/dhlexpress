/*! http://mths.be/placeholder v1.8.7 by @mathias */
(function(f,h,c){var a='placeholder' in h.createElement('input'),d='placeholder' in h.createElement('textarea'),i=c.fn,j;if(a&&d){j=i.placeholder=function(){return this};j.input=j.textarea=true}else{j=i.placeholder=function(){return this.filter((a?'textarea':':input')+'[placeholder]').not('.placeholder').bind('focus.placeholder',b).bind('blur.placeholder',e).trigger('blur.placeholder').end()};j.input=a;j.textarea=d;c(function(){c(h).delegate('form','submit.placeholder',function(){var k=c('.placeholder',this).each(b);setTimeout(function(){k.each(e)},10)})});c(f).bind('unload.placeholder',function(){c('.placeholder').val('')})}function g(l){var k={},m=/^jQuery\d+$/;c.each(l.attributes,function(o,n){if(n.specified&&!m.test(n.name)){k[n.name]=n.value}});return k}function b(){var k=c(this);if(k.val()===k.attr('placeholder')&&k.hasClass('placeholder')){if(k.data('placeholder-password')){k.hide().next().show().focus().attr('id',k.removeAttr('id').data('placeholder-id'))}else{k.val('').removeClass('placeholder')}}}function e(){var o,n=c(this),k=n,m=this.id;if(n.val()===''){if(n.is(':password')){if(!n.data('placeholder-textinput')){try{o=n.clone().attr({type:'text'})}catch(l){o=c('<input>').attr(c.extend(g(this),{type:'text'}))}o.removeAttr('name').data('placeholder-password',true).data('placeholder-id',m).bind('focus.placeholder',b);n.data('placeholder-textinput',o).data('placeholder-id',m).before(o)}n=n.removeAttr('id').hide().prev().attr('id',m).show()}n.addClass('placeholder').val(n.attr('placeholder'))}else{n.removeClass('placeholder')}}}(this,document,jQuery));;
(function($){

  /**
   * Apply jQuery placeholder plugin to elements whose selectors have been
   * passed down to us.
   */
  Drupal.behaviors.jquery_placeholder = {

    attach: function(context, settings) {
      if (settings.hasOwnProperty('jquery_placeholder')) {
        for (var key in settings.jquery_placeholder) {
          if (settings.jquery_placeholder.hasOwnProperty(key)) {
            var selector = settings.jquery_placeholder[key].selector;

            var $el = $(context).find(selector);
            if ($el.length) {
              // Support $el *being* the input element and *containing* the
              // input element too.
              var placeholder_selector = 'input, textarea';
              $el.find(placeholder_selector)
                .add($el.filter(placeholder_selector))
                .once('jquery_placeholder')
                .placeholder();
            }
          }
        }
      }
    }
  }

})(jQuery);
;
