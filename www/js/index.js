var loading = {
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        // $('.loading').hide(3000);
        $('.loading').animate({opacity: '0'}, 2500);
        setTimeout(function() {
                $('.loading').css({display: 'none'})
            }, 2500);
        setTimeout(function() {
                $('.warpper-app').css({display: 'block'})
            }, 1000);
        $('.warpper-app').animate({opacity: '1'}, 3500);
    }
};
