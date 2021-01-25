import { Scroller } from './Scroller';
import { Swiper } from './swiper';
import {navbar} from './navbar';

import './styles/index.scss'
import 'bootstrap';
import 'bootstrap/js/dist/util';
import 'bootstrap/js/dist/dropdown';
import imageOne from './images/about-image.jpg';
import imageTwo from './images/productCreator-image.jpg';
import imageThree from './images/hearthWithBg.jpg';
import imageFour from './images/crucifixWithBg.jpg';
import imageFive from './images/hauseTreeWithBg.jpg';

document.addEventListener('DOMContentLoaded', function () {
    const scroller = new Scroller('#root');

    document.addEventListener('wheel', (event) => scroller.listenScroll(event));
    document.addEventListener('swipeUp', () => scroller.scroll(1));
    document.addEventListener('swipeDown', () => scroller.scroll(-1));
    document.addEventListener('keydown', (event) => {
        switch (event.keyCode) {
            case 40:
                return scroller.scroll(1)
            case 38:
                return scroller.scroll(-1)
            default:
                return;
        }
    })

})

export { Scroller, Swiper, navbar }

