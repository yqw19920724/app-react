export const shapeTypeMenu = {
    circle: 'circle'
};

export class Shape {
    constructor(canvas, type, postion, attr) {
        this.canvas = canvas;
        this.type = type;
        this.postion = this.canvas.transitePosition(postion);
        this.attr = attr;
        this.scale = 0.5;
        this.create();
    }

    create() {
        switch (this.type) {
            case shapeTypeMenu.circle:
                this.createCircle();
                break;
        }
    }

    createCircle() {
        const circle = this.canvas.paper.circle(this.postion.x, this.postion.y, this.attr.radius)
        if(this.attr.fill) {
            circle.attr('fill', this.attr.fill)
        }
        circle.click((e) => {
            e.stopPropagation()
            circle.animate(
                {
                    cy: 0,
                    r: this.attr.radius*this.scale
                }, 
                1000,
                'ease-in'
            );
        })
    }

}


