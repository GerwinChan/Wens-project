var Enemy ={
    x:0,
    y:0,
    xstap:0,
    ystap:1,
    width:100,
    height:150,
    update:function(){
        this.x += this.xstap;
        this.y += this.ystap;

    },

    draw:function(context, img){

        //context.fillStyle = "white";
        //context.fillRect(this.x,this.y,50,50);
        context.drawImage(img,this.x,this.y,100,150);

    }


}
