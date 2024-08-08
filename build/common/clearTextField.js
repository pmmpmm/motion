export const clearTextField = () => {
    const titleInput = document.querySelector('#title');
    const urlInput = document.querySelector('#url');
    const bodyInput = document.querySelector('#body');
    if (titleInput)
        titleInput.value = '';
    if (urlInput)
        urlInput.value = '';
    if (bodyInput)
        bodyInput.value = '';
};
