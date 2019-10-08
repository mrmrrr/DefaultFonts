var feature = document.getElementById('feature');
var newFont = document.getElementById('new');
var firmFont = document.getElementById('firm');
var blendFont = document.getElementById('name-blend');


document.getElementById('svgBlend').addEventListener('mouseover',function(){
    document.getElementById('g1').style.transform='translateX(-50px)';
})
document.getElementById('svgBlend').addEventListener('mouseout',function(){
    document.getElementById('g1').style.transform='translateX(+50px)';
})

document.getElementById('svgBlendMobile').addEventListener('touchstart',function(){
    document.getElementById('g1_').style.transform='translateY(+59px)';
})
document.getElementById('svgBlendMobile').addEventListener('touchend',function(){
    document.getElementById('g1_').style.transform='translateY(0px)';
})

// ************************АНОНС
document.getElementById('soon').addEventListener('mouseover',function(){
    document.getElementById('soon').style.height='220vh';
})
newFont.addEventListener('mouseover', function(){
    document.getElementById('gifNewFont').style.opacity='1';
})
newFont.addEventListener('mouseleave', function(){
    document.getElementById('gifNewFont').style.opacity='0';
})

firmFont.addEventListener('mouseover',function(){
    firmFont.setAttribute('src','img/newindex/firm-gorizont-hover.svg');
})
firmFont.addEventListener('mouseleave',function(){
    firmFont.setAttribute('src','img/newindex/firm-gorizont.svg');
})

    blendFont.addEventListener('mouseover',function(){
       blendFont.setAttribute('src','img/newindex/blendNameHover.svg');
    })
    blendFont.addEventListener('mouseleave',function(){
       blendFont.setAttribute('src','img/newindex/blendName.svg');
    })


//mobile
newFont.addEventListener('touchstart', function(){
    document.getElementById('gifNewFont').style.opacity='1';
})
newFont.addEventListener('touchend', function(){
    document.getElementById('gifNewFont').style.opacity='1';
})
// firmFont.addEventListener('touchstart',function(){
//     firmFont.setAttribute('src','img/newindex/firmHover.svg');
// })
firmFont.addEventListener('touchend',function(){
    firmFont.setAttribute('src','img/newindex/firm-gorizont-hover.svg');
})
// ************************АНОНС_END


document.getElementById('letters').addEventListener('mouseover',function(){
    document.getElementById('letters').style.opacity='1';
})
document.getElementById('letters').addEventListener('mouseout',function(){
    document.getElementById('letters').style.opacity='0';
})

// document.getElementById('name-blend').addEventListener('mouseover', function(){
//     document.getElementById('name-blend').children; 
// })


var feature2 = document.getElementById('feature2');
feature2.addEventListener('touchstart',  function(){
    feature2.setAttribute('src','img/mobile/feature2.svg');

});