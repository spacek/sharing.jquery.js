/**
 * @author: Jiri Spacek, 2014
 * @description: simple jquery based sharing library. Currently supported networks: facebook, twitter, pinterest
 */
(function( $ ) {
    $.fn.sharing = function( type ) {
        this.each(function() {
            var element = this;
            $(this).click(function(e) {
                e.preventDefault();

                var winHeight = 200;
                var winWidth = 450;
                var winTop = (screen.height / 2) - (winHeight / 2);
                var winLeft = (screen.width / 2) - (winWidth / 2);
                var url = $(element).attr("href");

                if(type == "facebook") {
                    window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, 'sharer', 'top=' + winTop + ',left=' + winLeft + ',toolbar=0,status=0,width=' + winWidth + ',height=' + winHeight);
                } else if(type == "twitter") {
                    window.open('https://twitter.com/share?url=' + url, 'sharer', 'top=' + winTop + ',left=' + winLeft + ',toolbar=0,status=0,width=' + winWidth + ',height=' + winHeight);
                } else if(type == "pinterest") {
                    window.open('http://www.pinterest.com/pin/create/button/?url=' + url, 'sharer', 'top=' + winTop + ',left=' + winLeft + ',toolbar=0,status=0,width=' + winWidth + ',height=' + winHeight);
                }
            });
        });

    };
}(jQuery));