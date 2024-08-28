import { DialogComponent } from './components/dialog/dialog.js';
import { MediaInputDialog } from './components/dialog/input/media-input.js';
import { TextInputDialog } from './components/dialog/input/text-input.js';
import { ImageComponent } from './components/page/item/image.js';
import { NoteComponent } from './components/page/item/note.js';
import { TaskComponent } from './components/page/item/task.js';
import { VideoComponent } from './components/page/item/video.js';
import { PageComponent, PageItemComponent } from './components/page/page.js';
class App {
    constructor(pageRoot, dialogRoot) {
        this.pageRoot = pageRoot;
        this.dialogRoot = dialogRoot;
        this.page = new PageComponent(PageItemComponent);
        this.page.attachTo(this.pageRoot);
        this.page.addChild(new ImageComponent('이미지 타이틀', 'https://picsum.photos/500/300'));
        this.page.addChild(new VideoComponent('비디오 타이틀', 'https://youtu.be/Exize6mpJa0'));
        this.page.addChild(new NoteComponent('노트 타이틀', '노트 내용'));
        this.page.addChild(new TaskComponent('할 일 타이틀', '할 일1, 할 일2'));
        this.bindElementToDialog('#new-image', MediaInputDialog, (MediaInputDialog) => this.validateInputData(MediaInputDialog, ImageComponent));
        this.bindElementToDialog('#new-video', MediaInputDialog, (MediaInputDialog) => this.validateInputData(MediaInputDialog, VideoComponent));
        this.bindElementToDialog('#new-note', TextInputDialog, (TextInputDialog) => this.validateInputData(TextInputDialog, NoteComponent));
        this.bindElementToDialog('#new-task', TextInputDialog, (TextInputDialog) => this.validateInputData(TextInputDialog, TaskComponent));
    }
    validateInputData(input, itemComponent) {
        if (('url' in input && (!input.title || !input.url)) ||
            ('body' in input && (!input.title || !input.body))) {
            alert('다이얼로그의 빈칸에 내용을 입력해 주세요.');
            return null;
        }
        if ('url' in input) {
            return new itemComponent(input.title, input.url);
        }
        else {
            return new itemComponent(input.title, input.body);
        }
    }
    bindElementToDialog(selector, inputDialog, makeItemComponent) {
        const element = document.querySelector(selector);
        element.addEventListener('click', () => {
            const input = new inputDialog();
            const dialog = new DialogComponent(input);
            dialog.attachTo(this.dialogRoot);
            dialog.setOnSubmitListener(() => {
                const itemComponent = makeItemComponent(input);
                if (itemComponent) {
                    this.page.addChild(itemComponent);
                    dialog.removeFrom(this.dialogRoot);
                }
            });
            dialog.setOnCloseListener(() => {
                dialog.removeFrom(this.dialogRoot);
            });
        });
    }
}
new App(document.querySelector('.page-document'), document.body);
