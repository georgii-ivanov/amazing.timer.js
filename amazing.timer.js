(function() {
    var Timer = function(fn, interval, autostart) {
        var timer, ready = true, self = this,
            total = 0, time = 0, tick = 0, loop = 1,
            beg = new Date(), fin=new Date();

        this.next = function() {
            loop++;
            time=0;
            tick=0;
            this.step();
        };

        this.clear = function() {
            tick=total=time=0;
            loop=1;
            beg=fin=new Date();
        };

        this.start = function() {
            ready = false;
            this.step();
            beg=new Date();
        };

        this.stop = function() {
            clearTimeout(timer);
            ready = true;
            fin=new Date();
            total+=fin-beg;
        };

        this.fire = function(cur) {
            if (ready) return;
            clearTimeout(timer);
            tick++;
            fin=new Date();
            time+=(cur!==undefined) ? cur : fin-beg;
            total+=(cur!==undefined) ? cur : fin-beg;
            beg=new Date();
            (fn && fn.call(this)) ? this.step() : this.stop();
        };

        this.step = function() {
            if (ready) return;
            clearTimeout(timer);
            beg = new Date();
            if (interval || interval === 0)
                timer = setTimeout(function() {
                    self.fire(interval);
                }, interval);
        };

        this.loop = function() {
            return loop;
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
