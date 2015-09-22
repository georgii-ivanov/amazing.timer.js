(function() {
    var Timer = function(fn, interval) {
        var timer, beg = 0, fin = 0, total = 0, ready = true, tick = 0, self = this;

        this.loop = function() {
            clearTimeout(timer);
            beg = new Date();
            (interval !== undefined) && (
                timer = setTimeout(function() {
                    self.fire(interval);
                }, interval)
            );
        };

        this.clear = function() {
            tick=0;
            total=0;
        };

        this.start = function() {
            // set start properties
            this.clear();
            ready = false;
            this.loop();
        };

        this.stop = function() {
            ready = true;
            clearTimeout(timer);
        };

        this.fire = function(time) {
            if (ready) return;
            tick++;
            fin=new Date();
            total+=(time!==undefined) ? time : fin-beg;
            (fn.call(this)) ? (this.loop()) : this.stop();
        };

        this.time = function() {
            return total;
        };

        this.tick = function() {
            return tick;
        };

        this.timer = function() {
            return timer;
        };

        this.start();
    };
    
    this.Timer = Timer;
}).call(this);
