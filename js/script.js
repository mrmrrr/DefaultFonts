var feature = document.getElementById('feature');
var newFont = document.getElementById('new');
var firmFont = document.getElementById('firm');
var blendFont = document.getElementById('name-blend');


var fontsF = document.getElementById('fontsF');
var lettersF = document.getElementById('lettersF');

document.getElementById('fonts-hover').style.opacity='0';

fontsF.addEventListener('mouseover', function(){
    document.getElementById('fonts-hover').style.opacity='100';
})
fontsF.addEventListener('mouseout', function(){
    document.getElementById('fonts-hover').style.opacity='0';
})

document.getElementById('letters-hover').style.opacity='0';
lettersF.addEventListener('mouseover', function(){
    document.getElementById('letters-hover').style.opacity='100';
})
lettersF.addEventListener('mouseout', function(){
    document.getElementById('letters-hover').style.opacity='0';
})