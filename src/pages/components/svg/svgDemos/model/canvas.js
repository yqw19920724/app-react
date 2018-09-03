import Raphael from 'raphael'

class Canvas {
    constructor(elementContainer, width, height){
        this.paper = undefined;
        this.elementContainer = document.getElementById(elementContainer);
        this.width = width;
        this.height = height;

        this.init();
    }

    init(){
        this.paper = Raphael( this.elementContainer, this.width, this.height);
    }

    transitePosition(position) {
        const offsetLeft = this.elementContainer.offsetLeft;
        const offsetTop = this.elementContainer.offsetTop;
        return {
            x: position.x - offsetLeft,
            y: position.y - offsetTop
        }
    }
}

export default Canvas;