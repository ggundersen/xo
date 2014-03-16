Log = {

    el: document.getElementById('log'),

    log: function(text, className) {
        var html = '<span class="' + className + '">&bull; ' + text + '</span>',
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

    shout: function(text) {
        this.log(text, 'shout');
    },

    warn: function(text) {
        this.log(text, 'warn');
    },

    clear: function() {
        this.el.innerHTML = '';
    },

    to_string: function(arr, prop) {
        var i = 0,
            len = arr.length,
            str = '';

        for (; i < len; i++) {
            if (str === '') {
                str += arr[i][prop].toString();
            } else {
                str += ', ' + arr[i][prop].toString();
            }
        }

        return str;
    }

};
