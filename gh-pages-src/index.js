// Use the window load event to keep the page load performance
window.addEventListener('load', () => {
    import(/* webpackChunkName: "pages/index" */'Pages/Index').then(({ default: loadIndex }) => {
        loadIndex();
    });
});
