var nameBlend = document.getElementById('name-blend');

nameBlend.addEventListener('mouseover', function(){
    document.getElementById('n1-art').style.display = 'inline';
    document.getElementById('n1-plastik').style.display = 'inline';
    document.getElementById('n1-maket').style.display = 'inline';
    document.getElementById('n1-video').style.display = 'inline';
});

nameBlend.addEventListener('mouseout', function(){
    document.getElementById('n1-art').style.display = 'none';
    document.getElementById('n1-plastik').style.display = 'none';
    document.getElementById('n1-maket').style.display = 'none';
    document.getElementById('n1-video').style.display = 'none';
});