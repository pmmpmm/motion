import { PageComponent } from './components/page/page.js';

class App {
  private page;
  constructor(pageRoot: HTMLElement) {
    this.page = new PageComponent();
    this.page.attachTo(pageRoot);
  }
}

new App(document.querySelector('.page-document') as HTMLElement);
