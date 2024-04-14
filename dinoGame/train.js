class Train{
    constructor() {
        this.r=150;
        this.x= width;
        this.y=height-this.r;
    
        this.move = () => {
            this.x-=10
        }
        this.show= () => {
            image(tImg,this.x,this.y,this.r,this.r)
        }
    }
}