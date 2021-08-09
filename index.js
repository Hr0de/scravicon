const {JSDOM} = require("jsdom");

module.exports = function (url) {
    return new Promise((resolve, reject) => {
        JSDOM.fromURL(url, {}).then(dom => {
            dom.window.document.querySelectorAll('head > link[rel="icon"]').forEach(link => {
                console.log(link.href);
            });
        });
        resolve([]);
    });
};
