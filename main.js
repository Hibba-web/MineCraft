
canvas = new fabric.Canvas('myCanvas');

player_x = 10;
player_y = 10;

player_object = "";
block_image_object = "";

block_image_height = 30;
block_image_width = 30;

function player_update() {
    fabric.Image.fromURL("player.png", function (Img) {
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top: player_y,
            left: player_x
        });

canvas.add(player_object);
    });

}

function new_image(get_image) {
     fabric.Image.fromURL(get_image, function (Img) { 
         block_image_object = Img; 
         block_image_object.scaleToWidth(block_image_width); 
         block_image_object.scaleToHeight(block_image_height); 
         block_image_object.set({ top: player_y, left: player_x }); 
        
        canvas.add(block_image_object);
     }); 
    }

    window.addEventListener("keydown", my_keydown)

    function my_keydown(e){

        keyPressed=e.keyCode;
        console.log(keyPressed);
        if(e.shiftKey == true && keyPressed == '80'){
            console.log("P & Shift pressed together");
            block_image_height = block_image_height + 5 ; 
            block_image_width  = block_image_width  + 5 ;
            document.getElementById("current_width").innerHTML = block_image_width ;
            document.getElementById("current_height").innerHTML = block_image_height ;

        }
        if(e.shiftKey == true && keyPressed == '77'){
            console.log("M & Shift pressed together");
            block_image_height = block_image_height - 5 ; 
            block_image_width  = block_image_width  - 5 ;
            document.getElementById("current_width").innerHTML = block_image_width ;
            document.getElementById("current_height").innerHTML = block_image_height ;

        }
        if(keyPressed == '38'){
            up();
            console.log("up");
        }
        if(keyPressed == '37'){
            left();
            console.log("left");
        }
        if(keyPressed == '40'){
            down();
            console.log("down");
        }
        if(keyPressed == '39'){
            right();
            console.log("right");
        }
        if(keyPressed == '87'){
            new_image('wall.jpg');
            console.log("Key 'w' ");
        }
        if(keyPressed == '71'){
            new_image('ground.png');
            console.log("Key 'g' ");
        }
        if(keyPressed == '76'){
            new_image('light_green.png');
            console.log("Key 'l' ");
        }
        if(keyPressed == '84'){
            new_image('trunk.jpg');
            console.log("Key 't' ");
        }
        if(keyPressed == '82'){
            new_image('roof.jpg');
            console.log("Key 'r' ");
        }
        if(keyPressed == '89'){
            new_image('yellow_wall.png');
            console.log("Key 'y' ");
        }
        if(keyPressed == '68'){
            new_image('dark_green.png');
            console.log("Key 'd' ");
        }
        if(keyPressed == '85'){
            new_image('unique.png');
            console.log("Key 'u' ");
        }
        if(keyPressed == '67'){
            new_image('cloud.jpg');
            console.log("Key 'c' ");
        }
    }

    function up(){

        if( player_y >= 0){
            player_y = player_y - block_image_height;
            console.log("block_image_height = " + block_image_height);
            console.log("When UP arrow clicked  | X = " + player_x + "| Y =" + player_y);
            canvas.remove(player_object);
            player_update()
        };
    }

    function down(){

        if( player_y <= 500){
            player_y = player_y + block_image_height;
            console.log("block_image_height = " + block_image_height);
            console.log("When DOWN arrow clicked  | X = " + player_x + "| Y =" + player_y);
            canvas.remove(player_object);
            player_update()
        };
    }

    function left(){

        if( player_x >= 0){
            player_x = player_x - block_image_width;
            console.log("block_image_width = " + block_image_width);
            console.log("When LEFT arrow clicked  | X = " + player_x + "| Y =" + player_y);
            canvas.remove(player_object);
            player_update()
        };
    }

    function right(){

        if( player_x <= 850){
            player_x = player_x + block_image_width;
            console.log("block_image_width = " + block_image_width);
            console.log("When RIGHT arrow clicked  | X = " + player_x + "| Y =" + player_y);
            canvas.remove(player_object);
            player_update()
        };
    }
