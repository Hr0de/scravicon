const {JSDOM} = require("jsdom");

module.exports = function (url) {
    console.log(url)
    return new Promise((resolve, reject) => {
        JSDOM.fromURL("https://example.com/", {}).then(dom => {
            console.log(dom.serialize());
        });
        resolve();
    });
};
