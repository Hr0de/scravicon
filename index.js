const {JSDOM} = require("jsdom");

module.exports = function (url, params) {
    if (typeof params !== "object") {
        params = {};
    }
    if (!(typeof params === "object" && typeof params.selector === "string" && params.selector.length)) {
        params.selector = 'head > link[rel="icon"], head > link[rel="shortcut icon"]';
    }
    return new Promise((resolve, reject) => {
        var favicons = [];
        JSDOM.fromURL(url, {}).then(dom => {
            dom.window.document.querySelectorAll(params.selector).forEach(link => {
                var favicon = {
                    href: link.href
                };

                const attributes = link.attributes;

                if (attributes.getNamedItem("sizes") !== null) {
                    var sizes = attributes.getNamedItem("sizes").value.split('x');
                    // TODO check sizes array de 2 integers
                    favicon.height = parseInt(sizes[0]);
                    favicon.width = parseInt(sizes[1]);
                }

                if (attributes.getNamedItem("type") !== null) {
                    favicon.type = attributes.getNamedItem("type").value;
                }

                favicons.push(favicon);
            });
            resolve(favicons);
        }).then(e => {
            reject(e);
        });
    });
};
