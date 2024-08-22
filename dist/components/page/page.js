import { BaseComponent } from '../base.js';
export class PageItemComponent extends BaseComponent {
    constructor() {
        super(`
      <li class="list flex justify-between items-center gap-2 p-6 bg-white shadow-lg">
        <button class="close-btn text-[0px]">삭제
          <svg
            class="fill-basic-40 pointer-events-none"
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 512 512"
            height="26px"
            width="26px"
            xmlns="http://www.w3.org/2000/svg">
            <path class="pointer-events-none" d="M256 48C140.559 48 48 140.559 48 256c0 115.436 92.559 208 208 208 115.435 0 208-92.564 208-208 0-115.441-92.564-208-208-208zm104.002 282.881l-29.12 29.117L256 285.117l-74.881 74.881-29.121-29.117L226.881 256l-74.883-74.881 29.121-29.116L256 226.881l74.881-74.878 29.12 29.116L285.119 256l74.883 74.881z"></path>
          </svg>
        </button>
      </li>`);
        const closeBtn = this.element.querySelector('.close-btn');
        closeBtn.onclick = () => {
            this.closelistener && this.closelistener();
        };
    }
    addChild(child) {
        child.attachTo(this.element, 'afterbegin');
    }
    setOnCloseListener(listener) {
        this.closelistener = listener;
    }
}
export class PageComponent extends BaseComponent {
    constructor(pageItemComponent) {
        super(`<ul class="list-wrap flex flex-col gap-2"></ul>`);
        this.pageItemComponent = pageItemComponent;
    }
    addChild(section) {
        const item = new this.pageItemComponent();
        item.addChild(section);
        item.attachTo(this.element, 'afterbegin');
        item.setOnCloseListener(() => {
            item.removeFrom(this.element);
        });
    }
}
