var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var btn3 = document.getElementById('btn3');
var btn1_ = document.getElementById('btn1_');
var btn2_ = document.getElementById('btn2_');
var btn3_ = document.getElementById('btn3_');
var cName = btn3.className;
var cName_ = btn3_.className;


var inp = document.getElementById('inp');
var inp2 = document.getElementById('inp2');
var positionInp2 = inp2.getBoundingClientRect();

inp2.addEventListener('keyup', function(){
  document.getElementById('inp').value = inp2.value;
  inp.scrollLeft = inp.scrollWidth;
})

window.addEventListener('scroll', function(){
  var count = 0;
  var element = document.getElementById('A');
  var position = element.getBoundingClientRect();
  if(count<1){
    count=2;
    if (position.top < 500 && position.top ){
      for(i=1;i< element.children[0].children.length;i++){
        var idi = i+1;
        element.children[0].children[i].setAttribute('id','p'+idi);
        if(i==60){
          element.children[0].children[60].addEventListener('animationend', function(){
            element.children[0].children[60].style.animation = 'end 2s infinite backwards';
          })
        }
      }
    }
  }

  
  if(document.getElementById('inp2').getBoundingClientRect().top > 0){
    inp2.addEventListener('focusout', function(){
      inp2.scrollLeft = inp2.scrollWidth;
    });
  }
})

function btnStroke(){
  if(btn3.getAttribute('class')==cName){
    btn3.setAttribute('class','btn3Black');
    inp.style.webkitTextStroke='0px';
    inp2.style.webkitTextStroke='0px';

  }else
    if(btn3.getAttribute('class')=='btn3Black'){
      btn3.setAttribute('class','btn3Gradient');
      inp.style.webkitTextStroke='2px black';
      inp2.style.webkitTextStroke='2px black';
    };
  
// ********mobile
  if(btn3_.getAttribute('class')==cName_){
    btn3_.setAttribute('class','_btn3Black');
    document.getElementById('svgAlphabet1').style.strokeWidth='0px';
    document.getElementById('svgAlphabet2').style.strokeWidth='0px';
  }else
    if(btn3_.getAttribute('class')=='_btn3Black'){
      btn3_.setAttribute('class','_btn3Gradient');
      document.getElementById('svgAlphabet1').style.strokeWidth='2px';
      document.getElementById('svgAlphabet2').style.strokeWidth='2px';
    };
// ********mobile
};

btn1.addEventListener('mouseover', function(){
  document.getElementById('inp').style.color='#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
  btn1.style.background=document.getElementById('inp').style.color;
});
btn2.addEventListener('mouseover', function(){
  document.getElementById('inp2').style.color='#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
  btn2.style.background=document.getElementById('inp2').style.color;
})
btn3.addEventListener('mouseover', function(){
  btnStroke();
})

document.querySelectorAll('#mods>p')[1].classList.add('black');
inp.style.mixBlendMode='multiply';
inp2.style.mixBlendMode='multiply';

function selectBlendMode(){

  if(document.querySelector('.black')){
    document.querySelector('.black').classList.remove('black');
  }
  
  event.target.classList.add('black');
  inp.style.mixBlendMode = event.target.innerHTML;
  inp2.style.mixBlendMode = event.target.innerHTML;

  if(window.matchMedia('(max-width:500px)')){
    document.getElementById('svgAlphabet2').style.mixBlendMode = event.target.innerHTML;
    document.getElementById('svgAlphabet1').style.mixBlendMode = event.target.innerHTML;
  }
}

function selectBlendModeSoftLight(){

  if(document.querySelector('.black')){
    document.querySelector('.black').classList.remove('black');
  }
  
  event.target.classList.add('black');
  inp.style.mixBlendMode = 'soft-light';
  inp2.style.mixBlendMode = 'soft-light';

  if(window.matchMedia('(max-width:500px)')){
    document.getElementById('svgAlphabet2').style.mixBlendMode = 'soft-light';
    document.getElementById('svgAlphabet1').style.mixBlendMode = 'soft-light';
  }
}
function selectBlendModeHardLight(){

  if(document.querySelector('.black')){
    document.querySelector('.black').classList.remove('black');
  }
  
  event.target.classList.add('black');
  inp.style.mixBlendMode = 'hard-light';
  inp2.style.mixBlendMode = 'hard-light';

  if(window.matchMedia('(max-width:500px)')){
    document.getElementById('svgAlphabet2').style.mixBlendMode = 'hard-light';
    document.getElementById('svgAlphabet1').style.mixBlendMode = 'hard-light';
  }
}
function selectBlendModeDodge(){

  if(document.querySelector('.black')){
    document.querySelector('.black').classList.remove('black');
  }
  
  event.target.classList.add('black');
  inp.style.mixBlendMode = 'color-dodge';
  inp2.style.mixBlendMode = 'color-dodge';

  if(window.matchMedia('(max-width:500px)')){
    document.getElementById('svgAlphabet2').style.mixBlendMode = 'color-dodge';
    document.getElementById('svgAlphabet1').style.mixBlendMode = 'color-dodge';
  }
}
function selectBlendModeBurn(){

  if(document.querySelector('.black')){
    document.querySelector('.black').classList.remove('black');
  }
  
  event.target.classList.add('black');
  inp.style.mixBlendMode = 'color-burn';
  inp2.style.mixBlendMode = 'color-burn';

  if(window.matchMedia('(max-width:500px)')){
    document.getElementById('svgAlphabet2').style.mixBlendMode = 'color-burn';
    document.getElementById('svgAlphabet1').style.mixBlendMode = 'color-burn';
  }
}
function noneBlend(){
  if(document.querySelector('.black')){
    document.querySelector('.black').classList.remove('black');
  }
  inp.style.mixBlendMode = 'normal';
  inp2.style.mixBlendMode = 'normal';

  if(window.matchMedia('(max-width:500px)')){
    document.getElementById('svgAlphabet2').style.mixBlendMode = 'normal';
    document.getElementById('svgAlphabet1').style.mixBlendMode = 'normal';
  }
}

// document.getElementById('info').addEventListener('mouseover', function(){
//   document.getElementById('infoTxt').style.opacity='1';
//   document.getElementById('infoTxt').style.transform='scale(1)';
// })
// document.getElementById('info').addEventListener('mouseout', function(){
//   document.getElementById('infoTxt').style.opacity='0';
//   document.getElementById('infoTxt').style.transform='scale(0)';
// })



//*********** MOBILE ***********//

var m1 = window.matchMedia('(min-width:500px)');
var m2 = window.matchMedia('(max-width:500px)');

btn1_.addEventListener('touchstart', function(){
  document.getElementById('svgAlphabet1').style.fill='#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
  btn1_.style.backgroundColor = document.getElementById('svgAlphabet1').style.fill;
});

btn2_.addEventListener('touchstart', function(){
  document.getElementById('svgAlphabet2').style.fill='#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
  btn2_.style.backgroundColor = document.getElementById('svgAlphabet2').style.fill;
});

btn3_.addEventListener('touchstart', function(){
  btnStroke();
});


