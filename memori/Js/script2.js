function startGame()
{
    document.getElementById('start').style.visibility='hidden';
    var as = ["clr","clr1","clr2","clr3","clr4","clr5","clr","clr1","clr2","clr3","clr4","clr5"];  
    var s = as.sort(func);  
    var show = [];
    var win = 0;
    var t = 90;

    var card = document.getElementsByClassName("card");
    card = Array.from(card);
    
    function func(a, b) {  
      return 0.5 - Math.random();
    }  
    
    for (var i = 0; i < card.length; i++) {
        card[i].parentElement.classList.add(s[i]);
    }
    
    card.map(function(element){
            element.classList.add("hide");
        })

    setTimeout(function(){
        card.map(function(element){
            element.classList.remove("hide");
        })
    }, 500)

    card.map(function(element, index){
    element.addEventListener("click", function()
        {
            element.classList.add("hide");
            show.push(element);
            
            if(show.length == 2)
            { 
                if(show[0].parentElement.getAttribute('class') != show[1].parentElement.getAttribute('class'))
                {
                setTimeout(function(){
                    show[0].classList.remove("hide");
                    show[1].classList.remove("hide");
                    show = [];
                    }, 300);
                
                }
                else {
                    win += 2;
                    setTimeout(function(){
                    show[0].parentElement.classList.add("hide");
                    show[1].parentElement.classList.add("hide");
                    show = [];
                    if(win == 12)
                    {
                        clearInterval(time);
                        document.getElementsByClassName('row3')[0].classList.add("hide");
                        document.getElementsByClassName('row1')[0].innerHTML="<h1><br><br><br>Bien joué ! Vous avez réussi le niveau 2, Réessayez et battez votre meilleur temps!<h1>en ( "+(89-t)+" ) secondes!</h1><h1><a href='index.html' style='text-decoration:none;'>Recommencer</a>?</h1><br><br><br></h1>";
                    }   
                    }, 300);
                }
            }
        });
    });

    var time = setInterval(function(){
        document.getElementById("time").innerHTML = "Temps : "+t--;
        if(t < 0){
            clearInterval(time);
            if(win < 12)
            {
                document.getElementsByClassName('row1')[0].classList.add("hide");
                document.getElementsByClassName('row3')[0].classList.add("hide");
                document.getElementsByClassName('row2')[0].innerHTML="<h1><br><br><br><br>Réessayez<br><br><a href='level2.html'>Rejouer ?</a><br><br><br><br></h1>";
            }
        }
    }, 1000);
}
