canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

car="car.png";
background="Parking.png";
cars_width=200;
cars_height=200;
car_x=10;
car_y=10;

function add(){
    background_imgTag=new Image();
    background_imgTag.onload= uploadfondo;
    background_imgTag.src= background;
    background2_imgTag=new Image();
    background2_imgTag.onload= uploadfondo;
    background2_imgTag.src= background;
car_imgTag=new Image();
car_imgTag.onload= uploadplayer;
car_imgTag.src= car;


}

 function uploadfondo(){
    ctx.drawImage(background2_imgTag,0,0,400,600);
ctx.drawImage(background_imgTag,402,0,400,600);}
function uploadplayer(){
ctx.drawImage(car_imgTag,car_x,car_y,cars_width,cars_height);}



window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keyPressed=e.keyCode;
    document.getElementById("valor").innerHTML=keyPressed;
    if(keyPressed=="38"){

        up();
        
    
    }
    if(keyPressed=="40"){
    
        down();
        
    }
    if(keyPressed=="37"){
        left();
        
    }
    if(keyPressed=="39"){
        rigth();
        
    }
    
    
    function up(){
    
    if(car_y>=0){
    
        car_y=car_y-10;
        
        uploadfondo();
        uploadplayer();
        console.log(car_y);
        if((car_x==200 && car_y==360)|| (car_y==10  && car_x==400)||(car_x==600 && car_y==330)) {
 
            document.getElementById("Logro").innerHTML="Bien hecho es tu parking";
            document.getElementById("mal").innerHTML="";
            
            }if((car_x==400  && car_y==340)||( car_y==340 && car_x==0)){

                document.getElementById("Logro").innerHTML="";
                document.getElementById("mal").innerHTML="No es tu parking";
                document.getElementById("mientras").innerHTML="";

            }
            if((car_x==400  && car_y==340)||( car_y==340 && car_x==0)||(car_x==200 && car_y==360)|| (car_y==10  && car_x==400)||(car_x==600 && car_y==330)){
                            
            }else{
                document.getElementById("Logro").innerHTML="";
                document.getElementById("mientras").innerHTML="Sigue avanzando";
                document.getElementById("mal").innerHTML="";
            }
        
    }
    
    }
    function down(){
    
        if(car_y<=400){
        
            car_y=car_y+10;
            
            uploadfondo();
            uploadplayer();
            console.log(car_y);
            if((car_x==200 && car_y==360)|| (car_y==10  && car_x==400)||(car_x==600 && car_y==330)){
 
                document.getElementById("Logro").innerHTML="Bien hecho es tu parking";
                document.getElementById("mal").innerHTML="";
                }
                    if((car_x==400  && car_y==340)||( car_y==340 && car_x==0)){

                        document.getElementById("Logro").innerHTML="";
                        document.getElementById("mal").innerHTML="No es tu parking";
                        document.getElementById("mientras").innerHTML="";

                    }
                    if((car_x==400  && car_y==340)||( car_y==340 && car_x==0)||(car_x==200 && car_y==360)|| (car_y==10  && car_x==400)||(car_x==600 && car_y==330)){
                            
                    }else{
                        document.getElementById("Logro").innerHTML="";
                        document.getElementById("mientras").innerHTML="Sigue avanzando";
                        document.getElementById("mal").innerHTML="";
                    }
            
        }
        
        }
        function left(){
    
            if(car_x>=0){
            
                car_x=car_x-10;
                
                uploadfondo();
                uploadplayer();
                console.log(car_x);
                if((car_x==200 && car_y==360)|| (car_y==10  && car_x==400)||(car_x==600 && car_y==330)){
 
                    document.getElementById("Logro").innerHTML="Bien hecho es tu parking";
                    document.getElementById("mal").innerHTML="";
                    }if((car_x==400  && car_y==340)||( car_y==340 && car_x==0)){

                        document.getElementById("Logro").innerHTML="";
                        document.getElementById("mal").innerHTML="No es tu parking";
                        document.getElementById("mientras").innerHTML="";

                    }
                    if((car_x==400  && car_y==340)||( car_y==340 && car_x==0)||(car_x==200 && car_y==360)|| (car_y==10  && car_x==400)||(car_x==600 && car_y==330)){
                            
                    }else{
                        document.getElementById("Logro").innerHTML="";
                        document.getElementById("mientras").innerHTML="Sigue avanzando";
                        document.getElementById("mal").innerHTML="";
                    }
                
            }
            
            }
            function rigth(){
    
                if(car_x<=610){
                
                    car_x=car_x+10;
                    
                    uploadfondo();
                    uploadplayer();
                    console.log(car_x);
                    if((car_x==200 && car_y==360)|| (car_y==10  && car_x==400)||(car_x==600 && car_y==330)) {
 
                        document.getElementById("Logro").innerHTML="Bien hecho es tu parking";
                        document.getElementById("mal").innerHTML="";
                        }if((car_x==400  && car_y==340)||( car_y==340 && car_x==0)){

                            document.getElementById("Logro").innerHTML="";
                            document.getElementById("mal").innerHTML="No es tu parking";
                            document.getElementById("mientras").innerHTML="";
    
                        }
                        if((car_x==400  && car_y==340)||( car_y==340 && car_x==0)||(car_x==200 && car_y==360)||(car_y==10  && car_x==400)||(car_x==600 && car_y==330)){
                            document.getElementById("mientras").innerHTML="";
                        }else{
                            document.getElementById("Logro").innerHTML="";
                            document.getElementById("mientras").innerHTML="Sigue avanzando";
                            document.getElementById("mal").innerHTML="";
                        }
                    
                }
                
                

}
}

