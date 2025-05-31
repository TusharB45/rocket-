const c=document.getElementById("gameCanvas")
const ctx=c.getContext("2d")

let t=0
const space=50
const img=new Image()
img.src="Rocket.png"

function getY(time){
  return Math.pow(1.22,time)*5
}

function draw()

{
ctx.clearRect(0,0,c.width,c.height)

ctx.beginPath()
ctx.moveTo(0,c.height)

for(let i=0;i<=t;i+=0.1){
  let x=i*space
  let y=c.height-getY(i)
  ctx.lineTo(x,y)
}

ctx.lineTo(t*space,c.height)
ctx.closePath()
ctx.fillStyle="rgba(204,0,51,0.5)"
ctx.fill()

ctx.beginPath()
ctx.moveTo(0,c.height)

for(let i=0;i<=t;i+=0.1){
  let x=i*space
  let y=c.height-getY(i)
  ctx.lineTo(x,y)
}
ctx.strokeStyle="#cc0033"
ctx.lineWidth=2
ctx.stroke()

let rocketX=t*space
let rocketY=c.height-getY(t)
if(rocketX<c.width && rocketY>0){
  ctx.drawImage(img,rocketX-20,rocketY-40,40,40)
  t+=0.05
  requestAnimationFrame(draw)
}
else
{
  console.log("rocket gone")
}
}
img.onload=function(){draw()}
