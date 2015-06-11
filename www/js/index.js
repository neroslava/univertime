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
    }
};
