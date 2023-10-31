let counterUp = document.querySelectorAll(".counterUp");
let arr = Array.from(counterUp);

arr.map((item) => {
  let counter = 0;

  function maw() {
    counter++;

    item.innerHTML = counter;

    if (counter == item.dataset.number) {
      clearInterval(stop);
    }
  }

  let stop = setInterval(() => {
    maw();
  }, 1000 / item.dataset.number);
});
