(function() {
    var Timer = function(fn, interval, autostart) {
        var timer, ready = true, self = this,
            total = 0, time = 0, tick = 0,
            beg = new Date(), fin=new Date();

        this.loop = function() {
            clearTimeout(timer);
            beg = new Date();
            if (interval || interval === 0)
                timer = setTimeout(function() {
                    self.fire(interval);
                }, interval);
        };

        this.clear = function() {
            tick=total=time=0;
            beg=fin=new Date();
        };

        this.start = function() {
            this.clear();
            this.loop();
            ready = false;
        };

        this.stop = function() {
            fin=new Date();
            time=fin-beg;
            total+=time;
            ready = true;
            clearTimeout(timer);
        };

        this.fire = function(cur) {
            if (ready) return;
            tick++;
            fin=new Date();
            time=(cur!==undefined) ? cur : fin-beg;
            total+=time;
            beg=new Date();
            (fn.call(this)) ? (this.loop()) : this.stop();
        };

        this.ready = function() {
            return ready;
        };

        this.total = function() {
            return total;
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

        if (autostart === undefined || autostart)
            this.start();
    };
    
    this.Timer = Timer;
}).call(this);
