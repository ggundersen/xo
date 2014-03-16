Log = {

    el: document.getElementById('log'),

    log: function(text, className) {
        var html = '<span class="' + className + '">' + text + '</span>',
            current = this.el.innerHTML;

        if (current) {
            this.el.innerHTML = current + '<br>' + html;
        } else {
            this.el.innerHTML = html;
        }
    },

    note: function(text) {
        this.log(text, 'note');
    },

    whisper: function(text) {
        this.log(text, 'whisper');
    },

    warn: function(text) {
        this.log(text, 'warn');
    },

    clear: function() {
        this.el.innerHTML = '';
    }

};
