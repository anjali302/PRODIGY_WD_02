function stopwatch(elem) {
  var time = 0;
  var offset;
  var interval;

  function lapOn() {
    var lapTime = document.createElement("li");
    lapTime.innerHTML = elem.textContent;
    lapTime.classList.add('lapItem');
    lap_box.appendChild(lapTime);
  }

  function lapOff() {
    return;
  }

  function update() {
    if (this.isOn) {
      time += delta();
    }
    elem.textContent = timeFormatter(time);
  }

  function delta() {
    var now = Date.now();
    var timePassed = now - offset;
    offset = now;
    return timePassed;
  }

  function timeFormatter(time) {
    time = new Date(time);

    var minutes = time.getUTCMinutes().toString();
    var seconds = time.getUTCSeconds().toString();
    var milliseconds = time.getUTCMilliseconds().toString();

    if (minutes.length < 2) minutes = '0' + minutes;
    if (seconds.length < 2) seconds = '0' + seconds;
    while (milliseconds.length < 3) milliseconds = '0' + milliseconds;
    return minutes + ':' + seconds + '.' + milliseconds;
  }

  this.start = function() {
    if (!this.isOn) {
      interval = setInterval(update.bind(this), 10);  // Update every 10ms
      offset = Date.now();
      this.isOn = true;
    }
  };

  this.stop = function() {
    clearInterval(interval);
    interval = null;
    this.isOn = false;
  };

  this.reset = function() {
    time = 0;
    lap_box.innerHTML = '';
    offset = null;
    update();
    this.isOn = false;
  };

  this.lapOn = function() {
    if (this.isOn) lapOn();
  };

  this.lapOff = function() {
    lapOff();
  };

  this.isOn = false;
}
