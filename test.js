console.log("Hello");

function nim()
{
    var im = new Image();
    im.src = 'Images/Sharp.png';
    im.id = 'nt';
    document.getElementById('notes').appendChild(im); 
}

function position(nme, x, y)
{
    var e = document.getElementById(nme);

    e.position.x = x;
    e.position.y = y;

}