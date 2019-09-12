
// var elt = document.getElementById('p61'); 
// elt.style.transformBox='fill-box'
// elt.style.transformOrigin='50% 50%';
// elt.addEventListener('animationend', function(){
//   elt.style.animation = 'end 2s infinite backwards';
// });

var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var btn3 = document.getElementById('btn3');
var cName = btn3.className;

var inp = document.getElementById('inp');
var inp2 = document.getElementById('inp2');
var positionInp2 = inp2.getBoundingClientRect();

inp2.addEventListener('keyup', function(){
  document.getElementById('inp').value = inp2.value;
  inp.scrollLeft = inp.scrollWidth;
})

// if(positionInp2.top > 0){
//   inp2.addEventListener('focusout', function(){
//     inp2.focus();
//     inp2.setSelectionRange(inp.value.length, inp.value.length);    
//   });
// }else{
//   console.log('меньше нуля');
// }


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
      // inp2.setSelectionRange(inp.value.length, inp.value.length);   
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
}

function selectBlendModeSoftLight(){

  if(document.querySelector('.black')){
    document.querySelector('.black').classList.remove('black');
  }
  
  event.target.classList.add('black');
  inp.style.mixBlendMode = 'soft-light';
  inp2.style.mixBlendMode = 'soft-light';
}

function selectBlendModeHardLight(){

  if(document.querySelector('.black')){
    document.querySelector('.black').classList.remove('black');
  }
  
  event.target.classList.add('black');
  inp.style.mixBlendMode = 'hard-light';
  inp2.style.mixBlendMode = 'hard-light';
}

function selectBlendModeDodge(){

  if(document.querySelector('.black')){
    document.querySelector('.black').classList.remove('black');
  }
  
  event.target.classList.add('black');
  inp.style.mixBlendMode = 'color-dodge';
  inp2.style.mixBlendMode = 'color-dodge';
}

function selectBlendModeBurn(){

  if(document.querySelector('.black')){
    document.querySelector('.black').classList.remove('black');
  }
  
  event.target.classList.add('black');
  inp.style.mixBlendMode = 'color-burn';
  inp2.style.mixBlendMode = 'color-burn';
}

function noneBlend(){
  if(document.querySelector('.black')){
    document.querySelector('.black').classList.remove('black');
  }
  inp.style.mixBlendMode = 'normal';
  inp2.style.mixBlendMode = 'normal';
}

document.getElementById('info').addEventListener('mouseover', function(){
  document.getElementById('infoTxt').style.opacity='1';
  document.getElementById('infoTxt').style.transform='scale(1)';
})
document.getElementById('info').addEventListener('mouseout', function(){
  document.getElementById('infoTxt').style.opacity='0';
  document.getElementById('infoTxt').style.transform='scale(0)';
})
