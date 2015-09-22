(function() {
    var Timer = function(fn, interval, autostart) {
        var timer, ready = true, self = this,
            total = 0, time = 0, tick = 0, loop = 0,
            beg = new Date(), fin=new Date();

        this.loop = function() {
            return loop;
        };

        this.next = function() {
            loop++;
            this.stop();
            tick=0;
            time=0;
            this.start();
        };

        this.clear = function() {
            loop=tick=total=time=0;
            beg=fin=new Date();
        };

        this.start = function() {
            this.step();
            ready = false;
        };

        this.stop = function() {
            clearTimeout(timer);
            ready = true;
        };

        this.fire = function(cur) {
            if (ready) return;
            tick++;
            fin=new Date();
            time+=(cur!==undefined) ? cur : fin-beg;
            total+=(cur!==undefined) ? cur : fin-beg;
            beg=new Date();
            (fn.call(this)) ? this.step() : this.stop();
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

        this.step = function() {
            clearTimeout(timer);
            beg = new Date();
            if (interval || interval === 0)
                timer = setTimeout(function() {
                    self.fire(interval);
                }, interval);
        };

        this.timer = function() {
            return timer;
        };

        if (autostart === undefined || autostart)
            this.start();
    };
    
    this.Timer = Timer;
}).call(this);
