// Use the window load event to keep the page load performance
window.addEventListener('load', () => {
    import(/* webpackChunkName: "pages/index" */ 'Pages/IndexPage/IndexPage').then(({ default: loadIndex }) => {
        loadIndex();
    });
});
