var feature = document.getElementById('feature');
var newFont = document.getElementById('new');
var firmFont = document.getElementById('firm');
var blendFont = document.getElementById('name-blend');


var fontsF = document.getElementById('fontsF');
var lettersF = document.getElementById('lettersF');

if(document.getElementById('fonts-hover')){
    document.getElementById('fonts-hover').style.opacity='0';
    fontsF.addEventListener('mouseover', function(){
        document.getElementById('fonts-hover').style.opacity='100';
    })
    fontsF.addEventListener('mouseout', function(){
        document.getElementById('fonts-hover').style.opacity='0';
    })
}

if(document.getElementById('letters-hover')){
    document.getElementById('letters-hover').style.opacity='0';
    lettersF.addEventListener('mouseover', function(){
        document.getElementById('letters-hover').style.opacity='100';
    })
    lettersF.addEventListener('mouseout', function(){
        document.getElementById('letters-hover').style.opacity='0';
    })
}



document.getElementById('firmVideo').play();

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


// document.getElementById('FIRST').addEventListener('mouseover',function(){
//     for(i=0;i<document.getElementById('FIRST').children.length;i++){
//         document.getElementById('FIRST').children[i].style.fill = '#1A243F';
//     }
// })
// document.getElementById('FIRST').addEventListener('mouseout',function(){
//     document.getElementById('FIRST').children[0].style.fill='#436CFF';
//     document.getElementById('FIRST').children[1].style.fill = '';
//     document.getElementById('FIRST').children[2].style.fill = '';
//     document.getElementById('FIRST').children[3].style.fill = '#1A243F';
// })

// document.getElementById('LAST').addEventListener('mouseover',function(){
//     document.getElementById('LAST').children[0].style.fill='#17FFF1';
//     // document.getElementById('LAST').children[0].style.stroke='';
// })
// document.getElementById('LAST').addEventListener('mouseout',function(){
//     document.getElementById('LAST').children[0].style.fill='';
// })

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


// document.getElementById('letters').addEventListener('mouseover',function(){
//     document.getElementById('letters').style.opacity='1';
// })
// document.getElementById('letters').addEventListener('mouseout',function(){
//     document.getElementById('letters').style.opacity='0';
// })

// document.getElementById('name-blend').addEventListener('mouseover', function(){
//     document.getElementById('name-blend').children; 
// })


// var feature2 = document.getElementById('feature2');
// feature2.addEventListener('touchstart',  function(){
//     feature2.setAttribute('src','img/mobile/feature2.svg');
// });

// let magicGrid = new MagicGrid({
//     container: "#grid2", // Required. Can be a class, id, or an HTMLElement.
//     items: 2, // Required for dynamic content. Initial number of items in the container.
//     gutter: 5, // Optional. Space between items. Default: 25(px).
//     maxColumns: 2, // Optional. Maximum number of columns. Default: Infinite.
//     // static: true, // Required for static content.
//     // animate: true, // Optional.
// });
  
// magicGrid.listen();