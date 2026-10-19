(function(g){
'use strict';
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
function drawPolloAnimation(c,A,kind,time){
 const t=Math.max(0,time);c.save();c.drawImage(A['pollo-v13-tarde']||A.animBg,0,0,1200,675);
 function actor(im,x,y,h,ang=0,sx=1){c.save();c.translate(x,y);c.rotate(ang);c.scale(sx,1);let w=h*im.width/im.height;c.drawImage(im,-w/2,-h,w,h);c.restore()}
 function ellipse(x,y,rx,ry,col){c.beginPath();c.ellipse(x,y,rx,ry,0,0,Math.PI*2);c.fillStyle=col;c.fill()}
 function limb(x,y,ang,col,len=55){c.save();c.translate(x,y);c.rotate(ang);c.lineWidth=4;c.strokeStyle='#453b29';c.fillStyle=col;c.beginPath();c.roundRect(0,-12,len,24,12);c.fill();c.stroke();c.beginPath();c.ellipse(len,0,18,13,0,0,7);c.fill();c.stroke();c.restore()}
 function chicken(x,y,h,tilt=0){actor(A.animPollo,x,y,h,tilt)}
 actor(A.animJb,820,540,270,Math.sin(t*1.4)*.012);actor(A.animCarlos,1030,540,280,-Math.sin(t*1.3)*.012);
 if(kind==='cobro'){
   const cycle=t%8,extend=clamp(cycle/.9,0,1),strike=cycle<1.5?0:Math.pow((1+Math.sin((cycle-1.5)*Math.PI*5))/2,3);
   actor(A.animVecino,72,475,205);actor(A.animVecino2,165,470,200);
   actor(A.animWalter,230,570,315,cycle<1.5?-.05:-.025+Math.sin(t*9)*.012);
   // Separate the supplied costume into a clipped head/body rig; original hanging wings are not duplicated.
   c.save();c.translate(455,570);c.rotate(Math.sin(t*4)*.028);c.scale(340/630,340/630);c.translate(-191,-630);
   c.beginPath();c.moveTo(0,0);c.lineTo(382,0);c.lineTo(382,255);c.lineTo(295,270);c.lineTo(307,455);c.lineTo(320,480);c.lineTo(300,630);c.lineTo(45,630);c.lineTo(30,470);c.lineTo(72,390);c.lineTo(78,270);c.lineTo(60,255);c.lineTo(60,120);c.lineTo(0,120);c.closePath();c.clip();c.drawImage(A.animPollo,0,0,382,630);c.restore();
   // Cane is deliberately laid at the feet while both hands collect payment.
   c.strokeStyle='#47371d';c.lineCap='round';c.lineWidth=13;c.beginPath();c.moveTo(410,575);c.lineTo(520,565);c.stroke();c.strokeStyle='#d9b862';c.lineWidth=8;c.stroke();
   // Articulated paper arms in front of the original costume. The cane stays visibly held.
   limb(435,427,-Math.PI+.05,'#ffcf16',80*extend);
   const palmX=435-80*extend;
   ellipse(palmX-6,423,24,9,'#ffd52c');
   limb(469,414,-Math.PI+.4-strike*.5,'#ffd52c',92);
   if(strike>.78&&cycle>1.5){c.strokeStyle='#fff8a5';c.lineWidth=5;for(let i=0;i<5;i++){let a=3.4+i*.5;c.beginPath();c.moveTo(palmX+Math.cos(a)*28,420+Math.sin(a)*24);c.lineTo(palmX+Math.cos(a)*43,420+Math.sin(a)*37);c.stroke()}}
   // Walter's gaze and brows react without changing his cap or facial identity.
   if(cycle>3){c.strokeStyle='#34291b';c.lineWidth=4;c.beginPath();c.moveTo(212,339);c.lineTo(225,344);c.moveTo(239,344);c.lineTo(251,339);c.stroke()}
 }else{
   const group=A['pollo-v16-fight'];
   if(group){
     // Grounded cohesive cutout, fixed mascot face and attached limbs.
     const h=355,w=h*group.width/group.height;
     c.save();c.translate(350,565);c.transform(1,0,Math.sin(t*13)*.009,1,0,0);
     c.drawImage(group,-w/2,-h,w,h);c.restore();
     for(let i=0;i<5;i++){const f=(t*1.3+i*.2)%1;c.save();c.globalAlpha=(1-f)*.35;ellipse(210+i*65+Math.sin(i+t)*8,562-f*13,12+f*10,5+f*3,'#cbb396');c.restore()}
     for(let side of [-1,1]){const pulse=Math.max(0,Math.sin(t*9+side*1.4));if(pulse>.65){c.strokeStyle='#ffdb76';c.lineWidth=3;for(let i=0;i<3;i++){const x=350+side*65,y=405+i*12;c.beginPath();c.moveTo(x,y);c.lineTo(x+side*(7+pulse*8),y-5+i*4);c.stroke()}}}
   }

 }
 c.restore();
}
g.drawPolloAnimation=drawPolloAnimation;
})(typeof window!=='undefined'?window:globalThis);
