import { ImageComponent } from './components/page/item/image.js';
import { PageComponent } from './components/page/page.js';
class App {
    constructor(appRoot) {
        const page = new PageComponent();
        page.attachTo(appRoot);
        const image = new ImageComponent('image title', 'https://picsum.photos/200/300');
        page.addChild(image);
    }
}
new App(document.querySelector('.document'));
