class Car {
  constructor (x, y, width, height) {
    this.x = x
    this.y = y
    this.width = width
    this.height = height

    this.speed = 0
    this.acceleration = 0.2
    this.maxSpeed = 3
    this.fraction = 0.05
    this.angle = 0

    this.controls = new Controls()
  }

  update () {
    this.#move()
  }

  #move() {
    // implement forward and backward
    if (this.controls.forward) {
      this.speed += this.acceleration
    }
    if (this.controls.reverse) {
      this.speed -= this.acceleration
    }
    if (this.speed > this.maxSpeed) {
      this.speed = this.maxSpeed
    }
    if (this.speed < -this.maxSpeed / 2) {
      this.speed = -this.maxSpeed / 2
    }
    if (this.speed > 0) {
      this.speed -= this.fraction
    }
    if (this.speed < 0) {
      this.speed += this.fraction
    }
    if (Math.abs(this.speed) < this.fraction) {
      this.speed = 0
    }

    if (this.speed !== 0) {
      const flip = this.speed > 0 ? 1 : -1
      // implement left and right
      if (this.controls.left) {
        this.angle += 0.03 * flip
      }
      if (this.controls.right) {
        this.angle -= 0.03 * flip
      }
    }

    // 让车朝向车头的方向行进
    this.x -= Math.sin(this.angle) * this.speed
    this.y -= Math.cos(this.angle) * this.speed
  }

  draw (ctx) {
    ctx.save()
    ctx.translate(this.x, this.y)
    ctx.rotate(-this.angle)
    ctx.beginPath()
    ctx.rect(-this.width / 2, -this.height / 2, this.width,
      this.height)
    ctx.fill()

    ctx.restore()
  }
}