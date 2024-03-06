import { Canvas } from "./canvas";

export const run = ()=>{

    var canvas=new Canvas();

    document.getElementById('years').onchange = (e)=>{
        canvas.changeYear(e.target.value);
    }
    document.getElementById('min').onchange = (e)=>{
        canvas.changeMin(e.target.value);
    }
    document.getElementById('max').onchange = (e)=>{
        canvas.changeMax(e.target.value);
    }

    
    var clearButton=document.getElementById("clear")
    
    window.onload = function() {
    
    
    /*var coord = document.getElementById("coord");
    canvas.onmousemove = function(e) {
        coord.value = e.pageX+" "+e.pageY+" / "+(e.pageX-canvas.offsetLeft)+" "+(e.pageY-canvas.offsetTop);
    }*/
    }
}

