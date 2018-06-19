(function ($) {
    "use strict";

    /* Add error message without checking input */

    var button = $('.skooly-form-btn');
    var error_label = $('.error-message');
    button.on('click', function(event) {
      event.preventDefault();
      error_label.removeAttr('hidden');
      $(".wrap-input-skooly").addClass('alert-validate');
    });

    /* Focus Input */
    $('.input-skooly').each(function(){
        $(this).on('blur', function(){
            if($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }
        })
    })
})(jQuery);
