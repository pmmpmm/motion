import { BaseComponent, Component, Composable } from '../base.js';

type OnCloseListener = () => void;
type OnSubmitListener = () => void;

export interface MediaData {
  readonly title: string;
  readonly url: string;
}

export interface TextData {
  readonly title: string;
  readonly body: string;
}

export class InputDialog extends BaseComponent implements Composable {
  closeListener?: OnCloseListener;
  submitListener?: OnSubmitListener;
  constructor() {
    super(`
    <div
      class=" dialog flex justify-center items-center w-full h-full fixed top-0 left-0 z-10 opacity-100 before:content-[''] before:block before:w-full before:h-full before:bg-black/[0.3] before:fixed before:top-0 before:left-0 before:-z-10 before:backdrop-blur-sm"
    >
      <div class="dialog-input-body w-[520px] px-5 pt-10 pb-5 bg-white shadow-lg relative">
        <button class="closeBtn text-[0px] absolute top-4 right-4">
          삭제<svg
            class="fill-basic-40"
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 512 512"
            height="26px"
            width="26px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M256 48C140.559 48 48 140.559 48 256c0 115.436 92.559 208 208 208 115.435 0 208-92.564 208-208 0-115.441-92.564-208-208-208zm104.002 282.881l-29.12 29.117L256 285.117l-74.881 74.881-29.121-29.117L226.881 256l-74.883-74.881 29.121-29.116L256 226.881l74.881-74.878 29.12 29.116L285.119 256l74.883 74.881z"
            ></path>
          </svg>
        </button>
        <div class="mt-4 text-right">
          <button class="submitBtn px-4 py-1.5 font-bold text-basic-100 bg-point-100">ADD</button>
        </div>
      </div>
    </div>`);

    const closeBtn = this.element.querySelector('.closeBtn') as HTMLButtonElement;
    closeBtn.onclick = () => {
      this.closeListener && this.closeListener();
    };
    const addBtn = this.element.querySelector('.submitBtn') as HTMLButtonElement;
    addBtn.onclick = () => {
      this.submitListener && this.submitListener();
    };
  }
  setOnCloseListener(listener: OnCloseListener) {
    this.closeListener = listener;
  }
  setOnSubmitListener(listener: OnSubmitListener) {
    this.submitListener = listener;
  }

  addChild(child: Component): void {
    const dialogBody = this.element.querySelector('.dialog-input-body') as HTMLElement;
    child.attachTo(dialogBody, 'afterbegin');
  }
}
