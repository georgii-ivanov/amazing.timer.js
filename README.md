# amazing.timer.js

**Javascript Amazing Timer**

Very usable and simple javascript object-oriented timer implementation.
Displays real time passed and counting ticks.
Simple JS API.

### Demo:

Simple, Countdown, Stopwatch:
   https://rawgit.com/cloady/amazing.timer.js/master/example.html

Stopwatch with history:
   https://rawgit.com/cloady/amazing.timer.js/master/index.html

### Examples:

* Using for store time

```
   var timer1 = new Timer();
   // some actions
   timer1.stop();
   console.log(timer1.total());
```

* Set interval analog

```
   var timer1 = new Timer(function() {
      console.log('seconds left:', this.tick());
      return true;
   }, 1000);
   
   // timer1.stop();
```


* Set timer 2 seconds

```
   var timer1 = new Timer(function() {
      console.log('fire in 2 seconds');
   }, 2000);
```

* Set timer end in 5 seconds tick with intervals of 500ms

```
   var timer1 = new Timer(function() {
      console.log('tick new 500ms, current timer is', this.time());
      return (this.time()<2000);
   }, 500);
```

* Set timer end in 10 ticks with intervals of 500ms

```
  var timer1 = new Timer(function() {
      console.log('tick new 500ms, tick number is', this.tick());
      return (this.tick()<10);
  });
```

* Custom timeout condition

```
  var ajaxLoaded = false;
  $.load('test.html', function(data) { ajaxLoaded = true });
  var timer1 = new Timer(function() {
      console.log('total time passed while loading page', this.total());
      return ajaxLoaded;
  }, 500);
```
  
* Timer countdown example

```
   var timer1 = new Timer(function() {  
      console.log('countdown', 20-this.tick()); 
      return (this.total() < 20000);  
   }, 1000);
```
      
* Timer uses as stopwatch

```
  var timer1 = new Timer(function() {
      console.log('tick number', this.tick(), ', time value', this.time());
      return true;
  });
  
  setTimeout(function() { timer1.fire(); 
       console.log('3 seconds timeout');
         setTimeout(function() { console.log('3 seconds passed'); 
             timer1.step(); 
             setTimeout(function() { timer1.fire(); }, 3051);
     }, 3000);
  }, 5051);
```

### Methods:

* ```ready()``` -> true/false. Get ready state of timer.
* ```tick()``` -> integer. Get current iteration number.
* ```time()``` -> integer. Get iteration time in ms.
* ```total()``` -> integer. Get total timer run time in ms.
* ```fire()``` -> integer. Fire event before timer tick (you can sent time in ms as parameter).
* ```loop()``` -> integer. Starts new loop.
* ```step()``` -> integer. Starts new step/tick.
* ```stop()``` -> null. Stop the timer.
* ```start()``` -> null. Stop the timer.
* ```clear()``` -> null. Reset timer counters.
