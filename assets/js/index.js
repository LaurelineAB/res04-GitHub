window.addEventListener("DOMContentLoaded", function ()
{
    function visibleDivs ()
    {
        let boxes = document.querySelectorAll("div");
        let time = 0;

        for (let box of boxes)
        {
            time += 500;
            console.log(time);
            setTimeout(function(){box.style.opacity = 1},time);
        }
    }
    visibleDivs();
})