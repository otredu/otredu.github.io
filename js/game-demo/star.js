export function Star(context, width, height, speed){
    this.x = Math.floor(Math.random()*width);
    this.y = Math.floor(Math.random()*height);
    this.size = Math.floor(Math.random()*6);
    this.move = function(){
        this.x = this.x - speed;
        if(this.y > canvas.heigth || this.x < 0){
            this.x = Math.floor(Math.random()*width);
            this.y = Math.floor(Math.random()*height);
            this.size = Math.floor(Math.random()*6);
        }
    }
    this.show = function(){
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI*2);
        context.fillStyle = "white";
        context.fill();
    }
}