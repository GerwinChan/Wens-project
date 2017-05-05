window.addEventListener("load",function(){
    var looplicht = document.getElementById("light");
    var naam = ["C","a","l","l",""," o","f",""," D","u","t","y"];

    function animate(){
        looplicht.innerHTML = "";
    for(i = 0; i<naam.length; i++){
        var span = document.createElement('span');
        span.innerHTML = naam[i];
        span.style.color = "rgb("+ kiesKleur() + ","+
            kiesKleur() + "," +
            kiesKleur() +")";



        looplicht.appendChild(span);
    }
    }

    setInterval(animate,100)

        function kiesKleur(){
         var kleur = Math.floor(Math.random()*255);
            return kleur;
        }

    })



window.addEventListener("load", function(){

     var canvas = document.getElementById("canvas");
     var context = canvas.getContext("2d");

    var img = new Image();

    img.src = "3552737ff66a5f719ab6133a3343707a.jpg";

    img.addEventListener("load",function(){
      setInterval(animate,10);
    })

     var enemies = [];

    window.addEventListener("mousedown",function(e){
      mouseX = e.clientX - canvas.offsetLeft;
      mouseY = e.clientY - canvas.offsetTop;
        for(i = 0; i<enemies.length; i++){
         if(mouseX>enemies[i].x &&
            mouseX<enemies[i].x + enemies[i].width &&
            mouseY > enemies[i].y &&
            mouseY < enemies[i].y + enemies[i].height)
         {

             enemies.splice(i,1);

         }
      }
        console.log(mouseX,mouseY);
    })

    function animate(){

        if(Math.random()<0.01){
    var a = Object.create(Enemy);
    a.x = Math.random()*800;
    a.y = -200;
    enemies.push(a);
    }

        context.clearRect(0,0,800,800);

        for(i = 0; i<enemies.length; i++){
         enemies[i].update();
            enemies[i].draw(context,img);

            if(enemies[i]>600){
             enemies.splice(i,1)
            }


        }
};



    setInterval(animate,10)

});
