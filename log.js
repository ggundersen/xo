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

    to_string: function(obj, prop) {
        var str = '';

        if (obj.length === +obj.length) {
            for (var i = 0, len = obj.length; i < len; i++) {
                if (str === '') {
                    str += obj[i][prop].toString();
                } else {
                    str += ', ' + obj[i][prop].toString();
                }
            }
        } else {
            for (var j in obj) {
                
            }
        }
        return str;
    }

};
