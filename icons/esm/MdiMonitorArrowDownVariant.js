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
            d: "M17 14L22 9L20.6 7.6L18 10.2V3H16V10.2L13.4 7.6L12 9L17 14M23 14V16C23 17.1 22.1 18 21 18H14V20H16V22H8V20H10V18H3C1.9 18 1 17.1 1 16V4C1 2.9 1.9 2 3 2H12V4H3V16H21V14H23Z",
        })
    ]))
}
