let dino = document.querySelector('.dino');
let cactus = document.querySelector('.cactus');
let h1 = document.querySelector('.h1')


function jump() {
  if (dispatchEvent.classList != 'jump') {
    dino.classList.add('jump');
    setTimeout(function () {
      dino.classList.remove('jump');
    }, 500);
  }
}

const alive = setInterval(function () {
  let dinoTepaga = parseInt(
    window.getComputedStyle(dino).getPropertyValue('top')
  );
  let cactusChapga = parseInt(
    window.getComputedStyle(cactus).getPropertyValue('left')
  );

  if (cactusChapga > 0 && cactusChapga < 60 && dinoTepaga >= 150) {
    dino.style.animationPlayState = 'paused';
    cactus.style.animationPlayState = 'paused';
    alert('yutqazdin! game over !');
    window.location.replace('/home.html')
    
  }
});

document.addEventListener('keydown', function () {
  jump();
});


document.addEventListener('keydown',function (){
    jump();
    h1.innerHTML++
    if(h1.innerHTML > 5) {
      cactus.style.animation = 'cactus .9s infinite linear'
    }
    if(h1.innerHTML > 50) {
      cactus.style.animation = 'cactus .8s infinite linear'
    }
    if(h1.innerHTML > 100) {
      cactus.style.animation = 'cactus .7s infinite linear'
    }
    if(h1.innerHTML > 300) {
      cactus.style.animation = 'cactus .6s infinite linear'
    }
  
})

let img1 =
  'dino-removebg-preview.png';
let img2 =
  'https://media.tenor.com/0o0T8nh8W4EAAAAi/sonic-is-runinng-run.gif';
let img3 =
  'https://i.pinimg.com/originals/12/12/ac/1212ac39b5fdc90cd166c117d6ba6441.gif';

let img4 = 'https://media.tenor.com/-o8m-4venVkAAAAi/tiger.gif';




img1.onclick = function () {
  img1.src = '.dino' ;
};

img2.src.onclick = function () {
  img2.src = '.dino';
};

img3.onclick = function () {
  img3.src = '.dino';
};
img4.onclick = function () {
  img4.src = '.dino';
};







