import { ImageComponent } from './components/page/item/image.js';
import { NoteComponent } from './components/page/item/note.js';
import { TaskComponent } from './components/page/item/task.js';
import { VideoComponent } from './components/page/item/video.js';
import { PageComponent } from './components/page/page.js';
class App {
    constructor(pageRoot) {
        this.page = new PageComponent();
        const image = new ImageComponent('이미지 타이틀', 'https://picsum.photos/500/300');
        const note = new NoteComponent('노트 타이틀', '노트 내용');
        const task = new TaskComponent('할 일 타이틀', '할 일 1\r할 일 2');
        const video1 = new VideoComponent('비디오 타이틀', 'https://www.youtube.com/embed/Exize6mpJa0');
        const video2 = new VideoComponent('비디오 타이틀', 'https://youtu.be/m7tyQIeSm30?si=ng90l3CLFF3c_11t');
        this.page.addChild(video1);
        this.page.addChild(video2);
        this.page.addChild(image);
        this.page.addChild(note);
        this.page.addChild(task);
        this.page.attachTo(pageRoot);
    }
}
new App(document.querySelector('.page-document'));
