export class Canvas {
    year=5;
    min=0;
    max=1000;
    points=[]
    canvas;
    context;
    isDrawing=false;
    constructor(){
        var canvasHolder=document.getElementById("canvas-holder");
        this.canvas=this.createNewCanvas();
        this.context=this.getContext();
        canvasHolder.appendChild(this.canvas);
    }

    getContext=()=>{
        var context = this.canvas.getContext('2d');
        context.strokeStyle = "#913d88";
        context.lineWidth = 2;
        return context;
    }
    createNewCanvas=()=>{
        var canvas = document.createElement('canvas');
        canvas.id='canvas';
        canvas.width = 780;
        canvas.height = 490;


        canvas.onmousedown = this.startDrawing;
        canvas.onmouseup = this.stopDrawing;
        canvas.onmousemove = this.draw;
        canvas.onmouseout = this.stopDrawing;
        
        
        return canvas;
    };

    stopDrawing=()=> {
        this.isDrawing = false;
    }

    draw=(e)=> {
        if (this.isDrawing == true) {
            var x = e.pageX - canvas.offsetLeft;
            var y = e.pageY - canvas.offsetTop;
        
            this.context.lineTo(x, y);
            this.context.stroke();
        }
    }

    startDrawing=(e)=> {
        this.isDrawing = true;
        this.points=[];
        this.context.beginPath();
        this.context.moveTo(e.pageX - canvas.offsetLeft, e.pageY - canvas.offsetTop);
    }

    deleteCanvas=()=>{

    }

    drawXaxis = (years)=>{

    }

    drawYaxis = (min, max)=>{

    }

    drawGraph = (points)=>{

    }

    changeYear = ()=>{

    }
}

