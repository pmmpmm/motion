const imageContent = (title, url) => {
    return `
  <div class="flex gap-4 w-full">
    <div class="basis-1/2 aspect-video">
      <img src="${url}" alt="" class="w-full h-full" />
    </div>
    <div class="basis-1/2">
      <p class="text-xl font-medium mb-2">${title}</p>
    </div>
  </div>`;
};
const videoContent = (title, url) => {
    return `
  <div class="flex gap-4 w-full">
    <div class="basis-1/2 aspect-video">
      <iframe
        class="w-full h-full"
        width="100%"
        height="100%"
        src="${url}"
        title="YouTube video player"
        frameborder="0"
        encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen>
      </iframe>
    </div>
    <div class="basis-1/2">
      <p class="text-xl font-medium mb-2">${title}</p>
    </div>
  </div>`;
};
const noteContent = (title, body) => {
    return `
  <div class="flex flex-col w-full">
    <p class="text-xl font-medium mb-2">${title}</p>
    <ul>
      <li>- ${body}</li>
    </ul>
  </div>`;
};
const taskContent = (title, body) => {
    return `
  <div class="flex flex-col w-full">
    <p class="text-xl font-medium mb-2">${title}</p>
    <ul>
      <li>
        <label for="todo1" class="text-base">
          <input type="checkbox" id="todo1" />
          <span class="inline-block -mt-[1px] pl-1 align-top">${body}</span>
        </label>
      </li>
    </ul>
  </div>`;
};
export const list = (type, title, url = '', body = '') => {
    let listContent = '';
    if (type === 'image')
        listContent = imageContent(title, url);
    if (type === 'video')
        listContent = videoContent(title, url);
    if (type === 'note')
        listContent = noteContent(title, body);
    if (type === 'task')
        listContent = taskContent(title, body);
    const listWrap = `
  <li class="list flex justify-between items-center gap-2 p-6 bg-white shadow-lg">
  ${listContent}
    <button class="list-del-btn text-[0px]">삭제
      <svg
        class="fill-basic-40 pointer-events-none"
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 512 512"
        height="26px"
        width="26px"
        xmlns="http://www.w3.org/2000/svg">
        <path class="pointer-events-none"
        d="M256 48C140.559 48 48 140.559 48 256c0 115.436 92.559 208 208 208 115.435 0 208-92.564 208-208 0-115.441-92.564-208-208-208zm104.002 282.881l-29.12 29.117L256 285.117l-74.881 74.881-29.121-29.117L226.881 256l-74.883-74.881 29.121-29.116L256 226.881l74.881-74.878 29.12 29.116L285.119 256l74.883 74.881z"></path>
      </svg>
    </button>
  </li>`;
    return listWrap;
};
