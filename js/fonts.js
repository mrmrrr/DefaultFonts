var color1 = document.getElementById('color1');
var color2 = document.getElementById('color2');

color1.addEventListener('mouseover', function(){
    document.getElementById('color1').style.color='#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
    document.getElementById('g1').setAttribute('fill', document.getElementById('color1').style.color);
});
color2.addEventListener('mouseover', function(){
    document.getElementById('color2').style.color='#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
    document.getElementById('g2').setAttribute('fill', document.getElementById('color2').style.color);
});

document.getElementById('firmVideo').play();