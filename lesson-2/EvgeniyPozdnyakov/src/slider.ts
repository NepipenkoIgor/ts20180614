import MySlider from './MySlider';

makeSlider();

function makeSlider() {
    const slider: MySlider = new MySlider();
    const ctnr: HTMLDivElement | null = document.querySelector('.slider-ctnr');

    if (!ctnr) {
        return;
    }

    slider.createSliderAt(ctnr, (value) => {
        console.log('value: ', value);
    });
}
