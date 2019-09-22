var feature = document.getElementById('feature');

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


// document.querySelector('.fontTitle').addEventListener('mouseover',function(){
//     document.getElementById('name-blend').style.opacity='1';
// })
// document.querySelector('.fontTitle').addEventListener('mouseout',function(){
//     document.getElementById('name-blend').style.opacity='0';
// })

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