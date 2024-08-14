import { PageComponent } from './components/page/page.js';

class App {
  constructor(appRoot: HTMLElement) {
    const page = new PageComponent();
    page.attachTo(appRoot);
  }
}
new App(document.querySelector('.document') as HTMLElement);
