class Slider {
  runner: HTMLElement;
  private _sliderWidth: number;
  private _sliderLeft: number;

  constructor(element: HTMLDivElement) {
    
    const runner = element.querySelector<HTMLElement>('.runner');
    
    this._sliderWidth = element.offsetWidth;
    this._sliderLeft = element.offsetLeft;

    if (runner) this.runner = runner;
    else {
      this.runner = document.createElement('div');
      this.runner.setAttribute('class', 'runner');
      element.appendChild(this.runner);
    }

    this.runner.addEventListener('mousedown', this._start.bind(this));
  }

  _start(mousedownEvent: MouseEvent) {
    const dx = mousedownEvent.pageX - this.runner.offsetLeft;

    const _stop = () => {
      document.removeEventListener('mouseup', _stop);
      document.removeEventListener('mousemove', _move);
    };

    const _move = (mousemoveEvent: MouseEvent) => {
      let left = mousemoveEvent.pageX - dx - this._sliderLeft;
      if (left < 0) left = 0;

      const right = this._sliderWidth - this.runner.offsetWidth;
      if (left > right) left = right;

      this.runner.style.left = `${left}px`;
    };

    document.addEventListener('mousemove', _move);
    document.addEventListener('mouseup', _stop);
  }
}

const slider: HTMLDivElement | null = document.querySelector('.slider');

if (slider) new Slider(slider);
