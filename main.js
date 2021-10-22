var last_position_of_x, last_position_of_y;
var width = screen.width;
var height = screen.height;
var newwidth= width-70;
var newheight= height-300;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");

    if(width<992){
        document.getElementById("myCanvas").width=newwidth;
        document.getElementById("myCanvas").height=newheight;
        document.body.style.overflow="hidden";
    }
    color = "black";
    width_of_line = 2;

    canvas.addEventListener("touchstart", my_touchstart);
    
    function my_touchstart(e)
    {
        //Addictonal Activity start
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width").value;
        //Addictonal Activity ends

        last_position_of_x=e.touches[0].clientX-canvas.offsetLeft;
        last_position_of_y=e.touches[0].clientY-canvas.offsetTop;
    }

    

    canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e)
    {

         current_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
         current_position_of_y = e.touches[0].clientY - canvas.offsetTop;

        
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_x + "y = " + current_position_of_y);
        ctx.lineTo(current_position_of_x, current_position_of_y);
        ctx.stroke();
        

        last_position_of_x = current_position_of_x; 
        last_position_of_y = current_position_of_y;
    }
    function clearing(){
     ctx.clearRect(0,0,canvas.width,canvas.height);
    }

    canvas=document.getElementById("myCanvas");
    ctx=canvas.getContext("2d");
    var mouseevent="empty";
    var lx,ly;
    var color = "black";
    var width= 1;
    canvas.addEventListener("mousedown",mymousedown);
    function mymousedown(e){
        mouseevent="mousedown";
    
    }
    canvas.addEventListener("mouseup",mymouseup);
    function mymouseup(e){
        mouseevent="mouseup";
        
    }
    canvas.addEventListener("mouseleave",mymouseleave);
    function mymouseleave(e){
        mouseevent="mouseleave";
        }
        canvas.addEventListener("mousemove",mymousemove);
        function mymousemove(e){
            cx= e.clientX-canvas.offsetLeft;
            cy= e.clientY-canvas.offsetTop;
            if(mouseevent=="mousedown"){
                ctx.beginPath();
                ctx.strokeStyle=color;
                ctx.lineWidth=width;
                ctx.moveTo(lx,ly);
                ctx.lineTo(cx,cy);
                ctx.stroke();  
            }
        lx=cx;
        ly=cy;
        }
        