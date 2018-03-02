// Code by Matan Radomski, 2018.
console.log("Monstercat Genre Reveal Init");

function ResetGenre()
{
    var ourreg = /Genre: *(.*)\n/;
    if(document.getElementById("description")==null)
    {
        setTimeout(function() { ResetGenre(); }, 250);
        return;
    }
    var ourdata = document.getElementById("description").innerText;

    var ourres = ourdata.match(ourreg);
    if (ourres != null && ourres.length == 2)
    {
        var ourgenre = ourres[1];
        var ourtitle = document.getElementsByClassName("title style-scope ytd-video-primary-info-renderer")[0];
        ourtitle.innerText = "[" + ourgenre + "] - " + ourtitle.innerText;


    }
}

document.addEventListener('transitionend',
  function(event) {
    if (event.propertyName === 'transform' && event.target.id === 'progress') {
        ResetGenre();
    }
}, true);



ResetGenre();

