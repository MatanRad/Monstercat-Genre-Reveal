// Code by Matan Radomski, 2018.

function TransitionStart()
{
    var prevtitle = document.getElementsByClassName("title style-scope ytd-video-primary-info-renderer")[0].innerText;
    TransitionCheck(prevtitle);
}

function TransitionCheck(prev)
{
    if (document.getElementsByClassName("title style-scope ytd-video-primary-info-renderer")[0].innerText==prev)
    {
        setTimeout(function() { TransitionCheck(prev); }, 250);
    }
    else
    {
        ResetGenre();
    }
    
}

function ResetGenre()
{
    var ourreg = /Genre: *(.*)\n/;
    if(document.getElementById("description")==null)
    {
        setTimeout(function() { ResetGenre(); }, 250);
        return;
    }
    var ourdata = document.getElementById("description").innerHTML;

    var ourres = ourdata.match(ourreg);
    if (ourres != null && ourres.length == 2)
    {
        var ourgenre = ourres[1];
        var ourtitle = document.getElementsByClassName("title style-scope ytd-video-primary-info-renderer")[0];
        ourtitle.innerText = "[" + ourgenre + "] - " + ourtitle.innerText;


    }
}

window.addEventListener("spfdone", TransitionStart); // old youtube design
window.addEventListener("yt-navigate-start", TransitionStart); 
ResetGenre();

