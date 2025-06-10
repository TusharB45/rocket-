const c = document.getElementById("gameCanvas")
const ctx = c.getContext("2d")

function resize() {
  c.width = window.innerWidth
  c.height = window.innerHeight
}
window.addEventListener("resize", resize)
resize()

let t = 0
const img = new Image()
img.src = "Rocket.png"

const getY = x => Math.pow(1.22, x) * 5

function draw() {
  ctx.clearRect(0, 0, c.width, c.height)

  const sp = c.width / 25
  const pts = []

  for (let i = 0; i <= t; i += 0.05) {
    const x = i * sp
    const y = c.height - getY(i)
    pts.push([x, y])
  }

  ctx.beginPath()
  ctx.moveTo(0, c.height)
  pts.forEach(p => ctx.lineTo(p[0], p[1]))
  ctx.lineTo(pts[pts.length - 1][0], c.height)
  ctx.closePath()
  ctx.fillStyle = "rgba(204,0,51,0.5)"
  ctx.fill()

  ctx.beginPath()
  ctx.moveTo(0, c.height)
  pts.forEach(p => ctx.lineTo(p[0], p[1]))
  ctx.strokeStyle = "#cc0033"
  ctx.lineWidth = 2
  ctx.stroke()

  const x = t * sp
  const y = c.height - getY(t)

  if (x < c.width && y > -50) {
    ctx.drawImage(img, x - 20, y - 40, 40, 40)
    t += 0.08
  } else {
    t = 0
  }

  requestAnimationFrame(draw)
}

img.onload = () => draw()
