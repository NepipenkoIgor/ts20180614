type Coords = {
  top: number
  left: number
}

class Slider {
  sliderEl: HTMLDivElement
  private thumbEl!: HTMLDivElement
  private sliderCoords!: Coords
  private thumbCoords!: Coords
  private shiftX!: number

  constructor(element: HTMLDivElement) {
    this.sliderEl = element
    const thumbEl: HTMLDivElement | null = element.querySelector(".thumb")

    if (thumbEl) {
      this.thumbEl = thumbEl
      this.thumbEl.addEventListener("mousedown", this.handleMouseDown)
    }
  }

  getCoords(el: HTMLElement): Coords {
    const box: ClientRect = el.getBoundingClientRect()

    return {
      top: box.top + window.pageYOffset,
      left: box.left + window.pageXOffset,
    }
  }

  handleMouseUp = (e: MouseEvent): void => {
    document.removeEventListener("mouseup", this.handleMouseDown)
    document.removeEventListener("mousemove", this.handleMouseMove)
  }

  handleMouseDown = (e: MouseEvent): void => {
    document.addEventListener("mouseup", this.handleMouseUp)

    this.sliderCoords = this.getCoords(this.sliderEl)
    this.thumbCoords = this.getCoords(this.thumbEl)
    this.shiftX = e.pageX - this.thumbCoords.left

    document.addEventListener("mousemove", this.handleMouseMove)
  }

  handleMouseMove = (e: MouseEvent): void => {
    let newLeft: number = e.pageX - this.shiftX - this.sliderCoords.left

    if (newLeft < 0) {
      newLeft = 0
    }

    const rightEdge: number =
      this.sliderEl.offsetWidth - this.thumbEl.offsetWidth

    if (newLeft > rightEdge) {
      newLeft = rightEdge
    }

    this.thumbEl.style.left = newLeft + "px"
  }
}

const el: HTMLDivElement | null = document.querySelector("#slider")

if (el) {
  new Slider(el)
}
