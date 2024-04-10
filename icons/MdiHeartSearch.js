const { createVNode: _createVNode, openBlock: _openBlock, createBlock: _createBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
    return (_openBlock(), _createBlock("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        "aria-hidden": "true"
    }, [
    _createVNode("path", {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M19.3 14.9C19.7 14.2 20 13.4 20 12.5C20 10 18 8 15.5 8S11 10 11 12.5 13 17 15.5 17C16.4 17 17.2 16.7 17.9 16.3L20.8 19.2L22.2 17.8L19.3 14.9M15.5 15C14.1 15 13 13.9 13 12.5S14.1 10 15.5 10 18 11.1 18 12.5 16.9 15 15.5 15M14.7 18.9C14.3 19.3 13.9 19.6 13.5 20L12 21.3L10.5 20C5.4 15.4 2 12.3 2 8.5C2 5.4 4.4 3 7.5 3C9.2 3 10.9 3.8 12 5.1C13.1 3.8 14.8 3 16.5 3C19.6 3 22 5.4 22 8.5C22 9.2 21.9 9.8 21.7 10.5C20.8 7.9 18.4 6 15.5 6C11.9 6 9 8.9 9 12.5C9 15.8 11.5 18.5 14.7 18.9Z",
        })
    ]))
}
