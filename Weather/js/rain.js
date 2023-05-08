function rain() {
  let amount = 50;
  let body = document.querySelector('body');
  let i = 0;

  while (i < amount) {
    let drop = document.createElement('i');

    let size_w = Math.random() * 5;
    let posX = Math.floor(Math.random() * window.innerWidth);
    let delay = Math.random * 20;
    let duration = Math.random();
    let size_h = rand(150,200);

    drop.style.width = 0.2 + size_w + 'px';
    drop.style.left = posX + 'px';
    drop.style.animationDelay = `${delay}s`;
    drop.style.animationDuration = 0.3 + duration + 's';
    drop.style.height = size_h + 'px';

    body.appendChild(drop);
    i++;
  }
}

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

