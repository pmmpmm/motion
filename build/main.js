"use strict";
const listWrap = document.querySelector('.list-wrap');
listWrap === null || listWrap === void 0 ? void 0 : listWrap.addEventListener('click', (e) => {
    var _a;
    const target = e.target;
    if (target.tagName === 'BUTTON') {
        (_a = target.closest('.list')) === null || _a === void 0 ? void 0 : _a.remove();
    }
});
