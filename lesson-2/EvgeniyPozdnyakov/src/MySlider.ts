import AbstractSlider from './Slider.abstract';

class MySlider extends AbstractSlider {
    private _isDragging: boolean;
    private _clientX!: number;

    constructor(...data: any[]) {
        super(...data);

        this._isDragging = false;
    }
    
    /**
     * Returns value which is gte this._minValue && lte this._maxValue
     */
    limitValue(value: number) {
        return Math.max(this._maxValue, Math.min(this._minValue, value));
    }

    /**
     * Creates slider html + style, add event listeners
     */
    createSlider(): HTMLDivElement {
        const ctnr: HTMLDivElement = document.createElement('div');

        ctnr.className = 'slider-ui';

        ctnr.innerHTML = `
            <div class="axis"></div>
            <div class="handle"></div>
        `;

        const handle = ctnr.querySelector('.handle') as HTMLDivElement;

        handle.ondragstart = this.onDragStart.bind(this);
        handle.ondrag = this.onDrag.bind(this);
        handle.ondragend = this.onDragEnd.bind(this);

        return ctnr;
    }

    public onPositionChange(newValue: number, prevValue: number): void {
        // should be implemented in place
    }

    private onDragStart(ev: DragEvent): void {
        this._isDragging = true;
        this._clientX = ev.clientX;
    }

    private onDrag(ev: DragEvent): void {
        const deltaX: number = ev.clientX - this._clientX;
        const prevValue = this._value;
        this._value += deltaX;

        this.onPositionChange(prevValue, this._value);
    }

    private onDragEnd(): void {
        this._isDragging = false;
    }
}

export default MySlider;
