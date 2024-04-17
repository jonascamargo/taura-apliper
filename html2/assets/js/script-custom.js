(function ($) {
	"use strict";

	////////////////////////////////////////////////////

    // mostra nome do arquivo no SPAN antes do INPUT:FILE
    $('.postbox__comment-input.input-file input').change(function(){
        var fileName = $(this).val();
        $('.postbox__comment-input.input-file span').html(fileName)
    });

})(jQuery);