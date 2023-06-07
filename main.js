
// 获取canvas元素 使用id选择器
const canvas = document.getElementById('myCanvas')
// 获取
canvas.height = window.innerHeight
canvas.width = 200

const ctx = canvas.getContext('2d')
const car = new Car(100, 100, 30, 50) // x, y, width, height
car.draw(ctx)

animate()

function animate() {
  car.update()
  canvas.height = window.innerHeight
  car.draw(ctx)
  requestAnimationFrame(animate)
}