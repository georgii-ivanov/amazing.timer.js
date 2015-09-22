# amazing.timer.js

*Javascript Amazing Timer*

Very usable and simple javascript object-oriented timer implementation.

# Examples:

* Set timer 2 seconds

```
   var timer1 = new Timer(function() {
      console.log('fire in 30 seconds');
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
  });
```

* Custom timeout condition

```
  var ajaxLoaded = false;
  $.load('test.html', function(data) { ajaxLoaded = true });
  var timer1 = new Timer(function() {
      console.log('time passed while loading page', this.time);
      return ajaxLoaded;
  }, 500);
```
  
