export const loadScript = (src: string, cb?: () => void) => {
    const el = document.createElement(`script`);
    el.async = true;
    el.src = src;
    if (cb) el.addEventListener(`load`, cb);
    const parentNode = document.head || document.body;
    if (parentNode) parentNode.appendChild(el);
};
