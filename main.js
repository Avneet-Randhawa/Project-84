canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

car1_x = 10;
car1_y = 10;
car1_width = 100;
car1_height = 40;
car1_image="car1.png";

car2_x = 10;
car2_y = 100;
car2_width = 110;
car2_height = 70;
car2_image="car2.png";


background_image = "https://i.pinimg.com/736x/d0/9c/4c/d09c4cfd1b93cc66dc13c8b461fd2145.jpg";
function add() {
    background_img = new Image();
    background_img.onload = background_upload();
    background_img.src = background_image;
    
    car1_img = new Image();
    car1_img.onload = car1_upload();
    car1_img.src = car1_image;

	car2_img = new Image();
    car2_img.onload = car2_upload();
    car2_img.src = car2_image;
}
function background_upload() {
    ctx.drawImage(background_img,0,0,canvas.width,canvas.height);
}
function car1_upload() {
    ctx.drawImage(car1_img,car1_x,car1_y,car1_width,car1_height);
}
function car2_upload() {
    ctx.drawImage(car2_img,car2_x,car2_y,car2_width,car2_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keypressed = e.keyCode;
    console.log("keypressed");

    if(keypressed == '40'){
        
        car1_down();
        console.log("down");
    }
    if(keypressed == '37'){
        car1_left();
        console.log("left");
    }if(keypressed == '38'){
        car1_up();
        console.log("up");
    }if(keypressed == '39'){
        car1_right();
        console.log("right");
    }
	if(keypressed == '83'){
        
        car2_down();
        console.log("down");
    }
    if(keypressed == '65'){
        car2_left();
        console.log("left");
    }if(keypressed == '87'){
        car2_up();
        console.log("up");
    }if(keypressed == '68'){
        car2_right();
        console.log("right");
    }
	if(car1_x > 700){
		console.log("Car 1 Won !!!!");
		document.getElementById("status").innerHTML  = "Car 1 Won!!!!";
		} 
	if(car2_x > 700){
		console.log("Car 2 Won !!!!");
		document.getElementById("status").innerHTML  = "Car 2 Won!!!!";
	}

}
function car1_up() {
    if(car1_y >=0){
        car1_y = car1_y - 10;
        console.log("X = "+ car1_x + "y = "+ car1_y);
        background_upload();
        car1_upload();
		car2_upload();
		document.getElementById("note").innerHTML  = "";
    }
}
function car1_down() {
    if(car1_y <=550){
        car1_y = car1_y + 10;
        console.log("X = "+ car1_x + "y = "+ car1_y);
		background_upload();
        car1_upload();
		car2_upload();
		document.getElementById("note").innerHTML  = "";
    }
}
function car1_left() {
    if(car1_x >=0){
        car1_x = car1_x - 10;
        console.log("X = "+ car1_x + "y = "+ car1_y);
		background_upload();
        car1_upload();
		car2_upload();
		document.getElementById("note").innerHTML  = "";
    }
}
function car1_right() {
    if(car1_x <=700){
        car1_x = car1_x + 10;
        console.log("X = "+ car1_x + "y = "+ car1_y);
		background_upload();
        car1_upload();
		car2_upload();
		document.getElementById("note").innerHTML  = "";
    }
}

function car2_up() {
	if(car2_y >=0){
		car2_y = car2_y - 10;
		console.log("X = "+ car2_x + "y = "+ car2_y);
		background_upload();
		car1_upload();
		car2_upload();
		document.getElementById("note").innerHTML  = "";
	}
}
function car2_down() {
	if(car2_y <=550){
		car2_y = car2_y + 10;
		console.log("X = "+ car2_x + "y = "+ car2_y);
		background_upload();
		car1_upload();
		car2_upload();
		document.getElementById("note").innerHTML  = "";
	}
}
function car2_left() {
	if(car2_x >=0){
		car2_x = car2_x - 10;
		console.log("X = "+ car2_x + "y = "+ car2_y);
		background_upload();
		car1_upload();
		car2_upload();
		document.getElementById("note").innerHTML  = "";
	}
}
function car2_right() {
	if(car2_x <=700){
		car2_x = car2_x + 10;
		console.log("X = "+ car2_x + "y = "+ car2_y);
		background_upload();
		car1_upload();
		car2_upload();
		document.getElementById("note").innerHTML  = "";
	}
}

