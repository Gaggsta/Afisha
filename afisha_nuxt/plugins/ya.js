export default ({ app }) => {

    if (process.env.NODE_ENV !== 'production') return;

    (function (m, e, t, r, i, k, a) {
        m[i] = m[i] || function () { (m[i].a = m[i].a || []).push(arguments) };
        m[i].l = 1 * new Date(); k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a)
    })
        (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

    ym('67366711', "init", {
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
        defer: true
    });

    app.router.afterEach((to, from) => {
        ym('67366711', 'hit', to.fullPath);
    })
}