export function Player(context, img, x=0, y=0, xsize=100, ysize=100){
    this.x = x
    this.y = y;
    this.xsize = xsize;
    this.ysize = ysize;

    this.show = function(){
        context.drawImage(img, this.x , this.y, xsize, ysize);
    }
}