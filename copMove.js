const canvas=document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let gameSpeed = 5;
const backgroundlayer1 = new Image();
backgroundlayer1.src = 'real2.jpg';
const backgroundlayer2 = new Image();
backgroundlayer2.src = 'real.jpg';
let playerx = canvas.width/2;
let playery = 600;
let playerSpeed =5;
let keys ={};
window.addEventListener('keydown',function(e){
    keys[e.code]=true;
});
window.addEventListener('keyup',function(e){
    keys[e.code]=false;
});
let x=0;
let x2=1400;
function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    if((keys['ArrowLeft'] || keys['Keya'] || keys['KeyA'] )&& playerx>0){
        x+=gameSpeed;
        x2+=gameSpeed;
    }
    if((keys['ArrowRight'] || keys['Keyd'] || keys['KeyD'] )&& playerx < canvas.width){
        x-=gameSpeed;
        x2-=gameSpeed;
    }
    if((keys['ArrowUp'] || keys['Keyw'] || keys['KeyW'] )&& playery>0){
        playery-=playerSpeed;
   }
    if((keys['ArrowDown'] || keys['Keys'] || keys['KeyS'] )&& playery < canvas.height-50){
        playery+=playerSpeed;
    }

    ctx.drawImage(backgroundlayer1,x,0);
    ctx.drawImage(backgroundlayer2,x2,0);
    if(x< -1400) x= 1400 + x2;
    if(x2< -1400) x2= 1400 + x ;

    ctx.fillStyle = 'red';
    ctx.fillRect(playerx,playery,50,50);
  
    requestAnimationFrame(animate);
};
animate();
