var feature = document.getElementById('feature');
var newFont = document.getElementById('new');
var firmFont = document.getElementById('firm');
var blendFont = document.getElementById('name-blend');
var color1 = document.getElementById('color1');
var color2 = document.getElementById('color2');

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

color1.addEventListener('mouseover', function(){
    document.getElementById('color1').style.color='#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
    document.getElementById('g1').setAttribute('fill', document.getElementById('color1').style.color);
});
color2.addEventListener('mouseover', function(){
    document.getElementById('color2').style.color='#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
    document.getElementById('g2').setAttribute('fill', document.getElementById('color2').style.color);
});


document.getElementById('firmVideo').play();

