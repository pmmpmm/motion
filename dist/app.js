import { ImageComponent } from './components/page/item/image.js';
import { PageComponent } from './components/page/page.js';
class App {
    constructor(pageRoot) {
        this.page = new PageComponent();
        const image = new ImageComponent('이미지 타이틀', 'https://picsum.photos/500/300');
        this.page.addChild(image);
        this.page.attachTo(pageRoot);
    }
}
new App(document.querySelector('.page-document'));
