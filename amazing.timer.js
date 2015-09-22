(function() {
  var Timer = function(fn, interval) {
        var timer, time = 0, ready = true, tick = 0, self = this;

        this.loop = function() {
            clearTimeout(timer);
            timer = setTimeout(function() {
                self.fire();
            }, interval);
        };

        this.start = function() {
            // set start properties
            tick = 0;
            time = 0;
            ready = false;

            this.loop();
        };

        this.stop = function() {
            ready = true;
            clearTimeout(timer);
        };

        this.fire = function() {
            if (ready) return;
            tick++;
            time+=interval;
            (fn.call(this)) ? (this.loop()) : this.stop();
        };

        this.time = function() {
            return time;
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
