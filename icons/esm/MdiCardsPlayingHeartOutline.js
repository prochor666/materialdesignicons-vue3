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
            "clip-rule": "evenodd"
            d: "M17 2H7C5.9 2 5 2.9 5 4V20C5 21.1 5.9 22 7 22H17C18.1 22 19 21.1 19 20V4C19 2.9 18.1 2 17 2M17 20H7V4H17V20M10.2 9C9 9 8 10 8 11.2C8 12.7 9.4 13.9 11.4 15.8L12 16.3L12.6 15.8C14.6 13.9 16 12.7 16 11.2C16 9.9 15 9 13.8 9C13.1 9 12.4 9.3 12 9.8C11.6 9.3 10.9 9 10.2 9Z",
        })
    ]))
}
