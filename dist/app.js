import { PageComponent } from './components/page/page.js';
class App {
    constructor(pageRoot) {
        this.page = new PageComponent();
        this.page.attachTo(pageRoot);
    }
}
new App(document.querySelector('.page-document'));
