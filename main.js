var timer = document.querySelector('.timer');
var toggleBtn = document.querySelector('.toggle');
var resetBtn = document.querySelector('.reset');
var lapBtn = document.querySelector('.lap');
var lap_box = document.querySelector('.lap_box');
var watch = new stopwatch(timer);

toggleBtn.addEventListener('click', function() {
  if (watch.isOn) {
    toggleBtn.textContent = 'Start';
    toggleBtn.classList.remove("on");
    watch.stop();
  } 
  else {
    toggleBtn.textContent = 'Stop';
    toggleBtn.classList.add("on");
    watch.start();
  }
});

resetBtn.addEventListener('click', function() {
  watch.reset();
  toggleBtn.textContent = 'Start';
  toggleBtn.classList.remove("on");
});

lapBtn.addEventListener('click', function() {
  if (watch.isOn) {
    watch.lapOn();
  }
});
